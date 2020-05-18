const moment = require('moment');
module.exports = {
    title: "Mischieff",
    base: '/docs/',
    description: "Vue 驱动的静态网站生成器",
    head: [
        ['link', { rel: 'icon', href: '/assets/images/logo.png' }],  // 增加一个自定义的 favicon(网页标签的图标)
        ['meta', { name: 'author', content: 'mischieff' }],  // 作者
        ['meta', { name: 'keywords', content: 'vue,mischieff,mis' }]  // 关键词
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: "/assets/images/logo.png",
        sidebar: 'auto',    // 按照md标题，自动生成侧边栏
        lastUpdated: '更新时间', // 更新时间
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'vue插件',
                items: [
                    { text: '插件一', link: '/vue/' }
                ]
            },
            {
                text: '其他',
                items: [
                    { text: 'flexible自适应方案', link: '/plugs/flexible' }
                ]
            },
            { text: 'Github', link: 'https://github.com/mischieff' },
        ],
        sidebar: {
            '/blog/': [
                '',
                'blog1'
            ]
        },
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => { // 更新时间格式化插件
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale("zh-cn")
                    return moment(timestamp).format("LLL")
                }
            }
        ]
    ]
}
