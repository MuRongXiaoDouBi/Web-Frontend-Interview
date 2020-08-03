---
title: 初级
---
[[toc]]
g
## 一、Vue的data为什么是函数？

组件中的 `data` 写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的 `data` ，类似于**给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据**。而单纯的写成对象形式，就使得所有组件实例共用了一份 `data` ，就会造成一个变了全都会变的结果。

## 二、vue生命周期钩子有哪些，每个钩子阶段都做了什么？

- `beforeCreate` ：建立了组件的父子关系，完成了事件的初始化，还不能访问到定义的状态。
- `created` ：完成了 `provide/inject` 和状态的初始化，可以访问到 `data、props` 等状态。
- `beforeMount` ：内部执行了 `$mount` 函数，主要作用是作为挂载到完成阶段性能检测的起始时间，以及将模板编译为 `render` 函数。
- `mounted` ：开始将 `render` 函数转为 `VNode` ，并创建为真实的 `DOM` ，挂载完成之后执行 `mounted` 。
- `beforeUpdate` ：对于已经挂载完成的组件更新了组件模板的数据时，在异步更新之前触发。
- `updated` ：更新完成之后执行。更新相关的钩子连官网都不推荐使用，推荐使用 `watch` 监听数据变化。
- `activated` ：被 `keep-alive` 包裹的组件，因为不会销毁，所以也不会重建，它的 `created` 、 `mounted` 钩子不会触发。被缓存的组件激活时执行 `activated` 钩子。
- `deactivated` ：离开当前激活的组件时触发。
- `beforeDestroy` ：组件销毁之前执行，这个时候还没有销毁任何东西，所有状态都可以访问到。
- `destroyed` ：当前组件的子组件都销毁完，当前组件也销毁完之后执行。

## 三、组件之间通信方式有哪些？

- 子向父：父组件在自己作用域下定义传递自定义事件给子组件，子组件使用 `$emit` 触发，传值给父组件的回调使用。
- 父向子：父组件通过 `props` 给子组件；父组件使用 `ref` 引用子组件实例，访问子组件的数据和方法。
- 兄弟组件：通过当前实例的父组件的 `$children` 属性，通过 `name` 找到对应的兄弟组件实例。
- 跨级组件通信：使用 `provide/inject` ，父组件可以向所有子组件传值。
- 任意组件：使用 `vuex` 或者 `Event Bus` ；当前组件找到需要传值组件的实例，使用 `$on` 和 `$emit` 传值。

## 四、父子组件如何完成数据双向绑定？

- 利用 `vue` 的语法糖：子组件 `props` 里设置个为 `value` 的 `key`，父组件使用 `v-model`
```javascript
// 父组件：
<template>
  <Child v-model='msg'/>  /* 可以使用value和@input的形式 */
</template>
export default {
  data() {
    return {
      msg: ''
    }
  }
}
// 子组件：
<template>
  <input v-model='currentMsg'/>
</template>
export default {
  props: ['value'],
  data() {
    return {
      currentMsg: this.value
    }
  },
  watch: {
    value(newVal) {
      this.currentMsg = newVal
    },
    currentMsg(newVal) {
      this.$emit('input', newVal)
    }
  }
}
```
- sync形式: 绑定数据条数没限制

```javascript
// 父组件：
<template>
  <Child :name.sync='name' :sex.sync='sex'/>
</template>
export default {
  data() {
    return {
      name: '',
      sex: ''
    }
  }
}
// 子组件：
<template>
  <div>
    <input v-model='currentName'/>
    <input v-model='currentSex'/>
  </div>
</template>
export default {
  props: ['name', 'sex'],
  data() {
    return {
      currentName: this.name,
      currentSex: this.sex
    }
  },
  watch: {
    name(newName) {
      this.currentName= newName
    },
    sex(newSex) {
      this.currentSex = newSex
    },
    currentName(newName) {
      this.$emit('update:name', newName)
    },
    currentSex(newSex) {
      this.$emit('update:sex', newSex)
    }
  }
}
```

## 五、什么是插槽、具名插槽、作用域插槽？
- 如果没有定义插槽，在父组件内写在子组件的标签之间的内容会被忽略。插槽的作用是在父组件的作用域下往子组件内插入定义的模板内容。具名插槽是在子组件里显示的指明什么插槽需要什么内容，父组件按照名称插入模板内容。作用域插槽是把子组件内的数据传递到父组件作用域下使用，也可以配合具名插槽生成对应的模板内容。
- 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

