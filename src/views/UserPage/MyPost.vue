<template>
  <div class="postPage">
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
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
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
export default {};
</script>

<style lang="scss" scoped>
.postPage {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/background/帖子背景.png");
  background-size: contain;
  border: 2px solid #808080;
  border-radius: 10px;
  position: relative;
  .RecommendationCards {
    width: 800px;
    height: 675px;
    margin-top: 80px;
    margin-left: 76px;

    .RecommendationCard {
      width: 800px;
      height: 210px;
      margin-top: 20px;
      color: #808080;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-bottom: 0.4px solid #a9a9a9;

      .TitleArea {
        width: inherit;
        display: flex;
        margin-bottom: 12px;
        .title {
          max-width: 445px;
          height: 22px;
          font-size: 20px;
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

      .BriefContentArea {
        width: 650px;
        height: 22px;

        .BriefContent {
          font-size: 12px;
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #00b6cc;
        }
      }

      .ImageGroup {
        height: 100px;
        margin-top: 2px;
        .CardImage {
          width: 152px;
          height: 100%;
          margin-right: 20px;
        }
      }

      .PublisherArea {
        display: flex;
        margin-top: 10px;
        align-items: center;
        font-family: "HarmonyOS_Sans_SC_Thin";

        .PostTags {
          display: flex;
          align-items: center;
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

  .elPag {
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>