<template>
  <div class="searchPage">
    <div class="leftSlide">
      <div id="searchRow">
        <SearchBar></SearchBar>
      </div>
      <PostsSearchLayer v-loading="!isSearchUpdate"></PostsSearchLayer>
    </div>
    <div class="rightSlide">
      <HotSection></HotSection>
    </div>
  </div>
</template>

<script>
import PostsSearchLayer from "./PostsSearchLayer.vue";
import SearchBar from "../../components/SearchBar/index.vue";
import HotSection from "../../components/HotSection/index.vue";
export default {
  computed: {
    isSearchUpdate() {
      return this.$store.state.isSearchUpdate;
    },
  },

  components: {
    PostsSearchLayer,
    SearchBar,
    HotSection,
  },

  beforeUpdate() {
    if (this.isSearchUpdate === false) {
        window.location.reload(); //监测到路由发生跳转时刷新一次页面
      }
  }
};
</script>

<style lang="scss" scoped>
.searchPage {
  background-image: url("../../assets/images/background/搜素结果页背景.png");
  background-repeat: no-repeat;
  background-size: 100vw ;
  padding-top: calc(var(--heightRate) * 115);
  display: flex;
  width: 100%;
  min-height: calc(var(--heightRate) * 1130);

  .leftSlide {
    margin-left: calc(var(--widthRate) * 215);
    margin-bottom: calc(var(--heightRate) * 60);
    #searchRow {
      width: calc(var(--widthRate) * 1190);

      &:focus {
        border: 0.5px solid #00bdc8;
      }
    }
  }

  .rightSlide {
    width: calc(var(--widthRate) * 305);
    height: calc(var(--heightRate) * 590);
    margin-left: calc(var(--widthRate) * 120);
  }
}
</style>