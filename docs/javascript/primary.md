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

## 十一、==和===的区别？

`===` 会判断两边变量的类型和值是否全部相等，`==` 会存在变量类型转换的问题，所以并不推荐使用，只用一种情况会被使用，`var == null` 是 `var === undefined || var === null` 的简写，其余情况一律使用 `===`。

## 十二、是否===就完全靠谱？

不一定的，例如 `0 === -0` 就为 `true` ，`NaN === NaN` 为 `false` ，判断两个变量是否完全相等可以使用 `ES6` 新增的 `API` ，`Object.is(0, -0)` ，`Object.is(NaN, NaN)` 就可以准确区分。

## 十三、在类型转换中哪些值会被转为true？

除了 `undefined` 、 `null` 、 `false` 、 `NaN` 、 `''` 、 `0` 、 `-0` 以外的值都会被转为 `true` ，包括所有引用类型，即使是空的。

## 十四、什么是基本包装类型？

基本类型并不是对象，是不应该有各自方法的，为什么能调用各自的那些方法，是因为在后台对基本类型进行了包装。例如字符串、整数、布尔值，首先会使用各自的构造函数创建对应的实例，这样调用这些方法时就可以正常使用，不过再方法调用结束后，就会将实例给销毁掉，从而又是基本类型。

```javascript
let s1 = 'hello'
let s2 = s1.substring(2)
// ↓ 后台包装
let s1 = new String('hello') // 包装
let s2 = s1.substring(2) // 可以调用方法
s1 = null // 销毁
```

## 十五、toString()和valueOf的区别？

`null` 和 `undefined` 没有以上两个方法。
- `toString`：值类型时返回自身的字符串形式；当是引用类型时，无论是一维或多维数组，将他们拍平成一个字符串，里面的 `null` 和 `undefined` 转为空字符串 `''` ，对象转为 `[object Object]` ，函数的原样返回字符串形式。
- `valueOf` 无论是值类型还是引用类型，大部分情况下都是原样返回，当是 `Date` 类型时，返回时间戳。  
  
:::tip
在进行字符串强转的时候，`toString` 会优先于 `valueOf` ；在进行数值运算时，`valueOf` 会优先于 `toString` 。
当执行 `toString` 的变量是一个整数类型时，支持传参，表示需要转为多少进制的字符串。
:::

## 十六、谈谈对this的理解？

`this` 表示为当前的函数调用方，在运行时才能决定。如谁调用了某个方法，谁就是这个方法执行时的 `this` 。

## 十七、改变当前调用this的方式？

- `call` ：会立即执行调用 `call` 方法的函数，不过是以第一个参数为 `this` 的情况下调用，方法内可以传递不等的参数，作为调用 `call` 方法的参数。
- `apply` ：运行方式和 `call` 是一致的，只是接受的参数不同，不能是不定参数，得是一个数组。
- `bind` ：会改变当前的 `this` ，接受不定参数，不过不会马上执行调用 `bind` 方法的函数，而是返回一个函数作为结果，执行后才是调用函数的结果。

## 十八、谈谈对闭包的理解？

在 `JavaScript` 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中声明的变量，当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存在内存中，我们就把这些变量的集合称为闭包。

## 十九、谈谈对原型以及原型链的理解？

- 每一个 `JavaScript` 引用类型(数组/对象/函数)都有一个 `__proto__` 属性，这个属性是一个对象格式，也就是原型属性。在原型属性里面有一个 `constructor` 属性，这个属性是这个引用类型的构造函数，在 `constructor` 里面又有一个 `prototype` 的属性，这个属性又指回了引用类型的原型属性。
- 原型链就是通过对象的 `__proto__` 属性层层连接起来形成的，而构造函数的 `prototype` 是一个对象属性，再构造函数实例化时就会将这个属性赋值给实例化后对象的 `__proto__` 属性，所以函数的继承也会相应的构造出对象的原型链。

## 二十、原型继承的方式有哪些？

原型链继承、借用构造函数继承、组合继承、原型式继承、寄生组合继承等等。最优化的继承方式是寄生组合继承：

```javascript
function Parent(name) {
  this.name = name;
}
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child
```