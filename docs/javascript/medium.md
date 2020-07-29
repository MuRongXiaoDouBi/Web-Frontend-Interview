---
title: 中级
---
[[toc]]

## 一、将多维数组扁平化？

```javascript
function flatten(arr) {
  return [].concat(...arr.map(v => {
    return Array.isArray(v) ? flatten(v) : v;
  }))
}

function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}

function flatten(arr) {
  return arr.flat(Infinity);
}

function flatten(arr) {  // 纯数字
  return arr.toString().split(',').map(Number);
}

function flatten(arr) {
  const ret = [];
  while (arr.length) {
    const item = arr.shift();
    if (Array.isArray(item)) {
      arr.unshift(...item);
    } else {
      ret.push(item);
    }
  }
  return ret;
}
```

## 二、数组去重？

```javascript
function unique(arr) {
  return [...new Set(arr)];
}

function unique(arr) {
  return arr.filter((v, i, a) => {
    return a.indexOf(v) === i;
  })
}

function unique(arr) {
  const tmp = new Map();
  return arr.filter(v => {
    return !tmp.has(v) && tmp.set(v);
  })
}
```

## 三、实现一个深拷贝
深拷贝步骤：

- 先判断值类型是否为数组或对象，如果不是则直接返回被拷贝的值。
- 初始化返回结果，如果引用类型是数组则此次拷贝返回一个数组，如果是对象则返回一个对象。
- 遍历引用类型的key，保证key不是原型上的属性.
- 对遍历的值进行递归拷贝。

```js
function deepClone(obj = {}) {
  // 如果obj不是一个对象和数组，或者obj是null，则直接返回obj
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  // 初始化返回结果
  let result;
  if (obj instanceof Array) {
    // 如果是数组类型则返回数组
    result = [];
  } else {
    // 如果是对象类型则返回对象
    result = {};
  }

  for (let key in obj) {
    // 保证key不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归
      result[key] = deepClone(obj[key])
    }
  }

  // 返回结果
  return result;
}}
```
## 四、实现apply、call、bind

首先说下前两者的区别。  
`call` 和 `apply` 都是为了解决改变 `this` 的指向。作用都是相同的，只是传参的方式不同。  
除了第一个参数外，`call` 可以接收一个参数列表，`apply` 只接受一个参数数组。

### 实现call

可以从以下几点来考虑如何实现

不传入第一个参数，那么默认为 `window`
改变了 `this` 指向，让新的对象可以执行该函数。那么思路是否可以变成给新的对象添加一个函数，然后在执行完以后删除？

```js
Function.prototype.myCall = function (context) {
  var context = context || window
  // 给 context 添加一个属性
  // getValue.call(a, 'yck', '24') => a.fn = getValue
  context.fn = this
  // 将 context 后面的参数取出来
  var args = [...arguments].slice(1)
  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
  var result = context.fn(...args)
  // 删除 fn
  delete context.fn
  return result
}
```

### 实现apply
`apply` 的实现也类似
```js
Function.prototype.myApply = function (context) {
  var context = context || window
  context.fn = this

  var result
  // 需要判断是否存储第二个参数
  // 如果存在，就将第二个参数展开
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result
}
```

### 实现bind

`bind` 和其他两个方法作用也是一致的，只是该方法会返回一个函数。并且我们可以通过 `bind` 实现柯里化。
```js
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
```

## 五、实现instanceof

步骤：
1. 获得类型的原型
2. 获得对象的原型
3. 循环判断对象的类型是否等于类型的原型
4. 如果对象的类型等于类型的原型，则返回 `true`
5. 如果等于 `null`，则代表已经遍历到 `Object`，返回 `false`
6. 如果以上条件都不成立，递归，顺着原型链继续判断

```js
function instanceof(left, right) {
    // 获得类型的原型
    let prototype = right.prototype
    // 获得对象的原型
    left = left.__proto__
    // 判断对象的类型是否等于类型的原型
    while (true) {
    	if (left === null)
    		return false
    	if (prototype === left)
    		return true
    	left = left.__proto__
    }
}
```