<template>
  <div class="homePage">
    <div class="leftSlide">
      <img
        src="../../assets/images/logo/主页面与登陆注册页面网站商标.png"
        alt=""
        id="WebIconImage"
      />
      <HotSection></HotSection>
    </div>
    <div class="rightSlide">
      <div class="BulletinBoard">
        <img src="../../assets/images/label_head/公告标签.png" alt="" id="BulletinTag" />
        <div class="BulletinContent">
          <p>push to devA ,try connect</p>
        </div>
      </div>
      <RecommendationsRankings></RecommendationsRankings>
    </div>
  </div>
</template>

<script>
import HotSection from "@/components/HotSection/index.vue";
import RecommendationsRankings from './RecommendationsRankings.vue';
import {test} from '../../api/index'
export default {

  components: {
    HotSection,
    RecommendationsRankings,
  },

  created() {
    test().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
  }
};
</script>

<style lang="scss" scoped>
.UNOColor {
  color: #808080;
}

.homePage {
  background-color: #f2f2f2;
  padding-top: calc(var(--heightRate) * 115);
  display: flex;
  width: 100%;
  height: calc(var(--heightRate) * 1080);
}

.leftSlide {
  width:  calc(var(--widthRate) * 325);
  height: calc(var(--heightRate) * 938);
  display: inline-block;

  margin-left: calc(var(--widthRate) * 214);
  #WebIconImage {
    width: 100%;
    height:fit-content;
  }

  ::v-deep() .HotSection {
    .HotSectionContent {
        height: calc(var(--heightRate) * 724);
    }
  }
}

.rightSlide {
  width: calc(var(--widthRate) * 1080);
  height: calc(var(--heightRate) * 938);
  // margin-top:calc(100vh / 1080px * 115px);
  margin-left: calc(var(--widthRate) * 108);
  display: inline-block;
  border: calc(var(--heightRate) * 1) solid #808080;
  box-sizing: border-box;
  border-radius: calc(var(--heightRate) * 10);
  background-color: #ffffff;
}

.BulletinBoard {
  position: relative;
  width: calc(var(--widthRate) * 1000);
  height:  calc(var(--heightRate) * 39);
  border: calc(var(--heightRate) * 1) solid #808080;
  border-radius: calc(var(--heightRate) * 10);
  box-sizing: border-box;
  margin-left:calc(var(--widthRate) * 40);
  margin-top: calc(var(--heightRate) * 37);
  margin-bottom: calc(var(--heightRate) * 25);
  #BulletinTag {
    position: absolute;
    left: -0.5%;
    top: -3%;
  }

  .BulletinContent {
    height:50px;
  }
}


</style>