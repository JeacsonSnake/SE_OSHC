<template>
  <div>
    <el-input
      v-model="search"
      @focus="focus"
      @blur="blur"
      @keyup.enter.native="searchHandler"
      placeholder="搜索帖子→"
      class="searchBar"
    >
      <el-button
        slot="append"
        icon="el-icon-search"
        id="searchBtn"
        @click="searchHandler"
      ></el-button>
    </el-input>
    <!---设置z-index优先级,防止被走马灯效果遮挡-->
    <el-card
      @mouseenter="enterSearchBoxHanlder"
      v-if="isSearch"
      id="search-box"
    >
      <dl v-if="isHistorySearch">
        <dt class="search-title" v-show="history">历史搜索</dt>
        <dt class="remove-history" v-show="history" @click="removeAllHistory">
          <i class="el-icon-delete"></i>清空历史记录
        </dt>
        <el-tag
          v-for="search in historySearchList"
          :key="search.id"
          closable
          :type="search.type"
          @click="searchHandler(search.name)"
          @close="closeHandler(search)"
          style="margin-right: 5px; margin-bottom: 5px; cursor: pointer"
          >{{ search.name }}</el-tag
        >
        <dt class="search-title">热门搜索</dt>
        <dd v-for="search in hotSearchList" :key="search.id">
          {{ search }}
        </dd>
      </dl>
      <dl v-if="isSearchList">
        <dd v-for="search in searchList" :key="search.id">{{ search }}</dd>
      </dl>
    </el-card>
  </div>
</template>

<script>
import Store from "../../store";
import searchStore from "../../../utils/searchStore";
export default {
  data() {
    return {
      search: "", //当前输入框的值
      isFocus: false, //是否聚焦
      history: false,
      searchList: ["暂无数据"], //搜索返回数据,
      hotSearchList: ["暂无热门搜索"], //热门搜索数据
      historySearchList: [], //历史搜索数据
      types: ["", "success", "info", "warning", "danger"], //搜索历史tag式样
    };
  },
  methods: {
    focus() {
      this.isFocus = true;
      this.historySearchList =
        searchStore.loadHistory() == null ? [] : searchStore.loadHistory();
      this.history = this.historySearchList.length == 0 ? false : true;
    },
    blur() {
      var self = this;
      this.searchBoxTimeout = setTimeout(function () {
        self.isFocus = false;
      }, 300);
    },
    enterSearchBoxHanlder() {
      clearTimeout(this.searchBoxTimeout);
    },
    searchHandler(value) {
      //随机生成搜索历史tag式样
      let n = this.getRandomNumber(0, 5);
      let exist =
        this.historySearchList.filter((value) => {
          return value.name == this.search;
        }).length == 0
          ? false
          : true;
      if (!exist) {
        this.historySearchList.push({ name: this.search, type: this.types[n] });
        searchStore.saveHistory(this.historySearchList);
      }
      console.log(value);
      this.history = this.historySearchList.length == 0 ? false : true;
      let searchItem = this.search ? this.search : value;
      this.isFocus = false;
      this.$store.commit("SETSEARCHDATA", searchItem);
      this.$store.commit("SETSEARCHUPDATE", false);
      if (this.$route.name !== "searchPage") {
        this.$router.push({
          name: "searchPage",
        });
      }
    },
    closeHandler(search) {
      this.historySearchList.splice(this.historySearchList.indexOf(search), 1);
      searchStore.saveHistory(this.historySearchList);
      clearTimeout(this.searchBoxTimeout);
      if (this.historySearchList.length == 0) {
        this.history = false;
      }
    },
    removeAllHistory() {
      searchStore.removeAllHistory();
    },
    getRandomNumber(min, max) {
      parseInt(Math.random() * (max - min)) + min;
    },
  },
  computed: {
    isHistorySearch() {
      return this.isFocus && !this.search;
    },
    isSearchList() {
      return this.isFocus && this.search;
    },

    isSearch() {
      return this.isFocus;
    },
  },

  mounted() {
    if (this.$route.name == "searchPage") {
      if (this.$store.state.searchData === "") {
      } else {
        this.search = this.$store.state.searchData;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
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
  height: 40px;
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
  width: 100%;
  width: calc(1536px / 1920px * 641px);
  height: calc(100vh / 1080px * 300px);
  margin-top: 0px;
  padding-bottom: 20px;
}

.search-title {
  color: #d3e3ea;
  font-size: 15px;
  margin-bottom: 5px;
}

.remove-history {
  color: #bdbaba;
  font-size: 15px;
  float: right;
  margin-top: -calc(100vh / 1080px * 2px);
  cursor: pointer;
}
</style>