<template>
  <div class="PostContent">
    <div class="leftSlide">
      <div class="authorBlock">
        <div class="avatarName">
          <el-avatar :size="85" :src="circleUrl" class="Avatar"></el-avatar>
          <div class="nameBrief">
            <p class="name">sdfgasdgasdgf</p>
            <div class="briefGender">
              <i class="el-icon-male gender"></i>
              <p class="brief">asdgasdgasdgasdgsfdggdfgsd</p>
            </div>
          </div>
        </div>
        <p class="follow">32 关注 | 233 粉丝</p>
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
          <div class="title">纯手工自制一个十六位RISC架构CPU</div>
        <img src="../../assets/images/label_head/精华_w30px.png" class="EliteTag"></img>
        <img src="../../assets/images/label_head/热门_w30px.png" class="HotTag"></img>
        <img src="../../assets/images/label_head/置顶_w30px.png" class="TopTag"></img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotSection from "../../components/HotSection/index.vue";
export default {
  components: {
    HotSection,
  },
};
</script>

<style lang="scss" scoped>
.PostContent {
  background-color: #f2f2f2;
  padding-top: 120px;
  display: flex;
  width: 100%;
  height: 1900px;

  .leftSlide {
    width: 410px;
    height: 1530px;
    margin-left: 215px;

    .authorBlock {
      width: 410px;
      height: 260px;
      margin-bottom: 40px;
      background-color: #fff;
      border-radius: 10px;
      border: 0.4px solid #808080;
      display: flex;
      flex-direction: column;
      align-items: center;

      .avatarName {
        width: 330px;
        height: 85px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 35px;
        margin-left: 35px;
        margin-right: 27px;
        margin-bottom: 15px;

        .nameBrief {
          width: 225px;
          height: 65px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          .name {
            height: 30px;
            width: 225px;
            font-size: 24px;
            line-height: 25px;
            text-align: left;
          }

          .briefGender {
            width: 225px;
            height: 25px;
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;

            .gender {
              width: 16px;
              height: 16px;
              font-size: 16px;
              line-height: 16px;
              color: #1eb2e8;
            }

            .brief {
              margin-left: 5px;
              max-width: 180px;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #a6a6a6;
            }
          }
        }
      }

      .follow {
        width: 280px;
        height: 30px;
        font-size: 20px;
        margin-bottom: 30px;
      }

      .ipFo {
        display: flex;
        width: 280px;
        height: 40px;

        .ip {
          width: 88px;
          height: 40px;
          line-height: 40px;
          font-size: 24px;
        }

        .btnColor {
          width: 145px;
          height: 40px;
          line-height: 12px;
          font-family: "HarmonyOS_Sans_SC_Medium";
          margin-left: 44px;
          font-size: 24px;
          background-color: #b4c9d4;
          color: #fff;
          text-align: center;
        }
      }
    }

    .rPostBlock {
      width: 410px;
      height: 590px;
      display: flex;
      flex-direction: column;
      .tags {
        height: 30px;
        width: fit-content;
      }

      .rPostFloor {
        width: 410px;
        height: 560px;
        background-color: #fff;
        border-radius: 0 10px 10px 10px;
        border: 0.4px solid #808080;
      }
    }
  }

  .rightSlide {
    margin-left: 75px;

    .post {
      width: 1000px;
      height: 1020px;
      background-color: #fff;
      border-radius: 10px;
      border: 0.4px solid #808080;
      padding-left: 50px;

      .titleWithTag {
        max-width: 900px;
        height: 42px;
        line-height: 42px;
        font-size: 36px;
        font-family: "HarmonyOS_Sans_SC_Medium";
        display: flex;
        align-items: center;
        margin-top: 40px;

        .title {
          max-width: 795px;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-right: 15px;
        }

        .EliteTag,
        .HotTag,
        .TopTag {
          width: 30px;
          height: 20px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>