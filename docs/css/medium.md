---
title: 中级
---
[[toc]]

## 一、圣杯布局和双飞翼布局的理解和区别，并用代码实现

### 作用  
`圣杯布局` 与 `双飞翼` 布局解决的问题是一样的，都是两侧固定，中间自适应的一种**三栏**布局模式  

### 区别

**让中间内容不被遮蔽的手法**

- 圣杯布局：父亲元素 `padding` 腾位置，外层父元素设置 `padding-left & padding-right` 让父元素增大，配合 `margin` 将元素定位到指定位置，再配合相对定位和 `right` 和 `left` 属性从而实现中间内容不被遮蔽
- 双飞翼布局：元素 `margin` 设置中间内容使用 `margin` 但是直接设置会导致布局混乱，从而让中间内容用一个元素进行包裹后再使用 `margin` 则其不会扰乱元素

### 代码实现

#### 圣杯布局

##### DOM

``` html
<body>
  <main>
    <section class="container">
      <div class="center column">center</div>
      <div class="left column">Left</div>
      <div class="right column">Right</div>
    </section>
  </main>
</body>
```

```css
body { min-width: 550px; }
.column { float: left; height: 200px; }
.center { width: 100%; background-color: skyblue; }
.left { width: 200px; margin-left: -100%; position: relative; right: 200px; }
.right { width: 150px; margin-right: -150px; background-color: pink; }
footer { clear: both; }
```


#### 双飞翼布局

##### DOM

``` html
<body>
  <main>
    <section class="container">
      <div class="wrapper column">
        <div class="center ">center</div>
      </div>
      <div class="left column">Left</div>
      <div class="right column">Right</div>
    </section>
  </main>
</body>
```

```css
.wrapper { width: 100%; }
.column { float: left; height: 200px; }
.center { margin-left: 200px; margin-right: 150px; height: inherit; background-color: skyblue; }
.left { width: 200px; margin-left: -100%; background-color: pink; }
.right { width: 150px; margin-left: -150px; background-color: orange; s}
```

## 二、垂直水平居中的实现方式有哪些？

- 父级设置 `text-align: center` 和 `line-height` 等同高度。
- 子节点绝对定位，设置 `position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);`
- 子节点绝对定位，需要设置宽度和高度。设置 `position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;`
- 父级设置 `display: table` ，子节点设置 `display: table-cell;text-align: center;vertical-align: middle;`
- 父级设置 `display: flex;justify-content: center;align-items: center;`
- 父节点设置 `display: grid;，子节点设置：align-self: center;justify-self: center;`

## 三、左右宽度固定，中间自适应的三栏布局方案有哪些？

### DOM

```html
<div class='parent'>
  <div class='left'></div>
  <div class='right'></div>
  <div class='center'></div>
</div>
```

### 浮动实现

```css
.parent {overflow: hidden;}
.left {float: left; width: 100px;}
.right: {float: right; width: 100px;}
```

### 定位实现1

```css
.parent {postion: relative};
.left {position: absolute; left: 0; width: 100px};
.right {position: absolute; right: 0; width: 100px};
.center {postion: absolute; left: 100px; right: 100px};
```

### 定位实现2

```css
.parent {postion: relative};
.left {position: absolute; left: 0; width: 100px};
.right {position: absolute; right: 0; top: 0; width: 100px};
.center {margin: 0 100px 0 100px};
```

### 表格实现

```css
.parent {dispaly: table; width: 100%;}
.left {display: table-cell; width: 100px;}
.center {display: table-cell;}
.right {display: table-cell; width: 100px;}
```

### flex实现

```css
.parent {display: flex;}
.left {width: 100px;}
.center {flex: 1;}
.right {width: 100px;}
```

### grid实现

```css
.parent {
  display: grid; 
  width: 100%; 
  grid-template-rows: 100px; 
  grid-template-columns: 100px auto 100px;
}
```

## 四、介绍下flex布局？

```
主轴方向：水平排列（默认） | 水平反向排列 | 垂直排列 | 垂直反向排列
flex-direction: row | row-reverse | column | column-reverse;

换行：不换行（默认） | 换行 | 反向换行(第一行在最后面)
flex-wrap: nowrap | wrap | wrap-reverse;

flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
flex-flow: <flex-direction> || <flex-wrap>;

主轴对齐方式：起点对齐（默认） | 终点对齐 | 居中对齐 | 两端对齐 | 分散对齐
justify-content: flex-start | flex-end | center | space-between | space-around;

交叉轴对齐方式：拉伸对齐（默认） | 起点对齐 | 终点对齐 | 居中对齐 | 第一行文字的基线对齐
align-items: stretch | flex-start | flex-end | center | baseline;

多根轴线对齐方式：拉伸对齐（默认） | 起点对齐 | 终点对齐 | 居中对齐 | 两端对齐 | 分散对齐
align-content: stretch | flex-start | flex-end | center | space-between | space-around;
```
### flex: 1;是什么意思?
```
flex: 1; === flex: 1 1 auto;
```

- `order`： 项目的排列顺序。数值越小，排列越靠前，默认为0。
- `flex-grow`： 项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
- `flex-shrink`： 项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
- `flex-basis`： 在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
- `flex`： 是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
- `align-self`： 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-item