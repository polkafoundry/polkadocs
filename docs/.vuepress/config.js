const ogprefix = 'og: http://ogp.me/ns#';
const title = 'Icetea Introduction';
const description = 'Introduction about Icetea Platform.';

module.exports = {
  title,
  description,
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
      { text: 'Home', link: '/' },
      { text: 'Developers', link: 'https://docs.icetea.io' },
      { text: 'Icetea', link: 'https://icetea.io' },
    ],
    sidebar: [
      {
        title: 'Home',   // required
        path: '',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: ['/']
      },
    ]
  },
};
