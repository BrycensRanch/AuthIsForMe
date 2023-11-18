# Initialize alpine to get ready for Node awesomeness.
# Image where Node 18 (LTS) alpine + git + ssh is installed
FROM ubuntu AS init
ENV DEBIAN_FRONTEND noninteractive

# update packages, to reduce risk of vulnerabilities
RUN apt-get update

# install build dependencies and needed tools
RUN apt-get install -y wget curl python3 make libcairo2-dev build-essential libpixman-1-dev libpango1.0-dev libgif-dev libjpeg-dev zlib1g-dev libffi-dev libssl-dev unzip git sudo

# RUN apk cache clean

# set a non privileged user to use when running this image
RUN adduser --disabled-password --gecos "" nodejs && usermod -a -G nodejs nodejs

RUN adduser nodejs sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# set right (secure) folder permissions
RUN mkdir -p /home/nodejs/app/node_modules
RUN mkdir -p /home/nodejs/app/frontend/node_modules
RUN mkdir -p /home/nodejs/app/backend/dist
RUN mkdir -p /home/nodejs/app/backend/node_modules && chown -R nodejs:nodejs /home/nodejs/app

USER nodejs
WORKDIR /home/nodejs/app

COPY --chown=nodejs:nodejs .nvmrc .

RUN curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
RUN sudo bash nodesource_setup.sh
RUN sudo apt install nodejs

# TODO: Make this use the project's pnpm version, not the latest version otherwise this could break the project down the road
RUN sudo npm i -g pnpm concurrently

# COPY --chown=nodejs:nodejs . .

# ENV NODE_ENV=production

