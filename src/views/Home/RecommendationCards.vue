<template>
  <div class="RecommendationCards">
    <div class="RecommendationCard" @click="toPostPage(item.postId)" v-for="(item, index) in postArr" :key="index">
              <div class="TitleArea">
                <p class="title">{{item.postTitle}}</p>
                <img src="../../assets/images/label_head/精华_w30px.png" class="EliteTag" v-show="item.isEssence"></img>
                <img src="../../assets/images/label_head/热门_w30px.png" class="HotTag" v-show="item.isHot"></img>
                <img src="../../assets/images/label_head/置顶_w30px.png" class="TopTag" v-show="item.isTop"></img>
              </div>
              <div class="BriefContentArea">
                <p class="BriefContent">
                    {{item.postBrief}}
                </p>
              </div>
              <div class="ImageGroup" v-if="item.imgUrlArr.length == 0">
                <img src="../../assets/images/post_example/示例图1.png" alt="" class="CardImage" />
                <img src="../../assets/images/post_example/示例图2.png" alt="" class="CardImage" />
                <img src="../../assets/images/post_example/示例图3.png" alt="" class="CardImage" />
              </div>
              <div class="ImageGroup" v-else>
                <template v-for="(item, index) in item.imgUrlArr">
                    <img :src="item" alt="" class="CardImage" />
                </template>
              </div>
              <div class="PublisherArea">
                <el-avatar :size="20" :src="item.avatar"  class="SmallAvatar"></el-avatar>
                <p id="PubName">{{item.postAuthorName}}</p>
                <p>·</p>
                <p id="PublishTime">三天前</p>
                <img src="../../assets/images/small_icon/icon_浏览量.png" alt="" id="eye">
                <p id="noMargin">浏览量</p>
                <p>2355</p>
                <div class="PostTags">
                    <div class="PostTag">#{{item.postTagName}}</div>
                </div>
              </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: "",
    };
  },

  computed: {
    postArr() {
      return this.$store.state.postArr;
    },
  },

  methods: {
    toPostPage(postId) {
      this.$router.push({ name: "postContent", params: { postId } });
    },
  },

  mounted() {
    this.$store.dispatch("getHomeRecommand");
  },
};
</script>

<style lang="scss" scoped>
.RecommendationCards {
  width: calc(var(--widthRate) * 580);
  height: calc(var(--heightRate) * 678);
  margin-top: calc(var(--heightRate) * 15);
  margin-left: calc(var(--widthRate) * 41);
  cursor: pointer;

  &:last-child {
    border-bottom: calc(var(--heightRate) * 0) solid #808080;
  }

  .RecommendationCard {
    width: calc(var(--widthRate) * 560);
    height: calc(var(--heightRate) * 203);
    margin-left: calc(var(--widthRate) * 17);
    margin-bottom: calc(var(--heightRate) * 25);
    color: #808080;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: calc(var(--heightRate) * 1) solid #808080;

    .TitleArea {
      width: inherit;
      display: flex;

      .title {
        max-width: calc(var(--widthRate) * 445);
        height: calc(var(--heightRate) * 22);
        font-size: calc(var(--heightRate) * 14);
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: calc(var(--widthRate) * 15);
        color: #808080;
      }
      .EliteTag,
      .HotTag,
      .TopTag {
        width: calc(var(--widthRate) * 30);
        height: calc(var(--heightRate) * 25);
        margin-right: calc(var(--widthRate) * 5);
      }
    }

    .PostTags {
      margin-top: calc(var(--heightRate) * 8);
      margin-bottom: calc(var(--heightRate) * 8);
      .PostTag {
        width: calc(var(--widthRate) * 70);
        height: calc(var(--heightRate) * 24);
        background-color: #01d1bb;
        border-radius: calc(var(--heightRate) * 15);
        color: #ffffff;
        font-size: calc(var(--heightRate) * 10);
        margin-right: calc(var(--widthRate) * 4);
      }
    }

    .BriefContentArea {
      width: calc(var(--widthRate) * 560);
      height: calc(var(--heightRate) * 25);
      display: flex;

      .BriefContent {
        font-size: calc(var(--heightRate) * 14);
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .ImageGroup {
      height: calc(var(--heightRate) * 100);
      margin-top: calc(var(--heightRate) * 2);
      .CardImage {
        width: calc(var(--widthRate) * 152);
        height: 100%;
        margin-right: calc(var(--heightRate) * 7);
      }
    }

    .PublisherArea {
      display: flex;
      margin-top: calc(var(--heightRate) * 5);
      align-items: center;
      font-family: "HarmonyOS_Sans_SC_Thin";
      .SmallAvatar {
        margin-right: calc(var(--widthRate) * 5);
      }

      p {
        margin-right: calc(var(--widthRate) * 5);
        margin-left: calc(var(--widthRate) * 5);
        font-size: calc(var(--heightRate) * 14);
      }

      #PubName {
        max-width: calc(var(--widthRate) * 200);
        text-overflow: ellipsis;
        overflow: hidden;
      }

      #noMargin {
        margin-left: calc(var(--widthRate) * 5);
      }

      #eye {
        width: calc(var(--widthRate) * 16);
        height: calc(var(--heightRate) * 16);
        margin-right: calc(var(--widthRate) * 5);
        margin-left: calc(var(--widthRate) * 5);
      }
    }
  }
}
</style>