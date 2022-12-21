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
      console.log(`当前页: ${val}`);
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
  width:calc(100vw / 1920 * 900);
  height:calc(100vh / 1080 * 80);
  margin-left:calc(100vw / 1920 * 27);
  margin-top:calc(100vh / 1080 * 20);
  border-bottom: 0.4px solid #808080;
  display: flex;
  position: relative;

  .Avatar {
    margin-left:calc(100vw / 1920 * 22);
    margin-right:calc(100vw / 1920 * 30);
  }

  .followInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height:calc(var(--heightRate) * 50);
    max-width:calc(var(--widthRate) * 600);
    .followName {
      font-size: 24px;
      color: #00bdc8;
      width: fit-content;
      margin-bottom:calc(100vh / 1080 * 5);
    }

    .briefContent {
      font-size: 12px;
      color: #abbbc2;
      width: fit-content;
    }
  }

  .followBtn {
    height:calc(100vh / 1080 * 47);
    width:calc(100vw / 1920 * 120);
    position: absolute;
    right: 5%;
    top: 8%;
    font-size: 15px;
  }
}

.elPag {
  margin-top:calc(100vh / 1080 * 70);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>