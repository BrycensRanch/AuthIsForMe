# 👷‍♂️🏗️ AuthIsForMe (WIP) 🚧👷 (Minecraft Authentication/User API)

- "Make it **work**, make it **right**, make it **fast**" - _Kent Beck_
- "The function of **good software** is to **make** the **complex** appear to be **simple**." - _Grady Booch_
- "If debugging is the process of removing software bugs, then programming must be the process of putting them in" - _Edsger Dijkstra_

> Being built with love with modernity in mind. May be _slightly_ overengineered

<p align="center">
  <a aria-label="Commitizen" href="https://commitizen.github.io/cz-cli/">
    <img alt="Commitizen Friendly Badge" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge">
  </a>
  <a aria-label="Semantic Release" href="https://github.com/semantic-release/semantic-release">
    <img alt="Semantic Release Badge Badge" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge">
    </a>
    <a aria-label="Build Status" href="https://github.com/BrycensRanch/AuthIsForMe/actions/workflows/publish.yml">
      <img alt="GitHub Workflow Status Badge" src="https://img.shields.io/github/actions/workflow/status/BrycensRanch/AuthIsForMe/publish.yml?label=BUILD&logo=github&style=for-the-badge">
    </a>
    <a aria-label="Frontend Code Coverage" href="https://github.com/BrycensRanch/AuthIsForMe/actions?query=workflow%3ci-frontend.yml">
      <img alt="Codecov Badge" src="https://img.shields.io/codecov/c/github/BrycensRanch/AuthIsForMe?flag=unittests-frontend&label=FRONTEND%20COVERAGE&logo=codecov&style=for-the-badge">
    </a>
    <a aria-label="Backend Code Coverage" href="https://codecov.io/gh/BrycensRanch/AuthIsForMe">
    <img alt="Codecov" src="https://img.shields.io/codecov/c/github/BrycensRanch/AuthIsForMe?flag=unittests-backend&label=BACKEND%20CODE%20COVERAGE&style=for-the-badge">
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
    <a aria-label="Open Depfu Status" href="https://depfu.com/github/BrycensRanch/AuthIsForMe">
       <img src="https://img.shields.io/depfu/dependencies/github/BrycensRanch/AuthIsForMe?style=for-the-badge" alt="dependencies status" />
    </a>
<a href="https://wakatime.com/badge/github/BrycensRanch/AuthIsForMe"><img src="https://wakatime.com/badge/github/BrycensRanch/AuthIsForMe.svg?style=for-the-badge" alt="wakatime"></a>
</p>

## Credits

- Inspired by [minecraftauth.me](https://minecraftauth.me?ref=brycensranchgithubreadme)
- Based on [AuthApp](https://github.com/Romvnly-Gaming/AuthApp)
- **_AuthApp is not licensed_**, while it is free to use, [in no way is it FOSS](https://choosealicense.com/no-permission/).
- Our project has a special license from the author that enables us to relicense, modify, redestribute, and use the code as I wish.

Also, we are not affiliated with Mojang, Microsoft, or any of their her partners.

## Roadmap

- Manage Twitch/YouTube description with a list of allowed users at the moment - maybe
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

## Self-hosting

Self-hosting support will not be provided for this project. I am a student, and I have a life outside of this project, so I will **not** be able to provide support for self-hosting. My code is open-source because I want to share my work with the world. If you want to self-host this project, you are free to do so, but you are on your own.

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

Currently not available, but will be available soon.

## Screenshots

Insert automated screenshots here.

## READMEs (more info on the separate projects)

- Doesn't exist yet
- [Backend](./backend/README.md)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please read the [Contributing Guidelines](CONTRIBUTING.md) before submitting any pull requests or opening issues.

## License

[GNU AGPLv3](./LICENSE)

Want to know more about the license? [Click here](https://choosealicense.com/licenses/agpl-3.0/).
