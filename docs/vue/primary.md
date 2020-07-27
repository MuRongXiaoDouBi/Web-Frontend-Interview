---
title: 初级
---

# 初级
## 一、页面导入样式时，使用link和@import有什么区别？

1. `link` 是 `HTML` 标签，`@import` 是 `css` 提供的
2. `link` 引入的样式页面加载同时加载， `@import` 引入的样式需要页面加载完成后加载
3. `link` 没有兼容性问题， `@import` 不兼容 **ie5** 以下
4. `link` 可以通过 `JavaScript` 操作 `DOM` 动态引入样式表改变样式， `@import` 不可以
5. `link` 中还可以引入 `icon` 等资源