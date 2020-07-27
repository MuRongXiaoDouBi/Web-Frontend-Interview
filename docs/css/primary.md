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
/* 或 */
.clear:after {
  clear: both;
}
```

## 六、em、rem的区别？

- `em` ：如果父级有设置字体大小， `1em` 就是父级的大小，没有 `1em` 等于自身默认的字体大小。
- `rem` ：相对于 `html` 标签的字体大小。

## 七、不使用border属性画一条1px的线？

```html
<div style='height: 1px; background: #666; overflow: hidden;'></div>
<!-- 或 -->
<hr size='1'></hr>
```
## 八、画一条0.5px的线？

### 1. 采用meta viewport的方式
```html
<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>
```
::: tip
`viewport` 只针对于移动端，只在移动端上才能看到效果
:::
### 2. 采用transform: scale()的方式

```css
height: 1px;
transform: scale(0.5, 0.5);
```

## 九、怎么解决移动端1px问题？

```css
box-shadow: 0  -1px 1px -1px #e5e5e5,   //上边线
box-shadow: 1px  0  1px -1px #e5e5e5,   //右边线
box-shadow: 0  1px  1px -1px #e5e5e5,   //下边线
box-shadow: -1px 0  1px -1px #e5e5e5;   //左边线
box-shadow: 0 0 0 1px #e5e5e5;          //四条线
```
## 十、定位的方式有哪几种，它们的区别是什么？

- `relative` ：相较于自身定位，设置的位置相对于自己进行位移。不脱离文档流。
- `absolute` ：相较于最近有定位的父节点定位，设置的位置相较于父节点。会脱离文档流，导致父节点高度塌陷。
- `fixed` ：相较于当前窗口进行定位，设置的位置相较于窗口。脱离文档流。