<template>
  <div class="slot">
    <h1>我是子组件标题</h1>
    <slot>没有内容的时候我会显示</slot>
    <h2>{{msg}}</h2>
    <slot text="我是作用域插槽"></slot>
  </div>
</template>

<script>
  export default {
    name: 'slots',
    data () {
      return {
        msg: '插槽分发内容'
      }
    }
  }
</script>
