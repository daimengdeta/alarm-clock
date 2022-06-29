<template>
  <link href="https://cdn.bootcdn.net/ajax/libs/mvp.css/1.8.0/mvp.min.css" rel="stylesheet" />
  <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="http://localhost:5000/users/page"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
  >
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">jpg/png files with a size less than 500KB.</div>
    </template>
  </el-upload>
</template>

<script>
import Child from './components/child.vue';
import { ElMessage, ElMessageBox } from 'element-plus';
export default {
  components: {
    Child,
  },
  data() {
    return {
      UploadUserFile: [
        {
          name: 'element-plus-logo.svg',
          url: 'https://element-plus.org/images/element-plus-logo.svg',
        },
        {
          name: 'element-plus-logo2.svg',
          url: 'https://element-plus.org/images/element-plus-logo.svg',
        },
      ],
    };
  },
  methods: {
    handleRemove(file, uploadFiles) {
      console.log(file, uploadFiles);
    },
    handlePreview(uploadFile) {
      console.log(uploadFile);
    },
    handleExceed(files, uploadFiles) {
      ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${
          files.length + uploadFiles.length
        } totally`,
      );
    },
    beforeRemove(uploadFile, uploadFiles) {
      return ElMessageBox.confirm(`Cancel the transfert of ${uploadFile.name} ?`).then(
        () => true,
        () => false,
      );
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
