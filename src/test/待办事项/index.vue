<template>
  <!--  <link href="https://cdn.bootcdn.net/ajax/libs/mvp.css/1.8.0/mvp.min.css" rel="stylesheet" />-->
  <h1>待办事项</h1>
  <div class="box">
    <form>
      <div class="">
        请输入待办事项：
        <el-input v-model="form.todo" placeholder="请输入待办事项" style="width: 500px" @keyup.enter="submit()">
        </el-input>
        <button @click="submit">提交</button>
      </div>
    </form>
    <!--    <el-button @click="change()">刷新</el-button>-->
    <el-table
      :data="tableData"
      :class="styles()"
      @click="click()"
      style="width: 500px"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
    >
      <el-table-column prop="date" width="180">
        <!--      前面的选择框-->
        <el-table-column type="selection" width="55"> </el-table-column>
      </el-table-column>
      <el-table-column prop="todo" label="待办事项" />
      <el-table-column prop="action" label="操作">
        <!--slot插槽，用#代替了并给了参数row，这里都用row来写        -->
        <template #default="{ row, $index, item }">
          <el-button type="text" @click="completeButton(item, $index, row)">完成</el-button>
          <el-button type="text" @click="open(item, $index, row)">修改</el-button>
          <!--          <el-button type="text" @click="edit(row, $index)">修改</el-button>-->
          <el-popconfirm
            title="确定删除吗?"
            confirm-button-text="确定"
            cancel-button-text="取消"
            @confirm="remove($index, item)"
          >
            <template #reference>
              <el-button size="small" type="danger">移除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">取消选择</el-button>

      <el-popconfirm title="确定删除吗?" confirm-button-text="确定" cancel-button-text="取消" @confirm="removes()">
        <template #reference>
          <el-button size="small" type="danger">移除</el-button>
        </template>
      </el-popconfirm>
      <el-button @click="tableDataAll()">全部</el-button>
      <el-button @click="complete()">已经完成</el-button>
      <el-button @click="uncomplete()">未完成</el-button>
    </div>

    <!--    <el-dialog title="信息编辑" :visible.sync="dialogFormVisible">-->
    <!--      <el-form ref="dialogForm" :model="form" label-width="80px" class="form" :rules="rules"> </el-form>-->
    <!--      <template #footer>-->
    <!--        &lt;!&ndash;        当他为f的时候看不见，当他为T的时候出现&ndash;&gt;-->
    <!--        <el-button @click="dialogFormVisible = false">取 消</el-button>-->
    <!--        <el-button type="primary" @click="submit('dialogForm')">确 定</el-button>-->
    <!--      </template>-->
    <!--    </el-dialog>-->
  </div>
</template>

<script>
//要再加一个选中，外框的删除，里面也弄一个删除
import Child from './components/child.vue';
import { nanoid } from 'nanoid';
import { ElMessage } from 'element-plus';
export default {
  components: {
    Child,
  },
  data() {
    return {
      form: {
        todo: '',
      },
      tableData: [],
      nowEnter: '',
      dialogFormVisible: false,
      multipleSelection: [],
      clickStyles: '',
    };
  },
  methods: {
    //提交，并保存，然后显示再列表中
    submit() {
      if (this.form) {
        this.tableData.push({ uuid: nanoid(), todo: this.form.todo });
        console.log(this.tableData, '===========打印的 ------ submit.this.tableData');
        localStorage.setItem('待办事项', JSON.stringify(this.tableData));
        ElMessage.success('保存成功');
        // this.form = ' ';不能用这个刷新
        this.change();
      } else {
        ElMessage.error('保存失败');
      }
    },
    //显示在列表中
    change() {
      this.nowEnter = JSON.parse(localStorage.getItem('待办事项'));
      console.log(this.nowEnter, '===========打印的 ------ 提取并赋值');
      if (this.nowEnter) {
        this.tableData = this.nowEnter;
      }
    },
    remove(item, index, row) {
      console.log(item, '===========打印的 ------ item');
      // console.log(row, '===========打印的 ------ row');
      // console.log(index, '===========打印的 ------ index');
      console.log(this.tableData, '===========打印的 ------ this.tableData');
      this.tableData.splice(item, 1);
      localStorage.setItem('待办事项', JSON.stringify(this.tableData));
      this.change();
    },
    //多选框，可以多去看看，不怎么会。table--html那里要建立一个ref
    toggleSelection(rows) {
      if (rows) {
        //arr.forEach 方法允许为数组的每个元素都运行一个函数。
        console.log(rows, '===========打印的 ------ rows');
        rows.forEach((row) => {
          //toggleRowSelection切换行选择
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        console.log(rows, '===========打印的 ------ rows');
        //clearSelection清空选项
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val, '===========打印的 ------ handleSelectionChange');
    },
    //多位删除
    removes() {
      console.log(this.multipleSelection, '===========打印的 ------ this.multipleSelection');
      console.log(this.tableData, '===========打印的 ------ tableData');
      this.multipleSelection.forEach((row) => {
        const index = this.tableData.findIndex((s) => s.uuid === row.uuid);
        if (index > -1) {
          console.log(index, '===========打印的 ------index ');
          this.tableData.splice(index, 1);
          localStorage.setItem('待办事项', JSON.stringify(this.tableData));
        }
      });
    },
    open(item, index, row) {
      this.$prompt('请输入待办事项', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '待办事项: ' + value,
          });
          this.tableData[index].todo = value;
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入',
          });
        });
    },
    completeButton(item, index, row) {
      console.log(index, '===========打印的 ------ completeButton');
      console.log(index, '===========打印的 ------ completeButton');
      console.log(index, '===========打印的 ------ completeButton');

      // // this.multipleSelection.forEach((row) => {
      // // const index = this.tableData.findIndex((s) => s.uuid === row.uuid);
      // if (index > -1) {
      //   color = 'warning-row';
      // }
      // // });
      // return color;
    },
    //全部
    tableDataAll() {},
    //完成
    complete() {},
    //未完成
    uncomplete() {},
    click(index) {
      this.clickStyles = index;
      console.log(index, '===========打印的 ------ click.index');
    },
    styles(index) {
      if (this.clickStyles === index) {
        return 'completeStyles';
      }
    },
  },

  mounted() {
    this.change();
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.el-table >>> .warning-row {
  background-color: #f5f7fa;
}
.completeStyles {
  color: red;
}
</style>
