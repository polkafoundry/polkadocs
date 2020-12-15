const ogprefix = 'og: http://ogp.me/ns#';
const title = 'Icetea Introduction';
const description = 'Introduction about Icetea Platform.';

module.exports = {
  title: 'Icetea Platform',
  description: 'Icetea blockchain Platform introduction',
  ga: 'UA-8597504-7',
  head: [
    ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
    ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:image', content: 'https://docs.icetea.io/img/share.png' }],
    ['link', { rel: 'icon', href: 'https://icetea.io/favicon.ico' }],
  ],
  themeConfig: {
    logo: 'https://trada.tech/assets/img/logo.svg',
    nav: [
      { text: 'Home', link: '/abstract/' },
      { text: 'Developers', link: 'https://docs.icetea.io' },
      { text: 'Icetea', link: 'https://icetea.io' },
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        sidebarDepth: 2,
        children: [
        '/abstract/',
        '/about/',
        '/feature/',
        '/architecture/',
        '/economic/',
        '/roadmap/'
        ]
      },
      {
        title: 'Developers',
        collapsable: false,
        sidebarDepth: 2,
        children: [
        '/developer/'
        ]
      }
    ],
  },
};
