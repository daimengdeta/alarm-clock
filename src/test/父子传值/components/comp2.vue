<template>
  <div class="">
    组件化开发2
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: '组件化开发2',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped></style>
