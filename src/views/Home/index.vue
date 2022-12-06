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
export default {

  components: {
    HotSection,
    RecommendationsRankings,
  },
};
</script>

<style lang="scss" scoped>
.UNOColor {
  color: #808080;
}

.homePage {
  background-color: #f2f2f2;
  padding-top: 115px;
  display: flex;
  width: 100%;
  height: 100vh;
}

.leftSlide {
  width: 325px;
  height: 935px;
  display: inline-block;
  margin-left: 213px;
  #WebIconImage {
    width: 100%;
    height: fit-content;
  }
}

.rightSlide {
  width: 1080px;
  height: 938px;
  margin-left: 107px;
  display: inline-block;
  border: 1px solid #808080;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #ffffff;
}

.BulletinBoard {
  position: relative;
  width: 1000px;
  height: 26px;
  border: 1px solid #808080;
  border-radius: 10px;
  box-sizing: border-box;
  margin-left: 40px;
  margin-top: 37px;
  margin-bottom: 25px;
  #BulletinTag {
    position: absolute;
    left: 0%;
    top: -5%;
  }

  .BulletinContent {
  }
}


</style>