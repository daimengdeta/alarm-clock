<template>
  <!--  搜索没有做好-->
  <div class="">
    <div class="" id="heard">
      <!--      :inline='true'  看一下需要不要这个的区别-->
      <el-form :inline="true" :model="formInline" ref="form">
        <!-- el-col :span='8'---这个是一行排列多少个的，3个的是？8是4个的？？？测试一下       -->
        <!--        <el-col :span="8">-->
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formInline.name" placeholder="请输入姓名" @input-changed="searchInputChange"> </el-input>
        </el-form-item>
        <!--        </el-col>-->
        <el-form-item label="年级" prop="grade">
          <el-select v-model="formInline.grade">
            <el-option v-for="item in grades" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级" prop="className">
          <el-select v-model="formInline.className">
            <el-option v-for="item in classNames" :value="item.value" :label="item.label" :key="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item><el-button @click="resetForm">重置</el-button></el-form-item>
        <el-form-item><el-button @click="getData">搜索</el-button></el-form-item>
        <el-form-item><el-button @click="add">新增</el-button></el-form-item>
      </el-form>
    </div>
    <el-table :data="tableData" ref="multipleTable" style="width: 100%">
      <el-table-column type="expand">
        <template #default="props">
          <div m="4">
            <p m="t-0 b-2">年级: {{ props.row.grade }}</p>
            <p m="t-0 b-2">班级: {{ props.row.className }}</p>
            <p m="t-0 b-2">姓名: {{ props.row.name }}</p>
            <p m="t-0 b-2">年龄: {{ props.row.age }}</p>
            <p m="t-0 b-2">成绩: {{ props.row.achievement }}</p>
            <p m="t-0 b-2">在校情况: {{ props.row.stateDesc }}</p>
          </div>
        </template>
      </el-table-column>
      <!--      前面的小框框-->
      <!--      <el-table-column type="selection" width="55"> </el-table-column>-->
      <!--  align="center" 居中    -->
      <el-table-column prop="grade" label="年级" align="center" :formatter="formatterGrade" />
      <!--      <el-table-column prop="gradeDesc" label="年级" align="center" />-->
      <el-table-column prop="className" label="班级" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="achievement" label="成绩" />
      <el-table-column prop="stateDesc" label="在学状况" />
      <el-table-column prop="className" label="操作">
        <template #default="{ row, $index }">
          <el-button type="text" @click="edit(row)"> 编辑 </el-button>
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
      <el-table-column prop="remarks" label="备注" />
    </el-table>
    <el-dialog title="学生信息编辑" width="500px" v-model="dialogFormVisible">
      <el-form ref="dialogForm" label-width="120px" :model="form" class="form" :rules="rulesForm">
        <el-form-item label="年级" prop="grade">
          <el-select v-model="form.grade">
            <el-option v-for="item in grades" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级" prop="className">
          <el-select v-model="form.className">
            <el-option v-for="item in classNames" :value="item.value" :label="item.label" :key="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input-number v-model="form.age" :controls="false"></el-input-number>
        </el-form-item>
        <el-form-item label="成绩" prop="achievement">
          <el-input v-model="form.achievement"></el-input>
        </el-form-item>
        <!--        数字转换  -->
        <el-form-item label="在学状况" prop="state">
          <el-select v-model="form.state">
            <el-option v-for="item in states" :key="item.value" :value="item.value" :label="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
          <el-input v-model="form.remarks"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button @click="submit('dialogForm')">提交</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Child from './components/child.vue';
import { nanoid } from 'nanoid';

