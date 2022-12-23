<template>
  <div class="postRelease">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">{{tag}}</el-breadcrumb-item>
      <el-breadcrumb-item>贴子发布</el-breadcrumb-item>
    </el-breadcrumb>
    <MarkdownContainer></MarkdownContainer>
  </div>
</template>

<script>
import MarkdownContainer from "../../components/markdownContainer.vue";
export default {
  components: { MarkdownContainer },
  computed: {
    tag() {
        return this.$store.state.postTag
    }
  }
};
</script>

<style lang="scss" scoped>
.postRelease {
  background-color: #f2f2f2;
  padding-top: calc(var(--heightRate) * 105);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>