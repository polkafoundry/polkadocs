const ogprefix = 'og: http://ogp.me/ns#';
const title = 'PolkaFoundry Documentation';
const description = 'PolkaFoundry blockchain Platform Documentation';

module.exports = {
  title: title,
  description: description,
  ga: 'UA-8597504-7',
  head: [
    ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
    ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:image', content: 'https://polkafoundry.com/og.png' }],
    ['link', { rel: 'icon', href: 'https://scan.polkafoundry.com/favicon.svg' }],
  ],
  theme: "book",
  themeConfig: {
    logo: 'https://scan.polkafoundry.com/favicon.svg',
    nav: [
      { text: 'Introduction', link: '/about/' },
      { text: 'Developer Guide', link: '/developer/' },
      { text: 'PolkaFoundry', link: 'https://polkafoundry.com' },
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
