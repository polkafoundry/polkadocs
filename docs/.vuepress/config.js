const ogprefix = 'og: http://ogp.me/ns#'
const title = 'Icetea testnet documentation'
const description = 'Learn how to create powerful dApps and chatbots on Icetea blockchain.'

module.exports = {
    title: 'Icetea Documentation',
    description: 'Icetea blockchain testnet documentation',
    head: [
        ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
        ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'og:image', content: 'https://docs.icetea.io/img/share.png' }],
        ['link', { rel: 'icon', href: 'https://icetea.io/favicon.ico' }]
    ],
    themeConfig: {
        logo: 'https://trada.tech/assets/img/logo.svg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'Reference',
                items: [
                    { text: 'JavaScript', link: '/djs/' },
                    { text: 'Wasm (Rust)', link: '/wasm/' }
                ]
            },
            {
                text: 'Tools & Libs',
                items: [
                    { text: 'Tools', link: '/tools/' },
                    { text: 'Libs', link: '/libs/' }
                ]
            },
            { text: 'Icetea', link: 'https://icetea.io' },
        ],
        sidebar: 'auto'
        // sidebar: {
        //     '/guide/': [
        //         '',
        //         'More Informations'
        //     ]
        // }
    }
}