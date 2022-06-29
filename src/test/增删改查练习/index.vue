<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="form">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="formInline.name" placeholder="姓名"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model="formInline.age" placeholder="年龄"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="getData">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="resetForm">重置</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="add">新增</el-button>
    </el-form-item>
  </el-form>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="age" label="年龄" width="180"> </el-table-column>
    <el-table-column prop="birth" label="生日" width="180"> </el-table-column>
    <el-table-column prop="avatar" label="照片" width="300">
      <!--          图片不会添加，后台没有建立传图片，想用网址转换，不会-->
      <template v-slot="{ row }">
        <img :src="row.avatar" alt="" class="imgUrl" />
      </template>
    </el-table-column>
    <!--          问题：为什么要用插槽来做，在这里用插槽来做，显示不出来，有时候显示编辑-,是否是el版本问题-->
    <!--          为什么要用default，他和export default有什么关联？-->
    <!--之前的提示： slot插槽，用#代替了并给了参数row，这里都用row来写        -->
    <el-table-column prop="action" label="操作">
      <!--slot插槽，用#代替了并给了参数row，这里都用row来写        -->
      <template #default="{ row }">
        <el-button type="text" @click="edit(row)">编辑</el-button>
        <el-popconfirm title="确定删除吗?" confirm-button-text="确定" cancel-button-text="取消" @confirm="remove(row)">
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
    <el-form ref="dialogForm" :model="form" class="form" style="width: 50%; border: 0">
      <el-form-item label="姓名">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-date-picker v-model="form.birth" placeholder="日期格式" />
      </el-form-item>
      <el-form-item label="上传照片" prop="imgUrl">
        <!--        <el-upload-->
        <!--          class="avatar-uploader"-->
        <!--          action="http://localhost:5001/common/upload"-->
        <!--          :show-file-list="false"-->
        <!--          :headers="headers"-->
        <!--          :on-success="handleAvatarSuccess"-->
        <!--          :before-upload="beforeAvatarUpload"-->
        <!--        >-->
        <!--          <img v-if="form.imgUrl" :src="form.imgUrl" class="avatar" />-->
        <!--          <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
        <!--        </el-upload>-->
      </el-form-item>
      <template #footer>
        <!--        当他为f的时候看不见，当他为T的时候出现-->
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </template>
    </el-form>
  </el-dialog>
</template>

<script>
import Child from './components/child.vue';
import axios from 'axios';
export default {
  components: {
    Child,
  },
  data() {
    return {
      formInline: {
        name: '',
        age: '',
      },
      tableData: '',
      currentPage: 1,
      total: 0,
      dialogFormVisible: false,
      form: {
        name: '',
        age: '',
        birth: '',
      },
      headers: {},
    };
  },
  methods: {
    //搜索
    getData() {
      //post 出过去，url：传过去的地址，data传过去的内容（name和age属于自己取的名字）
      axios
        .post('http://localhost:5000/users/page', {
          name: this.formInline.username,
          age: this.formInline.age,
        })
        .then((res) => {
          console.log(res, '===========打印的 ------ res');
          console.log(res.data.data, '===========打印的 ------ 2');
          let data = res.data.data;
          this.tableData = data.rows;
        });
    },
    //重置
    resetForm() {
      //存在：1.form栏设置ref 2.要重置的地方设置prop=’‘3.方法里面哪个地方要重置
      this.$refs.form.resetFields();
    },
    //新增
    add() {
      this.dialogFormVisible = true;
    },
    //删除
    remove(row) {
      //删除，只需要把要删除的id传给后台，由后台删除，再进行搜索刷新
      console.log(row, '===========打印的 ------ row');
      axios
        .post('http://localhost:5000/users/delete', {
          id: row.id,
        })
        .then((res) => {
          this.getData();
        });
    },
    submit() {
      this.dialogFormVisible = true;
      axios.post('http://localhost:5000/users/' + this.type, {});
    },
    // 新增图片
    // handleAvatarSuccess(res, file) {
    //   this.form.imgUrl = res.path;
    // },
    // beforeAvatarUpload(file) {},
  },

  mounted() {
    //点开页面就进行一次刷新
    this.getData();
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
.demo-form-inline {
  max-width: none;
  border: 0;
  display: flex;
  //justify-self: center;
  align-items: baseline;
}
img {
  width: 50px;
}
el-input {
  width: 50px;
  border: black;
}
table {
  border: 0 solid #212020;
}
</style>
