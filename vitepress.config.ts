// vite.config.js (or) vite.config.ts
import { fileURLToPath, URL } from 'node:url'

import { liveDesigner } from '@pinegrow/vite-plugin'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
// import VueDevTools from 'vite-plugin-vue-devtools'
// import myVitepressModule from './src/modules/my-module'

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://github.com/vuejs/vitepress/issues/2806
  // https://github.com/vuejs/vitepress/issues/2811
  // srcDir: fileURLToPath(new URL('./src/pages', import.meta.url)),
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  vite: {
    plugins: [
      liveDesigner({
        iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
        devtoolsKey: 'devtoolsKey', // see app.ts
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        tailwindcss: {
          configPath: 'tailwind.config.ts',
          cssPath: '@/assets/css/tailwind.css',
        },
        dirs: {
          src: '@/',
          components: '@/components',
          pages: '@/pages',
          layouts: '@/layouts',
        },
        // plugins: [
        //   {
        //     name: 'My Awesome Lib 3.0',
        //     key: 'my-awesome-lib',
        //     pluginPath: fileURLToPath(
        //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
        //     ),
        //   },
        // ],
      }),
      // ...
      // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
      AutoImportAPIs({
        include: [
          /.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /.vue$/,
          /.vue?vue/, // .vue
          /.md$/, // .md
          /.mdx$/, // .mdx
        ],
        imports: [
          'vue',
          // 'vue-router',
          // 'vue-i18n',
          // 'vue/macros',
          '@vueuse/head',
          '@vueuse/core',
          'pinia',
        ],
        dirs: [
          /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
          'src/composables',
          'src/utils',
          'src/stores',
        ],
        vueTemplate: true,
        dts: 'auto-imports.d.ts',
      }),
      // ...
      // Update config as per your needs
      // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
      // Bug report - https://github.com/vuejs/vitepress/discussions/2836

      AutoImportComponents({
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        dirs: ['src/components'],

        // allow auto load markdown components under ./src/components/
        // extensions: ['vue', 'jsx', 'tsx', 'js', 'ts', 'mdx', 'svelte']
        extensions: ['vue', 'md'],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.mdx?/],

        // resolvers: [], // Auto-import using resolvers

        // transformer: 'vue3',

        dts: 'components.d.ts',
      }),
      Unocss({
        presets: [
          presetIcons({
            prefix: 'i-', // default prefix, do not change
          }),
        ],
      }),
      // VueDevTools(),
    ],
    // ...
    resolve: {
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },
})
