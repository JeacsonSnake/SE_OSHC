<template>
  <div class="postsSearchLayer">
    <el-empty description="无搜索结果" v-show="isEmpty"></el-empty>
    <div class="searchResult" v-show="!isEmpty">
      <!-- searchSection -->
      <div class="search_section_background" v-show="getSearchData.isTag">
        <div class="search_section_hidari">
          <p class="search_section_topic">
            {{ searchSection.topic }}
          </p>
          <div class="search_section_button">点击进入</div>
        </div>

        <div class="search_section">
          <!-- left -->
          <div class="search_section_left">
            <span class="section_lable">{{ getSearchData.tagsObj.tagTitle ? getSearchData.tagsObj.tagTitle : ""}}</span>
            <div class="section_content">
              <p id="search_section_left_posts">
                贴子数：{{ getSearchData.tagsObj.tagPostNum ? getSearchData.tagsObj.tagPostNum : "0" }}
              </p>
              <p id="search_section_left_hots">
                热度：{{ getSearchData.tagsObj.tagHot ? getSearchData.tagsObj.tagHot : "0" }}
              </p>
              <p id="search_section_left_news">
                最新动态：{{ getSearchData.tagsObj.lastPostTime ? getSearchData.tagsObj.lastPostTime : "异次元" }}
              </p>
            </div>
          </div>
          <!-- right -->
          <div class="search_section_right">
            <img :src=" getSearchData.tagsObj.tagImg ? getSearchData.tagsObj.tagImg : require('../../assets/images/tag_example/灌水.jpeg') " alt="" />
          </div>
        </div>
      </div>

      <!-- searchList -->
      <div
        class="searchList_item"
        v-for="(item, index) in getSearchData.resultArrList"
        :key="index"
      >
        <!-- itemTopic -->
        <div class="item_topic">
          {{ item.postTitle }}
            <img src="../../assets/images/label_head/精华_w30px.png" class="EliteTag" v-show="item.isEssence"></img>
            <img src="../../assets/images/label_head/热门_w30px.png" class="HotTag" v-show="item.isHot"></img>
            <img src="../../assets/images/label_head/置顶_w30px.png" class="TopTag" v-show="item.isTop"></img>
        </div>
        <!-- itemLabel -->
        <div class="item_label">
          <div id="item_label_postlabel">#{{ item.relatedTagName }}</div>
          <div id="item_label_user">{{ item.authorName }}</div>
          <div id="item_label_date">.</div>
          <div id="item_label_date">{{ item.postTime ? item.postTime : "异时间" }}</div>
          <div id="item_label_views">浏览量 {{ item.viewNum }}</div>
        </div>
        <!-- itemBrief -->
        <div class="item_brief">{{ item.postBrief }}</div>
      </div>

      <!-- searchPage -->
      <div class="search_page_button">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="getSearchData.nowPage"
          hide-on-single-page
          :page-size="7"
          background
          layout="prev, pager, next, jumper"
          :total="getSearchData.totalNum"
          class="elPag"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      //   value: false,
      searchData: "",
      isSearchUpdate: true,
      isEmpty: false,

      searchSection: {
        topic: "这里有相关搜索内容的子版块，是否进入?",
        sectionLable: "ESP32",
        posts: "114514",
        hots: "1919810",
        news: "666",
      },

      //   getSearchData: [
      //     {
      //       user: "RICK_A",
      //       date: "三天前",
      //       postLabel: "ESP32",
      //       views: "114514",
      //       topic: "[新人必备] ESP32是个啥?全网最详细介绍ESP32!",
      //       brief: "ESP32DDDDDDDDDDDDDDDDDD",
      //     },
      //     {
      //       user: "RICK_b",
      //       date: "三天前",
      //       postLabel: "ESP32",
      //       views: "1919810",
      //       topic: "[新人必备] ESP32是个啥?全网最详细介绍ESP32!",
      //       brief: "ESP32DDDDDDDDDDDDDDDDDD",
      //     },
      //     {
      //       user: "RICK_c",
      //       date: "三天前",
      //       postLabel: "ESP32",
      //       views: "114514",
      //       topic: "[新人必备] ESP32是个啥?全网最详细介绍ESP32!",
      //       brief: "ESP32DDDDDDDDDDDDDDDDDD",
      //     },
      //     {
      //       user: "RICK_d",
      //       date: "三天前",
      //       postLabel: "ESP32",
      //       views: "114514",
      //       topic: "[新人必备] ESP32是个啥?全网最详细介绍ESP32!",
      //       brief: "ESP32DDDDDDDDDDDDDDDDDD",
      //     },
      //     {
      //       user: "RICK_e",
      //       date: "三天前",
      //       postLabel: "ESP32",
      //       views: "114514",
      //       topic: "[新人必备] ESP32是个啥?全网最详细介绍ESP32!",
      //       brief: "ESP32DDDDDDDDDDDDDDDDDD",
      //     },
      //   ],
    };
  },

  methods: {
    pushGoodsPage() {
      this.$router.push({
        name: "goodsDisplayPage",
      });
    },
    pushUserPage() {
      this.$router.push({
        name: "userPage",
      });
    },

    handleCurrentChange() {},
  },

  computed: {
    isUpdate() {
      return this.$store.state.isSearchUpdate;
    },

    getSearchData() {
      return this.$store.state.searchObj;
    },
  },

  created() {
    this.searchData = this.$store.state.searchData;
    let nowPage = this.$store.state.searchObj.nowPage;
    let size = this.$store.state.searchObj.size;
    let value = {
      searchData: this.searchData,
      nowPage,
      size,
    };
    this.$store.commit("SETSEARCHUPDATE", false);
    this.$store.dispatch("getSearchResult", value);
    if (this.getSearchData.resultArrList.length !== 0) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  },

  mounted() {},

  beforeUpdate() {
    if (this.searchData === this.$store.state.searchData) {
    } else {
      this.searchData = this.$store.state.searchData;
      let nowPage = this.$store.state.searchObj.nowPage;
      let size = this.$store.state.searchObj.size;
      let value = {
        searchData: this.searchData,
        nowPage,
        size,
      };
      this.$store.commit("SETSEARCHUPDATE", false);
      this.$store.dispatch("getSearchResult", value);
      if (this.getSearchData.resultArrList.length !== 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.postsSearchLayer {
  border-radius: calc(var(--heightRate) * 12);
  height: auto;
  min-height: calc(var(--heightRate) * 930);
  width: calc(var(--widthRate) * 1190);
  margin-top: calc(var(--heightRate) * 50);
  border-radius: calc(var(--heightRate) * 12);
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}

.search_section_background {
  display: flex;
  background-color: #01d1bb;
  width: 100%;
  height: calc(var(--heightRate) * 220);
  border-top-left-radius: calc(var(--heightRate) * 10);
  border-top-right-radius: calc(var(--heightRate) * 10);
}

//search_section_background_left
.search_section_hidari {
  width: calc(var(--widthRate) * 600);
  height: 100%;

  .search_section_topic {
    cursor: default;
    position: relative;
    font-size: calc(var(--heightRate) * 35);
    font-weight: 600;
    margin-top: calc(var(--heightRate) * 30);
    margin-left: calc(var(--widthRate) * 25);
  }
  .search_section_button {
    cursor: pointer;
    background-color: #00bdc8;
    border-radius: calc(var(--heightRate) * 18);
    border-style: solid;
    border-color: hsl(198, 100%, 20%);
    border-width: calc(var(--heightRate) * 1);
    width: calc(var(--widthRate) * 143);
    height: calc(var(--heightRate) * 40);
    position: absolute;
    margin-top: calc(var(--heightRate) * 55);
    margin-left: calc(var(--widthRate) * 30);
    color: white;
    text-align: center;
    line-height: calc(var(--heightRate) * 40);
    letter-spacing: calc(var(--widthRate) * 2);
  }
}

//search_section_background_right
.search_section {
  display: flex;
  background-color: #00b6cc;
  position: absolute;
  top: calc(var(--heightRate) * 15);
  right: calc(var(--widthRate) * 15);
  width: calc(var(--widthRate) * 465);
  height: calc(var(--heightRate) * 186);
  border-radius: calc(var(--heightRate) * 7);
  border-style: solid;
  border-width: calc(var(--heightRate) * 1);
  border-color: #004766;
  justify-content: space-between;
}

//search_section left
.search_section_left {
  width: calc(var(--widthRate) * 180);
  height: 86%;
  margin-top: calc(var(--heightRate) * 15);
  margin-left: calc(var(--widthRate) * 13);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .section_lable {
    cursor: default;
    color: white;
    margin-top: calc(var(--heightRate) * -5);
    margin-bottom: calc(var(--heightRate) * 10);
    font-weight: 10;
    letter-spacing: calc(var(--widthRate) * 1);
    font-size: calc(var(--heightRate) * 30);
  }

  .section_content {
    width: calc(var(--widthRate) * 150);
    height: calc(var(--heightRate) * 85);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      color: white;
      height: calc(var(--heightRate) * 25);
      font-size: calc(var(--heightRate) * 8);
      // margin-top: calc(var(--heightRate) * 25);
    }
  }
}
//search_section right
.search_section_right {
  width: calc(var(--heightRate) * 170);
  height: calc(var(--heightRate) * 170);
  margin-top: calc(var(--heightRate) * 8);
  margin-left: calc(var(--widthRate) * 10);
  margin-right: calc(var(--widthRate) * 10);
  //overflow:hidden;   可以用注释里面的部分来进行图片裁剪，但是可能只适用于部分图片
}
.search_section_right img {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: calc(var(--heightRate) * 7);
  //top:-40px;
}

// searchList
.searchList_item {
  width: 90%;
  margin: 0 auto;
  height: calc(var(--heightRate) * 100);
  border-style: solid;
  border-width: calc(var(--heightRate) * 1);
  border-color: transparent transparent #808080 transparent;
  margin-top: calc(var(--heightRate) * 20);
  margin-bottom: calc(var(--heightRate) * 20);
}

.item_topic {
  display: flex;
  position: relative;
  height: calc(var(--heightRate) * 30);
  align-items: center;

  img {
    margin-left: calc(var(--widthRate) * 10);
    width: calc(var(--widthRate) * 30);
    height: calc(var(--heightRate) * 24);
  }
}

// itemLabel
.item_label {
  display: flex;
  position: relative;
  margin-top: calc(var(--heightRate) * 10);
  width: 100%;
  height: calc(var(--heightRate) * 27);
  align-items: baseline;
}

#item_label_postlabel {
  background-color: #01d1bb;
  color: white;
  height: calc(var(--heightRate) * 20);
  line-height: calc(var(--heightRate) * 20);
  font-size: calc(var(--heightRate) * 10);
  border-radius: calc(var(--heightRate) * 10);
  padding-left: calc(var(--widthRate) * 10);
  padding-right: calc(var(--widthRate) * 10);
}

#item_label_user {
  color: #01d1bb;
  height: calc(var(--heightRate) * 12);
  line-height: calc(var(--heightRate) * 15);
  font-size: calc(var(--heightRate) * 13);
  margin-left: calc(var(--widthRate) * 20);
}

#item_label_date {
  color: #01d1bb;
  height: calc(var(--heightRate) * 12);
  line-height: calc(var(--heightRate) * 15);
  font-size: calc(var(--heightRate) * 13);
  margin-left: calc(var(--widthRate) * 5);
}

#item_label_views {
  color: #01d1bb;
  height: calc(var(--heightRate) * 12);
  line-height: calc(var(--heightRate) * 15);
  font-size: calc(var(--heightRate) * 10);
  margin-left: calc(var(--widthRate) * 20);
}

// itembrief
.item_brief {
  display: flex;
  color: #585858;
  height: calc(var(--heightRate) * 27);
  line-height: calc(var(--heightRate) * 30);
  font-size: calc(var(--heightRate) * 16);
}

// searchpage
.search_page_button {
  margin-top: calc(var(--heightRate) * 15);
  height: calc(var(--heightRate) * 50);
}
</style>