<template>
  <div class="searchPage">
    <div class="leftSlide">
      <div id="searchRow">
        <SearchBar></SearchBar>
      </div>
      <PostsSearchLayer v-show="isSearchUpdate"></PostsSearchLayer>
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
    isSearchUpdate: async function () {
      return await this.$store.state.isSearchUpdate;
    },
  },

  props: ["searchItem"],

  components: {
    PostsSearchLayer,
    SearchBar,
    HotSection,
  },
};
</script>

<style lang="scss" scoped>
.searchPage {
  background-image: url("../../assets/images/background/搜素结果页背景.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 115px;
  display: flex;
  width: 100%;
  height: 1130px;

  .leftSlide {
    margin-left: 215px;
    #searchRow {
      width: 1190px;

      &:focus {
        border: 0.5px solid #00bdc8;
      }
    }
  }

  .rightSlide {
    width: 305px;
    height: 590px;
    margin-left: 120px;
  }
}
</style>