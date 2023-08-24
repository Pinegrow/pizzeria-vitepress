# Vue Designer Vitepress Tailwind CSS - Quick start template

This is a starter template that pre-includes the [Pinegrow Vite Plugin](https://www.npmjs.com/package/@pinegrow/vitepress-module), [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) and other goodies for Vue Designer.

This Awesome Static Site (which is also a single-page application) is powered by Vitepress and Tailwind CSS. This template demonstrates how a custom theme can be applied to an existing Vitepress site and easily designed in Vue Designer. It slightly diverges from the standard Vitepress project setup by moving the Vitepress config, app entry, and custom theme outside the '.vitepress' folder. The config resides in the project root as 'Vitepress.config.ts', and the app and its custom theme reside in the familiar 'src' folder.

Demo - https://pg-vitepress-tailwindcss-custom.netlify.app/

## Vue Designer

A desktop visual editor for Vue apps supporting Mac, Windows, and Linux by [Pinegrow](https://pinegrow.com/). Take it for a free trial at [Vue Designer](https://vuedesigner.com)!

It lets you visually design 🎨 your Vue single file components and boosts your productivity and creativity while building your component-based Vue apps.

It smartly integrates with your ⚡️ [Vite](https://vitejs.dev/) based CLI and provides an amazing developer experience with its powerful visual controls and features.

Clean code 😃, No lock-in - You are in control of your projects and development workflow ❤️

## Try it now!

### 1. Clone to local

[Create a repo from this template on GitHub](https://github.com/pinegrow/pg-vitepress-tailwindcss-custom/generate).

(or)

If you prefer to do it manually with the cleaner git history

```bash
npx giget@latest gh:pinegrow/pg-vitepress-tailwindcss-custom my-vitepress-tailwindcss-custom-app #project-name
cd my-vitepress-tailwindcss-custom-app
npm install #or use pnpm
```

## 2. Open in Vue Designer

Open your project in Vue Designer and follow the instructions displayed in the Config Panel (that should pop out automatically). Config Panel ⚙️ displays the key packages and the various links to their individual ecosystems and communities.

## Usage

### Start your development server

```bash
npm run dev # SPA during development
```

### Preview

```bash
npm run now # build & preview
```

### Build

```bash
npm run build # MPA SSG (islands architecture)
```

And you will see the generated file in `dist` that's ready to be served.

### Deploy to Netlify

You can deploy this repo as a site on your own to explore and experiment with, by clicking this button.
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Pinegrow/pg-vitepress-tailwindcss-custom)

Check out the [deployment documentation](https://vitepress.pages.dev/guide/deployment) for more information.

## Pre-packed

### Meta Framework (Vue-based)

- [Vite](https://vitejs.dev/) - Vite-powered Vue Static Site (SPA)
  - 👉 Follow the amazing Vitepress [docs](https://vitepress.pages.dev/)
  - 🚦 [Vue-Router](https://vuejs.org/guide/introduction.html) for client-side routing. Expressive, configurable, convenient enables snappy navigation.

### UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite#vue) - The amazing utility-first CSS framework.

### File-based CMS (markdown)

- [Markdown Extensions](https://vitepress.dev/guide/markdown) - file-based CMS powered by Markdown & Vue components. This module is shipped inside Vitepress. Note: This page is a markdown file 🗒.

### Icons

- [UnoCSS Preset Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - use over 100,000 open-source [Iconify](https://iconify.design/) icons. Uses the **unocss** format for icon names, for example, `i-mdi-home`.

### Modules/Plugins

- [Pinegrow Vite Plugin](https://www.npmjs.com/package/@pinegrow/vitepress-module) - enables you to live-design your Vue single-file components visually in Vue Designer.
- [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) - via Design Panel, enables visual controls customization (automatic) and theme customization (optional).
- 📲 ~~[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - On-demand components auto importing for Vue.~~
- 📲 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - Auto import APIs on-demand for Vite, Webpack and Rollup.
- [VueUse](https://vueuse.org/) - collection of essential Vue composition utilities.
- 🍍 [Pinia](https://pinia.vuejs.org/) stores for global state management. Its light-weight, type-safe, extensible, modular with vue-devtools support.

### Devtools

- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html#standalone) - Official devtools that can be used as a standalone app alongside Vue Designer. It's conditionally configured in `main.ts` (only during development).
  - **ACTION REQUIRED**: Currently deactivated. In `main.ts`, uncomment the top devtools related snippet to activate.
- [Vite Devtools](https://github.com/webfansplz/vite-plugin-vue-devtools) - A Vite plugin for Vue that enhances your DX (developer experience) with an amazing set of in-app features. This is an in-app alternative to browser-based/standalone Vue Devtools.
  - **ACTION REQUIRED**: Currently deactivated. In `vite.config.ts`, uncomment VueDevtools.

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json & ./.vscode/settings.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://vuejs.org/guide/scaling-up/sfc.html)
- [ESLint](https://eslint.org) with [@nuxt/eslint-config](https://github.com/nuxt/eslint-config) - opinionated not-so-strict set of linting rules.
- [Prettier](https://prettier.io) with [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - format without conflicting with eslint rules.

### Typescript

This project allows JS, and strict mode is turned off. Update `tsconfig.ts` as required.

```json
{
  "compilerOptions": {
    // ...
    "strict": false,
    "allowJs": true
  }
}
```

## Community

- [Vue Designer Community](https://forum.pinegrow.com/c/vue-designer)
