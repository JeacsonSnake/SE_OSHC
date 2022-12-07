<template>
  <div>
    <nav class="headNavbar" v-show="ifBar">
      <div class="WebIcon">
        <img
          class="IconImg"
          src="../assets/images/logo/ELECO_h50px.png"
          alt=""
          @click="pushHomePage()"
        />
      </div>
      <NavSearchBar></NavSearchBar>
      <div class="userDisplay">
        <div class="user" v-show="isAuth">
          <el-avatar
            :size="36"
            :src="circleUrl"
            @click="pushUserPage({ id })"
          ></el-avatar>
          <span id="userName" @click="pushUserPage({ id })">{{
            username
          }}</span>
        </div>
        <div class="userLogin" v-show="!isAuth">
          <el-button
            class="headNavbar-Item btnColor"
            round
            @click="pushLoginPage"
            >登录/注册</el-button
          >
        </div>
      </div>
      <div id="publishItem">
        <el-button class="btnColor" round @click="HWIdentification()">
          硬件识别
        </el-button>
      </div>
    </nav>
    <keep-alive>
      <HWIdentification></HWIdentification>
    </keep-alive>
  </div>
</template>

<script>
import NavSearchBar from "./NavSearchBar.vue";
import HWIdentification from './HWIdentification.vue'

export default {
  data() {
    const user = JSON.parse(window.localStorage.getItem("user"));
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      //   username: user.name,
      username: "user.name",
      id: " user.id",
    };
  },

  components: {
    NavSearchBar,
    HWIdentification
  },

  methods: {
    HWIdentification() {
      console.log("send!!");
      this.$store.commit("HWIDENTIFICATION", true);
    },

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

    logOut() {
      this.$store.commit("SETAUTH", false);
      this.$message({
        message: "登出成功！",
        type: "success",
      });
      window.sessionStorage.removeItem("token");
      window.localStorage.removeItem("user");
      this.pushHomePage();
    },

    async pushUserPage(userId) {
      await this.$store.dispatch("getUserByID", userId.id);
      this.$router.push({
        name: "userPage",
      });
    },
  },

  computed: {
    ifBar() {
      return this.$store.state.ifBar;
    },
    isAuth() {
      //   return this.$store.state.isAuth;
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  background-color: #ffffffd0;
}

.headNavbar {
  height: calc(100vh / 1080px * 70px);
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 20;
  border-bottom: 2px solid rgb(0, 0, 0);
}

.WebIcon {
  height: calc(100vh / 1080px * 50px);
  margin-left: calc(1536px / 1920px * 136px);
}

.IconImg {
  height: 100%;
  cursor: pointer;
}

.navSearchBar {
  margin-left: 15.625vw;
}

#publishItem {
  margin-left: 4.427vw;
}

.btnColor {
  font-size: 20px;
}

.btnColor:focus,
.btnColor:hover {
  color: #ffffff;
  border-color: #f1f1f1;
  background-color: #00bdc8;
  span {
    background-color: #00bdc8;
  }
}

.userDisplay {
  width: 175px;
  margin-left: 110px;
}

.user {
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
}

#userName {
  width: 125px;
  margin-left: 14px;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.userLogin {
  display: flex;
  justify-content: center;
  align-items: center;
}

.headNavbar-Item {
  height: 100%;
}
</style>