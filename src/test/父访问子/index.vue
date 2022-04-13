<template>
  <el-button>123</el-button>
  <div class="header">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="MO单号">
        <el-input v-model="formInline.user" placeholder="单行输入" />
      </el-form-item>
      <el-form-item label="产品名称">
        <el-input v-model="formInline.user" placeholder="单行输入" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="formInline.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
    </el-form>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script>
import Child from './components/child.vue';
export default {
  components: {
    Child,
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      formInline: {
        user: '',
        region: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
.header {
  display: flex;
}
* {
  font-size: 10px;
}
el-input {
  width: 50%;
  height: 20px;
}
</style>