```html
<!-- 默认插槽： -->
<button>
  <slot>插槽默认属性</slot>
</button>

<!-- 具名插槽: -->
<div>
  <slot name="head">Head</slot>
  <slot name="center">Center</slot>
  <slot name="footer">Footer</slot>
  <slot>Default</slot>
</div>

<TestComp>
  <template v-slot:head>
    <div>添加到head</div>
  </template>
  <template #center> // 简写
    <div>添加到center</div>
  </template>
  <template #footer>
    <div>添加到footer</div>
  </template>
  <template>添加到默认</template>
</TestComp>

<!-- 作用域插槽： -->
<div>
  <slot :user="user">{{user.lastName}}</slot>
</div>

<TestComp v-slot="{user}">
  <div>{{user.firstName}}</div>
</TestComp>

<!-- 具名插槽加作用域插槽 -->
<div>
  <slot :user="user" name="info">{{user.lastName}}</slot>
</div>

<TestComp #info="{ user }">
  <div>{{user.firstName}}</div>
</TestComp>
```

## 六、v-show 与 v-if 区别？
- `v-if` ：条件渲染，当条件为 `false` 时，渲染时根本就不会渲染出 `Dom` 。
- `v-show` ：条件展示，无论条件是什么，都会进行渲染出 `Dom` ，显隐由 `display:none` 切换。  
  
::: tip
对于频繁切换显隐的状态的使用 `v-show` ，如果不频繁就使用 `v-if` 。
:::

## 七、vue里数组绑定class的用法？

一般这样的一个数组是用计算属性返回，如果是确定有的，直接是数组的某一项即可，如果需用通过其他值来决定是否有没有，可以在数组里面使用对象 `key/value` 的形式，`value` 是一个布尔值。

``` js
computed: {
  classes() {
    return [
      `${prefixCls}`, 
      {
        [`${prefixCls}-${this.type}`]: this.type !== ''
      }
    ]
  }
}
```

## 八、vue里的动画？

- 单个节点的过渡使用内置的 `transition` 组件，多个时使用 `transition-group` 组件。`transition` 是一个抽象组件，不会渲染真实的 `Dom` 出来，而 `transition-group` 则不是。
- 动画分为 `enter` 和 `leave` 状态，他们使用 `v-if` 或 `v-show` 进行状态的切换，在 `enter` 状态内会管理 `v-enter、v-enter-active、v-enter-to` 这三个 `class` 的添加以及删除，以及 `before-enter、enter、after-enter` 的执行顺序；在 `leave` 状态会管理 `v-leave、v-leave-active、v-leave-to` 这三个 `class` 的添加以及删除，以及 `before-leave、leave、after-leave` ，这两个组件只是参与动画流程的管理。

## 九、如何实现一个自定义过滤器？

自定义过滤器解决的问题是按照一定的格式统一处理文本。一般使用 `Vue.filter` 方法进行自定义过滤器的全局注册，第一个参数是过滤器的名称，第二个参数是一个回调，回调内的第一个参数就是需要处理的文本值。同一个文本可以经过多个过滤器，使用 | 进行分割即可，过滤器也可以像使用方法般接受参数。

## 十、如何实现一个自定义指令？

自定义指令解决的问题无可避免需要操作 `Dom` 时，会更加的方便，一般是使用 `Vue.directive` 方法进行自定义指令的全局注册。注册自定义时接受两个参数，第一个是指令的名称(不加 `v-` )，第二个是一个对象，里面主要是一些指令的钩子函数，如 `bind` (绑定到节点时执行)、 `inserted` (渲染到父节点时执行)、 `update` (指令所在组件更新时)、 `componentUpdated` (所在组件及其子组件更新时)、 `unbind` (解除绑定时)，在这些钩子的内部第一个参数就是指令绑定对应的真实 `Dom` ，第二个参数 `binding` ，指令对应的一些信息或传的参数。在钩子函数里完成对Dom的操作就是自定义指令做的事情。

## 十一、谈谈对vuex的理解？

