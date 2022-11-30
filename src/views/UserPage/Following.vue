<template>
  <div class="following">
    <div class="followCard">
      <el-avatar :size="60" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round disabled class="followBtn">已关注</el-button>
    </div>

    <div class="followCard">
      <el-avatar :size="60" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round disabled class="followBtn">已关注</el-button>
    </div>

    <div class="followCard">
      <el-avatar :size="60" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round disabled class="followBtn">已关注</el-button>
    </div>

    <div class="followCard">
      <el-avatar :size="60" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round disabled class="followBtn">已关注</el-button>
    </div>

    <div class="followCard">
      <el-avatar :size="60" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round disabled class="followBtn">已关注</el-button>
    </div>

    <div class="followCard">
      <el-avatar :size="60" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round disabled class="followBtn">已关注</el-button>
    </div>

    <div class="followCard">
      <el-avatar :size="60" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round disabled class="followBtn">已关注</el-button>
    </div>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      hide-on-single-page
      :page-size="100"
      background
      layout="prev, pager, next, jumper"
      :total="1000"
      class="elPag"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: "",
    };
  },

  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
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