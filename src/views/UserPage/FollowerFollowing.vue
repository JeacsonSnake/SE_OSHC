<template>
  <div class="followerFollowing">
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo navMenu"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">关注</el-menu-item>
        <el-menu-item index="2">粉丝</el-menu-item>
      </el-menu>
    </div>

    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key === "1") {
        this.$router.push({ name: "FollowerFollowing" });
      } else if (key === "2") {
        this.$router.push({ name: "Follower" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.followerFollowing {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/background/fo背景.png");
  background-size: contain;
  border: 2px solid #808080;
  border-radius: 10px;

  .nav {
    width: 950px;
    height: 75px;
    border-bottom: 0.4px solid #808080;
    .navMenu {
      width: 140px;
      height: 60px;
      margin-top: 15px;
      margin-left: 30px;
      margin-bottom: 15px;
    }
  }
}
</style>