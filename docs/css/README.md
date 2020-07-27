---
title: 初级
---
[[toc]]
## 一、css权重是什么？

设置节点样式的方式有很多种，不同的方式它们的权重并不相同，当它们给一个节点设置同一个样式时，谁的权重高谁就生效。
- `important` ：无限高
- 行内样式：权重值为 `1000`
- id选择器：权重值为 `100`
- 类、伪类、属性选择器：权重值为 `10`
- 元素选择器：权重值为 `1`

## 二、盒模型有几种，它们区别是什么？

使用box-sizing属性设置 `border-box` ：怪异盒模型、`content-box` ：标准盒模型。
- 标准盒模型：设置的宽高只是包括内容区，内边距和边框另算。
- 怪异盒模型：设置的宽高包含了内边距和边框。  

## 三、什么是BFC？

块级格式上下文，一句话来说就是让块级元素有块级元素该有的样子，触发 `BFC` 可以清除浮动、让 `margin` 不重叠。

## 四、如何触发BFC？

- `float` 的值不为 `none` 。
- `overflow` 的值不为 `visible`。
- `display` 的值为 `table-cell` 、`table-caption` 和 `inline-block` 之一。
- `position` 的值不为 `static` 或 `releative`

## 五、常用的清除浮动方式是什么？

```css
.clear:after, .clear:before {
  content: ' ';
  display: table;
}
.clear:after {
  clear: both;
}
```