<template>
  <h1>获取天气</h1>
  <div>1.先获取定位</div>
  <div>2.查看定位的和天气</div>
  <div>3.提取天气</div>
  <div class="container">
    <h1>郴州天气预报</h1>
  </div>
  <div>
    <div class="">日期:{{ day.date }}</div>
    <div class="">天气情况:{{ day.text_day }}</div>
    <div class="">温度区间:{{ day.low }}℃ ~ {{ day.high }}℃</div>
    <div class="">风向:{{ day.wind_direction }}</div>
    <div class="">风力:{{ day.wind_scale }}</div>
  </div>
</template>

<script>
import Child from './components/child.vue';
export default {
  components: {
    Child,
  },
  data() {
    return {
      day: {
        date: '2023/3/23',
        text_day: '',
        high: '',
        wind_direction: '',
        wind_scale: '',
      },
    };
  },
  mounted() {
    uni
      .request(
        'https://api.seniverse.com/v3/weather/daily.json?key=7ka55qtzvvc4re1y&location=chenzhou&language=zh-Hans&unit=c&start=0&days=5',
      )
      .then((response) => {
        return response.json();
      });
  },
  methods: {},
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
