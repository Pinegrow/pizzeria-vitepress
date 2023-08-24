// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtools = devtools
// }

// https://vitepress.dev/guide/custom-theme
// import { h } from 'vue'
// import Theme from 'vitepress/theme'
import Layout from '@/layouts/default.vue'
import 'uno.css'
// import '@/assets/css/main.css'
import '@/assets/css/tailwind.css'
// import 'prismjs/themes/prism-tomorrow.css'

import pinia from '@/plugins/pinia'
import head from '@/plugins/head'

export default {
  // extends: Theme,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(pinia)
    app.use(head)
  },
}
