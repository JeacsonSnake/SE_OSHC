<template>
  <div class="follower">
    <div class="followCard">
      <el-avatar :size="50" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round class="followBtn">关注</el-button>
    </div>

    <div class="followCard">
      <el-avatar :size="50" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round class="followBtn">关注</el-button>
    </div>

    <div class="followCard">
      <el-avatar :size="50" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round class="followBtn">关注</el-button>
    </div>

    <div class="followCard">
      <el-avatar :size="50" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round class="followBtn">关注</el-button>
    </div>

    <div class="followCard">
      <el-avatar :size="50" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round class="followBtn">关注</el-button>
    </div>

    <div class="followCard">
      <el-avatar :size="50" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round class="followBtn">关注</el-button>
    </div>

    <div class="followCard">
      <el-avatar :size="50" :src="circleUrl" class="Avatar"></el-avatar>
      <div class="followInfo">
        <p class="followName">Feaidn</p>
        <p class="briefContent">asdfghkjhgtreghjhgfds</p>
      </div>
      <el-button round class="followBtn">关注</el-button>
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
      color: #00BDC8;
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