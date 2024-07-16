<template>
  <div class="RecommendationsRankings">
    <div class="Recommendations">
      <img
        src="../../assets/images/label_head/推荐.png"
        alt=""
        style="width: 70px; margin-top: 15px"
      />
      <RecommendationCards></RecommendationCards>
    </div>
    <div class="DividingLine">
      <img
        src="../../assets/images/small_icon/分割线.png"
        alt=""
        style="width: 5px; height: 540px; margin-top: -35px"
      />
    </div>
    <div class="Rankings">
      <img
        src="../../assets/images/label_head/排行.png"
        alt=""
        style="margin-bottom: 25px; margin-top: 15px; width: 70px"
      />
      <RankingList></RankingList>
    </div>
  </div>
</template>

<script>
import RankingList from "./RankingList.vue";
import RecommendationCards from "./RecommendationCards.vue";
export default {
  components: { RankingList, RecommendationCards },
};
</script>

<style lang="scss" scoped>
.RecommendationsRankings {
  width: calc(var(--widthRate) * 1020);
  height: calc(var(--heightRate) * 840);
  margin-left: calc(var(--widthRate) * 20);
  display: flex;
  .Recommendations {
    width: calc(var(--widthRate) * 670);
    height: calc(var(--heightRate) * 840);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .DividingLine {
    width: calc(var(--widthRate) * 55);
    height: calc(var(--heightRate) * 840);
    margin-top: calc(var(--heightRate) * 78);
  }

  .Rankings {
    width: calc(var(--widthRate) * 295);
    height: calc(var(--heightRate) * 840);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>