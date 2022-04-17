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
          <el-button type="primary" @click="getData">搜索</el-button>
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
          <el-popconfirm
            title="确定删除吗?"
            confirm-button-text="确定"
            cancel-button-text="取消"
            @confirm="remove(row)"
          >
            <template #reference>
              <el-button size="small" type="danger">移除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="currentPage"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total"
      @current-change="getData"
    />
    <el-dialog title="信息编辑" v-model="dialogFormVisible">
      <el-form ref="dialogForm" :model="form" class="form">
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
import { ElMessage } from 'element-plus';
export default {
  name: '增删改查',
  components: {},
  data() {
    return {
      tableData: [],
      formInline: {
        age: '',
        name: '',
      },
      dialogFormVisible: false,
      form: {
        name: '',
        birth: '',
        age: '',
        remarks: '',
      },
      currentPage: 1,
      total: 0,

      loading: false,
      active: null,
      type: 'add', // edit
    };
  },
  methods: {
    edit(row) {
      this.type = 'edit';
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
    },
    getData() {
      this.loading = true;
      axios
        .post('http://localhost:5000/users/page', {
          name: this.formInline.name,
          age: this.formInline.age,
          pageNum: this.currentPage,
          pageSize: 10,
        })
        .then((res) => {
          console.log('===========打印的res对象 ------ ', res);
          // todo 如何才能从res里面取到正确的属性，把需要的数组数据显示在表格上
          //tableData是数组，要求res1也是数组
          const data = res.data.data;
          this.tableData = data.rows;
          this.total = data.total;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    add() {
      this.type = 'add';
      this.form = {};
      this.dialogFormVisible = true;
    },
    submit() {
      //最初
      this.dialogFormVisible = false;
      axios
        .post('http://localhost:5000/users/' + this.type, {
          //发送的
          id: this.form.id,
          name: this.form.name,
          age: this.form.age,
          birth: this.form.birth,
        })
        //发送成功，然后做什么，没有成功，不会做下面的方法
        .then((res) => {
          console.log(res, '===========打印的 ------ ');
          const success = res.data.success;
          if (success) {
            ElMessage({
              message: '提交成功',
              type: 'success',
            });
            this.getData();
            this.dialogFormVisible = false;
          } else {
            ElMessage({
              message: res.data.msg,
              type: 'error',
            });
          }
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
