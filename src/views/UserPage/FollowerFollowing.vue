<template>
  <div class="followerFollowing">
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="navMenu"
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
  mounted() {
    if (this.$route.name == "Follower") {
        this.activeIndex = "2";
    }
  }
};
</script>

<style lang="scss" scoped>
.followerFollowing {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/background/fo背景.png");
  background-size: contain;
  border: calc(var(--heightRate) * 1) solid #808080;
  border-radius: calc(var(--heightRate) * 10);

  .nav {
    width: calc(var(--widthRate) * 952);
    height: calc(var(--heightRate) * 89);
    border-bottom: calc(var(--heightRate) * 1) solid rgba(166, 166, 166, 1);
    display: flex;
    align-items: center;
    .navMenu {
      width: calc(var(--widthRate) * 292);
      height: calc(var(--heightRate) * 40);
      margin-left: calc(var(--widthRate) * 27);
      border: calc(var(--heightRate) * 1) solid rgba(128, 128, 128, 1);
      border-radius: calc(var(--heightRate) * 18);
      overflow: hidden;

      ::v-deep() .el-menu-item {
        width: calc(var(--widthRate) * 146);
        height: calc(var(--heightRate) * 40);
        font-size: calc(var(--heightRate) * 24);
        font-weight: 500;
        letter-spacing: calc(var(--heightRate) * 5);
        line-height: calc(var(--heightRate) * 40);
        color: #808080;
        text-align: center;
        vertical-align: middle;
      }
      ::v-deep() .is-active {
        background-color: rgba(23, 145, 205, 1);
        color: rgba(255, 255, 255, 1);
        border: none;
      }
    }
  }
}
</style>