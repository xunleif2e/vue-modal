# @xunlei/vue-modal

> Vue 2.x 模态框组件

## 在线demo

https://xunleif2e.github.io/vue-modal/demo/dist/index.html

## Installation

```
npm i @xunlei/vue-modal -S
```

## 使用

### 注册插件

### 1. 注册组件 / Registration

#### 方式1 利用插件方式全局注册 / Use plugin to register a global component

```javascript
import Vue from 'vue'
import VueModal from '@xunlei/vue-modal'

// import css
import '@xunlei/vue-modal/src/vue-modal.css'

Vue.use(VueModal)
```
#### 方式2 局部注册 / Local Registration

```javascript
import { component as VueModal } from '@xunlei/vue-modal'
// import css
import '@xunlei/vue-modal/src/vue-modal.css'

export default {
  // ...
  components: {
    'vue-modal': VueModal
  }
}
```

#### 方式3 独立版本引入，自动全局注册 / Direct `<script>` Include
> 前提是 vue 也是独立版本通过script标签引入 / The premise is that Vue is also use direct `<script>` include.

```html
<link type='text/css' rel="stylesheet" href="https://unpkg.com/@xunlei/vue-modal@latest/src/vue-modal.css">
<script src="https://unpkg.com/@xunlei/vue-modal@latest/dist/vue-modal.js"></script>
```

### 用法

```html
<button
  @click="showModal = true"
>
  Show Modal
</button>

<vue-modal
  v-model="showModal"
  :backdrop="false"
>
  <!-- content here --> 
</vue-modal>
```
## API

### Props

| 参数     | 说明                                                             | 类型    | 可选值 | 默认值 |
|----------|------------------------------------------------------------------|---------|--------|--------|
| backdrop | 是否需要背景蒙层，有背景蒙层时为模态，不能操作弹出层后方的UI界面 | Boolean | Y      | true   |
| timeout  | 自动关闭弹出层的时间，单位为ms                                   | Number  | Y      | -      |

### Events

| 事件名      | 说明                       | 事件参数 |
|-------------|----------------------------|----------|
| show        | 模态框显示事件             | -        |
| hide        | 模态框隐藏事件             | -        |
| after-leave | 模态框离开动画执行完成事件 | -        |


### Style class
如果要定制一些外观和动画效果，可以覆盖以下的class


| class                         | 说明                       |
|-------------------------------|----------------------------|
| .modal-mask                   | 模态框背景蒙层             |
| .modal-content                | 模态框内容盒子             |
| .modal-mask.modal-transparent | 失去模态的背景蒙层         |
| .modal-enter-active           | 模态框进入活动状态         |
| .modal-leave-active           | 模态框离开活动状态         |
| .modal-mask-enter-active      | 模态框背景蒙层进入活动状态 |
| .modal-mask-leave-active      | 模态框背景蒙层离开活动状态 |
| .modal-mask-enter             | 模态框背景蒙层开始进入     |

## 开发命令

``` bash
# install deps
npm install

# serve demo at localhost:8080
npm run dev

# build library and demo
npm run build

# build library
npm run build:library

# build demo
npm run build:demo

# commit use commitizen
npm run commit

# pre publish
npm run prepublish

# generate changelog
npm run changelog
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 赵兵
