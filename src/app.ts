import 'uno.css'
// import '@/assets/css/main.css'
import '@/assets/css/tailwind.css'
// import 'prismjs/themes/prism-tomorrow.css'

// https://vitepress.dev/guide/custom-theme
// import { h } from 'vue'
// import Theme from 'vitepress/theme'
import { Theme, defineConfigWithTheme } from 'vitepress'
import Layout from '@/layouts/default.vue'
import pinia from '@/plugins/pinia'
import head from '@/plugins/head'

export default <Theme>{
  // extends: Theme,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(pinia)
    app.use(head)
    // ...
  },
}
