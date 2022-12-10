<template>
  <div class="markdown-container">
    <div class="container">
      <mavon-editor
        v-model="content"
        ref="md"
        @imgAdd="$imgAdd"
        @change="change"
        style="min-height: 600px"
      />
      <el-button class="editor-btn" type="primary" @click="submit"
        >提交</el-button
      >
    </div>
  </div>
</template>
<script>
//该组件中注释掉的代码为局部注册的方式。
// import { mavonEditor } from "mavon-editor";
// import "mavon-editor/dist/css/index.css";
import axios from "axios";

import { imgUpload } from "../api";

export default {
  data: function () {
    return {
      content: "",
      html: "",
      configs: {},
    };
  },
  // components: {
  //   mavonEditor
  // },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    async $imgAdd(pos, $file) {
      var formdata = new FormData();
      console.log("1: ", formdata);
      let $uid = "69725009da0618599d1292a14cc61198";
      let $token = "e0356b167e3a0088501158ecad2acd1c";
      formdata.append("file", $file);
      console.log(`$file`, $file);
      formdata.append("uid", $uid);
      console.log(`$uid`, $uid);
      formdata.append("token", $token);
      console.log(`$token`, $token);

      //将下面上传接口替换为你自己的服务器接口
      console.log(
        formdata.get("file"),
        formdata.get("uid"),
        formdata.get("token")
      );

      await imgUpload(formdata)
        .then((res) => {
          console.log(res);
          // this.$refs.md.$img2Url(pos, url);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    change(value, render) {
      // render 为 markdown 解析后的结果
      this.html = render;
    },
    submit() {
      console.log(this.content);
      console.log(this.html);
      this.$message.success("提交成功！");
    },
  },
};
</script>
<style lang="scss" scoped>
.markdown-container {
  .editor-btn {
    margin-top: 20px;
  }
}
</style>
