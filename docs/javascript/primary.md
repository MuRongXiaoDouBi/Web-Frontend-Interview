---
title: 初级
---
[[toc]]

## 一、JavaScript的变量有哪些类型？

分为两种：基础类型和引用类型。
- 基础类型（6种）：`boolean`、`null`、`undefined`、`number`、`string`、`symbol`。
- 引用类型：`Array`、`Object`、`Function`。`Array` 与 `Function` 都是基于 `Object`

## 二、基础类型和引用类型的区别？

- 它们在内存中存储的方式不同。基础类型存储的是值，而引用类型存储的是指向内存中某个空间的指针；
- 基础类型赋值就是把值赋给另外一个变量，而引用类型的赋值是赋值的原来变量的指针，所以当引用类型发生改变时，只要是指向同一个指针的变量的都会发生改变。

## 三、函数参数是对象时会发生什么问题？

函数参数是对象时，相当于是将对象的指针传递给了函数，如果在函数的内部改变了对象的值，外面对象的值也会发生改变，数组也是如此。

## 四、typeof和instanceof判断变量类型的区别？

- `typeof` 对于基础类型除了 `null` 以外都可以显示正确的类型，`null`会显示 `object`， 对于数组和对象都会显示 `object` ，对于函数会显示 `function` 。
- `instanceof` 主要是用来判断引用类型，它的原理是根据原型链来查找。

## 五、有没有更好的判断变量类型的方法？

可以使用 `Object.prototype.toString.call(var)` ，可以更加准确的判断某个变量的类型。

## 六、类数组转为数组的方式有哪些？

```javascript
[].slice.call(arguments)
Array.from(arguments)
[...arguments]
```
## 七、如何判断一个变量是否是数组？

```javascript
arr instanceof Array
Array.prototype.isPrototypeOf(arr)
Array.isArray(arr)
Object.prototype.toString.call(arr) === '[object Array]'
arr.constructor === Array
```

## 八、字符串的test、match、search它们之间的区别？

```javascript
// `test`是检测字符串是否匹配某个正则，返回布尔值；
/[a-z]/.test(1);  // false

// `match`是返回检测字符匹配正则的数组结果集合，没有返回`null`；
'1AbC2d'.match(/[a-z]/ig);  // ['A', 'b', 'C', 'd']

// `search`是返回正则匹配到的下标，没有返回`-1`。
'1AbC2d'.search(/[a-z]/);  // 2
```

## 九、字符串的slice、substring、substr它们之间的区别

```javascript
// `slice`是返回字符串开始至结束下标减去开始下标个数的新字符串，下标是负数为倒数；
'abcdefg'.slice(2,3);  // c  // 3 - 2
'abcdefg'.slice(3,2);  // ''  // 2 - 3
'abcdefg'.slice(-2,-1);  // f  // -1 - -2

// `substring`和`slice`正常截取字符串时相同，负数为0，且下标值小的为开始下标；
'abcdefg'.substring(2,3);  //c  // 3 - 2
'abcdefg'.substring(3,2);  // c  // 3 - 2 
'abcdefg'.substring(3,-3);  // abc  // 3 - 0

// `substr`返回开始下标开始加第二个参数(不能为负数)个数的新字符串。
'abcdefg'.substr(2, 3);  // cde
'abcdefg'.substr(3, 2);  // de
'abcdefg'.substr(-3, 2); // ef
```

## 十、Number('123')和new Number('123')有什么区别？

- `Number('123')` 是一个转换函数，会尝试把参数转为整数类型；
- 而 `new Number('123')` 则不同，这是一个构造函数，它的结果是实例化出来一个对象。
同样的情况也适用 `String` 和 `new String` `new Boolean` 和 `new Boolean` 的情况。

```javascript
typeof Number('123') // number
typeof new Number('123') // object
```