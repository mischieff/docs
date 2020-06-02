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
        sidebar: "auto",    // 按照md标题，自动生成侧边栏
        lastUpdated: '更新时间', // 更新时间
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'vue',
                items: [
                    { text: 'nginx代理vue', link: '/vue/nginxToVue' },
                    { text: 'Vue配置', link: '/vue/VueConfig' },
                    { text: '滚动数字（向上）', link: '/vue/scrollNumberTop' },
                    { text: '滚动数字（原地）', link: '/vue/scrollNumber' },
                    { text: 'div模拟input', link: '/vue/divEdit' },
                    { text: 'textarea回车标签插件', link: '/vue/textareaEdit' },
                ]
            },
            // {
            //     text: 'react',
            //     items: [
            //         { text: '准备中', link: '/react/index' },
            //     ]
            // },
            {
                text: 'javascript',
                items: [
                    { text: 'ECMAScript6', link: '/javascript/ECMAScript6' },
                    { text: 'flexible自适应方案', link: '/javascript/flexible' },
                    { text: 'jsToCss', link: '/javascript/jsToCss' }
                ]
            },
            { text: 'Github', link: 'https://github.com/mischieff' },
        ],
        sidebar: {
            '/vue/': [{
                title: 'vue',
                collapsable: false,
                children: [
                    { title: 'nginx代理vue', path: '/vue/nginxToVue' },
                    { title: 'Vue配置', path: '/vue/VueConfig' },
                    { title: '滚动数字（向上）', path: '/vue/scrollNumberTop' },
                    { title: '滚动数字（原地）', path: '/vue/scrollNumber' },
                    { title: 'div模拟input', path: '/vue/divEdit' },
                    { title: 'textarea回车标签插件', path: '/vue/textareaEdit' },
                ]
            }],
            // '/react/': [{
            //     title: 'react',
            //     collapsable: false,
            //     children: [
            //         { title: '准备中', path: '/react/index' }
            //     ]
            // }],
            '/javascript/': [{
                title: 'javascript',
                collapsable: false,
                children: [
                    { title: 'ECMAScript6', path: '/javascript/ECMAScript6' },
                    { title: 'flexible自适应方案', path: '/javascript/flexible' },
                    { title: 'jsToCss', path: '/javascript/jsToCss' }
                ]
            }]
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
