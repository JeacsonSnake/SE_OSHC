<template>
  <div class="markdown-container">
    <el-input
      type="text"
      placeholder="请输入标题"
      v-model="postTitle"
      maxlength="40"
      show-word-limit
      class="title"
    >
    </el-input>
    <div class="container">
      <mavon-editor
        v-model="contentMark"
        ref="md"
        @imgAdd="$imgAdd"
        @change="change"
        style="min-height: 600px"
        :toolbars="this.toolbar"
      />
      <div class="textTitle">简介</div>
      <el-input
        type="textarea"
        placeholder="请输入简介"
        v-model="postBrief"
        maxlength="30"
        show-word-limit
        class="brief"
      >
      </el-input>

      <el-tooltip
        :disabled="!btnAble"
        content="有空值，无法提交！"
        placement="top"
        effect="dark"
      >
        <span>
          <el-button
            class="editor-btn"
            type="primary"
            @click="submit"
            :disabled="btnAble"
          >
            提交
          </el-button>
        </span>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
//该组件中注释掉的代码为局部注册的方式。
// import { mavonEditor } from "mavon-editor";
// import "mavon-editor/dist/css/index.css";
import axios from "axios";
import { postCreateApi } from "../../api";

import { imgUpload } from "../../api";

export default {
  data() {
    const user = JSON.parse(window.localStorage.getItem("user"));
    return {
      btnAble: true,
      contentMark: "",
      contentHtml: "",
      configs: {},
      postTitle: "",
      imgUrlArr: [],
      postBrief: "这是一条帖子的简介~",
      userId: user ? user.userId : "",
      toolbar: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
    };
  },
  computed: {
    tag() {
      return this.$store.state.postTag;
    },
  },
  // components: {
  //   mavonEditor
  // },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    async $imgAdd(pos, $file) {
      var formdata = new FormData();
      console.log("1: ", formdata);

      formdata.append("file", $file);
      console.log(`$file`, $file);

      //将下面上传接口替换为你自己的服务器接口

      await imgUpload(formdata)
        .then((res) => {
          console.log(res);
          this.$refs.md.$img2Url(pos, res.data.data.url);
          this.imgUrlArr.push(url);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    change(value, render) {
      // render 为 markdown 解析后的结果
      this.contentHtml = render;
    },
    async submit() {
      let postObj = {
        userId: this.userId,
        contentMark: this.contentMark,
        contentHtml: this.contentHtml,
        postTitle: this.postTitle,
        imgUrlArr: this.imgUrlArr.length == 0 ? ["no content"] : this.imgUrlArr ,
        postBrief: this.postBrief,
        postTag: this.$store.state.tagTitle,
      };
      console.log(this.contentMark);
      console.log(this.contentHtml);
      console.log(postObj);
      await postCreateApi(postObj)
        .then((res) => {
            console.log(res);
           if (res.code == 200) {
            console.log(res.data);
            this.$message.success("提交成功！");
            this.$router.push({ name: "tagPage"});
          }
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("提交失败！");
        });
    },
    // saveMdFile() {
    //     console.log(this.contentMark);
    //     const blobMd = new Blob([ this.contentMark ], { type: 'text/markdown' });
    //     const objectURL = URL.createObjectURL(blobMd);

    // }
  },
  updated() {
    let able = false;
    if (
      this.postTitle === "" ||
      this.postBrief === "" ||
      this.contentMark === "" ||
      this.userId === ""
    ) {
      able = true;
    }
    this.btnAble = able;
  },
};
</script>
<style lang="scss" scoped>
.markdown-container {
  .title,
  .brief,
  .textTitle {
    padding-bottom: calc(var(--heightRate) * 30);
    text-align: center;
    font-size: calc(var(--heightRate) * 20);
    letter-spacing: calc(var(--heightRate) * 1);
    color: #333;
    font-weight: 600;
    margin-top: calc(var(--heightRate) * 15);
    display: flex;
  }

  .editor-btn {
    margin-top: calc(var(--heightRate) * 20);
    margin-bottom: calc(var(--heightRate) * 20);
  }
}
</style>
