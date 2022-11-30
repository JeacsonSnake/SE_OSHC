<template>
  <div class="RecommendationsRankings">
        <div class="Recommendations">
          <img src="../../assets/images/label_head/推荐.png" alt="" />
          <RecommendationCards></RecommendationCards>
        </div>
        <div class="DividingLine">
          <img src="../../assets/images/small_icon/分割线.png" alt="" />
        </div>
        <div class="Rankings">
          <img src="../../assets/images/label_head/排行.png" alt="" style="margin-bottom: 25px"/>
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
  width: 1020px;
  height: 840px;
  margin-left: 20px;
  display: flex;
  .Recommendations {
    width: 670px;
    height: 840px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

  }

  .DividingLine {
    width: 55px;
    height: 840px;
    margin-top: 78px;
  }

  .Rankings {
    width: 295px;
    height: 840px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

  }
}
</style>