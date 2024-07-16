<template>
  <div class="postPage">
    <div v-if="isEmpty">
      <el-empty description="没有收藏" :image-size="300"></el-empty>
    </div>
    <template v-else>
        <div class="RecommendationCards">
            <div
                class="searchList_item"
                v-for="(item, index) in userNeedObjArr"
                :key="index"
                @click="toPostPage(item.postId)"
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
        </div>

        <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="userNeedObj.nowPage"
            hide-on-single-page
            :page-size="userNeedObj.showNum"
            background
            layout="prev, pager, next, jumper"
            :total="userNeedObj.totalNum"
            class="elPag"
        >
        </el-pagination>
    </template>
</div>
</template>

<script>
export default {
  computed: {
    isEmpty() {
      return this.$store.state.isUserNeedEmpty;
    },
    userNeedObj() {
      return this.$store.state.userNeedObj;
    },
    userNeedObjArr() {
      return this.userNeedObj.postArr;
    },
  },

  methods: {
    handleCurrentChange(val) {
      const userDetail = JSON.parse(window.localStorage.getItem("userDetail"));
      const data = {
        needPage: val,
        userId: userDetail.userId,
      };

      this.$store.dispatch("getUserPostArr", data);
    },

    toPostPage(id) {
      console.log("hola");
      this.$router.push({ name: "postContent", params: { postId: id } });
    },
  },

  mounted() {
    const userDetail = JSON.parse(window.localStorage.getItem("userDetail"));
    const data = {
      needPage: 1,
      userId: userDetail.userId,
    };

    this.$store.dispatch("getUserPostArr", data);
  },
};
</script>

<style lang="scss" scoped>
.postPage {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/background/帖子背景.png");
  background-size: contain;
  border: calc(var(--heightRate) * 1) solid #808080;
  border-radius: calc(var(--heightRate) * 10);
  position: relative;
  .RecommendationCards {
    width: calc(var(--widthRate) * 800);
    height: calc(var(--heightRate) * 675);
    margin-top: calc(var(--heightRate) * 80);
    margin-left: calc(var(--widthRate) * 76);

    // searchList
    .searchList_item {
      width: 90%;
      cursor: pointer;
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
  }

  .elPag {
    margin-top: calc(var(--heightRate) * 150);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 79%;
    left: 25%;
  }
}
</style>