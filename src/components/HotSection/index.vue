<template>
  <div class="HotSection">
    <img src="../../assets/images/label_head/HotTag.png" 
    alt="" id="HotTag" />
    <div class="HotSectionContent">
      <div
        class="HotSectionCard"
        v-for="(HotSection, i) in HotSectionData"
        :key="i"
        @click="toTagPage(HotSection.tagId)"
      >
        <img :src="HotSection.tagImg ? HotSection.tagImg : require('../../assets/images/tag_example/灌水.jpeg') " alt="" />
        <div class="HotSectionInfo">
          <p class="title">{{ HotSection.tagTitle }}</p>
          <p class="postNumber small">贴子数：{{ HotSection.tagPostNum }}</p>
          <p class="hotview small">热度：{{ HotSection.tagHot }}</p>
          <p class="lastReport small">
            最新动态：{{ timeAgo(HotSection.lastPostTime ? HotSection.lastPostTime : Date.now()) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { timeago } from "../../../utils/formatTime";
export default {
  data() {
    return {
    //   HotSectionData: [
    //     {
    //       tagId: 1,
    //       tagTitle: "ARDUINO",
    //       tagImg: require("../../assets/images/tag_example/ARDUINO.jpg"),
    //       tagPostNum: 200,
    //       tagHot: 2343,
    //       lastPostTime: "2022-8-18 20:02:09",
    //     },
    //     {
    //       tagId: 2,
    //       tagTitle: "ARDUINO",
    //       tagImg: require("../../assets/images/tag_example/ARDUINO.jpg"),
    //       tagPostNum: 200,
    //       tagHot: 2343,
    //       lastPostTime: "2022-8-18 20:02:09",
    //     },
    //     {
    //       tagId: 3,
    //       tagTitle: "ARDUINO",
    //       tagImg: require("../../assets/images/tag_example/ARDUINO.jpg"),
    //       tagPostNum: 200,
    //       tagHot: 2343,
    //       lastPostTime: "2022-8-18 20:02:09",
    //     },
    //     {
    //       tagId: 4,
    //       tagTitle: "ARDUINO",
    //       tagImg: require("../../assets/images/tag_example/ARDUINO.jpg"),
    //       tagPostNum: 200,
    //       tagHot: 2343,
    //       lastPostTime: "2022-8-18 20:02:09",
    //     },
    //     {
    //       tagId: 5,
    //       tagTitle: "ARDUINO",
    //       tagImg: require("../../assets/images/tag_example/ARDUINO.jpg"),
    //       tagPostNum: 200,
    //       tagHot: 2343,
    //       lastPostTime: "2022-8-18 20:02:09",
    //     },
    //   ],
    };
  },
  computed: {
    HotSectionData() {
        return this.$store.state.hotTagArr
    },
  },
  methods: {
    timeAgo(val) {
      return timeago(val);
    },

    toTagPage(tagId) {
      this.$router.push({ name: "tagPage" , params: {tagId}});
    },
  },

  mounted() {
    this.$store.dispatch("getHotTag");

  }
};
</script>

<style lang="scss" scoped>
.HotSection {
  margin-top: calc(var(--heightRate) * 20);
  display: flex;
  flex-direction: column;

  #HotTag {
    width: calc(var(--widthRate) * 215);
    height: fit-content;
  }

  .HotSectionContent {
    width: 100%;
    height: calc(var(--heightRate) * 750);
    border: calc(var(--heightRate) * 1) solid #808080;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 0 calc(var(--heightRate) * 10) calc(var(--heightRate) * 10)
      calc(var(--heightRate) * 10);
    background-color: #ffffff;
    display: flex;

    .HotSectionCard {
      height: calc(var(--heightRate) * 100);
      margin-top: calc(var(--heightRate) * 30);
      margin-left: calc(var(--widthRate) * 30);
      display: flex;
      flex-direction: row;
      cursor: pointer;

      img {
        width: calc(var(--heightRate) * 100);
        height: calc(var(--heightRate) * 100);
        margin-right: calc(var(--widthRate) * 20);
        border-radius: calc(var(--heightRate) * 10);
      }

      .HotSectionInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .title {
          font-family: "HarmonyOS_Sans_SC_Regular";
          font-size: 14px;
          font-weight:bold;
          color: #808080;
        }

        .small {
          font-family: "HarmonyOS_Sans_SC_Regular";
          font-size: 12px;
          color: #a6a6a6;
        }
      }
    }
  }
}
</style>