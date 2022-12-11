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
          :src="item.followerAvatar"
          class="Avatar"
        ></el-avatar>
        <div class="followInfo">
          <p class="followName">{{ item.followerName }}</p>
          <p class="briefContent">{{ item.followerBrief }}</p>
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
  width: 900px;
  height: 80px;
  margin-left: 27px;
  margin-top: 20px;
  border-bottom: 0.4px solid #808080;
  display: flex;
  position: relative;

  .Avatar {
    margin-left: 22px;
    margin-right: 30px;
  }

  .followInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 50px;
    max-width: 600px;
    .followName {
      font-size: 24px;
      color: #00bdc8;
      width: fit-content;
      margin-bottom: 5px;
    }

    .briefContent {
      font-size: 12px;
      color: #abbbc2;
      width: fit-content;
    }
  }

  .followBtn {
    height: 47px;
    width: 120px;
    position: absolute;
    right: 0%;
    top: 10%;
    font-size: 20px;
  }
}

.elPag {
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>