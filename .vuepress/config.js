const moment = require('moment');
module.exports = {
    title: "Mischieff",
    base: '/docs/',
    description: "Vue 驱动的静态网站生成器",
    head: [
        ['link', {
            rel: 'icon',
            href: '/assets/images/logo.png'
        }], // 增加一个自定义的 favicon(网页标签的图标)
        ['meta', {
            name: 'author',
            content: 'mischieff'
        }], // 作者
        ['meta', {
            name: 'keywords',
            content: 'vue,mischieff,mis'
        }] // 关键词
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: "/assets/images/logo.png",
        sidebar: "auto", // 按照md标题，自动生成侧边栏
        lastUpdated: '更新时间', // 更新时间
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '文件',
                items: [{
                    text: '前端开发规范',
                    link: '/doc/webRule'
                }, ]
            },
            {
                text: 'vue',
                items: [{
                        text: '左右滑动',
                        link: '/vue/carousel'
                    },
                    {
                        text: '滚动数字（向上）',
                        link: '/vue/scrollNumberTop'
                    },
                    {
                        text: '滚动数字（原地）',
                        link: '/vue/scrollNumber'
                    },
                    {
                        text: 'div模拟input',
                        link: '/vue/divEdit'
                    },
                    {
                        text: 'textarea回车标签插件',
                        link: '/vue/textareaEdit'
                    },
                    {
                        text: 'Vue按钮权限配置',
                        link: '/vue/VueConfig'
                    },
                ]
            },
            {
                text: '配置',
                items: [{
                    text: 'nginx代理vue',
                    link: '/settings/nginxToVue'
                }, ]
            },
            {
                text: 'javascript',
                items: [{
                        text: 'ECMAScript6',
                        link: '/javascript/ECMAScript6'
                    },
                    {
                        text: 'flexible自适应方案',
                        link: '/javascript/flexible'
                    },
                    {
                        text: 'jsToCss',
                        link: '/javascript/jsToCss'
                    }
                ]
            },
            {
                text: 'Github',
                link: 'https://github.com/mischieff'
            },
        ],
        sidebar: {
            '/vue/': [{
                title: 'vue',
                collapsable: false,
                children: [{
                        title: '左右滑动',
                        path: '/vue/carousel'
                    },
                    {
                        title: '滚动数字（向上）',
                        path: '/vue/scrollNumberTop'
                    },
                    {
                        title: '滚动数字（原地）',
                        path: '/vue/scrollNumber'
                    },
                    {
                        title: 'div模拟input',
                        path: '/vue/divEdit'
                    },
                    {
                        title: 'textarea回车标签插件',
                        path: '/vue/textareaEdit'
                    },
                    {
                        title: 'Vue按钮权限配置',
                        path: '/vue/VueConfig'
                    },
                ]
            }],
            '/doc/': [{
                title: '文件',
                collapsable: false,
                children: [{
                    title: '前端开发规范',
                    path: '/doc/webRule'
                }, ]
            }],
            '/settings/': [{
                title: '配置',
                collapsable: false,
                children: [{
                    title: 'nginx代理vue',
                    path: '/settings/nginxToVue'
                }, ]
            }],
            '/javascript/': [{
                title: 'javascript',
                collapsable: false,
                children: [{
                        title: 'ECMAScript6',
                        path: '/javascript/ECMAScript6'
                    },
                    {
                        title: 'flexible自适应方案',
                        path: '/javascript/flexible'
                    },
                    {
                        title: 'jsToCss',
                        path: '/javascript/jsToCss'
                    }
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