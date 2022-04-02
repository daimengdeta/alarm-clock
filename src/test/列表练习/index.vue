<template>
  <h1>列表练习</h1>
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

<style scoped>
a {
  color: #42b983;
}
</style>
