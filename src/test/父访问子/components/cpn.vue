<template>
  <div>哈哈哈哈 我是子组件</div>
  <xlz />
</template>

<script>
import Xlz from './xlz.vue';
export default {
  name: 'cpn',
  components: { Xlz },
  props: {
    propName: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    showMessage() {
      console.log(1, 'showMessage');
    },
  },
};
</script>

<style scoped></style>
