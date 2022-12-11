<template>
  <div class="following">
    <div v-if="isEmpty">
      <el-empty description="没有关注" :image-size="300"></el-empty>
    </div>
    <div v-else>
      <div
        class="followCard"
        v-for="(item, index) in followingObjArr"
        :key="index"
      >
        <el-avatar
          :size="60"
          :src="item.followingAvatar"
          class="Avatar"
        ></el-avatar>
        <div class="followInfo">
          <p class="followName">{{ item.followingName }}</p>
          <p class="briefContent">{{ item.followingBrief }}</p>
        </div>
        <el-button round disabled class="followBtn">已关注</el-button>
      </div>

      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="followingObj.nowPage"
        hide-on-single-page
        :page-size="followingObj.showNum"
        background
        layout="prev, pager, next, jumper"
        :total="followingObj.totalNum"
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
    followingObj() {
      return this.$store.state.followObj;
    },
    followingObjArr() {
      return this.followingObj.followingObjArr;
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

    this.$store.dispatch("getFollowingArr", data);
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
      color: #1791cd;
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