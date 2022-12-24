<template>
  <div class="PostContent">
    <div class="leftSlide">
      <div class="authorBlock">
        <div class="avatarName">
          <el-avatar :size="59" :src="postInfo.avatar" class="Avatar"></el-avatar>
          <div class="nameBrief">
            <p class="name">{{postInfo.authorName}}</p>
            <div class="briefGender">
              <i class="el-icon-male gender"></i>
              <p class="brief">------------------</p>
            </div>
          </div>
        </div>
        <p class="follow">无 关注 | 有 粉丝</p>
        <div class="ipFo">
          <p class="ip">
            <i class="el-icon-location-information"></i>
            福建
          </p>
          <el-button class="btnColor" round> 已关注 </el-button>
        </div>
      </div>
      <!-- <div class="rPostBlock">
        <img src="../assets/images/PostTag.png" alt="" class="tags" />
        <div class="rPostFloor"></div>
      </div> -->
      <HotSection></HotSection>
    </div>

    <div class="rightSlide">
      <div class="post">
        <div class="titleWithTag">
          <div class="title">{{postInfo.postTitle}}</div>
                <img src="../../assets/images/label_head/精华_w30px.png" class="EliteTag" v-show="postInfo.isEssPost"></img>
                <img src="../../assets/images/label_head/热门_w30px.png" class="HotTag" v-show="postInfo.isHotPost"></img>
                <img src="../../assets/images/label_head/置顶_w30px.png" class="TopTag" v-show="postInfo.isTop"></img>
        </div>

        <div class="bar-content">
            <div class="authorName">{{postInfo.authorName}}</div>
                    <img class="article-time-img" src="../../assets/images/small_icon/icon_时间.png" alt="">
                    <span class="title">于</span>
                    <span class="time">{{postInfo.postTime ? postTime : "2022-12-23 13:28:43"}}</span>
                    <span class="title">发布</span>
                    <img class="article-read-img" src="../../assets/images/small_icon/icon_浏览量.png" alt="">
                    <span class="read-count">{{postInfo.viewNum}}</span>
                    <span class="title">浏览</span>
        </div>

        <div class="postContentBlock" v-html="postInfo.postContent">

        </div>
      </div>

      <div class="authorBlock">
            <el-avatar :size="45" :src="postInfo.avatar" class="Avatar"></el-avatar>
            <div class="authorName">{{postInfo.authorName}}</div>
            <div class="bar-content">
                    <img class="article-time-img" src="../../assets/images/small_icon/icon_时间.png" alt="">
                    <span class="title">于</span>
                    <span class="time">{{postInfo.postTime ? postTime : "2022-12-23 13:28:43"}}</span>
                    <span class="title">发布</span>
                    <img class="article-read-img" src="../../assets/images/small_icon/icon_浏览量.png" alt="">
                    <span class="read-count">{{postInfo.viewNum}}</span>
                    <span class="title">浏览</span>
        </div>
            <el-button class="btnColor" round> 收藏 </el-button>
      </div>

      <div class="commentSection">
        <div class="textBlock">
            <div class="title">
                评论
            </div>
            <el-input
                placeholder="请输入内容"
                v-model="commentNow"
                class="textInput"
                >
            </el-input>
            <el-button class="btnColor" round @click="sendComment()"> 发布 </el-button>
        </div>
        <div class="commentBlock">
            <el-empty description="没有回复" :image-size="300"></el-empty>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotSection from "../../components/HotSection/index.vue";
import { sendCommentApi } from "../../api";
export default {
  data() {
    return {
      commentNow: "",
    };
  },

  methods: {
    async sendComment() {
      const userDetail = JSON.parse(window.localStorage.getItem("userDetail"));
      let data = {
        postId: this.postInfo.postId,
        userId: userDetail.userId,
        postComment: this.commentNow,
        commentFlour: this.commentObj.resultArrList.length ? this.commentObj.resultArrList.length : 1,
      };
      await sendCommentApi(data)
        .then((res) => {
          if (res.code == 200) {
            this.$message({
              message: "评论成功！等管理员通过就可以看到评论了！",
              type: "success",
            });
            this.commentNow = ""
          } else {
            throw "服务器抽风了，大概。。。";
          }
        })
        .catch((err) => {});
    },
  },

  computed: {
    postInfo() {
      return this.$store.state.postInfo;
    },
    commentObj() {
      return this.$store.state.commentObj;
    },
  },

  components: {
    HotSection,
  },

  created() {
    const postId = this.$route.params.postId;
    console.log(postId);
    if (postId) {
      this.$store.commit("SETPOSTID", postId);
    }
    this.$store.dispatch("getPostCotent", this.$store.state.postId);
  },
};
</script>