- `vuex` 是一个全局集中响应式状态的管理工具，状态会保存再 `state` 内，可以被所有组件所引用，一经修改后引用 `state` 内状态的组件都会响应式的更新。`state` 不能被直接修改，必须 `commit` 内提交 `mutation` 才行，且 `mutation` 必须是同步函数。提交 `action` 可以在内部进行异步操作，可同时提交多个 `mutation`。
- `store` 内的 `state` 可以通过 `this.$store.state.xxx` 访问。
- `store` 内的 `getter` 可以通过 `this.$store.getters.xxx` 访问。
- `store` 内的 `mutation` 可以通过 `this.$store.commit('xxx')` 提交。
- `store` 内的 `action` 可以通过 `this.$store.dispatch('yyy')` 提交。

## 十二、vuex语法糖方法有哪些以及如何使用？

```js
computed: {
  ...mapState(['xxx', 'yyy'])
}

computed: {
  ...mapGetters(['xxx', 'yyy'])
}

methods: {
  ...mapMutations({
    zzz: 'XXX_YYY'
  })
}

methods: {
  ...mapActions(['yyy'])
}
```

## 十三、vue-router如何传递参数？

```js
// 方式1：
{
  path:"/home/:id",
  component:Home
}
this.$router.push({
  path:`/home/${id}`,
})
// 在Home组件中获取参数
this.$route.params.id

// 方式2：需要命名路由
{
  path:'/home',
  name: 'home'
  component:Home
}
this.$router.push({
  name:'home',
  params:{id:9527}
})
// 在Home组件中获取参数
this.$route.params.id

// 方式3：
{
  path:"/home",
  component:Home
}
this.$router.push({
  path:'/home',
  query:{id:9527}
})

// 在Home组件中获取参数
this.$route.query.id
```

## 十三、vue-router有哪些导航守卫钩子？以及它们的执行顺序？

- 全局守卫：
  - `beforeEach`：只要当某个导航被触发时，就会执行这个钩子。
  - `beforeResolve`：在路由的 `beforeEnter` 和组件的 `beforeRouteEnter` 执行之后执行。
  - `afterEach`：在所有的导航守卫执行完毕之后执行，没有 `next` 方法。
- 路由守卫：
  - `beforeEnter`：在路由内定义，在全局 `beforeEach` 之后执行。
- 组件守卫：
  - `beforeRouteEnter`：在渲染组件对应路由被确认之前调用，不能访问 `this`，在路由 `beforeEnter` 钩子之后执行。
  - `beforeRouteUpdate`：在当前路由改变但组件被复用时调用，例如在动态子路由之前调转时。
  - `beforeRouteLeave`：导航离开该路由时调用。

## 十四、如何实现异步组件？

```js
// 方式1：
const Home= () => import('components/home')
export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
    },
  ]
})

// 方式2：可以指定多个路由为相同`chunk`名，会打包在一起
export default new Router({
  [{
    path: '/home',
    component: r => require.ensure([], () => r(require('../components/home')), 'home' /* chunk名 */)
  }]
})

// 方式3：
export default new Router({
  [{
    path: '/promisedemo',
    component: resolve =>  require(['../components/home'], resolve)
  }
]})

// 方式4：高级异步组件，带`loading`和`error`组件
const Home= () => lazyLoadView(import('components/home'))

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
    },
  ]
})

function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    loading: require('@/components/loading').default,
    error: require('@/components/error').default,
    delay: 200,
    timeout: 10000
  });
  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children);
    }
  });
}
```

## 十五、vue中key的作用

`key` 的作用主要是为了高效的更新 `虚拟DOM` 。另外 `vue` 中在使用相同标签名元素的过渡切换时，也会使用到 `key` 属性，其目的也是为了让`vue` 可以区分它们，否则 `vue` 只会替换其内部属性而不会触发过渡效果。

## 十六、vue常见性能优化方式

- 路由懒加载
- 合理使用 `keep-alive` 缓存页面
- 合理使用 `v-if` `v-show`
  - 当遇到 `DOM` 频繁切换的场景时，使用 `v-show`
  - 当 `DOM` 切换只会触发一次或者很少切换时，使用 `v-if`
- `v-for` 遍历避免同时使用 `v-if`，因为 `vue` 会先执行 `v-for` 再去执行 `v-if`，如果同时使用，会造成 `DOM` 大量卸载，流失很多性能。
- 图片懒加载
- `CDN`
- 插件按需引入
- 事件的销毁，如果组件中有监听某个事件，一定要在组件销毁前，将监听操作释放掉。