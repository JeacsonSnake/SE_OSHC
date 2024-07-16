<template>
  <div class="tagPage">
    <div class="tagInfoBlock">
      <img
        :src="
          tagInfo.tagImg
            ? tagInfo.tagImg
            : require('../../assets/images/tag_example/灌水.jpeg')
        "
        class="tagImg"
        alt=""
      />
      <div class="tagSlide1">
        <div class="tagTitle">{{ tagInfo.tagTitle }}</div>
        <div class="tagBrief">
          <div>简介:</div>
          <div>
            {{ tagInfo.briefContent ? tagInfo.briefContent : "暂无简介" }}
          </div>
        </div>
      </div>
      <div class="tagSlide2">
        <div class="tagInfo">贴子数: {{ tagInfo.tagPostNum }}</div>
        <div class="tagInfo">热度: {{ tagInfo.tagHot }}</div>
        <div class="tagInfo">
          最新动态: {{ tagInfo.lastPostTime ? tagInfo.lastPostTime : "暂无" }}
        </div>
      </div>
      <div class="tagSlide3">
        <el-button
          class="btnColor"
          round
          icon="el-icon-edit-outline"
          @click="toPostReasePage(tagInfo.tagId, tagInfo.tagTitle)"
        >
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
import RecommendationCards from "./RecommendationCards.vue";
export default {
  data() {
    return {
      id: "",
    };
  },

  components: {
    HotSection,
    BriefRecommandBlock,
    RecommendationCards,
  },

  methods: {
    toPostReasePage(id, title) {
      this.$router.push({ name: "PostRelease", params: { id, title } });
    },
  },

  computed: {
    tagInfo() {
      return this.$store.state.tagInfo;
    },
  },

  created() {
    const tagId = this.$route.params.tagId;
    // console.log(tagId);
    this.id = tagId;
    if (tagId) {
      this.$store.commit("SETTAGID", tagId);
      this.id = tagId;
    } else {
        this.id = this.$store.state.tagId;
    }
    this.$store.dispatch("getTag", this.$store.state.tagId);
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
  min-height: calc(var(--heightRate) * 1642);
  height: fit-content;

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
    height: fit-content;
    margin-top: calc(var(--heightRate) * 45);
    margin-bottom: calc(var(--heightRate) * 45);
    display: flex;

    .newPostBlock {
      width: calc(var(--widthRate) * 1059);
      height: fit-content;
      min-height: calc(var(--widthRate) * 1037);
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