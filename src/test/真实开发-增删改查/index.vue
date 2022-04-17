<template>
  <div class="">
    <!--    搜索栏-->
    <div class="header">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="form">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formInline.name" placeholder="单行输入" />
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="formInline.age"></el-input>
        </el-form-item>
        <el-form-item>
          <!--          搜索：先把要搜索的数据传给后台，后台反馈回来，把后台数据赋值给表格数据-->
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <!--      ref=form设置在表单开头el-form，方法内：this.$refs.form.resetFields(),要重置的加prop-->
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
        <el-form-item>
          <!--          这里的新增，只是传了些数据-->
          <el-button @click="add">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--    loading-->
    <el-table v-loading="loading" :data="tableData" style="width: 100%">
      <!--      表格-->
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="gender" label="性别" width="180">
        <template #default="{ row }"> {{ gender(row) }} </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="180" />
      <el-table-column prop="birth" label="出生日期" width="180" />
      <el-table-column prop="action" label="操作">
        <!--slot插槽，用#代替了并给了参数row，这里都用row来写        -->
        <template #default="{ row }">
          <el-button type="text" @click="edit(row)">编辑</el-button>
          <el-button size="small" type="danger" @click="remove(row)">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="信息编辑" v-model="dialogFormVisible">
      <el-form :model="form" class="form">
        <el-form-item label="姓名">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker v-model="form.birth" placeholder="日期格式" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remarks" autocomplete="off" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <!--        当他为f的时候看不见，当他为T的时候出现-->
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'; // 教学视频: https://www.bilibili.com/video/BV15741177Eh?p=143

export default {
  name: '增删改查',
  components: {},
  data() {
    return {
      tableData: [],
      // id: '',
      // sex: '',
      // name: '',
      // age: '',
      // born: '',
      formInline: {
        // user: '',
        // region: '',
        age: '',
        name: '',
        id: '',
        sex: '',
        born: '',
      },
      dialogFormVisible: false,
      form: {
        name: '',
        // region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        birth: '',
        time: '',
        remarks: '',
      },
      formLabelWidth: '120px',
      loading: false,
      active: null,
    };
  },
  methods: {
    edit(row) {
      console.log(row, '===========打印的 ------ edit');
      this.dialogFormVisible = true;
      this.form.id = row.id;
      this.form.name = row.name;
      this.form.age = row.age;
      this.form.birth = row.birth;
    },
    gender(row) {
      console.log(row.gender, '===========打印的 ------ gender');
      if (row.gender === 0) {
        return '女';
      }
      return '男';
    },
    onSubmit() {
      console.log('submit!');
      this.getData();
    },
    test() {
      console.log('执行test方法');
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
    remove(item) {
      // console.log(item, '===========打印的 ------ remove');
      axios
        .post('http://localhost:5000/users/delete', {
          //把item.id传过去，并赋值为id
          id: item.id,
        })
        .then((res) => {
          this.getData();
        });
      // this.formInline.splice(this.id, 1);
    },
    getData() {
      this.loading = true;
      axios
        .post('http://localhost:5000/users/list', {
          name: this.formInline.name,
          age: this.formInline.age,
        })
        .then((res) => {
          console.log('===========打印的res对象 ------ ', res);
          console.log('===========打印的res.data对象 ------ ', res.data.data[0]);
          // todo 如何才能从res里面取到正确的属性，把需要的数组数据显示在表格上
          const res1 = res.data.data;
          //tableData是数组，要求res1也是数组
          this.tableData = res1;
          this.loading = false;

          console.log(res1, '===========打印的 ------ 112');
          console.log(this.tableData.name, '===========打印的 ------ 3');
        });
    },
    add() {
      axios.post('http://localhost:5000/users/add', { name: 'xjz', age: '12' }).then((res) => {
        this.getData();
      });
      // .then(function (res) {
      //   this.getData();
      // });
    },
    submit() {
      //最初
      this.dialogFormVisible = false;
      console.log(this.form.id, '===========打印的 ------ 1');

      axios
        .post('http://localhost:5000/users/edit', {
          //发送的
          id: this.form.id,
          name: this.form.name,
          age: this.form.age,
          birth: this.form.birth,
        })
        //发送成功，然后做什么，没有成功，不会做下面的方法
        .then((res) => {
          this.getData();
          this.dialogFormVisible = false;
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.el-input {
  width: auto;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
