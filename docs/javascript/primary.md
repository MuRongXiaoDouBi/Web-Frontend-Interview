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

## 二十一、什么是垃圾回收机制？

- 在程序执行的过程中，解释器会为创建出来的变量分配内存来存储这些变量的实体，执行环境会负责管理代码执行过程中使用到的内存，而何时划出新的内存以及何时把占用的内存释放出来的这样一套内存自动管理机制就是垃圾回收机制。这种周期性的回收策略主要有两种。
- **标记清除**：当变量进入环境时，就将这个变量标记为'进入环境'，而当这个变量离开环境时，则将其标记为'离开环境'。垃圾收集器会给内存中的每个变量都做上标记，然后它会去掉环境中的变量以及被环境中变量引用的变量的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，最后垃圾收集器完成内存清除工作。
- **引用计数**：追踪记录每个值被引用的次数，当声明了一个变量并将一个引用类型赋给该变量时，这个变量的引用次数就是1。相反如果包含这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当为0时，这说明没有办法再访问这个值了，因此垃圾收集器下次运行时，就会释放该值占用的内存。

## 二十二、如何解决引用类型变量共享的问题？

可以对引用类型进行深拷贝解决，最简单暴力的深拷贝是 `JSON.parse(JSON.stringify(obj))` ，不过也会存在诸多问题，更加完善的深拷贝需要手写递归方法对不同参数分别处理。

## 二十三、函数防抖和节流的区别？

:::tip
函数防抖指一定时间内没有再次触发函数，就执行该函数，否则重新计时；节流是规定某个时间内只能执行一次函数。
:::
以wow（魔兽世界）为例：
- 函数防抖：2.5s施法的寒冰箭，再读条的过程中，你身子抖动打断了施法，再次触发技能时麻烦您重新读条。
- 函数节流：火冲为瞬发技能，不过你规定cd为8s，所以即使8s内按了10次，也只能来1发，节省点体力吧。

## 二十四、var、let、const的区别 ？
- `var` 类型会有变量提升的情况，也就是说声明会首先提升到当前作用域的顶端，在使用到时再读取定义的值。
- 在全局作用域下定义的 `var` 变量会挂载到作用域链的顶端 `window` 下，而 `let` 和 `const` 全局定义时在作用域链中要低一级。
- `let` 和 `const` 没有变量提升的情况，必须要先声明再使用，否则就会出现暂时性死区的情况。
- 而且它们的作用域存在最近的大括号之内，也就是块级作用域，并且一经定义后，同一个作用域内不能再次定义。
- 而 `const` 和 `let` 的区别在于一经定义后不得再次改变 `const` 定义的值，如果是引用类型只要不改变指针，改变里面的值是没问题的。
- `const` 定义时必须赋值，`let` 不必。

## 二十五、Set、WeakSet的区别？

- `Set` 类型内存储的是不会重复的值，建议存储基础类型的值，因为引用类型的指针都不同。
- `WeakSet` 只能存储对象参数，否则会报错，而且是存储的引用类型的弱引用。
- `WeakSet` 不可被迭代，不支持 `forEach` 、 `for-of` 、`keys` 、`values` 方法，没有 `size` 属性。

```js
const set = new Set();
const obj = {name: 'cc'};
set.add(obj);
obj = null;
[...set][0]; // {name: 'cc'} 转数组后依然可以访问到

const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
obj = null;  // 会移除引用
weakSet.has(obj); // false
```

## 二十六、Map、WeakMap的区别？
- `Map` 是解决了对象 `key` 会被自动转为字符串的一种增强 `key/value` 集合。
- `WeakMap` 是弱引用的 `Map` 集合，`key` 必须是非 `null` 的对象格式，同样不可以被迭代。

```js
const obj = Object.create(null);
obj[1] = 'cc';
obj['1']; // cc

const map = new Map();
map.set(1, 'cc');
map.has('1');  // false   1 和 '1'不会被转换
```

## 二十七、箭头函数和普通函数的区别？

- 箭头函数的 `this` 是由包裹它的普通函数的 `this` 来决定；
- 不能作为构造函数,  `Generator` 函数；
- 参数不能使用 `arguments` 访问，需要使用 `Es6` 的不定参数访问；
- 使用 `bind` 方法无效。

## 二十八、谈谈对 `class` 的理解 ？

`JavaScript` 没有真正的类，一直也是通过函数加原型的形式来模拟，`class` 也不例外，只是语法糖，本质还是函数。需要先声明再使用，内部的方法不会被遍历，且没有函数的 `prototype` 属性。不过相较 `ES6` 之前无论是定义还是继承都好理解了很多。继承主要是使用 `extends` 和 `super` 关键字，本质类似于 `ES5` 的寄生组合继承：

```js
class Parent {
  constructor(name) {
    this.name = name;
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name);  // 相当于Parent.call(this, name)
    this.age = age;
  }
}
```

## 二十九、谈谈对Promise的理解 ？

- `Promise` 主要解决的问题就是异步回调嵌套过深造成代码难以维护和理解。
- `Promise` 构造函数内的代码是同步执行的，而之后 `then` 或 `catch` 方法是异步执行的，构造函数接受两个函数参数 `resolve` 和 `reject`，它们执行时接受的参数分别会传递给 `then` 和 `catch` 表示成功的回调以及失败回调接受到的值。
- `Promise` 一共有三种状态 `pending` 等待状态、`resolved` 已完成状态、`rejected` 已拒绝状态，状态的改变只能由等待转为已完成或等待转为已拒绝状态，而且状态的改变只会发生一次。
- 必须要实现 `then` 方法且方法里必须要返回一个 `Promise` 对象，如果是返回其他的类型会尝试包装成 `Promise` 对象；
- `then` 可以被链式的调用。
- 缺点是 `Promise` 链中途无法取消；**错误需要通过回调函数捕获**。

## 三十、谈谈对ES-Module的理解？

`ES-Module` 是 `ES6` 原生支持模块化方案，通过 `import` 来引入模块，通过 `export default` 或 `export` 来导出模块。