COPY --chown=nodejs:nodejs scripts/* ./
COPY --chown=nodejs:nodejs package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Non built files first
COPY --chown=nodejs:nodejs frontend/*.json ./frontend/
COPY --chown=nodejs:nodejs frontend/*.config.js ./frontend/
COPY --chown=nodejs:nodejs frontend/server.js ./frontend
COPY --chown=nodejs:nodejs .env* ./

COPY --chown=nodejs:nodejs frontend/healthCheck.js ./frontend/healthCheck.js
COPY --chown=nodejs:nodejs frontend/.env* ./frontend/
COPY --chown=nodejs:nodejs backend/*.json ./backend/
COPY --chown=nodejs:nodejs backend/.env* ./backend/
COPY --chown=nodejs:nodejs .env ./backend/
COPY --chown=nodejs:nodejs .env ./frontend/

# Technically, this file is already on the system, but this is just for consistency's sake
COPY --chown=nodejs:nodejs backend/pm2.config.js* ./backend

# Couldn't find a `pages` directory. Please create one under the project root
COPY --chown=nodejs:nodejs frontend/src /home/nodejs/app/frontend/src
COPY --chown=nodejs:nodejs backend /home/nodejs/app/backend
COPY --chown=nodejs:nodejs frontend/public /home/nodejs/app/frontend/public
COPY --chown=nodejs:nodejs frontend/__mocks__ /home/nodejs/app/frontend/__mocks__
#COPY --chown=nodejs:nodejs frontend/.next /home/nodejs/app/frontend/.next
COPY --chown=nodejs:nodejs frontend/.next/standalone /home/nodejs/app/frontend/.next/standalone
COPY --chown=nodejs:nodejs frontend/public /home/nodejs/app/frontend/.next/standalone/public
COPY --chown=nodejs:nodejs frontend/.next/static /home/nodejs/app/frontend/.next/standalone/.next/static
COPY --chown=nodejs:nodejs scripts /home/nodejs/app/scripts
COPY --chown=nodejs:nodejs ecosystem.config.js /home/nodejs/app/ecosystem.config.js

RUN node dockerBuildAndInstall.mjs

# Production image, copy all the files and run next
# FROM timbru31/node-alpine-git:hydrogen AS runner
# WORKDIR /home/nodejs/app
# COPY --chown=nodejs:nodejs node_modules ./node_modules
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --chown=nodejs:nodejs frontend ./frontend

# COPY --chown=nodejs:nodejs backend/dist/* ./backend
# # Repetitive, ik. For compatability reasons
# COPY --chown=nodejs:nodejs backend/dist/* ./
COPY --chown=nodejs:nodejs backend ./backend

# COPY --chown=nodejs:nodejs healthCheck.js .

RUN --mount=type=cache,id=pnpm,target=/home/nodejs/.pnpm-store CYPRESS_INSTALL_BINARY=0 pnpm install --frozen-lockfile --prefer-offline
RUN cd backend && pnpm prisma generate
RUN pnpm build

# Now that the program is built, we need to get rid of development dependencies to minimize
# Docker size
RUN pnpm prune --config.ignore-scripts=true --prod
RUN cd backend && pnpm prune --config.ignore-scripts=true --prod

FROM ubuntu AS runner
RUN adduser --disabled-password --gecos "" nodejs && usermod -a -G nodejs nodejs
RUN apt update && apt install -y curl

# nodejs user probably shouldnt need sudo
#RUN apt install -y sudo
#RUN adduser nodejs sudo
#RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
#RUN curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
# I added nano for debugging reasons
RUN apt install nodejs nano
RUN npm i -g pm2 husky
USER nodejs
WORKDIR /home/nodejs/app

COPY --from=init --chown=nodejs:nodejs /home/nodejs/app .

RUN rm -rf frontend/node_modules frontend/__mocks__ frontend/babel.config.js frontend/Dockerfile frontend/cluster.js frontend/cypress frontend/src backend/src frontend/out frontend/.swc frontend/public

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production

RUN rm frontend/package.json
RUN cd frontend && npx pnpm init
RUN rm -rf node_modules
RUN cd backend && npx pnpm install -D prisma --ignore-scripts
RUN HUSKY=0 npx pnpm install --prod

#RUN npm i -g next

# Work in progress
EXPOSE 3000

ENV FRONTEND_PORT 3000

EXPOSE 8000

ENV BACKEND_PORT 8000

# Rebuild the source code only when needed
# FROM timbru31/node-alpine-git:hydrogen AS builder
# WORKDIR /home/nodejs/app

# COPY --from=deps --chown=nodejs:nodejs . .
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# copy project definition/dependencies files, for better reuse of layers
# COPY --chown=nodejs:nodejs package.json ./

# RUN yarn build

# If using yarn, remove # above and comment below instead
# RUN npm run build

# IMPORTANT: NOT BUILDING, USING PREBUILT

# COPY --chown=nodejs:nodejs .next/static* ./.next/static

# COPY --chown=nodejs:nodejs --from=builder . .
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# # COPY --from=builder /app/public ./public

# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/advanced-features/output-file-tracing
# # COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone* ./
# # COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# EXPOSE 3000

# ENV PORT 3000

# # Using Containers? We got your back. Start today using pm2-runtime, a perfect companion to get the most out of Node.js in production environment.
# # we're not using pm2 in containers waste of time and resources
# WORKDIR /home/nodejs/backend_app

# COPY --chown=nodejs:nodejs backend/*.json ./

# # This dockerfile expects the project to already be built locally to make the Dockerfile do less and make it smaller
# COPY --chown=nodejs:nodejs dist ./
# # Repetitive, ik. For compatability reasons
# COPY --chown=nodejs:nodejs dist ./dist

# # COPY --chown=nodejs:nodejs healthCheck.js .
# COPY --chown=nodejs:nodejs .env* ./
# # Technically, this file is already on the system, but this is just for consistency's sake
# COPY --chown=nodejs:nodejs pm2.config.js* ./

# # Work in progress
# RUN SHELL=bash pnpm setup
# # RUN pnpm add -g pm2
# RUN pnpm add -g rimraf cross-env

# EXPOSE 8000

# ENV BACKEND_PORT 8000

# CMD ["pnpm", "boot:pm2"]
# CMD ["pnpm", "pm2"]
# Before starting the migration, run the following command
CMD ["pm2-runtime", "ecosystem.config.js"]
