# Initialize alpine to get ready for Node awesomeness.
# Image where Node 18 (LTS) alpine + git + ssh is installed

# Goal: Create NextJS docker image that uses multiple cores and should be production ready

FROM timbru31/node-alpine-git:iron AS deps
# For this stage, we want this alpine container to be as a similar to Ubuntu as possible.
# No matter what I do, when installing dependencies forces canvas to rebuild itself (node-gyp)
# This is why I use Ubuntu in the main image, it downloads the pre compiled dependencies and saves CPU time.
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache \
	bash \
	wget \
	libc6-compat \
	python3 \
	gcc \
	make \
	g++ \
	coreutils \
	pixman-dev \
	cairo-dev pango-dev jpeg-dev giflib-dev \
	zlib-dev \
	libffi-dev \
	openssl-dev \
	musl-dev

# RUN apk cache clean

# set a non privileged user to use when running this image
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs
SHELL ["bash", "-c"]

# set right (secure) folder permissions
RUN mkdir -p /home/nodejs/app/node_modules && chown -R nodejs:nodejs /home/nodejs/app

RUN npm i -g pnpm
RUN mkdir -p /home/nodejs/.pnpm-store && chown -R nodejs:nodejs /home/nodejs/.pnpm-store
RUN mkdir -p /home/nodejs/.pnpm-global && chown -R nodejs:nodejs /home/nodejs/.pnpm-global

RUN pnpm config set store-dir /home/nodejs/.pnpm-store

USER nodejs
WORKDIR /home/nodejs/app

ENV PNPM_HOME=/home/nodejs/.local/share/pnpm
ENV PATH=$PATH:$PNPM_HOME

COPY --chown=nodejs:nodejs . .
# bro why does this make canvas build itself using node-gyp? I blame expressjs
RUN HUSKY=0 CYPRESS_INSTALL_BINARY=0 pnpm install

# Work in progress
# RUN SHELL=bash pnpm setup
# RUN pnpm add -g pm2
# RUN pnpm add -g cross-env rimraf

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN NODE_ENV=production pnpm build

FROM jellydn/alpine-nodejs:20 AS runner
RUN npm install -g pm2 && \
    addgroup -S nodejs && \
    adduser -S nodejs -G nodejs

USER nodejs
WORKDIR /home/nodejs/app

ENV STANDALONE_PATH=/home/nodejs/app/app/server.js

COPY --from=deps --chown=nodejs:nodejs /home/nodejs/app/.next/standalone .
COPY --from=deps --chown=nodejs:nodejs /home/nodejs/app/public ./app/public
COPY --from=deps --chown=nodejs:nodejs /home/nodejs/app/.next/static ./app/.next/static

# Clustering

EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production

COPY --chown=nodejs:nodejs pm2.config.js ./app
COPY --chown=nodejs:nodejs .env* ./app
COPY --chown=nodejs:nodejs healthCheck.js ./app/healthCheck.js

CMD ["pm2-runtime", "app/pm2.config.js"]

# This marks the end of the second layer. At this stage, we have the static files which we will push to our final image.

# copy project definition/dependencies files, for better reuse of layers
# COPY --chown=nodejs:nodejs package.json ./

# RUN yarn build

# If using yarn, remove # above and comment below instead
# RUN npm run build

# IMPORTANT: NOT BUILDING, USING PREBUILT

# Production image, copy all the files and run next
# FROM timbru31/node-alpine-git:hydrogen AS runner
# WORKDIR /home/nodejs/app
# COPY --chown=nodejs:nodejs node_modules ./node_modules
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --chown=nodejs:nodejs .next ./.next

# COPY --chown=nodejs:nodejs .next/static* ./.next/static

# COPY --chown=nodejs:nodejs --from=builder . .
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone* ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# EXPOSE 3000

# ENV PORT 3000

# Using Containers? We got your back. Start today using pm2-runtime, a perfect companion to get the most out of Node.js in production environment.
# we're not using pm2 in containers waste of time and resources
# CMD ["pnpm", "start"]
# CMD ["pnpm", "pm2"]
