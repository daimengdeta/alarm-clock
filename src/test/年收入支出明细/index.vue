<template>
  <h1>2023年收入与支出明细基础版11111</h1>
  <div class="moneys">
    <h3>总收入：{{ income }} 元</h3>
    <h3>总支入：{{ pay }}元</h3>
    <h3>差值：{{ income - pay }}元</h3>
  </div>

  <div class="open">
    <el-button @click="add" class="add" type="primary">新增</el-button>
    <el-button type="primary" @click="open"> 每月详情 </el-button>
  </div>
  <el-divider />
  <el-table :data="tableData" style="width: 100%">
    <!--sortable：排序    -->
    <el-table-column label="月份" prop="month" sortable> </el-table-column>
    <el-table-column label="日期" prop="day"> </el-table-column>
    <el-table-column label="收入/支出" prop="cost"> </el-table-column>
    <el-table-column label="金额" prop="money"> </el-table-column>
    <el-table-column label="用途" prop="purposeDesc"> </el-table-column>
    <el-table-column label="用途2" prop="purpose" :formatter="formatterGrade"> </el-table-column>
    <el-table-column label="备注" prop="remarks"> </el-table-column>
    <el-table-column label="操作" prop="action">
      <template #default="{ row, $index }">
        <el-button type="text" @click="edit(row)">编辑</el-button>
        <el-popconfirm
          title="确定删除吗？"
          confirm-button-text="确定"
          cancel-button-text="取消"
          @confirm="remove($index)"
        >
          <template #reference>
            <el-button>移除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="新增费用明细" v-model="dialogFormVisible">
    <el-form :model="form" class="form" ref="dialogForm" :rules="rules">
      <el-form-item label="时间:" prop="time">
        <el-date-picker v-model="form.time" placeholder="日期格式" />
      </el-form-item>
      <el-form-item label="收入/支出:" prop="cost">
        <!--        多选框-->
        <!--        <el-checkbox-group v-model="form.cost">-->
        <!--          <el-checkbox v-for="item in costData" :key="item.id" :label="item.id">{{ item.name }}</el-checkbox>-->
        <!--        </el-checkbox-group>-->
        <!--        单选框-->
        <el-radio-group v-model="form.cost" class="ml-4">
          <el-radio v-for="item in costData" :key="item.id" :label="item.id">{{ item.name }}</el-radio>
          <!--          <el-radio label="2" size="large" value="2">支出</el-radio>-->
        </el-radio-group>
      </el-form-item>
      <el-form-item label="金额：" prop="money">
        <el-input v-model="form.money"></el-input>
      </el-form-item>
      <el-form-item label="用途：" prop="purpose">
        <el-select v-model="form.purpose">
          <el-option v-for="item in purposeData" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注：" prop="remarks">
        <el-input v-model="form.remarks"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="dialogFormVisible = false">取消</el-button>
      <el-button @click="submit('dialogForm')">提交</el-button>
    </template>
  </el-dialog>

  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>每月详情</span>
    <el-table :data="drawerTable" style="width: 100%">
      <el-table-column type="expand">
        <template #default="props">
          <div m="4">
            <p m="t-0 b-2">伙食: {{ props.row.foods }}</p>
            <p m="t-0 b-2">零食: {{ props.row.snacks }}</p>
            <p m="t-0 b-2">生活用品: {{ props.row.uses }}</p>
            <p m="t-0 b-2">其他: {{ props.row.others }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="月份" prop="monthDrawer" />
      <el-table-column label="收入" prop="incomeDrawers" />
      <el-table-column label="支出" prop="payDrawers" />
      <el-table-column label="差值" prop="wantingDrawers" />
    </el-table>
  </el-drawer>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
  components: {
    // Child,
  },
  data() {
    return {
      tableData: [],
      drawerTable: [
        // {monthDrawer:'',
        //   incomeDrawers:'',
        //   payDrawers:'',
        //   wantingDrawers:'',
        // }
      ],
      dialogFormVisible: false,
      form: {
        time: new Date(),
        cost: 1,
        money: 100,
        purpose: 1,
        remarks: '123',
      },
      radio: 1,
      purposeData: [
        { label: '伙食', value: 1 },
        { label: '生活用品', value: 2 },
        { label: '宝宝', value: 3 },
        { label: '其他', value: 4 },
        // { label: '宝宝玩具', value: 5 },
      ],
      costData: [
        { id: 1, name: '收入' },
        { id: 2, name: '支出' },
      ],
      type: 'add',
      rules: {
        money: [{ required: true, message: '请输入金额', trigger: 'blur' }],
      },
      information: [],
      income: 0,
      pay: 0,
      Difference: 0,
      drawer: false,
      incomeDrawer: 0,
      payDrawer: 0,
      result: '',
      // a: '',
      // b: '',
    };
  },
  methods: {
    add() {
      this.dialogFormVisible = true;
      console.log(this.date, '===========打印的 ------ add');
    },
    edit(row) {
      this.dialogFormVisible = true;
      this.type = 'edit';
      this.form = row;
    },
    open() {
      this.drawer = true;
      this.openDrawer();
    },
    remove(index) {
      console.log(index, '===========打印的 ------ remove');
      this.tableData.splice(index, 1);
      localStorage.setItem('费用', JSON.stringify(this.tableData));
      this.change();
      this.sun();
    },
    formatterGrade(row) {
      const purpose = this.purposeData.find((v) => v.value === row.purpose);
      if (purpose) {
        return purpose.label;
      }
      return '';
    },
    submit(dialogForm) {
      this.$refs[dialogForm].validate((valid) => {
        if (this.type === 'add') {
          console.log(this.form.purpose, '===========打印的 ------ ');
          if (valid) {
            console.log('校验通过');
            this.tableData.push({
              uuid: nanoid(),
              month: this.form.time.getMonth() + 1,
              day: this.form.time.getDate(),
              cost: this.form.cost,
              money: this.form.money,
              purpose: this.form.purpose,
              remarks: this.form.remarks,
              monthTable: this.form.time.getMonth(),
            });
            console.log(this.tableData.monthTable, '2 ');
            localStorage.setItem('费用', JSON.stringify(this.tableData));
            this.dialogFormVisible = false;
            console.log(this.tableData.month, '===========打印的 ------ this.tableData.month');
            this.change();
          } else {
            console.log('校验失败');
          }
        } else {
          this.dialogFormVisible = false;
          localStorage.setItem('费用', JSON.stringify(this.tableData));
          this.change();
        }
      });
      this.openDrawer();
    },
    change() {
      // console.log(JSON.parse(localStorage.getItem()), '===========打印的 ------ change');
      this.information = JSON.parse(localStorage.getItem('费用'));
      console.log(this.information, '===========打印的 ------ 111最初消息');
      if (this.information) {
        // this.tableData = this.information;
        this.tableData = this.information.map((row) => {
          const purpose = this.purposeData.find((v) => v.value === row.purpose);
          return {
            ...row,
            //上面的tableData表格里面的purpose改成了purposeDesc
            purposeDesc: purpose?.label,
          };
        });
        console.log(this.tableData, '===========打印的 ------ 111tableData');
      }
    },
    sun() {
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].cost === 1) {
          this.income += +this.tableData[i].money;
        } else {
          this.pay += +this.tableData[i].money;
        }
      }
    },
    //1.循环里面数据，2.如果空对象monthMap里面，则加上月份和数据，否则加上数据（整条）
    //
    openDrawer() {
      const monthMap = {};
      this.tableData.forEach((item) => {
        const month = item.month + '月';
        if (!monthMap[month]) {
          //可以直接创建month属性，再新增
          monthMap[month] = [];
          monthMap[month].push(item);
        } else {
          monthMap[month].push(item);
        }
        console.log(monthMap, '===========打印的 ------ ');
      });
      //Object.keys(monthMap)这个是monthMap对象的keys（属性名）
      const monthSumArrayKeys = Object.keys(monthMap);
      console.log(monthSumArrayKeys, '===========打印的 ------ 222');
      const monthData = monthSumArrayKeys.map((key) => {
        const currentMonthDataArr = monthMap[key];
        console.log(currentMonthDataArr?.costData, '===========打印的 ------11112222 ');
        console.log(currentMonthDataArr, '===========打印的 ------1111 ');
        let a = 0;
        let b = 0;
        let food = 0;
        let snack = 0;
        let use = 0;
        let other = 0;
        const currentMonthMoneyTotal = currentMonthDataArr.reduce((pre, cur) => {
          console.log(cur.cost, '===========打印的 ------ 支出');
          if (cur.cost === 1) {
            a = pre + Number(cur.money);
            // console.log(a, '===========打印的 ------ hhh');
            return a;
          } else {
            b = pre + Number(cur.money);
            if (cur.purpose === 1) {
              food = pre + Number(cur.money);
            } else if (cur.purpose === 2) {
              snack = pre + Number(cur.money);
            } else if (cur.purpose === 3) {
              use = pre + Number(cur.money);
            } else {
              other = pre + Number(cur.money);
            }

            // console.log(b, '===========打印的 ------ gfgh');
            return b;
          }
          // return a;
        }, 0);
        // const 所有支出 = currentMonthDataArr
        return {
          monthDrawer: key,
          incomeDrawers: a,
          payDrawers: b,
          wantingDrawers: a - b,
          foods: food,
          snacks: snack,
          uses: use,
          others: other,
        };
      });
      this.drawerTable = monthData;
    },
  },
  mounted() {
    console.log('开始===========打印的 ------ mounted');
    this.change();
    this.sun();
    this.drawer = true;
    this.openDrawer();
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
.add {
  display: flex;
  justify-content: left;
}
.open {
  display: flex;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.ml-4 {
  margin-left: 40px;
}

.el-form-item {
  line-height: 20px;
  display: flex;
  align-items: center;
}
.moneys {
  display: flex;
  //flex-direction: column;
  //justify-content: space-between;
}
h3 {
  padding-left: 20px;
}
</style>
