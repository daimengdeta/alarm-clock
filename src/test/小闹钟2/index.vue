<template>
  <h1>小闹钟2</h1>
  <div class="flex items-center w-full">
    <div class="font-bold text-2xl">姓名：</div>
    <div class="">{{ name || '暂无姓名' }}</div>
  </div>
  <div class="flex items-center mt-2">
    <el-input class="w-[200px] mr-2" v-model="localName"></el-input>
    <el-button type="primary" class="" @click="save">保存</el-button>
  </div>
  <el-divider />
  <div class="font-bold text-2xl">闹钟列表</div>
  <div v-if="playing" class="">
    <div class="cursor-pointer flex items-center justify-center mx-3"><div class="butterfly"></div></div>
    <div class="text-center text-xl w-full" style="color: #699bff">音乐正在播放中...</div>
  </div>
  <div class="time">
    <form action="">
      <div class="timeHours">
        <el-input v-model="form.hours" placeholder="24H制">
          <template #append>点</template>
        </el-input>
      </div>
      <div class="timeMinutes">
        <el-input v-model="form.Minutes">
          <template #append>分</template>
        </el-input>
      </div>
      <el-button class="" @click="add">保存</el-button>
    </form>
  </div>
  <div class="text-left mt-2">
    <div class="">{{ alarmClock }}</div>
    <div class="">{{ labelTime }}</div>
    <div class="mt-2">
      <el-button type="primary" @click="change">更新数据</el-button>
      <el-button type="primary" @click="play">播放</el-button>
      <el-button type="primary" @click="pause">暂停</el-button>
    </div>
  </div>

  <el-table v-loading="loading" :data="tableData">
    <!--      表格-->
    <el-table-column prop="hours" label="小时" width="180" />
    <el-table-column prop="Minutes" label="分钟" width="180" />
    <el-table-column prop="todayStop" label="今日已停止" width="180" />
    <el-table-column prop="action" label="操作">
      <!--slot插槽，用#代替了并给了参数row，这里都用row来写        -->
      <template #default="{ row, index }">
        <el-button type="text" @click="stop(row)">停止</el-button>
        <el-button type="text" @click="starts(row)" v-bind="start">启动</el-button>
        <el-button type="text" @click="edit(row, index)">修改</el-button>
        <el-popconfirm title="确定删除吗?" confirm-button-text="确定" cancel-button-text="取消" @confirm="remove(row)">
          <template #reference>
            <el-button size="small" type="danger">移除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import Child from './components/child.vue';
import { ElMessage } from 'element-plus';
//1.建立个tabel,将数据移入进去，
//移动进去的办法是，获取存入的数据，把对象的value取出来，编辑好并赋值给表格数据

