<template>
  <link href="https://cdn.bootcdn.net/ajax/libs/mvp.css/1.8.0/mvp.min.css" rel="stylesheet" />
  <h1>闹钟</h1>
  <div>现在时间是:{{ now }}</div>
  <button @click="unitTest">单元测试</button>
  <div class="">
    <form action="" class="setUp">
      <div class="">请输入时间：</div>
      <div class="year">年：<input type="number" v-model="form.year" placeholder="请输入数字" @click="year" /></div>
      <div class="month">月：<input type="number" v-model="form.month" placeholder="请输入数字" /></div>
      <div class="date">日：<input type="number" v-model="form.date" placeholder="请输入数字" /></div>
      <div class="hours">点：<input type="number" v-model="form.hours" placeholder="请输入数字" /></div>
      <button @click="onsubmit">确定</button>
    </form>
  </div>
  <div class="">
    1 <audio src="http://file.ws.126.net/f2e/news/dada_valentines2018/files/bgm2.mp3" controls="controls">11</audio>1

    <!--    <button @click="add">+</button>-->
    <!--    <div class="">{{ add() }}{{ xlz }}</div>-->
    <!--    <button @click="jian">-</button>-->
  </div>
</template>

<script>
import Child from './components/child.vue';
// import elPlusVue from '../el,plus转换成vue';
//1个显示现在时间的表
//2.当到点时，放歌
export default {
  components: {
    Child,
  },
  data() {
    return {
      now: '',
      xlz: 0,
      // time: '',
      form: {
        year: 2022,
        month: 8,
        date: '',
        hours: '',
      },
      setTime: '',
      times: '',
    };
  },
  created() {
    this.time();
    console.log(document.querySelector('.month'), '===========打印的 ------ created');
  },
  mounted() {
    console.log(document.querySelector('.month'), '===========打印的 ------ mounted');
  },
  beforeUnmount() {
    clearInterval(this.times);
    console.log(2, '===========打印的 ------ beforeUnmount');
  },
  methods: {
    getFormatDate(date) {
      const nowYear = date.getFullYear();
      let nowMonth = date.getMonth() + 1;
      let nowDate = date.getDate();
      let nowHours = date.getHours();
      let nowMinutes = date.getMinutes();
      let nowSeconds = date.getSeconds();
      if (nowMonth < 10) {
        nowMonth = '0' + nowMonth;
      }
      if (nowDate < 10) {
        nowDate = '0' + nowDate;
      }
      if (nowHours < 10) {
        nowHours = '0' + nowHours;
      }
      if (nowMinutes < 10) {
        nowMinutes = '0' + nowMinutes;
      }
      if (nowSeconds < 10) {
        nowSeconds = '0' + nowSeconds;
      }

      const now = nowYear + '-' + nowMonth + '-' + nowDate + ' ' + nowHours + ':' + nowMinutes + ':' + nowSeconds;
      // console.log(now, '===========打印的 ------ getFormatDate');
      return now;
    },
    time() {
      this.now = this.getFormatDate(new Date()); //作用是一进界面就显示时间
      this.times = setInterval(() => {
        const date = new Date();
        this.now = this.getFormatDate(date);
      }, 1000);
    },
    unitTest() {
      const resultMap = [
        {
          date: '2022-1-1 1:1:1',
          now: '2022-01-01 01:01:01',
        },
        {
          date: '2022-10-1 1:1:1',
          now: '2022-10-01 01:01:01',
        },
        {
          date: '2022-10-10 1:1:1',
          now: '2022-10-10 01:01:01',
        },
        {
          date: '2022-10-10 10:1:10',
          now: '2022-10-10 10:01:10',
        },
      ];
      let errorCount = 0;
      console.log('总用例数量: ' + resultMap.length);

      resultMap.forEach((value) => {
        const now = this.getFormatDate(new Date(value.date));
        if (now === value.now) {
          console.log('参数测试通过: ' + value.date, '，结果:' + now);
        } else {
          console.log('参数测试失败: ' + value.date, '，结果:' + now, '期待结果:' + value.now);
          errorCount += 1;
        }
      });
      console.log(errorCount, '===========打印的 ------ unitTest');
    },

    onsubmit() {
      const audio = new Audio();
      audio.src = 'http://file.ws.126.net/f2e/news/dada_valentines2018/files/bgm2.mp3';
      console.log(this.form, '===========打印的 ------ this.form');
      if (!this.form.year && !this.form.month && !this.form.date && !this.form.hours) {
        alert('请填写时间');
      } else if (this.form.year < 2022) {
        alert('这个日期已经过去');
      } else if (this.form.year > 2022) {
        alert('时间太久了');
      } else if (this.form.month < 1) {
        alert('月份不能小于1');
      } else if (this.form.month > 12) {
        alert('月份不能大于12');
      } else if (this.form.date < 1) {
        alert('日期不能小于1');
      } else if (this.form.date > 31) {
        alert('日期不能大于31');
      } else if (this.form.hours < 1) {
        alert('时间不能小于1');
      } else if (this.form.hours > 24) {
        alert('时间不能大于24');
      } else {
        // return alert('您调节好的闹钟时间是 $(this.)');

        // console.log(date, '===========打印的 ------ onsubmit');
        // console.log(
        //   date.getSeconds(), //秒数
        //   date.getMonth() + 1, //月份
        //   date.getDate(), //几号
        //   date.getMinutes(), //几分
        //   date.getHours(), //几点
        //   '===========打印的 ------ onsubmit',
        // );

        const setTime = setInterval((message) => {
          // 用function的话  是读不到this上数据的
          let date = new Date();
          const Month = date.getMonth() + 1;
          const Date1 = date.getDate();
          const Hours = date.getHours();
          const Minutes = date.getMinutes();

          if (Date1 === this.form.date && Month === this.form.month && Hours === this.form.hours) {
            audio.play();
            const r = confirm('到点了:' + Hours + ':' + Minutes);
            if (r === true) {
              audio.pause();
            }
            // console.log('到点了:', Hours, ':', Minutes);
            this.form = !this.form;
            clearInterval(setTime);
          } else {
            console.log('还没到');
          }
        }, 10000);
        //闹钟到的时候，弄一个弹出框，可选项有关闭闹钟等
        // setTimeout(() => {
        //   if (Date2 === this.form.date && Month2 === this.form.month && Hours2 === this.form.hours) {
        //     console.log('到点了:', Hours2, ':', Minutes2);
        //     // clearInterval(a);
        //   } else {
        //     console.log('还没到');
        //   }
        // }, 1000);
      }
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
.setUp {
  display: flex;
  justify-self: center;
  align-items: baseline;
  width: 100%;
}

form.setUp {
  border: 0;
  border-radius: unset;
  box-shadow: unset;
  padding: 0;
  max-width: unset;
}

.year,
.month,
.date,
.hours {
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 30px;
}
.time {
}
</style>