<style lang="scss" scoped>
.PostContent {
  background-color: #f2f2f2;
  padding-top: calc(var(--heightRate) * 120);
  display: flex;
  width: 100%;
  height: fit-content;

  .leftSlide {
    width: calc(var(--widthRate) * 410);
    height: calc(var(--heightRate) * 1530);
    margin-left: calc(var(--widthRate) * 215);

    .authorBlock {
      width: calc(var(--widthRate) * 410);
      height: calc(var(--heightRate) * 260);
      margin-bottom: calc(var(--heightRate) * 40);
      background-color: #fff;
      border-radius: calc(var(--heightRate) * 10);
      border: calc(var(--heightRate) * 1) solid #808080;
      display: flex;
      flex-direction: column;
      align-items: center;

      .avatarName {
        width: calc(var(--widthRate) * 330);
        height: calc(var(--heightRate) * 85);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: calc(var(--heightRate) * 35);
        margin-left: calc(var(--widthRate) * 35);
        margin-right: calc(var(--widthRate) * 27);
        margin-bottom: calc(var(--heightRate) * 20);

        .nameBrief {
          width: calc(var(--widthRate) * 225);
          height: calc(var(--heightRate) * 80);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          .name {
            height: calc(var(--heightRate) * 30);
            width: calc(var(--widthRate) * 225);
            font-size: calc(var(--heightRate) * 30);
            line-height: calc(var(--heightRate) * 25);
            margin-bottom: calc(var(--heightRate) * 10);
            text-align: left;
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .briefGender {
            width: calc(var(--widthRate) * 225);
            height: calc(var(--heightRate) * 25);
            margin-top: calc(var(--heightRate) * 10);
            display: flex;
            flex-direction: row;
            align-items: center;

            .gender {
              width: calc(var(--widthRate) * 16);
              height: calc(var(--heightRate) * 16);
              font-size: calc(var(--heightRate) * 14);
              line-height: calc(var(--heightRate) * 16);
              color: #1eb2e8;
            }

            .brief {
              margin-left: calc(var(--widthRate) * 5);
              max-width: calc(var(--widthRate) * 180);
              overflow: hidden;
              text-overflow: ellipsis;
              color: #a6a6a6;
            }
          }
        }
      }

      .follow {
        width: calc(var(--widthRate) * 280);
        height: calc(var(--heightRate) * 30);
        font-size: calc(var(--heightRate) * 24);
        margin-bottom: calc(var(--heightRate) * 30);
      }

      .ipFo {
        display: flex;
        width: calc(var(--widthRate) * 280);
        height: calc(var(--heightRate) * 40);

        .ip {
          width: calc(var(--widthRate) * 88);
          height: calc(var(--heightRate) * 40);
          line-height: calc(var(--heightRate) * 40);
          font-size: calc(var(--heightRate) * 24);
        }

        .btnColor {
          width: calc(var(--widthRate) * 145);
          height: calc(var(--heightRate) * 40);
          line-height: calc(var(--heightRate) * 5);
          font-family: "HarmonyOS_Sans_SC_Medium";
          margin-left: calc(var(--widthRate) * 44);
          font-size: calc(var(--heightRate) * 24);
          background-color: #b4c9d4;
          color: #fff;
          text-align: center;
        }
      }
    }

    // .rPostBlock {
    //   width: calc(var(--widthRate) * 410);
    //   height: calc(var(--heightRate) * 590);
    //   display: flex;
    //   flex-direction: column;
    //   .tags {
    //     height: calc(var(--heightRate) * 30);
    //     width: fit-content;
    //   }

    //   .rPostFloor {
    //     width: calc(var(--widthRate) * 410);
    //     height: calc(var(--heightRate) * 560);
    //     background-color: #fff;
    //     border-radius: 0 calc(var(--heightRate) * 10) calc(var(--heightRate) * 10) calc(var(--heightRate) * 10);
    //     border: calc(var(--heightRate) * 1) solid #808080;
    //   }
    // }
  }

  .rightSlide {
    margin-left: calc(var(--widthRate) * 75);
    margin-bottom: calc(var(--heightRate) * 40);
    .post {
      width: calc(var(--widthRate) * 1000);
      height: fit-content;
      background-color: #fff;
      border-radius: calc(var(--heightRate) * 10);
      border: calc(var(--heightRate) * 1) solid #808080;
      padding-left: calc(var(--widthRate) * 50);

      .titleWithTag {
        max-width: calc(var(--widthRate) * 900);
        height: calc(var(--heightRate) * 42);
        line-height: calc(var(--heightRate) * 42);
        font-size: calc(var(--heightRate) * 36);
        font-family: "HarmonyOS_Sans_SC_Medium";
        display: flex;
        align-items: center;
        margin-top: calc(var(--heightRate) * 40);
        margin-bottom: calc(var(--heightRate) * 10);

        .title {
          max-width: calc(var(--widthRate) * 795);
          overflow: hidden;
          text-overflow: ellipsis;
          margin-right: calc(var(--widthRate) * 15);
        }

        .EliteTag,
        .HotTag,
        .TopTag {
          width: calc(var(--widthRate) * 30);
          height: calc(var(--heightRate) * 20);
          margin-right: calc(var(--widthRate) * 5);
        }
      }

      .bar-content {
        max-width: calc(var(--widthRate) * 900);
        height: calc(var(--heightRate) * 18);
        line-height: calc(var(--heightRate) * 15);
        font-size: calc(var(--heightRate) * 17);
        font-family: "HarmonyOS_Sans_SC_Medium";
        display: flex;
        align-items: center;
        margin-top: calc(var(--heightRate) * 4);
        margin-bottom: calc(var(--heightRate) * 40);

        .authorName,
        .article-time-img,
        .article-read-img,
        .title,
        .read-count,
        .time {
          margin-right: calc(var(--widthRate) * 5);
        }

        .article-time-img,
        .article-read-img {
          height: 100%;
        }
      }

      .postContentBlock {
        width: calc(var(--widthRate) * 955);
        height: fit-content;
        margin-bottom: calc(var(--widthRate) * 40);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: start;
        text-indent: 2em;

        ::v-deep() p {
          img {
            width: 100%;
            display: flex;
            align-items: center;
          }
        }
      }
    }

    .authorBlock {
      width: calc(var(--widthRate) * 1000);
      height: calc(var(--heightRate) * 80);
      background-color: #fff;
      border-radius: calc(var(--heightRate) * 10);
      border: calc(var(--heightRate) * 1) solid #808080;
      padding-left: calc(var(--widthRate) * 50);
      margin-top: calc(var(--heightRate) * 40);
      display: flex;
      align-items: center;
      justify-content: space-around;

      .authorName {
        margin-left: calc(var(--widthRate) * 10);
        line-height: calc(var(--heightRate) * 15);
        font-size: calc(var(--heightRate) * 26);
      }

      .bar-content {
        max-width: calc(var(--widthRate) * 900);
        height: calc(var(--heightRate) * 18);
        line-height: calc(var(--heightRate) * 15);
        font-size: calc(var(--heightRate) * 17);
        font-family: "HarmonyOS_Sans_SC_Medium";
        margin-left: calc(var(--widthRate) * 44);
        display: flex;
        align-items: center;

        .article-time-img,
        .article-read-img,
        .title,
        .read-count,
        .time {
          margin-right: calc(var(--widthRate) * 5);
        }

        .article-time-img,
        .article-read-img {
          height: 100%;
        }
      }

      .btnColor {
        width: calc(var(--widthRate) * 105);
        height: calc(var(--heightRate) * 40);
        line-height: calc(var(--heightRate) * 5);
        font-family: "HarmonyOS_Sans_SC_Medium";
        margin-left: calc(var(--widthRate) * 44);
        font-size: calc(var(--heightRate) * 24);
        background-color: #b4c9d4;
        color: #fff;
        text-align: center;
      }
    }

    .commentSection {
      width: calc(var(--widthRate) * 1050);
      height: fit-content;
      background-color: #fff;
      border-radius: calc(var(--heightRate) * 10);
      border: calc(var(--heightRate) * 1) solid #808080;
      margin-top: calc(var(--heightRate) * 40);

      .textBlock {
        width: 100%;
        display: flex;
        height: fit-content;
        margin-top: calc(var(--widthRate) * 44);
        margin-bottom: calc(var(--widthRate) * 44);
        align-items: center;

        .title {
          width: calc(var(--widthRate) * 100);
          height: calc(var(--heightRate) * 40);
          line-height: calc(var(--heightRate) * 40);
          font-family: "HarmonyOS_Sans_SC_Medium";
          margin-left: calc(var(--widthRate) * 44);
          font-size: calc(var(--heightRate) * 24);
          color: #383838;
          text-align: center;
        }

        .btnColor {
          width: calc(var(--widthRate) * 105);
          height: calc(var(--heightRate) * 40);
          line-height: calc(var(--heightRate) * 5);
          font-family: "HarmonyOS_Sans_SC_Medium";
          margin-left: calc(var(--widthRate) * 30);
          margin-right: calc(var(--widthRate) * 30);
          font-size: calc(var(--heightRate) * 24);
          background-color: #fbfafa;
          color: #383838;
          text-align: center;
        }
      }

      .commentBlock {
        width: calc(var(--widthRate) * 1050);
        height: fit-content;
        background-color: #fff;
        border-radius: calc(var(--heightRate) * 10);
        margin-top: calc(var(--heightRate) * 20);
      }
    }
  }
}
</style>