// import axios from 'axios';
export default {
  components: {
    Child,
  },
  data() {
    return {
      formInline: {
        name: '',
        className: '',
        grade: '',
      },
      grades: [
        { label: '高一', value: 1 },
        { label: '高二', value: 2 },
        { label: '高三', value: 3 },
      ],
      states: [
        { label: '在校', value: 1 },
        { label: '请假', value: 2 },
        { label: '休学', value: 3 },
        { label: '退学', value: 4 },
      ],
      classNames: [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
        { label: 4, value: 4 },
      ],
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: 'xxx',
        age: '18',
        className: '1',
        achievement: '1222',
        state: '在校',
        remarks: '备注',
        grade: '',
      },
      rulesForm: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 2, max: 5, message: '请输入2-5个字', trigger: 'blur' },
        ],
        grade: [{ required: true, message: '请输入年级', trigger: 'blur' }],
        className: [{ required: true, message: '请输入班级', trigger: 'blur' }],
      },
      information: '',
      type: 'add',
    };
  },
  methods: {
    formatterGrade(row) {
      const grade = this.grades.find((v) => v.value === row.grade);
      if (grade) {
        return grade.label;
      }
      return '';
    },
    //重置
    resetForm() {
      // this.formInline = {};
      this.$refs.form.resetFields();
    },
    //搜索
    getData(format) {
      if (!this.formInline.className && !this.formInline.name && !this.formInline.grade) {
        this.$message.error('搜索失败');
        // console.log(123, '===========打印的 ------ getData');
      } else {
        this.$message.success('搜索成功');
        // console.log(456, '===========打印的 ------ getData');
        // this.$message.closeAll('请填写');
      }
    },
    //新增
    add() {
      this.dialogFormVisible = true;
    },
    //新增--提交
    submit(dialogForm) {
      console.log(this.form.uuid, '===========打印的 ------ this.form.uuid');
      this.$refs[dialogForm].validate((valid) => {
        if (this.type === 'add') {
          if (valid) {
            // 验证通过
            // alert('submit!');
            console.log('成功===========打印的 ------ ');
            this.tableData.push({
              uuid: nanoid(),
              grade: this.form.grade,
              className: this.form.className,
              name: this.form.name,
              achievement: this.form.achievement,
              state: this.form.state,
              age: this.form.age,
              remarks: this.form.remarks,
            });
            console.log(this.tableData, '===========打印的 ------ 新增table');
            localStorage.setItem('个人信息', JSON.stringify(this.tableData));
            this.dialogFormVisible = false;
            this.change();
          } else {
            // 验证不通过
            console.log('error submit!!');
            return false;
          }
        } else {
          console.log(this.tableData, '===========打印的 ------ ');
          this.dialogFormVisible = false;
          localStorage.setItem('个人信息', JSON.stringify(this.tableData));

          this.$message.success('提交成功');
          this.change();

          // this.tableData = this.form;
        }
      });
    },
    change() {
      this.information = JSON.parse(localStorage.getItem('个人信息'));
      console.log(this.information, '===========打印的 ------ change');
      if (this.information) {
        this.tableData = this.information.map((row) => {
          const state = this.states.find((v) => v.value === row.state);
          const grade = this.grades.find((v) => v.value === row.grade);
          return {
            ...row,
            gradeDesc: grade?.label,
            stateDesc: state?.label,
            // sadsada: 1231,
          };
        });
        console.log(this.tableData, '===========打印的 ------ this.tableData');
        // this.numberIf();
      }
    },
    //编辑----没有完成
    edit(row) {
      this.dialogFormVisible = true;
      this.form = row;
      this.type = 'edit';
    },
    remove(index) {
      console.log(index, '===========打印的 ------ remove');
      this.tableData.splice(index, 1);
      localStorage.setItem('个人信息', JSON.stringify(this.tableData));
      this.change();
    },
    //修改
    modify() {},
    numberIf() {
      if (this.tableData.state === 1) {
        this.tableData.state = '在校';
      } else if (this.tableData.state === 2) {
        this.tableData.state = '请假';
      } else if (this.tableData.state === 3) {
        this.tableData.state = '休学';
      } else if (this.tableData.state === 4) {
        this.tableData.state = '退学';
      }
    },
  },
  mounted() {
    this.change();
    console.log(this.form.className, '===========打印的 ------ mounted');
  },
};
</script>

<style lang="less">
a {
  color: #42b983;
}
el-input {
  width: auto;
}

.form {
  .el-input,
  .el-input-number {
    width: 200px;
  }
  .el-input-number .el-input__inner {
    text-align: left;
  }
}
</style>
