<template>
  <div class="RankingList">
            <div class="rankCard" v-for="(rank, i) in RankingList" :key="rank.num">
                    <div v-if="rank.num<4" class="TopRank">
                        <img src="../../assets/images/rank/RANK_1.png" alt="" v-if="rank.num === 1" class="RankImage">
                        <img src="../../assets/images/rank/RANK_2.png" alt="" v-if="rank.num === 2" class="RankImage">
                        <img src="../../assets/images/rank/RANK_3.png" alt="" v-if="rank.num === 3" class="RankImage">
                        <div class="RankInfo">
                            <p class="RankTitle">{{rank.title}}</p>
                            <div class="RankSign">
                                <div class="PostTag">#{{rank.postTag}}</div>
                                <p id="PubName">{{rank.author}}</p>
                                <img src="../../assets/images/small_icon/icon_浏览量.png" alt="" id="eye">
                                <p>{{rank.view}}</p>
                                <img src="../../assets/images/label_head/精华_w30px.png" class="EliteTag" v-if="(!rank.isHot) && (rank.isElite)"></img>
                                <img src="../../assets/images/label_head/热门_w30px.png" class="HotTag" v-else-if="rank.isHot"></img>
                            </div>
                        </div>
                    </div>
                    <div v-else class="EvalRank">
                        <p class="RankNum"> {{rank.num}} </p>
                        <p class="RankTitle">{{rank.title}}</p>
                        <div class="tags">
                            <img src="../../assets/images/label_head/精华_w30px.png" class="EliteTag" v-if="(!rank.isHot) && (rank.isElite)"></img>
                            <img src="../../assets/images/label_head/热门_w30px.png" class="HotTag" v-else-if="rank.isHot"></img>
                        </div>
                    </div>
            </div>
          </div>
</template>

<script>
export default {
  data() {
    return {
      RankingList: [
        {
          num: 1,
          title: "纯手工自制一个十六位RISC架构CPU",
          author: "Rick_A",
          view: 2426,
          isHot: true,
          isElite: false,
          postTag: "灌水区",
        },
        {
          num: 2,
          title: "纯手工自制一个十六位RISC架构CPU",
          author: "Rick_A",
          view: 2426,
          isHot: false,
          isElite: true,
          postTag: "灌水区",
        },
        {
          num: 3,
          title: "纯手工自制一个十六位RISC架构CPU",
          author: "Rick_A",
          view: 2426,
          isHot: true,
          isElite: true,
          postTag: "灌水区",
        },
        {
          num: 4,
          title: "纯手工自制一个十六位RISC架构CPU",
          author: "Rick_A",
          view: 2426,
          isHot: true,
          isElite: false,
          postTag: "灌水区",
        },
        {
          num: 5,
          title: "纯手工自制一个十六位RISC架构CPU",
          author: "Rick_A",
          view: 2426,
          isHot: false,
          isElite: true,
          postTag: "灌水区",
        },
        {
          num: 6,
          title: "纯手工自制一个十六位RISC架构CPU",
          author: "Rick_A",
          view: 2426,
          isHot: false,
          isElite: true,
          postTag: "灌水区",
        },
        {
          num: 7,
          title: "纯手工自制一个十六位RISC架构CPU",
          author: "Rick_A",
          view: 2426,
          isHot: false,
          isElite: false,
          postTag: "灌水区",
        },
        {
          num: 8,
          title: "纯手工自制一个十六位RISC架构CPU",
          author: "Rick_A",
          view: 2426,
          isHot: false,
          isElite: false,
          postTag: "灌水区",
        },
        {
          num: 9,
          title: "纯手工自制一个十六位RISC架构CPU",
          author: "Rick_A",
          view: 2426,
          isHot: false,
          isElite: false,
          postTag: "灌水区",
        },
        {
          num: 10,
          title: "纯手工自制一个十六位RISC架构CPU",
          author: "Rick_A",
          view: 2426,
          isHot: false,
          isElite: false,
          postTag: "灌水区",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.RankingList {
  margin-top: calc(100vh / 1080px * 15px);

  .TopRank {
    width: calc(1536px / 1920px * 280px);
    height: calc(100vh / 1080px * 37px);
    display: flex;
    margin-bottom: calc(100vh / 1080px * 40px);
    .RankImage {
      width: calc(1536px / 1920px * 37px);
      height: calc(100vh / 1080px * 37px);
      margin-right: calc(100vh / 1080px * 28px);
    }

    .RankInfo {
      display: flex;
      flex-wrap: wrap;

      .RankTitle {
        height: calc(100vh / 1080px * 22px);
        margin-bottom:5px;
        max-width: calc(1536px / 1920px * 215px);
        font-size: 12px;
        font-family: "HarmonyOS_Sans_SC_Medium";
        letter-spacing: 1px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #808080;
      }

      .RankSign {
        height: calc(100vh / 1080px * 19px);
        display: flex;
        font-family: "HarmonyOS_Sans_SC_Thin";
        font-size: 5px;
        align-items: center;

        .PostTag {
          width: calc(1536px / 1920px * 70px);
          max-width: calc(1536px / 1920px * 100px);
          height: calc(100vh / 1080px * 20px);
          background-color: #01d1bb;
          color: #a6a6a6;
          border-radius: 15px;
          color: #ffffff;
          font-size: 6px;
          margin-right: calc(1536px / 1920px * 4px);
          overflow: hidden;
          text-overflow: ellipsis;
          font-family: "HarmonyOS_Sans_SC_Regular";
        }

        p {
          margin-right: calc(1536px / 1920px * 5px);
          margin-left: calc(1536px / 1920px * 5px);
        }

        #PubName {
          max-width: calc(1536px / 1920px * 40px);
          text-overflow: ellipsis;
          overflow: hidden;
        }

        #noMargin {
          margin-left: calc(1536px / 1920px * 5px);
        }

        #eye {
          width: calc(1536px / 1920px * 10px);
          height: calc(100vh / 1080px * 10px);
          margin-right: calc(1536px / 1920px * 5px);
          margin-left: calc(1536px / 1920px * 5px);
        }

        .EliteTag,
        .HotTag,
        .TopTag {
          width: calc(1536px / 1920px * 30px);
          height: calc(100vh / 1080px * 20px);
          margin-left: calc(1536px / 1920px * 5px);
        }
      }
    }
  }

  .EvalRank {
    width: calc(1536px / 1920px * 270px);
    height: calc(100vh / 1080px * 22px);
    margin-left: calc(1536px / 1920px * 0px);
    margin-bottom: calc(100vh / 1080px * 20px);
    display: flex;
    align-items: center;
    position: relative;
    .RankNum {
      width: calc(1536px / 1920px * 30px);
      height: calc(100vh / 1080px * 20px);
      margin-right: calc(1536px / 1920px * 14px);
      background-image: url(../../assets/images/rank/RANK_Circle.png);
      background-size: contain;
      background-repeat:no-repeat;
      background-position:center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #ffffff;
    }

    .RankTitle {
      height: calc(100vh / 1080px * 22px);
      max-width: calc(1536px / 1920px * 190px);
      line-height: calc(100vh / 1080px * 22px);
      font-size: 12px;
      font-family: "HarmonyOS_Sans_SC_Medium";
      letter-spacing: 1px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #808080;
    }

    .tags {
      position: absolute;
      right: 0%;

      .EliteTag,
      .HotTag,
      .TopTag {
        width: calc(1536px / 1920px * 30px);
        height: calc(100vh / 1080px * 20px);
        margin-left: calc(1536px / 1920px * 5px);
      }
    }
  }
}
</style>