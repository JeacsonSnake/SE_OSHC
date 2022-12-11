<template>
  <div class="userPage">
    <div class="leftSlide">
      <div class="userBoard">
        <el-avatar
          :size="196"
          :src="userInfo.avatar"
          class="Avatar"
        ></el-avatar>
        <p class="userName">{{ userInfo.userName }}</p>
        <div class="userInfo">
          <div class="genderIP">
            <p class="gender">
              <img
                src="../../assets/images/small_icon/性别.png"
                alt=""
                class="bigIcon"
              />
              : {{ userInfo.gender }}
            </p>
            <p class="ip">
              <img
                src="../../assets/images/small_icon/ip.png"
                alt=""
                class="bigIcon"
              />
              : {{ userInfo.ipLocation }}
            </p>
          </div>
          <p class="email">
            <img
              src="../../assets/images/small_icon/邮箱.png"
              alt=""
              class="bigIcon"
            />
            : {{ userInfo.userEmail }}
          </p>
          <p class="gitHub">
            <img
              src="../../assets/images/small_icon/github.png"
              alt=""
              class="bigIcon"
            />
            : {{ userInfo.userGitAddress }}
          </p>
        </div>
      </div>
      <ul class="navbar">
        <li class="selectBtn">
          <p
            class="navBarTitle"
            :class="{ selected: navBarColorBool[0] }"
            @click="myInfo()"
          >
            我的信息 >>
          </p>
        </li>
        <li class="selectBtn">
          <p
            class="navBarTitle"
            :class="{ selected: navBarColorBool[1] }"
            @click="myFollow()"
          >
            关注与粉丝 >>
          </p>
        </li>
        <li class="selectBtn">
          <p
            class="navBarTitle"
            :class="{ selected: navBarColorBool[2] }"
            @click="myPost()"
          >
            我的帖子 >>
          </p>
        </li>
        <li class="selectBtn">
          <p
            class="navBarTitle"
            :class="{ selected: navBarColorBool[3] }"
            @click="myCollection()"
          >
            我的收藏 >>
          </p>
        </li>
        <li class="selectBtn noBorder">
          <p
            class="navBarTitle"
            :class="{ selected: navBarColorBool[4] }"
            @click="myHistory()"
          >
            浏览记录 >>
          </p>
        </li>
      </ul>
    </div>

    <div class="rightSlide">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const userDetail = JSON.parse(window.localStorage.getItem("userDetail"));
    let userInfo = {
      avatar: userDetail.avatar,
      userName: userDetail.userName,
      gender: userDetail.userGender === null ? "暂无" : userDetail.userGender,
      ipLocation:
        userDetail.ipLocation === null ? "暂无" : userDetail.ipLocation,
      userEmail: userDetail.userEmail,
      userGitAddress:
        userDetail.userGitAddress === null ? "暂无" : userDetail.userGitAddress,
    };
    return {
      navBarColorBool: [true, false, false, false, false],
      userInfo,
    };
  },

  methods: {
    clearNavColor() {
      for (let index = 0; index < this.navBarColorBool.length; index++) {
        this.navBarColorBool[index] = false;
      }
    },

    myInfo() {
      this.clearNavColor();
      this.navBarColorBool[0] = true;
      this.$router.push({ name: "userPage" });
    },

    myFollow() {
      this.clearNavColor();
      this.navBarColorBool[1] = true;
      this.$router.push({ name: "FollowerFollowing" });
    },

    myPost() {
      this.clearNavColor();
      this.navBarColorBool[2] = true;
      this.$router.push({ name: "MyPost" });
    },

    myCollection() {
      this.clearNavColor();
      this.navBarColorBool[3] = true;
      this.$router.push({ name: "MyCollection" });
    },

    myHistory() {
      this.clearNavColor();
      this.navBarColorBool[4] = true;

      this.$router.push({ name: "BrowsingHistory" });
    },
  },

  created() {
    const routerName = [
      "userPage",
      "FollowerFollowing",
      "MyPost",
      "MyCollection",
      "BrowsingHistory",
    ];
    this.clearNavColor();
    for (let index = 0; index < this.navBarColorBool.length; index++) {
      if (this.$route.name == routerName[index]) {
        this.navBarColorBool[index] = true;
        break;
      } else if (this.$route.name == "Follower") {
        this.navBarColorBool[1] = true;
        break;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.userPage {
  background-color: #f2f2f2;
  padding-top: 105px;
  display: flex;
  width: 100%;
  height: 100vh;
}

.leftSlide {
  width: 410px;
  height: 930px;
  display: inline-block;
  margin-left: 213px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #808080;
  box-sizing: border-box;
  border-radius: 10px;

  .userBoard {
    width: 340px;
    height: 476px;
    margin-left: 35px;
    margin-top: 42px;
    background-color: #c0ccd1;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 35px;
    .Avatar {
      margin-top: 19px;
      margin-bottom: 36px;
    }

    .userName {
      font-size: 30px;
      height: 45px;
      max-width: 260px;
      line-height: 45px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .userInfo {
      width: 175px;
      height: 80px;
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      color: #383838;
      .smallIcon {
        width: 12px;
        height: 12px;
      }

      .bigIcon {
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }

      .genderIP,
      .email,
      .gitHub {
        width: 100%;
        height: 20px;
        line-height: 20px;
      }

      .email,
      .gitHub {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
      }

      .genderIP {
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: space-between;

        .gender,
        .ip {
          width: 66px;
          height: 100%;
          display: flex;
        }
      }
    }
  }

  .navbar {
    width: 410px;
    height: 375px;
    border-top: 2px solid #cccccc;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    .selected {
      color: #00b6cc;
    }

    .selectBtn {
      width: 300px;
      height: 70px;
      margin-top: 5px;
      border-bottom: 1px solid #808080;
      display: flex;
      justify-content: flex-end;
      .navBarTitle {
        height: 100%;
        width: fit-content;
        line-height: 70px;
        font-size: 36px;
        margin-right: 20px;
        cursor: pointer;
      }
    }

    .noBorder {
      border: none;
    }
  }
}

.rightSlide {
  width: 950px;
  height: 930px;
  margin-left: 128px;
  display: inline-block;
}
</style>