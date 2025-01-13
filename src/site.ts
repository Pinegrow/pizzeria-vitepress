// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'Pizzeria',
  description: 'Yummy Pizzas',
  logo: 'i-emojione-rocket',
  author: 'Pinegrow',
  url: 'https://pizzeria-vitepress.netlify.app',
  github: 'https://github.com/pinegrow/pg-vitepress-tailwindcss',
  ogImageUrl: 'og-image.jpg', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      {
        title: 'Home',
        icon: 'i-mdi-home',
        to: '/',
      },
      {
        title: 'Menu',
        icon: 'i-mdi-home',
        to: '/menu',
      },
      {
        title: 'Order',
        icon: 'i-mdi-home',
        to: '/order',
      },
      {
        title: 'About Us',
        icon: 'i-mdi-home',
        to: '/about-us',
      },
    ],
    secondary: [
      // {
      //   title: 'Subscribe',
      //   icon: 'i-mdi-home',
      //   to: '/subscribe',
      // },
    ],
  },
}
