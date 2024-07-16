<template>
  <div class="follower">
    <div v-if="isEmpty">
      <el-empty description="没有粉丝" :image-size="300"></el-empty>
    </div>
    <div v-else>
      <div
        class="followCard"
        v-for="(item, index) in followerObjArr"
        :key="index"
      >
        <el-avatar
          :size="60"
          :src="item.followAvatar"
          class="Avatar"
        ></el-avatar>
        <div class="followInfo">
          <p class="followName">{{ item.followName }}</p>
          <p class="briefContent">{{ item.followBrief }}</p>
        </div>
        <el-button round class="followBtn">关注</el-button>
      </div>

      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="followerObj.nowPage"
        hide-on-single-page
        :page-size="followerObj.showNum"
        background
        layout="prev, pager, next, jumper"
        :total="followerObj.totalNum"
        class="elPag"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: "",
    };
  },

  computed: {
    isEmpty() {
      return this.$store.state.isFollowEmpty;
    },
    followerObj() {
      return this.$store.state.followObj;
    },
    followerObjArr() {
      return this.followerObj.followerObjArr;
    },
  },

  methods: {
    handleCurrentChange(val) {
      const userDetail = JSON.parse(window.localStorage.getItem("userDetail"));
      const data = {
        nowPage: val,
        userId: userDetail.userId,
      };

      this.$store.dispatch("getFollowerArr", data);
    },
  },

  mounted() {
    const userDetail = JSON.parse(window.localStorage.getItem("userDetail"));
    const data = {
      nowPage: this.$store.state.followObj.nowPage,
      userId: userDetail.userId,
    };

    this.$store.dispatch("getFollowerArr", data);
  },
};
</script>

<style lang="scss" scoped>
.followCard {
  width: calc(var(--widthRate) * 900);
  height: calc(var(--heightRate) * 100);
  margin-left: calc(var(--widthRate) * 27);
  margin-top: calc(var(--heightRate) * 15);
  margin-bottom: calc(var(--heightRate) * 15);
  border-bottom: calc(var(--heightRate) * 1) solid #808080;
  display: flex;
  position: relative;

  .Avatar {
    margin-left: calc(var(--widthRate) * 22);
    margin-right: calc(var(--widthRate) * 30);
    border: calc(var(--heightRate) * 1) solid #808080;
  }

  .followInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: calc(var(--heightRate) * 50);
    max-width: calc(var(--widthRate) * 600);
    .followName {
      font-size: calc(var(--heightRate) * 29);
      color: #00bdc8;
      width: fit-content;
      margin-bottom: calc(var(--heightRate) * 5);
    }

    .briefContent {
      font-size: calc(var(--heightRate) * 12);
      color: #abbbc2;
      width: fit-content;
    }
  }

  .followBtn {
    height: calc(var(--heightRate) * 47);
    width: calc(var(--widthRate) * 120);
    position: absolute;
    right: 5%;
    top: 11%;
    font-size: calc(var(--heightRate) * 22);
    line-height: calc(var(--heightRate) * 14);
  }
}

.elPag {
  margin-top: calc(var(--heightRate) * 25);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 94%;
  left: 54%;
}
</style>