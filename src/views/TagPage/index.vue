import HotSection from '@/components/HotSection/index.vue';
<template>
  <div class="tagPage">
    <div class="tagInfoBlock"></div>
    <div class="tagContentBlock">
      <div class="newPostBlock"></div>
      <div class="rightSlide">
        <div class="recommandBlock">
          <img
            src="../../assets/images/label_head/PostTag.png"
            alt=""
            id="PostTag"
          />
          
        </div>
        <HotSection></HotSection>
      </div>
    </div>
  </div>
</template>

<script>
import HotSection from "../../components/HotSection/index.vue";
export default {
  components: {
    HotSection,
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

      .recommandBlock {
        width: calc(var(--widthRate) * 303);
        height: calc(var(--heightRate) * 380);
        border-radius: calc(var(--heightRate) * 10);
        background: rgba(255, 255, 255, 1);
        border: calc(var(--heightRate) * 1) solid rgba(128, 128, 128, 1);
        display: flex;
        flex-direction: column;

        #PostTag {
          width: fit-content;
          height: fit-content;
        }
      }
    }
  }
}
</style>