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
  },

};
</script>



<style scoped>
#app {
  font-family: 'HarmonyOS_Sans_SC_Regular', 'HarmonyOS_Sans_SC_Medium', 'HarmonyOS_Sans_SC_Thin', 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --heightRate: calc(100vh / #{$base-height});
  --widthRate: calc(100vw / #{$base-width});
  text-align: center;
  color: #2c3e50;
  background-color: #e8e2e0;
}

</style>

