module.exports = {
    title: 'Icetea Documentation',
    description: 'Icetea blockchain ecosystem documentation',
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