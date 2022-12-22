<template>
  <div id="app">
    <HeadNavBar></HeadNavBar>
    <router-view />
  </div>
</template>

<script>
import HeadNavBar from "./components/HeadNavBar.vue";

export default {
  data() {
    return {
      circleUrl: "",
    };
  },

  components: {
    HeadNavBar,
  },

  watch: {
    $route: "authAndReload",
  },

  created() {
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },

  mounted() {
    this.getAuth();
  },

  methods: {
    pushHomePage() {
      this.$router.push({
        name: "homePage",
      });
    },
    pushLoginPage() {
      this.$router.push({
        name: "login",
      });
    },
    getAuth() {
      if (this.$cookies.isKey("elecoCookies")) {
        this.$store.commit("SETAUTH", true);
      } else {
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("userDetail");
        this.$store.commit("SETAUTH", false);
      }
    },

    authAndReload() {
      this.getAuth();
      if (this.$route.name === "homePage") {
        window.location.reload(); //监测到路由发生跳转时刷新一次页面
      }
    },
  },
};
</script>



<style lang="scss" scoped>
@import "./style/variables.scss";
#app {
  font-family: "HarmonyOS_Sans_SC_Regular", "HarmonyOS_Sans_SC_Medium",
    "HarmonyOS_Sans_SC_Thin", "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --heightRate: calc(100vh / #{$base-height});
  --widthRate: calc(100vw / #{$base-width});
  text-align: center;
  color: #2c3e50;
  background-color: #e8e2e0;
}
</style>

