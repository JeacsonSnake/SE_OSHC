<template>
  <el-dialog
    title="硬件识别器"
    :visible.sync="HWIdentification"
    :before-close="handleClose"
    width="820px"
    class="IdentifyDialog"
    :lock-scroll="false"
    :close-on-click-modal="false"
  >
    <el-form :model="form">
      <el-row>
        <el-col :span="11">
          <el-form-item label="上传图片" :label-width="formLabelWidth">
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="imgDialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose()">取消识别</el-button>
      <el-button type="primary" @click="HWIdentification(false)"> 确 定 </el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        imgUrl: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        tags: [],
        resource: "",
        desc: "",
      },
      inputVisible: false,
      inputValue: "",
      formLabelWidth: "120px",
      dialogImageUrl: "",
      imgDialogVisible: false,
      disabled: false,
      isSame: false,
      isMax:false
    };
  },

  methods: {
    HWIdentification(value) {
      this.$store.commit("HWIDENTIFICATION", value);
    },

    handleClose() {
      this.$confirm("确认关闭？", {
        lockScroll: false,
        closeOnClickModal: false,
      })
        .then((_) => {
          this.$store.commit("HWIDENTIFICATION", false);
        })
        .catch((_) => {});
    },

    handleTagClose(tag) {
      this.form.tags.splice(this.form.tags.indexOf(tag), 1);
    },

    showTagInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleRemove(file) {
      console.log(file);
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    handleDownload(file) {
      console.log(file);
    },
  },

  computed: {
    HWIdentification() {
      return this.$store.state.HWIdentification;
    },
  },
};
</script>

<style lang="scss" scoped>
.IdentifyDialog {
  :deep() .el-dialog {
    margin-top: 15vh;
    width: 820px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
}
</style>