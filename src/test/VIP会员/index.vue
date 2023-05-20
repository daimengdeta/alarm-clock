<template>
  <div class="primary-color">
    <div class="title">{{ title }}</div>
    <!--    <image src="/static/钱钱-01.png"></image>-->
    <div class="squareMoney">
      <div
        v-for="(item, index) in squares"
        :key="index"
        class="vip-item square"
        :class="id === index ? 'selected' : ''"
        @click="clickSquare(index)"
      >
        <div class="squareCenter">
          <div class="vip-item-text">{{ item.text }}</div>
          <div class="money"><span class="moneyText">￥</span>{{ item.num }}</div>
        </div>
      </div>
    </div>
    <div class="phone">
      <div class="phoneText">输入对方会员手机号</div>
      <div class="">
        <input type="num" class="phoneNum" />
      </div>
      <button @click="submit" class="phoneSubmit">立即开通</button>
      <div class="rule">
        <div class="ruleTitle">规则说明：</div>
        <div class="ruleSty">
          <div class="ruleDrop">.</div>
          <div class="ruleText">{{ ruleTextOne }}</div>
        </div>
        <div class="ruleSty">
          <div class="ruleDrop">.</div>
          <div class="ruleText">{{ ruleTextTwo }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Child from './components/child.vue';
export default {
  data() {
    return {
      title: '电视/手机/VR等众多权益',
      squares: [
        {
          id: 1,
          text: '星钻月卡',
          num: 60,
        },
        {
          id: 2,
          text: '星钻季卡',
          num: 138,
        },
        {
          id: 3,
          text: '星钻年卡',
          num: 448,
        },
      ],
      id: '',
      ruleTextOne: '如果好友手机号未注册爱奇艺，会员权益将在注册后激活',
      ruleTextTwo: '会员激活有效期为7天，逾期未激活将自动退款至您的支付账户',
    };
  },
  methods: {
    clickSquare(item, index) {
      // if()
      // this.square = 'Selected';
      console.log(item, '===========打印的 ------ clickSquare');
      this.id = item;
      console.log(this.id, '===========打印的 ------ clickSquare');
    },
    submit() {},
  },
};
</script>

<style lang="less">
@font-face {
  font-family: 'iconography';
  src: url('//static.iqiyi.com/ext/common/iconography-v3-20181123/iconfont.eot');
  src: url('//static.iqiyi.com/ext/common/iconography-v3-20181123/iconfont.ttf') format('truetype'),
    url('//static.iqiyi.com/ext/common/iconography-v3-20181123/iconfont.svg#iconfont') format('svg');
}

@font-face {
  font-family: 'IQYHT-Bold';
  src: url('//static-s.iqiyi.com/iconFont-221031/IQYHT-Bold.eot');
  src: url('//static-s.iqiyi.com/iconFont-221031/IQYHT-Bold.woff');
  src: url('//static-s.iqiyi.com/iconFont-221031/IQYHT-Bold.ttf') format('truetype');
}
.primary-color {
  color: #7b4800;
}
.title {
  display: flex;
  justify-content: center;
  font-size: 15px;
  padding-top: 10px;
  font-weight: bold;
}
.squareMoney {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.vip-item {
  position: relative;
  z-index: 1;
  height: 117px;
  text-align: center;
  border-radius: 6px;
  background: #f7f7f7;
}
.square {
  width: 30%;
  height: 100px;
  border: 1px solid #ccc;
  margin-left: 5px;
  border-radius: 10%;
}
.vip-item-text {
  font-size: 17px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  line-height: 20px;
  padding-top: 17px;
  padding-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.square.selected {
  background-image: linear-gradient(180deg, #fff0db, #fff0db);
}
.money {
  font-size: 25px;
  height: 25px;
  line-height: 27px;
  font-family: 'IQYHT-Bold';
  //align-items: flex-end;
}
.text {
  font-size: 15px;
  color: #999999;
  display: flex;
  justify-content: center;
  //margin-top: 15px;
}
.num {
  font-size: 30px;
}
.squareCenter {
}
.moneyText {
  font-size: 13px;
  margin-right: 1px;
  font-family: 'Helvetica Neue', helvetica, arial, sans-serif;
}
.selected {
}
.phone {
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.phoneNum {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.phoneText {
  font-size: 18px;
  text-align: left;
}
.phoneSubmit {
  margin-top: 20px;
  //width: ;
  height: 40px;
  width: 90%;
  background: #ffb65b;
  //border: 2px solid #;
  border-radius: 10%;
  margin-left: 0px;
}
.ruleSty {
  display: flex;
  margin-top: 10px;
}
.rule {
  margin-top: 10px;
}
.ruleText {
  font-size: 15px;
}
.ruleDrop {
  color: #ffb65b;
  font-size: 15px;
}
</style>
