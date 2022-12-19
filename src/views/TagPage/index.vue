<template>
  <div class="tagPage">
    <div class="tagInfoBlock">
      <img
        src="../../assets/images/tag_example/灌水.jpeg"
        class="tagImg"
        alt=""
      />
      <div class="tagSlide1">
        <div class="tagTitle">灌水区</div>
        <div class="tagBrief">
          <div>简介:</div>
          <div>
            阿松大嘎是的噶沙司大噶撒大噶撒大噶大概阿桑的歌阿斯顿噶啥的噶啥大噶山豆根阿斯顿噶啥的噶啥大哥阿桑的歌阿桑的歌阿桑的歌阿斯顿噶山豆根撒旦！
          </div>
        </div>
      </div>
      <div class="tagSlide2">
        <div class="tagInfo">贴子数: 2351</div>
        <div class="tagInfo">热度: 123</div>
        <div class="tagInfo">最新动态: 两分钟前</div>
      </div>
      <div class="tagSlide3">
        <el-button class="btnColor" round icon="el-icon-edit-outline">
          发帖
        </el-button>
      </div>
    </div>
    <div class="tagContentBlock">
      <div class="newPostBlock">
        <RecommendationCards></RecommendationCards>
      </div>
      <div class="rightSlide">
        <BriefRecommandBlock></BriefRecommandBlock>
        <HotSection></HotSection>
      </div>
    </div>
  </div>
</template>

<script>
import HotSection from "../../components/HotSection/index.vue";
import BriefRecommandBlock from "./BriefRecommandBlock.vue";
import RecommendationCards from "../../components/RecommendationCards.vue";
export default {
  components: {
    HotSection,
    BriefRecommandBlock,
    RecommendationCards,
  },
};
</script>

<style lang="scss" scoped>
.tagPage {
  background-color: #f2f2f2;
  padding-top: 105px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(var(--heightRate) * 1642);

  .tagInfoBlock {
    width: calc(var(--widthRate) * 1450);
    min-height: calc(var(--heightRate) * 161);
    border-radius: calc(var(--heightRate) * 10);
    background: rgba(255, 255, 255, 1);
    border: calc(var(--heightRate) * 1) solid rgba(128, 128, 128, 1);
    display: flex;
    align-items: center;

    .tagImg {
      width: calc(var(--heightRate) * 108);
      height: calc(var(--heightRate) * 108);
      border-radius: calc(var(--heightRate) * 10);
      margin-left: calc(var(--widthRate) * 53);
      border: calc(var(--heightRate) * 1) solid #a6a6a6;
    }

    .tagSlide1 {
      width: calc(var(--heightRate) * 515);
      height: calc(var(--heightRate) * 115);
      margin-left: calc(var(--widthRate) * 53);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .tagTitle {
      }

      .tagBrief {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        > div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
      }
    }

    .tagSlide2 {
      width: calc(var(--heightRate) * 232);
      height: calc(var(--heightRate) * 75);
      margin-left: calc(var(--widthRate) * 180);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .tagSlide3 {
      width: calc(var(--heightRate) * 146);
      height: calc(var(--heightRate) * 113);
      margin-left: calc(var(--widthRate) * 200);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .tagContentBlock {
    width: calc(var(--widthRate) * 1450);
    height: calc(var(--heightRate) * 1004);
    margin-top: calc(var(--heightRate) * 45);
    margin-bottom: calc(var(--heightRate) * 45);
    display: flex;

    .newPostBlock {
      width: calc(var(--widthRate) * 1059);
      height: calc(var(--heightRate) * 1004);
      border-radius: calc(var(--heightRate) * 10);
      background: rgba(255, 255, 255, 1);
      border: calc(var(--heightRate) * 1) solid rgba(128, 128, 128, 1);
      margin-right: calc(var(--widthRate) * 88);
    }

    .rightSlide {
      width: calc(var(--widthRate) * 303);
      height: calc(var(--heightRate) * 1004);
    }
  }
}
</style>