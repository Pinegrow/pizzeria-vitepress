// vite.config.js (or) vite.config.ts
import { fileURLToPath, URL } from 'node:url'

import { liveDesigner } from '@pinegrow/vite-plugin'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import VueDevTools from 'vite-plugin-vue-devtools'
// import myVitepressModule from './src/modules/my-module'

// import { visualizer } from 'rollup-plugin-visualizer'

import { defineConfig } from 'vitepress'

import siteDefn from './src/site'
const { title, description, url } = siteDefn

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // srcDir must be relative to root
  srcDir: 'src/pages',
  title,
  titleTemplate: `:title - ${title}`,
  description,
  sitemap: {
    hostname: url,
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'lite-youtube',
      },
    },
  },

  vite: {
    plugins: [
      // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
      AutoImportAPIs({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
          /\.mdx$/, // .mdx
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
          // Path must be relative to Vitepress's srcDir
          '../composables',
          '../utils',
          '../stores',
          '**/pg-*/**', // To auto-import composables from Vue Designer plugins.
        ],
        vueTemplate: true,
        dts: 'auto-imports.d.ts',
      }),

      // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
      AutoImportComponents({
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        // Path must be relative to Vitepress's srcDir
        dirs: ['../components'],

        // allow auto load markdown components under ./src/components/
        extensions: ['vue', 'md'],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.mdx?/],

        // resolvers: [], // Auto-import using resolvers
        dts: 'components.d.ts',
      }),

      Unocss({
        presets: [
          presetIcons({
            prefix: 'i-', // default prefix, do not change
          }),
        ],
        content: {
          pipeline: {
            include: ['../**/*'],
          },
        },
      }),
      VueDevTools(),
      liveDesigner({
        iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
        devtoolsKey: 'devtoolsKey', // see app.ts
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        tailwindcss: {
          configPath: 'tailwind.config.ts',
          cssPath: '@/assets/css/tailwind.css',
          // themePath: false, // Set to false so that Design Panel is not used
          // restartOnConfigUpdate: true,
          restartOnThemeUpdate: true,
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
        //       new URL('./web-types/my-awesome-lib.json', import.meta.url),
        //     ),
        //   },
        // ],
      }),
      // ...
    ],

    // build: {
    //   // Vite uses Rollup under the hold, so rollup options & plugins can be used for advanced usage
    //   rollupOptions: {
    //     plugins: [visualizer()],
    //   },
    // },

    resolve: {
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        // Path resolved relative to this file
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },

  // themeConfig: {
  //   // https://vitepress.dev/reference/default-theme-config
  //   nav: [
  //     { text: 'Home', link: '/' },
  //     { text: 'Examples', link: '/markdown-examples' },
  //   ],

  //   sidebar: [
  //     {
  //       text: 'Examples',
  //       items: [
  //         { text: 'Markdown Examples', link: '/markdown-examples' },
  //         { text: 'Runtime API Examples', link: '/api-examples' },
  //       ],
  //     },
  //   ],

  //   socialLinks: [
  //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
  //   ],
  // },
})
