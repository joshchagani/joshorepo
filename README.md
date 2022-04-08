# 🎮 Joshorepo

A monorepo for all projects going forward.

## 💻 Adding capabilities to your workspace

Core plugins were switched out in favor more modern build tools; notably vite and vitest. Below are some community and core plugins used in this repo:

[Vite](https://nxext.dev/docs/vite/overview.html)<br>
`npm install --save-dev @nxext/vite`

[Vitest](https://nxext.dev/docs/vitest/overview.html)<br>
`npm install --save-dev @nxext/vitest`

Web (no framework frontends)<br>
`npm install --save-dev @nrwl/web`

## 🔨 Generate an applications and tests

Generate a Vite application<br>
`npx nx g @nxext/vite:app my-app`

Generate testing application with Vitest<br>
`npx nx g @nxext/vitest:vitest-project my-app --framework=generic`

## 📕 Generate a library

Generate a Vite library<br>
`npx nx g @nxext/vite:library my-lib`

Libraries are shareable across libraries and applications. They can be imported from `@joshorepo/mylib`.

## 🚧 Development server

Run `npx nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## 🚀 Build

Run `npx nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## 🧪 Running tests

### unit

Run `npx nx run my-app:test` to execute the unit tests via [Vitest](https://vitest.dev).

Run `npx nx affected:test` to execute the unit tests affected by a change.

### e2e

> End-to-end tests coming soon.

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## 🎨 Formatting and linting

Run `npx nx run my-app:lint`

## 📈 Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## 📝 Commit message

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) with [Angular's](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#rules) type and scope as reference.

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Type

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Scope

- **animations**
- **common**
- **compiler**
- **compiler-cli**
- **core**
- **elements**
- **forms**
- **http**
- **language-service**
- **platform-browser**
- **platform-browser-dynamic**
- **platform-server**
- **platform-webworker**
- **platform-webworker-dynamic**
- **router**
- **service-worker**
- **upgrade**

### Subject

The subject contains a succinct description of the change, use the imperative, present tense: "change" not "changed" nor "changes", doesn't capitalize the first letter, and no dot (.) at the end.

## 🔎 Smart, Fast and Extensible Build System

This project was generated using [Nx](https://nx.dev).

<img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="150">
