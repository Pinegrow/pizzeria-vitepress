// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: `Pizzeria`,
  description: 'Yummy Pizzas',
  author: 'Pinegrow',
  url: 'https://pizzeria-vitepress.netlify.app',
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Menu', link: '/menu' },
    { text: 'Order', link: '/order' },
    { text: 'About Us', link: '/about-us' },
  ],
}
