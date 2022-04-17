<template>
  <div class="header">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="form">
      <el-form-item label="MO单号" prop="order">
        <el-input v-model="formInline.order" placeholder="单行输入" />
      </el-form-item>
      <el-form-item label="产品名称" prop="name">
        <el-input v-model="formInline.name" placeholder="单行输入" />
      </el-form-item>
      <el-form-item label="执行人" prop="region">
        <el-select v-model="formInline.region">
          <el-option label="执行人A" value="执行人A" />
          <el-option label="执行人B" value="执行人B" />
          <el-option label="执行人C" value="执行人C" />
        </el-select>
      </el-form-item>
      <el-form-item label="发布时间" prop="releaseTime">
        <el-date-picker v-model="formInline.releaseTime" type="date" placeholder="日期格式" />
      </el-form-item>
      <el-form-item label="工作状态" prop="status">
        <el-select v-model="formInline.status">
          <el-option label="工作中" value="工作中" />
          <el-option label="休息中" value="休息中" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm()">重置</el-button>
        <!--        重置没有做好-->
        <!--        <el-button type="primary" icon="el-icon-delete"></el-button>-->
        <!--        <el-button native-type="reset">重置</el-button>-->
        <!--        <el-button type="reset" @click="reset" native-type="reset">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
  <div class="finish">
    <el-button type="primary">批量交付</el-button>
    <el-button type="primary">批量转出</el-button>
    <el-button type="primary">批量完成</el-button>
    <el-button type="primary">批量转出</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" width="180">
      <!--      前面的选择框-->
      <el-table-column type="selection" width="55"> </el-table-column>
    </el-table-column>
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script>
const getDataByApi = (data) => {
  console.log(data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
      ]);
    }, 1000);
  });
};
export default {
  data() {
    return {
      tableData: [],
      formInline: {
        order: '',
        name: '',
        releaseTime: '',
        status: '工作中',
        region: '执行人A',
      },
      Delete: true,
      checked1: '',
    };
  },
  methods: {
    onSubmit() {
      this.getData();
      console.log('submit!');
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
    // reset() {
    //   console.log('reset');
    //   this.formInline.order = '';
    //   this.formInline.name = '';
    // },

    // 通过api接口获取列表数据
    getData() {
      getDataByApi(this.formInline).then((res) => {
        console.log(res);
        this.tableData = res;
      });
    },
  },
};
</script>

<style lang="less">
#app > div {
  text-align: left;
}
。header {
  margin-top: 10px;
}
.finish {
  margin-top: 20px;
}
.el-table__header-wrapper {
  margin-top: 15px;
}
</style>
