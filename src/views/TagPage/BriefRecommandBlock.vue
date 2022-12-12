<template>
  <div class="briefRecommandBlock">
    <img src="../../assets/images/label_head/PostTag.png" alt="" id="PostTag" />
    <div class="recommandContain">
      <div class="tinyPost" v-for="(item, index) in tinyPostArr" :key="index">
        <img
          src="../../assets/images/label_head/置顶_w25px.png"
          class="tinyPostImg"
          alt=""
          v-if="item.isTopPost"
        />
        <img
          src="../../assets/images/label_head/热门_w25px.png"
          class="tinyPostImg"
          alt=""
          v-else-if="item.isHotPost"
        />
        <img
          src="../../assets/images/label_head/精华_w25px.png"
          class="tinyPostImg"
          alt=""
          v-else-if="item.isEssPost"
        />
        <div class="tinyPostTitle">{{ item.postTitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let tinyPostArr = [
      {
        isEssPost: false,
        isHotPost: false,
        isTopPost: true,
        postId: "11",
        postTitle: "测试数据1111111111111111111111111111111",
      },
      {
        isEssPost: true,
        isHotPost: false,
        isTopPost: true,
        postId: "11",
        postTitle: "测试数据1111111111111111111111111111111",
      },
      {
        isEssPost: true,
        isHotPost: false,
        isTopPost: false,
        postId: "11",
        postTitle: "测试数据1111111111111111111111111111111",
      },
      {
        isEssPost: true,
        isHotPost: false,
        isTopPost: false,
        postId: "11",
        postTitle: "测试数据1111111111111111111111111111111",
      },
      {
        isEssPost: false,
        isHotPost: true,
        isTopPost: false,
        postId: "11",
        postTitle: "测试数据1111111111111111111111111111111",
      },
      {
        isEssPost: false,
        isHotPost: true,
        isTopPost: false,
        postId: "11",
        postTitle: "测试数据1111111111111111111111111111111",
      },
      {
        isEssPost: false,
        isHotPost: true,
        isTopPost: false,
        postId: "11",
        postTitle: "测试数据1111111111111111111111111111111",
      },
    ];
    return { tinyPostArr };
  },
};
</script>

<style lang="scss" scoped>
.briefRecommandBlock {
  display: flex;
  flex-direction: column;

  #PostTag {
    width: calc(var(--widthRate) * 215);
    height: fit-content;
  }

  .recommandContain {
    width: calc(var(--widthRate) * 303);
    height: calc(var(--heightRate) * 350);
    border-radius: 0 calc(var(--heightRate) * 10) calc(var(--heightRate) * 10)
      calc(var(--heightRate) * 10);
    background: rgba(255, 255, 255, 1);
    border: calc(var(--heightRate) * 1) solid rgba(128, 128, 128, 1);

    .tinyPost {
      width: calc(var(--widthRate) * 255);
      height: calc(var(--heightRate) * 25);
      margin-top: calc(var(--heightRate) * 20);
      margin-left: calc(var(--widthRate) * 11);

      text-align: left;
      vertical-align: middle;
      display: flex;
      justify-content: flex-end;

      .tinyPostTitle {
        max-width: calc(var(--widthRate) * 215);
        height: inherit;
        font-size: calc(var(--heightRate) * 25);
        font-weight: 500;
        letter-spacing: 1px;
        margin-left: calc(var(--widthRate) * 14);
        line-height: calc(var(--heightRate) * 20);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgba(128, 128, 128, 1);
      }

      .tinyPostImg {
        height: calc(var(--heightRate) * 25);
      }
    }
  }
}
</style>