export default {
  components: {
    Child,
  },
  data() {
    return {
      name: '',
      localName: '',
      loading: false,
      form: {
        // month: '',
        hours: '',
        Minutes: '',
      },
      nowTime: '',
      alarmClock: '',
      labelTime: '',
      tableData: [],
      start: false,
      audioInstance: null,
      playing: false,
      time: [],
    };
  },
  methods: {
    //添加并保存
    add() {
      if (!this.form.hours || !this.form.Minutes) {
        ElMessage.error('请填写时间');
      } else if (this.form.hours < 0 || this.form.hours > 24) {
        ElMessage.error('请填写正确的时间');
      } else if (this.form.Minutes < 0 || this.form.Minutes > 59) {
        ElMessage.error('请填写正确的时间');
      } else {
        this.tableData.push({ hours: this.form.hours, Minutes: this.form.Minutes, todayStop: false });
        console.log(this.tableData, '===========打印的 ------ add.this.tableData');
        localStorage.setItem('时间', JSON.stringify(this.tableData));
        ElMessage.success('保存成功');
        // console.log(this.alarmClock[0].hours, '===========打印的 ------ 2');
        // for (let i = 0; i++; i <= this.alarmClock.length) {
        //   this.labelTime = this.alarmClock[i].hours + ':' + this.alarmClock[i].Minutes;
        // }
        // console.log(this.labelTime, '===========打印的 ------ 3');
        // this.labelHours = this.alarmClock[0].hours;
        // this.labelMinutes = this.alarmClock[0].Minutes
        this.timer();
        this.change();
      }
    },
    //发现：刚进去时，数据还是有的，但是一按保存就没有了，所以一进去，要先把保存好的数据赋值给表格
    change() {
      this.alarmClock = JSON.parse(localStorage.getItem('时间'));
      console.log(this.alarmClock, '===========打印的 ------ 44');
      if (this.alarmClock) {
        this.tableData = this.alarmClock;
      }
      // console.log(this.tableData[1].hours, '===========打印的 ------ change');
    },
    //音乐播放
    play() {
      const audio = (this.audioInstance = new Audio());
      audio.src = 'https://music.163.com/song/media/outer/url?id=167827.mp3';
      this.playing = true;
      audio.play();
    },
    //音乐关闭
    pause() {
      this.playing = false;
      if (this.audioInstance) {
        this.audioInstance.pause();
      }
    },

    //计时器
    timer() {
      const audio = (this.audioInstance = new Audio());
      audio.src = 'https://music.163.com/song/media/outer/url?id=167827.mp3';
      const setTime = setInterval(() => {
        const newDate = new Date();
        const hours = newDate.getHours().toString(); // 转成字符串才能进行对比
        const minutes = newDate.getMinutes().toString();
        console.log(this.tableData, '===========打印的 ------ this.tableData');
        for (let i = 0; i < this.tableData.length; i++) {
          const cur = this.tableData[i];
          const curHours = cur.hours;
          const curMinutes = cur.Minutes;
          console.log(curHours, curMinutes, '===========打印的 ------ 时间');
          if (hours === curHours && minutes === curMinutes && !this.playing && !cur.todayStop) {
            audio.play();
            this.playing = true;
            this.$messageBox
              .confirm('时间到了，需要停止吗?', '温馨提示', {
                type: 'info',
                center: true,
                cancelButtonText: '取消',
              })
              .then(() => {
                cur.todayStop = true;
                this.playing = false;
                audio.pause();
              });
            // clearInterval(setTime); //不能关，因为明天还会响，不能只响一次
          } else {
            console.log('还没到:' + hours + ':' + minutes);
          }
        }
      }, 5 * 1000);
    },
    //改变？？
    setName() {
      //key 是常量，不是变量
      //要赋值，结果才能显示上去
      this.name = localStorage.getItem('姓名');
      this.localName = this.name;
    },
    save() {
      ElMessage.success('保存成功');
      localStorage.setItem('姓名', this.localName);
      this.setName();
    },
    //没有完成的
    //停止计时，还没有做时间系统，还缺少个开关（用对错的那个）
    stop() {
      //停止计时，还没写
      // clearInterval(setTime);
    },
    //启动
    starts(row) {},
    //修改时间（赋值---旧=新），再加个输入框
    edit(row) {},
    //删除
    remove(item, index) {
      // localStorage.removeItem('时间');删除所以key的数据
      this.alarmClock.splice(item, 1); //表面删除
      // localStorage.setItem('key', item);
      // localStorage.removeItem('时间', item);
      //把数组对应项删除后，再储存新的数组即可：
      localStorage.setItem('时间', JSON.stringify(this.alarmClock));
      this.change();
    },
  },
  mounted() {
    this.setName();
    this.change();
    this.timer();
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
form {
  display: flex;
  margin-top: 20px;
}
.timeHours,
.timeMinutes {
  display: flex;
  align-items: center;
  margin-right: 30px;
}
table {
  width: auto;
}
.butterfly {
  height: 1.875rem;
  perspective: 31.25rem;
  position: relative;
  transform: rotate3d(2, 1, -1, 90deg);
  transform-style: preserve-3d;
  width: 1.875rem;
}
</style>
