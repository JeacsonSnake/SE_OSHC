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
          <p>sssssssssssssss</p>
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