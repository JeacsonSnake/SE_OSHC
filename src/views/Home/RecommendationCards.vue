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
                    to connect again 22:05
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
                   test second 
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
    },
  },
};
</script>

<style lang="scss" scoped>
.RecommendationCards {
  width: calc(1536px / 1920px * 580px);
  height: calc(100vh / 1080px * 678px);
  margin-top: calc(100vh / 1080px * 15px);
  margin-left: calc(1536px / 1920px * 41px);
  cursor: pointer;

  .RecommendationCard {
    width: calc(1536px / 1920px * 563px);
    height: calc(100vh / 1080px * 233px);
    margin-left: calc(1536px / 1920px *  17px);
    margin-top: calc(100vh / 1080px * 34px);
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
        max-width:calc(1536px / 1920px * 445px);
        height: calc(100vh / 1080px * 22px);
        font-size: 14px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right:calc(1536px / 1920px * 15px);
        color: #808080;
      }
      .EliteTag,
      .HotTag,
      .TopTag {
        width:calc(1536px / 1920px * 30px);
        height: calc(100vh / 1080px * 25px);
        margin-right: calc(1536px / 1920px * 5px);
      }
    }

    .PostTags {
      margin-top:  calc(100vh / 1080px * 8px);
      margin-bottom:  calc(100vh / 1080px * 8px);
      .PostTag {
        width:calc(1536px / 1920px * 70px);
        height: calc(100vh / 1080px * 24px);
        background-color: #01d1bb;
        border-radius: 15px;
        color: #ffffff;
        font-size: 10px;
        margin-right: 4px;
      }
    }

    .BriefContentArea {
      width:calc(1536px / 1920px * 560px);
      height: calc(100vh / 1080px * 25px);

      .BriefContent {
        font-size: 14px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .ImageGroup {
      height: calc(100vh / 1080px * 100px);
      margin-top: calc(100vh / 1080px * 2px);
      .CardImage {
        width:calc(1536px / 1920px * 152px);
        height:100%;
        margin-right:  calc(100vh / 1080px * 7px);
      }
    }

    .PublisherArea {
      display: flex;
      margin-top:  calc(100vh / 1080px * 5px);
      align-items: center;
      font-family: "HarmonyOS_Sans_SC_Thin";
      .SmallAvatar {
        margin-right:calc(1536px / 1920px * 5px);
      }

      p {
        margin-right:calc(1536px / 1920px * 5px);
        margin-left:calc(1536px / 1920px * 5px);
        font-size:14px;
      }

      #PubName {
        max-width:calc(1536px / 1920px * 200px);
        text-overflow: ellipsis;
        overflow: hidden;
      }

      #noMargin {
        margin-left:calc(1536px / 1920px * 5px);
      }

      #eye {
        width:calc(1536px / 1920px * 16px);
        height: calc(100vh / 1080px * 16px);
        margin-right:calc(1536px / 1920px * 5px);
        margin-left:calc(1536px / 1920px * 5px);
      }
    }
  }
}
</style>