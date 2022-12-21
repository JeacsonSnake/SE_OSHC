<template>
  <div class="browsingHistory">
    <div class="RecommendationCards">
        <div class="RecommendationCard" @click="toPostPage()">
            <div class="TitleArea">
                <p class="title">纯手工自制一个十六位RISC架构CPU</p>
                <img src="../../assets/images/label_head/精华_w30px.png" class="EliteTag"></img>
                <img src="../../assets/images/label_head/热门_w30px.png" class="HotTag"></img>
                <img src="../../assets/images/label_head/置顶_w30px.png" class="TopTag"></img>
            </div>
            <div class="BriefContentArea">
                <span class="BriefContent">
                    to connect again 22:05
                </span>
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
                <div class="PostTags">
                    <div class="PostTag">#灌水区</div>
                </div>
            </div>
        </div>

        <div class="RecommendationCard" @click="toPostPage()">
            <div class="TitleArea">
                <p class="title">纯手工自制一个十六位RISC架构CPU</p>
                <img src="../../assets/images/label_head/精华_w30px.png" class="EliteTag"></img>
                <img src="../../assets/images/label_head/热门_w30px.png" class="HotTag"></img>
                <img src="../../assets/images/label_head/置顶_w30px.png" class="TopTag"></img>
            </div>
            <div class="BriefContentArea">
                <span class="BriefContent">
                    to connect again 22:05
                </span>
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
                <div class="PostTags">
                    <div class="PostTag">#灌水区</div>
                </div>
            </div>
        </div>

        <div class="RecommendationCard" @click="toPostPage()">
            <div class="TitleArea">
                <p class="title">纯手工自制一个十六位RISC架构CPU</p>
                <img src="../../assets/images/label_head/精华_w30px.png" class="EliteTag"></img>
                <img src="../../assets/images/label_head/热门_w30px.png" class="HotTag"></img>
                <img src="../../assets/images/label_head/置顶_w30px.png" class="TopTag"></img>
            </div>
            <div class="BriefContentArea">
                <span class="BriefContent">
                    to connect again 22:05
                </span>
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
                <div class="PostTags">
                    <div class="PostTag">#灌水区</div>
                </div>
            </div>
        </div>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      hide-on-single-page
      :page-size="100"
      background
      layout="prev, pager, next, jumper"
      :total="1000"
      class="elPag"
      >
    </el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.browsingHistory {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/background/浏览记录背景.png");
  background-size: contain;
  border: calc(var(--heightRate) * 1) solid #808080;
  border-radius: calc(var(--heightRate) * 10);
  position: relative;
  .RecommendationCards {
    width:calc(var(--widthRate) * 800);
    height:calc(var(--heightRate) * 675);
    margin-top:calc(var(--heightRate) * 80);
    margin-left:calc(var(--widthRate) * 76);

    .RecommendationCard {
      width:calc(var(--widthRate) * 800);
      height:calc(var(--heightRate) * 240);
      margin-top:calc(var(--heightRate) * 29);
      color: #808080;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-bottom: calc(var(--heightRate)  * 1) solid #a9a9a9;
    
      .TitleArea {
        width: inherit;
        display: flex;
        margin-bottom:calc(var(--heightRate) * 12);
        .title {
          max-width:calc(var(--widthRate) * 445);
          height:calc(var(--widthRate) * 22);
          line-height:calc(var(--widthRate) * 18);
          font-size: calc(var(--widthRate) * 20);
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
        //   margin-right:calc(var(--widthRate) * 15);
          color: #808080;
        }
        .EliteTag,
        .HotTag,
        .TopTag {
          width:calc(var(--widthRate) * 30);
          height:calc(var(--heightRate) * 23);
          // margin-right:5px;
          margin-left:calc(var(--widthRate) * 5);
        }
      }

      .BriefContentArea {
        width:calc(var(--widthRate) * 650);
        height:calc(var(--heightRate) * 22);
        display: flex;
        margin-bottom:calc(var(--heightRate) * 12);

        .BriefContent {
          font-size: calc(var(--heightRate) * 12);
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #00b6cc;
        }
      }

      .ImageGroup {
        height:calc(var(--heightRate) * 100);
        margin-top:calc(var(--heightRate) * 12);
        margin-bottom:calc(var(--heightRate) * 10);
        .CardImage {
          width: calc(var(--widthRate) * 152);
          height: 100%;
          margin-right:calc(var(--widthRate) * 20);
        }
      }

      .PublisherArea {
        display: flex;
        margin-top: calc(var(--heightRate) * 10);
        align-items: center;
        font-family: "HarmonyOS_Sans_SC_Thin";

        .PostTags {
          display: flex;
          align-items: center;
          .PostTag {
            width:calc(var(--widthRate) * 70);
            height:calc(var(--heightRate) * 25);
            background-color: #01d1bb;
            border-radius: calc(var(--heightRate) * 10);
            color: #ffffff;
            font-size: calc(var(--heightRate) * 10);
            font-weight: 700;
            margin-right:calc(var(--widthRate) * 4);
          }
        }

        .SmallAvatar {
          margin-right:calc(var(--widthRate) * 5);
        }

        p {
          margin-right:calc(var(--widthRate) * 5);
          margin-left:calc(var(--widthRate) * 5);
        }

        #PubName {
          margin-left:calc(var(--widthRate) * 5);
          max-width:calc(var(--widthRate) * 200);
          text-overflow: ellipsis;
          overflow: hidden;
        }

        #noMargin {
          margin-left:calc(var(--widthRate) * 5);
        }

        #eye {
          width:calc(var(--widthRate) * 16);
          height:calc(var(--heightRate) * 16);
          margin-right: calc(var(--widthRate) * 5);
          margin-left: calc(var(--widthRate) * 5);
        }
      }
    }
  }

  .elPag {
    margin-top:calc(var(--heightRate) * 150);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>