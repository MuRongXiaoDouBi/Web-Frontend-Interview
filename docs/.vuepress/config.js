module.exports = {
  base: "/Web-Frontend-Interview/",
  theme: "",
  title: "前端面试题大全",
  description: "Web Frontend developer Interview questions",
  head: [
    ["link", {
      rel: "icon",
      href: "/assets/logo.png"
    }]
  ],
  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
  ],
  markdown: {
    lineNumbers: false,
    plugins: [
      '@org/foo', // 等价于 @org/markdown-it-foo，如果对应的包存在
      ['markdown-it-bar', {
        // 提供你的选项
      }]
    ]
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/MuRongXiaoDouBi",
    editLinks: false,
  },
};