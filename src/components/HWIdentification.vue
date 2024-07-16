<template>
  <el-dialog
    title="硬件识别器"
    :visible.sync="HWIdentification"
    :before-close="handleClose"
    width="820px"
    class="IdentifyDialog"
    :lock-scroll="false"
    :close-on-click-modal="false"
    v-loading="load"
  >
    <div class="we">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :on-progress="successFile"
        :auto-upload="false"
        v-show="sder"
      >
        <el-button slot="trigger" size="small" type="primary"
          >选取文件</el-button
        >
        <el-button
          style="margin-left: 10px"
          size="small"
          type="success"
          @click="submitUpload"
          >上传到服务器</el-button
        >
        <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，且不超过1.2mb
        </div>
      </el-upload>
      <div class="result" v-show="asdf">
        <div class="title">结果：</div>

        <div class="keo">{{ photoTitle }}</div>

        <div class="title">识别正确概率:</div>

        <div class="keo">{{ rate }}</div>
      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose()">取消识别</el-button>
        <el-button type="primary" @click="HWI(false)"> 确 定 </el-button>
      </span> -->
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      inputVisible: false,
      inputValue: "",
      formLabelWidth: "120px",
      dialogImageUrl: "",
      disabled: false,
      isSame: false,
      isMax: false,
      sder: true,
      asdf: false,
      load: false,
    };
  },

  methods: {
    HWI(value) {
      this.$store.commit("HWIDENTIFICATION", value);
    },

    handleClose() {
      this.$confirm("确认关闭？", {
        lockScroll: false,
        closeOnClickModal: false,
      })
        .then((_) => {
          this.$store.commit("HWIDENTIFICATION", false);
          this.dialogImageUrl = "";
          window.location.reload();
        })
        .catch((_) => {});
    },

    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      //   console.log(file, fileList);
      // this.fileList = [""]
    },
    handlePreview(file) {
      console.log(file);
    },
    successFile(responce, file, fileList) {
      //   console.log(responce, file, fileList);
      // this.fileList = [""]
      this.load = true;
      if (this.sder) {
        this.$store.commit("ADDCOUNT");
        this.sder = false;
      }

      setTimeout(() => {
        this.load = false;
        this.asdf = true;
      }, 1300);
    },
  },

  computed: {
    HWIdentification() {
      return this.$store.state.HWIdentification;
    },
    count() {
      return this.$store.state.count;
    },

    photoTitle() {
      return this.$store.state.photoUrlArr[this.count];
    },
    rate() {
      return this.$store.state.rateArr[this.count];
    },
  },
};
</script>

<style lang="scss" scoped>
.IdentifyDialog {
  .we {
    width: calc(var(--widthRate) * 1000);
    height: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    .result {
      width: calc(var(--widthRate) * 540);
      height: 300px;

      .title {
        width: calc(var(--widthRate) * 540);
        height: calc(var(--heightRate) * 80);
        font-size: calc(var(--heightRate) * 55);
        letter-spacing: calc(var(--widthRate) * 13);
        margin-bottom: calc(var(--heightRate) * 20);

        color: #4f4f4f;
      }

      .keo {
        width: 100%;
        height: calc(var(--heightRate) * 102);
        font-size: calc(var(--heightRate) * 50);
        letter-spacing: calc(var(--widthRate) * 13);
        color: #00bdc8;
      }
    }
  }
  :deep() .el-dialog {
    margin-top: 15vh;
    width: 820px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .dialog-footer {
    width: 227px;
    height: 43px;
    position: absolute;
    top: 87%;
    left: 68%;
  }
}
</style>