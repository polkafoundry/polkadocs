const ogprefix = 'og: http://ogp.me/ns#';
const title = 'Icetea Documentation';
const description = 'Icetea blockchain Platform Documentation';

module.exports = {
  title: title,
  description: description,
  ga: 'UA-8597504-7',
  head: [
    ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
    ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:image', content: 'https://docs.icetea.io/img/share.png' }],
    ['link', { rel: 'icon', href: 'https://icetea.io/images/favicon.png' }],
  ],
  theme: "book",
  themeConfig: {
    logo: 'https://trada.tech/assets/img/logo.svg',
    nav: [
      { text: 'Home', link: '/about/' },
      { text: 'Developers', link: '/developer/' },
      { text: 'Icetea', link: 'https://icetea.io' },
    ],
    sidebar: [
      {
        title: '🎯 Introduction',
        collapsable: false,
        sidebarDepth: 1,
        children: [
        '/about/',
        '/feature/',
        '/architecture/',
        '/concept/',
        '/economic/',
        '/roadmap/'
        ]
      },
      {
        title: '🧑🏻‍💻 Developer Guide',
        collapsable: false,
        sidebarDepth: 1,
        children: [
        '/developer/'
        ]
      },
  //    '/faq/',
  /*    {
        title: 'Validator',
        collapsable: false,
        sidebarDepth: 1,
        children: [
        '/validator/'
        ] 
      }, 
      
      {
        title: 'References',
        collapsable: false,
        sidebarDepth: 1,
        children: [
        '/reference/'
        ]
      } */
    ],
  },
};
