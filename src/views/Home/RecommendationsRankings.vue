<template>
  <div class="RecommendationsRankings">
        <div class="Recommendations">
          <img src="../../assets/images/label_head/推荐.png" 
          alt="" 
          style="width:70px;margin-top:15px;"/>
          <RecommendationCards></RecommendationCards>
        </div>
        <div class="DividingLine">
          <img src="../../assets/images/small_icon/分割线.png"
           alt="" 
           style="width:5px;height:540px;
           margin-top:-35px;"/>
        </div>
        <div class="Rankings">
          <img src="../../assets/images/label_head/排行.png"
          alt=""
           style="margin-bottom: 25px;
           margin-top:15px;width:70px"/>
          <RankingList></RankingList>
        </div>
      </div>
</template>

<script>
import RankingList from './RankingList.vue';
import RecommendationCards from './RecommendationCards.vue';
export default {
  components: { RankingList, RecommendationCards },

};
</script>

<style lang="scss" scoped>
.RecommendationsRankings {
  width:  calc(1536px / 1920px * 1020px);
  height: calc(100vh / 1080px * 840px);
  margin-left:  calc(1536px / 1920px * 20px);
  display: flex;
  .Recommendations {
    width: calc(1536px / 1920px * 670px);
    height:  calc(100vh / 1080px * 840px);
    display: flex;
    align-items: flex-start;
    flex-direction: column;

  }

  .DividingLine {
    width: calc(1536px / 1920px * 55px);
    height: calc(100vh / 1080px * 840px);
    margin-top:calc(100vh / 1080px * 78px);
  }

  .Rankings {
    width:calc(1536px / 1920px * 295px) ;
    height: calc(100vh / 1080px * 840px);
    display: flex;
    align-items: flex-start;
    flex-direction: column;

  }
}
</style>