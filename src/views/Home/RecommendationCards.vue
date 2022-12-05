<template>
  <div class="RecommendationCards">
    <div class="RecommendationCard" @click="toPostPage()">
              <div class="TitleArea">
                <p class="title">纯手工自制一个十六位RISC架构CPU</p>
                <img src="../../assets/images/label_head/精华_w30px.png" class="EliteTag"></img>
                <img src="../../assets/images/label_head/热门_w30px.png" class="HotTag"></img>
                <img src="../../assets/images/label_head/置顶_w30px.png" class="TopTag"></img>
              </div>
              <div class="PostTags">
                <div class="PostTag">#灌水区</div>
              </div>
              <div class="BriefContentArea">
                <p class="BriefContent">
                try to push again to the master
                </p>
              </div>
              <div class="ImageGroup">
                <img src="../../assets/images/post_example/示例图1.png" alt="" class="CardImage" />
                <img src="../../assets/images/post_example/示例图2.png" alt="" class="CardImage" />
                <img src="../../assets/images/post_example/示例图3.png" alt="" class="CardImage" />
              </div>
              <div class="PublisherArea">
                <el-avatar :size="20" :src="circleUrl"  class="SmallAvatar"></el-avatar>
                <p id="PubName">Rick Ashley</p>
                <p>·</p>
                <p id="PublishTime">三天前</p>
                <img src="../../assets/images/small_icon/icon_浏览量.png" alt="" id="eye">
                <p id="noMargin">浏览量</p>
                <p>2355</p>
              </div>
    </div>
    <div class="RecommendationCard" @click="toPostPage()">
              <div class="TitleArea">
                <p class="title">纯手工自制一个十六位RISC架构CPU</p>
                <img src="../../assets/images/label_head/精华_w30px.png" class="EliteTag"></img>
                <img src="../../assets/images/label_head/热门_w30px.png" class="HotTag"></img>
                <img src="../../assets/images/label_head/置顶_w30px.png" class="TopTag"></img>
              </div>
              <div class="PostTags">
                <div class="PostTag">#灌水区</div>
              </div>
              <div class="BriefContentArea">
                <p class="BriefContent">
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                </p>
              </div>
              <div class="ImageGroup">
                <img src="../../assets/images/post_example/示例图1.png" alt="" class="CardImage" />
                <img src="../../assets/images/post_example/示例图2.png" alt="" class="CardImage" />
                <img src="../../assets/images/post_example/示例图3.png" alt="" class="CardImage" />
              </div>
              <div class="PublisherArea">
                <el-avatar :size="20" :src="circleUrl"  class="SmallAvatar"></el-avatar>
                <p id="PubName">Rick Ashley</p>
                <p>·</p>
                <p id="PublishTime">三天前</p>
                <img src="../../assets/images/small_icon/icon_浏览量.png" alt="" id="eye">
                <p id="noMargin">浏览量</p>
                <p>2355</p>
              </div>
    </div>
    <div class="RecommendationCard" @click="toPostPage()">
              <div class="TitleArea">
                <p class="title">纯手工自制一个十六位RISC架构CPU</p>
                <img src="../../assets/images/label_head/精华_w30px.png" class="EliteTag"></img>
                <img src="../../assets/images/label_head/热门_w30px.png" class="HotTag"></img>
                <img src="../../assets/images/label_head/置顶_w30px.png" class="TopTag"></img>
              </div>
              <div class="PostTags">
                <div class="PostTag">#灌水区</div>
              </div>
              <div class="BriefContentArea">
                <p class="BriefContent">
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                </p>
              </div>
              <div class="ImageGroup">
                <img src="../../assets/images/post_example/示例图1.png" alt="" class="CardImage" />
                <img src="../../assets/images/post_example/示例图2.png" alt="" class="CardImage" />
                <img src="../../assets/images/post_example/示例图3.png" alt="" class="CardImage" />
              </div>
              <div class="PublisherArea">
                <el-avatar :size="20" :src="circleUrl"  class="SmallAvatar"></el-avatar>
                <p id="PubName">Rick Ashley</p>
                <p>·</p>
                <p id="PublishTime">三天前</p>
                <img src="../../assets/images/small_icon/icon_浏览量.png" alt="" id="eye">
                <p id="noMargin">浏览量</p>
                <p>2355</p>
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

  methods: {
    toPostPage() {
         this.$router.push({ name: "postContent" });
    }
  },
};
</script>

<style lang="scss" scoped>
.RecommendationCards {
  width: 580px;
  height: 678px;
  margin-top: 15px;
  margin-left: 41px;
  cursor: pointer;

  .RecommendationCard {
    width: 563px;
    height: 203px;
    margin-left: 17px;
    margin-top: 14px;
    margin-bottom: 23px;
    color: #808080;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid #808080;

    .TitleArea {
      width: inherit;
      display: flex;

      .title {
        max-width: 445px;
        height: 22px;
        font-size: 14px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 15px;
        color: #808080;
      }
      .EliteTag,
      .HotTag,
      .TopTag {
        width: 30px;
        height: 20px;
        margin-right: 5px;
      }
    }

    .PostTags {
      margin-top: 8px;
      margin-bottom: 8px;
      .PostTag {
        width: 70px;
        height: 15px;
        background-color: #01d1bb;
        border-radius: 15px;
        color: #ffffff;
        font-size: 10px;
        margin-right: 4px;
      }
    }

    .BriefContentArea {
      width: 560px;
      height: 22px;

      .BriefContent {
        font-size: 14px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .ImageGroup {
      height: 100px;
      margin-top: 2px;
      .CardImage {
        width: 152px;
        height: 100%;
        margin-right: 7px;
      }
    }

    .PublisherArea {
      display: flex;
      margin-top: 2px;
      align-items: center;
      font-family: "HarmonyOS_Sans_SC_Thin";
      .SmallAvatar {
        margin-right: 5px;
      }

      p {
        margin-right: 5px;
        margin-left: 5px;
      }

      #PubName {
        max-width: 200px;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      #noMargin {
        margin-left: 5px;
      }

      #eye {
        width: 16px;
        height: 16px;
        margin-right: 5px;
        margin-left: 5px;
      }
    }
  }
}
</style>