<template>
  <div class="app">
    <el-form v-model="formInline">
      <el-form-item label="名字"> <el-input v-model="formInline.name"> </el-input></el-form-item>
      <el-form-item label="id"> <el-input v-model="formInline.id" @keyup.enter="submit"></el-input> </el-form-item>
      <el-form-item label="请输入数字"><el-input-number v-model="formInline.number"> </el-input-number></el-form-item>
      <el-button @click="getData">搜索</el-button>
      <el-button @click="add">新增</el-button>
      <el-button @click="sum">相加</el-button>

      <div class="">{{ tableData }}</div>
    </el-form>
  </div>
  <div class="">
    <el-table :data="tableData">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="名字"></el-table-column>
      <el-table-column prop="action" label="操作">
        <template #default="row, item">
          <el-button type="primary" icon="el-icon-edit" circle @click="edit(item)"></el-button>
          <el-popconfirm
            title="确认删除吗？"
            confirm-button-text="确定"
            cancel-button-text="取消"
            @confirm="remove($index, item)"
          >
            <template>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="个人" v-model="visible" class="dialogForm">
      <el-form v-model="form">
        <el-form-item label="ID" prop="id">
          <el-input v-model="form.id" style="width: 200px"> </el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" style="width: 200px"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Child from './components/child.vue';
import { nanoid } from 'nanoid';
import { ElMessage } from 'element-plus';

export default {
  components: {
    Child,
  },
  data() {
    return {
      formInline: {
        name: '',
        id: '',
        number: '',
      },
      tableData: [],
      visible: false,
      form: {
        name: '',
        id: '',
      },
      arr: [],
    };
  },
  methods: {
    //提交
    submit() {
      if (this.form) {
        this.tableData.push({ uuid: nanoid(), name: this.form.name, id: this.form.id });
        localStorage.setItem('姓名', JSON.stringify(this.tableData));
        ElMessage.success('提交成功');
        this.visible = false;
      }
    },
    //删除
    remove() {},
    //新增
    add() {
      this.visible = true;
    },
    //编辑
    edit(item) {
      console.log(item, '===========打印的 ------ edit');
      this.visible = true;
      let editData = localStorage.getItem('姓名');
      if (item.uuid === editData.uuid) {
        this.form = editData;
      }
    },
    //搜索
    getData() {},
    //发现：刚进去时，数据还是有的，但是一按保存就没有了，所以一进去，要先把保存好的数据赋值给表格
    change() {},
    sum() {
      if (this.formInline.number === '' || this.formInline.number === null) {
        ElMessage.error('请输入数字');
      } else {
        this.arr.push(this.formInline.number);
        ElMessage.success('haha');
      }
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
.app {
  display: flex;
  justify-content: center;
}
.dialogForm {
  display: flex;
  justify-content: center;
}
</style>
