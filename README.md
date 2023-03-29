# 👷‍♂️🏗️ AuthIsForMe (WIP) 🚧👷 (Minecraft Authentication/User API)

- "Make it **work**, make it **right**, make it **fast**" - _Kent Beck_
- "The function of **good software** is to **make** the **complex** appear to be **simple**." - _Grady Booch_

> Being built with love with modernity in mind. May be _slightly_ overengineered

<p align="center">
  </a>
  <a aria-label="Commitizen" href="https://commitizen.github.io/cz-cli/">
    <img alt="Commitizen Friendly Badge" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge">
  </a>
  <a aria-label="Semantic Release" href="https://github.com/semantic-release/semantic-release">
    <img alt="Semantic Release Badge Badge" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge">
    <a aria-label="Build Status" href="https://github.com/BrycensRanch/AuthIsForMe/actions?query=workflow%3publish.yml">
      <img alt="GitHub Workflow Status Badge" src="https://img.shields.io/github/actions/workflow/status/BrycensRanch/AuthIsForMe/publish.yml?label=BUILD&logo=github&style=for-the-badge">
    </a>
    <a aria-label="Frontend Code Coverage" href="https://github.com/BrycensRanch/AuthIsForMe/actions?query=workflow%3ci-frontend.yml">
      <img alt="Codecov Badge" src="https://img.shields.io/codecov/c/github/BrycensRanch/AuthIsForMe?flag=unittests&label=FRONTEND%20COVERAGE&logo=codecov&style=for-the-badge">
    </a>
    <a aria-label="Backend Code Coverage" href="https://github.com/BrycensRanch/AuthIsForMe/actions?query=workflow%3ci-backend.yml">
      <img alt="Coveralls Badge" src="https://img.shields.io/coverallsCoverage/github/BrycensRanch/AuthIsForMe?label=BACKEND%20UNIT%20tests%20COVERAGE&style=for-the-badge">
    </a>
    <a aria-label="Licence" href="https://github.com/BrycensRanch/AuthIsForMe/blob/master/LICENSE">
      <img alt="Licence Badge" src="https://img.shields.io/github/license/BrycensRanch/AuthIsForMe?style=for-the-badge&labelColor=000000" />
    </a>
    <a aria-label="CodeFactor Grade" href="https://www.codefactor.io/repository/github/BrycensRanch/AuthIsForMe">
      <img alt="CodeFactor Grade Badge" src="https://img.shields.io/codefactor/grade/github/BrycensRanch/AuthIsForMe?style=for-the-badge" />
    </a>
    <a aria-label="GitPod Ready to Code" href="https://gitpod.io/from-referrer/">
      <img alt="GitPod Ready to Code Badge" src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=for-the-badge" />
    </a>
    <a aria-label="Open in GitHub Codespaces" href="https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=604445666&machine=basicLinux32gb&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=EastUs">
    <img alt="Open in GitHub Codespaces Badge"
      src="https://github.com/codespaces/badge.svg"
      />
    </a>
          <a href="https://depfu.com/github/BrycensRanch/AuthIsForMe">
       <img src="https://img.shields.io/depfu/dependencies/github/BrycensRanch/AuthIsForMe?style=for-the-badge" alt="dependencies status" />
    </a>
    <a aria-label="Open in Stackblitz Badge" href="https://stackblitz.com/github/BrycensRanch/AuthIsForMe">
    <img
    alt="Open in Stackblitz Badge"
    src="https://img.shields.io/badge/StackBlitz-Edit-blue?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABECAYAAAD+1gcLAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AINBw4X0bTGRQAABSxJREFUaN7VmVtsFFUYx//fmQW79bbd2QKpaIIaDcGoifFBEgMGqTTRRA01SgxE5Rbi7QG6S3lgo9J2twpeotxEQlCigLdoQwJ4ARN9QB9MRCNRDBdRzE7LJbTSmTl/H4BYStmd2Z3tDOdt5lzml/9833fO9x0gYi2xgom6Tt5aapyKEnRDlrVGPzfGT+G3SwZ87HLGT8f5uYD7jmSl99IAX80RfTY3A5wMqDVepoQPnqVKHtMbAN4PyJeFtPwafXBSknG9UoDHAIDQq7xODRU8mdc5Aeaeffy7O2F8GnnwZM5dKsCic88CrMU8sSMNbubdZwTIDnjlOoZa52eNYQc3c84sEK+d/1a6ji2UA5EFN3POw4C8fcYy/m+a3p1y2MGTOXsqIJsAxAZ1Hei53tgeSfBkBycK1McALrswJGIVHhE3cuD1ed4uorsAXD5Ed7/hqvXlrFtV8LpO3qKpdwJIDLn/AB/+s0SORgp8VJ43KK23AzAvNsagWlXu+lKV6LGc14itvyEwrsiwX6wWNQEijITiY9pYD1vvKAENAG+VC40hQlNlNt3Bq22lt4EYX2Jor6PVe5V8KzDFG7KsFXE/A3GHB/vcdHyx9IQPnuXI/ji3CuRuT+N1+U4ZHPhmGqk43yXY5C0ccE9hsfwQLjgp5n69hmCz9ylYGcRPrgg8ldfLIXjSx5RjNX3GB6GCm3m3ncDz/v4QNnjJ4KsGbubdVhAZ35YFtTaoKOY7jps5dwGIZf73aH7dnZa9QYH72vLNDmcmRNaX86eEnGvT2BoIdA0o3pV2HgRkS9C7bXnRDGlPypmd9r2AvB8FaAFetDJGvqTiyU7eJWeOp1cgfOo3rRbj6ZJRJdHB20TrrkhAAxutXvVsSedMtfEmGno3gNHhM8snVp80IytO0The18HraOgdkYCm7KyLy6MDoYdUfNQyjnZjeheAm8NXmt/FlDH16CI5dUHaN/DhypeZUqK/AkomAsMQ8fCjq41GKy0nim75ydd51UjX3QZgQgQccV/MUfcVSzYM4Mw1hnPa7QJkYgSgD2qqe6xWOVL8kLWaI3ptbgFkUgSgjwpUY09GDpY8ZJnH9UsExhPYH8CuVgtgTJlzC5pqipXxdpUSaF3FzLkdANJleOIJETWlkJbvh78glOVIM64PARjlc2afiGoqtMiuUMoTqRp3ehnQtpDNfqEDBdeC+T6nuELOLGRiXVVPJC5u2xwP6L0+1qOQ8wqZWNmpXECK6wV+RBCipRLoQBRvyLL2dFwfBlDnTWos7W4xXgi3IATg31p3hldoEG8EAR0IuEC8OuUGK62eCyoYVARutvNOL9VZQD6yxqmnKqmHB6u46PkejHp7XVxmlHOzVhXnTKxgwujXhzH0bdo56m9jymgcKhEITXFl61lFoYV7BMa0akCjkjqJEHOKdP/U7xhNJ1vlZLXOv2Upnmq3JxfJlH4XRzWebBWrmgf38hRXav5F4vSfjqGmHl8if1W/NuSzjWljvW3oQxh0Ly9AQRtqUvdC+Xk4UiXfpmLH9JzB0CBOQKtpwwXtHzxLJcTsQW97FdQDQVxIVc3GUzVuEyEDb4z7NTndysju4c6qfSlOOc8pXQof78nEtoVRDvDsnMlXeK04+o+ztRgSnNOdjq1DSM2z4uLoeecKSCQWhgntXfEsY2ZcHwDQAMESq8VoC7ty5EnxZK37EIAGAV6NArT3c3def2Hm3HdASlSYSipe384bAR6x+tTsIBOBqoMTzlirVz2BrOgoWcF/mizikfkwKiQAAAAASUVORK5CYII="
    />
    </a>
