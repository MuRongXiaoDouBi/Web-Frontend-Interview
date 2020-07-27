---
title: 初级
---
[[toc]]
## 一、用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

### 题目要求

1. 要求使用 **递归算法**
2. 数组长度为 `5`
3. 在 `2-23` 之间的随机数
4. 限制15行代码以内实现；限制时间10分钟内完成
5. 不能使用 `for` / `while` 等循环

### 功能实现代码

#### Array() 对象实现

::: tip
此示例可精简到15行代码内，为了流程更清晰，做了一些封装
:::

```javascript
let arr = new Array(5);
let num = randomNumber();
let i = 0;
randomArr(arr,num);
function randomArr(arr,num) {
  if (arr.indexOf(num)< 0){
    arr[i] = num;
    i++;
  } else {
    num = randomNumber();
  }
  if (i>=arr.length){
    console.log(arr);
    return;
  }else{
    randomArr(arr,num)
  }
}
function randomNumber() {
    return Math.floor(Math.random()*31 + 2)
}
```

#### Set() 对象实现

``` javascript
const arr = new Set()
function gentory() {
  if(arr.size < 5) {
    arr.add(Math.floor(Math.random() * 31 + 2))
    gentory()
  }
}
gentory()
```

