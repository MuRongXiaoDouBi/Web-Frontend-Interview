---
title: 中级
---
[[toc]]

## 一、谈谈vue初始化从数据到视图的过程，能详细些吗？

- 首先在 `vue` 的内部会执行 `_init()` 方法，进行一系列的初始化，首先会进行配置的合并，将用户传入的对象和自身的方法属性进行合并。
- 然后会确定组件的父子关系，将父组件的自定义事件添加到子组件的事件中心中，挂载之后会用到的将 `render` 函数内的数据转为 `VNode` 的方法(手写 `render` 函数里的h方法)，接着执行第一个生命周期钩子 `beforeCreate` 函数。
- 接下来会初始化一些状态，比如 `inject、data、computed、watch、provide` 等，挂载到当前实例 `this` 下，并完成数据的响应式，紧接着执行 `created` 钩子函数。
- 开始组件的挂载阶段，如果是不带编译器版本且需要编译时，这个时候就开始将模板编译 `render` 函数，完毕之后执行 `beforeMount` 钩子。
- 接下来执行 `render` 函数，得到 `VNode` ，之后执行 `patch` 由内而外的将 `VNode` 转为真实 `Dom` ，完成之后执行 `mounted` 钩子。
- 如果在 `patch` 的过程中遇到了子组件的 `VNode` ，就会转为去执行子组件的初始化到真实 `Dom` 的状态过程，完毕之后才执行父组件的 `mounted` 钩子。

## 二、请实现一个最小化vue响应式示例？

```js
class Watcher {
  update() {
    console.log('更新~');
  }
}
class Dep {
  constructor() {
    this._watchers = new Set();
  }
  add(watcher) {
    if(!this._watchers.has(watcher)) {
      this._watchers.add(watcher);
    }
  }
  notify() {
    this._watchers.forEach(watch => {
      watch.update();
    })
  }
}

Dep.target = new Watcher();

function observer(target) {
  if (typeof target === 'object' && target !== null) {
    Object.keys(target).forEach(key => {
      defineReactive(target, key, target[key]);
    })
  }
}
function defineReactive(target, key, val) {
  const dep = new Dep();
  if (typeof val === 'object' && val !== null) {
    observer(val);
  }
  Object.defineProperty(target, key, {
    get() {
      dep.add(Dep.target);
      return val;
    },
    set(newVal) {
      dep.notify();
      val = newVal;
    }
  })
}
```