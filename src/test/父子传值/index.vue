<template>
  <div class="parent">
    <h3>我是父组件的count属性：我现在是： {{ count }}</h3>
    <child name="xlz" age="18" />
  </div>
</template>

<script>
import Child from "./components/child.vue";
export default {
  components: {
    Child
  },
  data() {
    return {
      count: 0
    }
  },
}
</script>

<style lang="less">
.parent{
  border: 2px solid #ff001c;
}
</style>
