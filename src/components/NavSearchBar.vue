<template>
  <div class="navSearchBar">
    <el-row id="searchRow">
      <el-col v-show="ifSearch">
        <SearchBar></SearchBar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SearchBar from './SearchBar/index.vue';

export default {
  components: { SearchBar },
  computed: {
    ifSearch() {
      return this.$store.state.ifSearch;
    },
  },
};
</script>

<style  lang="scss" scoped>
.left {
  margin-left: calc(1536px / 1920px * 200px);
}

#searchRow {
  width: calc(1536px / 1920px * 700px);
  &:focus {
    border: 0.5px solid #00bdc8;
  }
}

.searchBar {
  :deep() .el-input__inner {
    border-radius: 20px 0 0 20px;
  }

  :deep() .el-input-group__append {
    border-radius: 0 20px 20px 0;
  }
  :deep() .el-icon-search {
    vertical-align: bottom;
  }

  :focus {
    border: 0.5px solid #00bdc8;
  }
}

#searchBtn {
  width: calc(1536px / 1920px * 81px);
  font-size: 30px;
  height: calc(100vh / 1080px * 40px);
  margin: -6px -21px;
  padding: 0 20px;
  background-color: #00bdc8;
  color: rgb(232, 240, 243);
  border-radius: 0 20px 20px 0;
  border: 0.5px solid #00bdc8;
}

#search-box {
  position: fixed;
  z-index: 15;
  width: calc(1536px / 1920px * 641px);
  height: calc(100vh / 1080px * 300px);
  margin-top: 0px;
  padding-bottom: calc(100vh / 1080px * 20px);
}

.search-title {
  color: #d3e3ea;
  font-size: 15px;
  margin-bottom: calc(100vh / 1080px * 5px);
}

.remove-history {
  color: #bdbaba;
  font-size: 15px;
  float: right;
  margin-top: calc(100vh / 1080px * -2px);
  cursor: pointer;
}
</style>