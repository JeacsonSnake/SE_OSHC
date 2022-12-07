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
        <div class="user" v-show="isAuth" @mouseover="userCardShow()">
          <el-avatar :size="36" :src="circleUrl"></el-avatar>
          <span id="userName">{{ username }}</span>
        </div>
        <div class="userLogin" v-show="!isAuth">
          <el-button
            class="headNavbar-Item btnColor"
            round
            @click="pushLoginPage"
            >登录/注册</el-button
          >
        </div>
        <keep-alive>
          <div
            class="userCard"
            v-show="showUserCard"
            @mouseleave="userCardHide()"
          >
            <el-avatar
              :src="circleUrl"
              :size="130"
              @click="pushUserPage({ id })"
            ></el-avatar>
            <span class="userName">{{ username }}</span>
            <div class="userInfoBlock">
              <div class="row">
                <div class="column">
                  <img src="../assets/images/small_icon/性别.png" alt="" />
                  <span>{{ gender }}</span>
                </div>

                <div class="column">
                  <img src="../assets/images/small_icon/ip.png" alt="" />
                  <span>{{ ipLocation }}</span>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <img src="../assets/images/small_icon/邮箱.png" alt="" />
                  <span>{{ userEmail }}</span>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <img src="../assets/images/small_icon/github.png" alt="" />
                  <span>{{ userGitAddress }}</span>
                </div>
              </div>
            </div>
            <div>
              <el-button
                class="btnColor marginbtm20"
                round
                @click="pushUserPage({ id })"
              >
                我的主页
              </el-button>
            </div>
            <div>
              <el-button
                class="btnColor marginbtm20 btnRed"
                round
                @click="logOut()"
              >
                退出登录
              </el-button>
            </div>
          </div>
        </keep-alive>
      </div>
      <div id="publishItem">
        <el-button class="btnColor" round @click="HWI()"> 硬件识别 </el-button>
      </div>
    </nav>
    <HWIdentification></HWIdentification>
  </div>
</template>

<script>
import NavSearchBar from "./NavSearchBar.vue";
import HWIdentification from "./HWIdentification.vue";

export default {
  data() {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (user === null) {
      return {
        circleUrl: "",
        username: "",
        id: "",
        gender: "",
        ipLocation: "",
        userEmail: "",
        userGitAddress: "",
      };
    } else {
      return {
        circleUrl: user.avatar,
        username: user.userName,
        id: user.userId,
        gender: user.userGender === null ? "暂无" : user.userGender,
        ipLocation: user.ipLocation === null ? "暂无" : user.ipLocation,
        userEmail: user.userEmail,
        userGitAddress:
          user.userGitAddress === null ? "暂无" : user.userGitAddress,
      };
    }
  },

  components: {
    NavSearchBar,
    HWIdentification,
  },

  methods: {
    HWI() {
      this.$store.commit("HWIDENTIFICATION", true);
    },

    pushHomePage() {
      this.$router.push({
        name: "homePage",
      });
    },

    pushLoginPage() {
      this.$router.push({
        name: "loginPage",
      });
    },

    logOut() {
      this.$store.commit("SETAUTH", false);
      this.$message({
        message: "登出成功！",
        type: "success",
      });
      this.$cookies.remove("elecoCookies");
      window.localStorage.removeItem("user");
      this.userCardHide();
      setTimeout(() => {
        this.pushHomePage();
      }, 1000);
    },

    userCardShow() {
      this.$store.commit("SHOWUSERCARD", true);
    },

    userCardHide() {
      this.$store.commit("SHOWUSERCARD", false);
    },

    async pushUserPage(userId) {
      await this.$store.dispatch("getUserByID", userId.id);
      this.userCardHide();
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
      return this.$store.state.isAuth;
      //   return true;
    },
    showUserCard() {
      return this.$store.state.showUserCard;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  background-color: #ffffffd0;
}

.headNavbar {
  height: calc(var(--heightRate) * 70);
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 20;
  border-bottom: calc(var(--heightRate) * 2) solid rgb(150, 146, 146);
}

.WebIcon {
  height: calc(var(--heightRate) * 50);
  margin-left: calc(var(--widthRate) * 136);
}

.IconImg {
  height: inherit;
  cursor: pointer;
}

.navSearchBar {
  margin-left: calc(var(--widthRate) * 300.89);
}

#publishItem {
  margin-left: calc(var(--widthRate) * 110);
}

.btnColor {
  font-size: calc(var(--heightRate) * 20);
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
  width: calc(var(--widthRate) * 175);
  margin-left: calc(var(--widthRate) * 110);
  position: relative;
  .userCard {
    position: absolute;
    width: calc(var(--widthRate) * 280);
    height: calc(var(--heightRate) * 490);
    background-color: #ffffff;
    left: -22%;
    top: -15%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: calc(var(--heightRate) * 15);
    border: calc(var(--heightRate) * 3) solid rgba(128, 128, 128, 1);
    &:hover {
      cursor: default;
    }
    ::v-deep() .el-avatar {
      //   width: calc(var(--heightRate) * 168);
      //   height: calc(var(--heightRate) * 180);
      margin-top: calc(var(--heightRate) * 20);
      border: calc(var(--heightRate) * 3) solid rgba(128, 128, 128, 1);
    }

    .userName {
      width: calc(var(--widthRate) * 204);
      margin-top: calc(var(--heightRate) * 15);
      font-size: calc(var(--heightRate) * 40);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .userInfoBlock {
      margin-top: calc(var(--heightRate) * 9);
      .row {
        max-width: calc(var(--widthRate) * 160);
        font-size: calc(var(--heightRate) * 16);
        display: flex;
        justify-content: space-between;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: calc(var(--heightRate) * 20);
        line-height: calc(var(--heightRate) * 20);
        margin-bottom: calc(var(--heightRate) * 9);
        vertical-align: middle;

        .column {
          display: flex;
        }

        img {
          display: inline-block;
          height: 100%;
        }
        span {
          display: inline-block;
          height: 100%;
          line-height: calc(var(--heightRate) * 20);
        }
      }
    }

    .marginbtm20 {
      margin-bottom: calc(var(--heightRate) * 20);
    }

    .btnRed {
      &:hover,
      &:focus {
        background-color: #ff6969;
        span {
          background-color: #ff6969;
        }
      }
    }
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
      ~ .userCard {
        display: initial;
      }
    }

    #userName {
      width: calc(var(--widthRate) * 125);
      margin-left: calc(var(--widthRate) * 14);
      font-size: calc(var(--heightRate) * 20);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .userLogin {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.headNavbar-Item {
  height: 100%;
}
</style>