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
  margin-top: 25px;

  .TopRank {
    width: 280px;
    height: 37px;
    display: flex;
    margin-bottom: 40px;

    .RankImage {
      width: 37px;
      height: 37px;
      margin-right: 28px;
    }

    .RankInfo {
      display: flex;
      flex-wrap: wrap;

      .RankTitle {
        height: 22px;
        max-width: 215px;
        font-size: 12px;
        font-family: "HarmonyOS_Sans_SC_Medium";
        letter-spacing: 1px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #808080;
      }

      .RankSign {
        height: 19px;
        display: flex;
        font-family: "HarmonyOS_Sans_SC_Thin";
        font-size: 8px;
        align-items: center;

        .PostTag {
          width: 70px;
          max-width: 100px;
          height: 15px;
          background-color: #01d1bb;
          color: #a6a6a6;
          border-radius: 15px;
          color: #ffffff;
          font-size: 8px;
          margin-right: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          font-family: "HarmonyOS_Sans_SC_Regular";
        }

        p {
          margin-right: 5px;
          margin-left: 5px;
        }

        #PubName {
          max-width: 40px;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        #noMargin {
          margin-left: 5px;
        }

        #eye {
          width: 10px;
          height: 10px;
          margin-right: 5px;
          margin-left: 5px;
        }

        .EliteTag,
        .HotTag,
        .TopTag {
          width: 30px;
          height: 20px;
          margin-left: 5px;
        }
      }
    }
  }

  .EvalRank {
    width: 270px;
    height: 22px;
    margin-left: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    position: relative;
    .RankNum {
      width: 18px;
      height: 18px;
      margin-right: 14px;
      background-image: url(../../assets/images/rank/RANK_Circle.png);
      background-size: contain;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #ffffff;
    }

    .RankTitle {
      height: 22px;
      max-width: 190px;
      line-height: 22px;
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
        width: 30px;
        height: 20px;
        margin-left: 5px;
      }
    }
  }
}
</style>