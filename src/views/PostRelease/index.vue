<template>
  <div class="postRelease">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">子版块页面</el-breadcrumb-item>
      <el-breadcrumb-item>贴子发布</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">贴子发布编辑器</div>
    <MarkdownContainer></MarkdownContainer>
  </div>
</template>

<script>
import MarkdownContainer from "../../components/MarkdownContainer.vue";
export default {
  components: { MarkdownContainer },
};
</script>

<style lang="scss" scoped>
.postRelease {
  background-color: #f2f2f2;
  padding-top: calc(var(--heightRate) * 105);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(var(--heightRate) * 1080);

  .title {
    padding-bottom: 30px;
    text-align: center;
    font-size: 20px;
    letter-spacing: 1px;
    color: #333;
    font-weight: 600;
  }
}
</style>