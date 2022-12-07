<template>
  <div class="HotSection">
    <img src="../../assets/images/label_head/HotTag.png" alt="" id="HotTag" />
    <div class="HotSectionContent">
      <div
        class="HotSectionCard"
        v-for="(HotSection, i) in HotSectionData"
        :key="HotSection.id"
      >
        <img :src="HotSection.imgUrl" alt="" />
        <div class="HotSectionInfo">
          <p class="title">{{ HotSection.title }}</p>
          <p class="postNumber small">贴子数：{{ HotSection.postNumber }}</p>
          <p class="hotview small">热度：{{ HotSection.hotView }}</p>
          <p class="lastReport small">
            最新动态：{{ timeAgo(HotSection.lastReportTime) }}
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
      HotSectionData: [
        {
          id: 1,
          title: "ARDUINO",
          imgUrl: require("../../assets/images/tag_example/ARDUINO.jpg"),
          postNumber: 200,
          hotView: 2343,
          lastReportTime: "2022-8-18 20:02:09",
        },
        {
          id: 2,
          title: "ARDUINO",
          imgUrl: require("../../assets/images/tag_example/ARDUINO.jpg"),
          postNumber: 200,
          hotView: 2343,
          lastReportTime: "2022-8-18 20:02:09",
        },
        {
          id: 3,
          title: "ARDUINO",
          imgUrl: require("../../assets/images/tag_example/ARDUINO.jpg"),
          postNumber: 200,
          hotView: 2343,
          lastReportTime: "2022-8-18 20:02:09",
        },
        {
          id: 4,
          title: "ARDUINO",
          imgUrl: require("../../assets/images/tag_example/ARDUINO.jpg"),
          postNumber: 200,
          hotView: 2343,
          lastReportTime: "2022-8-18 20:02:09",
        },
        {
          id: 5,
          title: "ARDUINO",
          imgUrl: require("../../assets/images/tag_example/ARDUINO.jpg"),
          postNumber: 200,
          hotView: 2343,
          lastReportTime: "2022-8-18 20:02:09",
        },
      ],
    };
  },
  computed: {},
  methods: {
    timeAgo(val) {
      return timeago(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.HotSection {
  margin-top: calc(100vh / 1080px * 20px);
  display: flex;
  flex-direction: column;

  #HotTag {
    width: fit-content;
    height: fit-content;
  }

  .HotSectionContent {
    width: 100%;
    height: calc(100vh / 1080px * 700px);
    border: 1px solid #808080;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 0 20px 20px 20px;
    background-color: #ffffff;
    display: flex;
    .HotSectionCard {
      height: calc(100vh / 1080px * 85px);
      margin-top: calc(100vh / 1080px * 30px);

      margin-bottom: calc(100vh / 1080px * 10px);
      margin-left: calc(1536px / 1920px * 35px);
      display: flex;
      flex-direction: row;
      img {
        width: calc(1536px / 1920px * 85px);
        height: calc(100vh / 1080px * 85px);
        margin-top:calc(100vh / 1080px * 10px);
        // padding-top:calc(100vh / 1080px * 10px);
        margin-right: calc(1536px / 1920px * 20px);
        border-radius: 5px;
      }

      .HotSectionInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .title {
          font-family: "HarmonyOS_Sans_SC_Regular";
          font-size: 17px;
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