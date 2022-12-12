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
  width:  calc(1536px / 1920px * 325px);
  height: calc(100vh / 1080px * 935px);
  display: inline-block;

  margin-left: calc(1536px / 1920px * 214px);
  #WebIconImage {
    width: 100%;
    height:fit-content;
  }
}

.rightSlide {
  width: calc(1536px / 1920px * 1080px);
  height: calc(100vh / 1080px * 1038px);
  // margin-top:calc(100vh / 1080px * 115px);
  margin-left: calc(1536px / 1920px * 107px);
  display: inline-block;
  border: 1px solid #808080;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #ffffff;
}

.BulletinBoard {
  position: relative;
  width: calc(1536px / 1920px * 1000px);
  height:  calc(100vh / 1080px * 39px);
  border: 1px solid #808080;
  border-radius: 10px;
  box-sizing: border-box;
  margin-left:calc(1536px / 1920px * 40px);
  margin-top: calc(100vh / 1080px * 37px);
  margin-bottom: calc(100vh / 1080px * 25px);
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