</p>

## Credits

- Inspired by [minecraftauth.me](https://minecraftauth.me?ref=brycensranchgithubreadme)
- Based on [AuthApp](https://github.com/Romvnly-Gaming/AuthApp)

## Project Goals

- Manage Twitch/YouTube description with list of allowed users at the moment - maybe
- API Key Dashboard
- Offer plans
- Login with SuperTokens
- Deliver an E2E fully tested software via GitHub Actions and Cypress and Jest
- Don't ever touch `TAP` again (Since it's new, the ecosystem for `TAP` is weak compared to Jest or Mocha, so, our backend tests are done with Jest and Mocha)
- Various Authentication providers (not via SuperTokens, but through our own API)
- Provide oAuth2 for other websites to easily integrate with our API
- Authentication providers (Google, GitHub, Discord, Guilded, Twitter, Facebook, Reddit, Twitch, YouTube, Spotify, Mojang, Xbox Live, and Patreon.)
- GeyserMC Compatible
- Comprehensive Rest API versioned
- Deploy to Vercel, Railway, and PlanetScale via GitHub
- Account deleting
- Ory/Kratos
- Skin 3D
- Cape Support from various providers
- Data exporting
- Link to NameMC, maybe?
- Gravatar Implementation
- Use of Tydium Skin API for bedrock users _only_
- Fastify API that generates types and schemas and OpenAPI Specification files for API consumers and VSCode
- Switch to pnpm since a certain someone likes to run `npm install` a lot more than they should (`✅`)

### Planned Technology Stack

- WebRTC TypeScript
- TypeScript (project-wide)
- Next.js (Frontend)
- Fastify (Backend)
- Jest (Frontend & Backend)
- Redoc (Public Enduser API documentation)
- tRPC (project-wide types)
- Simple Analytics/Mataomo Analytics
- [Sentry.io](https://sentry.io)

### Features

N/A, just starting off the project... Initial commit type flow.

## Docker

This project ships a Docker Compose setup for **testing purposes**, if I were you, I would **never use it in production**. Instead, normally install Fail2Ban, CrowdSec, Postgres, Nginx, SuperTokens, NodeJS, `pnpm`, and Redis on a Linux machine like a regular person and configure it yourself. We have a config for Nginx for ease of deployment.

### Demo

no

## READMEs (more info on the separate projects)

- [Frontend](./frontend/README.md)
- [Backend](./backend/README.md)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to add tests as appropriate. In-depth ones, not one that checks if 1 + 1 === 2.

Please read the [Contributing Guidelines](CONTRIBUTING.md) before submitting any pull requests or opening issues.

## License

[MIT](./LICENSE) [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FBrycensRanch%2FChatting-Platform.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FBrycensRanch%2FChatting-Platform?ref=badge_large)
