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
  padding-top: calc(var(--heightRate) * 105);
  display: flex;
  width: 100%;
  height: 100vh;
}

.leftSlide {
  width: calc(var(--widthRate) * 410);
  height: calc(var(--heightRate) * 1000);
  display: inline-block;
  margin-left: calc(var(--widthRate) * 213);
  background-color: #fff;
  border-radius: calc(var(--heightRate) * 10);
  border: calc(var(--heightRate) * 1) solid #808080;
  box-sizing: border-box;
  border-radius: calc(var(--heightRate) * 10);

  .userBoard {
    width: calc(var(--widthRate) * 340);
    height: calc(var(--heightRate) * 529);
    margin: 0 auto; //左右居中
    margin-top: calc(var(--heightRate) * 42);
    background-color: #c0ccd1;
    border-radius: calc(var(--heightRate) * 12);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: calc(var(--heightRate) * 35);
    .Avatar {
      margin-top: calc(var(--heightRate) * 19);
      margin-bottom: calc(var(--heightRate) * 36);
      border: calc(var(--heightRate) * 1) solid #808080;
    }

    .userName {
      font-size: calc(var(--heightRate) * 23);
      font-weight: 700;
      height: calc(var(--heightRate) * 45);
      max-width: calc(var(--widthRate) * 260);
      line-height: calc(var(--heightRate) * 45);
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .userInfo {
      width: calc(var(--widthRate) * 250);
      height: calc(var(--heightRate) * 80);
      margin-top: calc(var(--heightRate) * 25);
      display: flex;
      flex-direction: column;
      font-size: calc(var(--heightRate) * 12);
      color: #383838;
      .smallIcon {
        width: calc(var(--heightRate) * 12);
        height: calc(var(--heightRate) * 12);
      }

      .bigIcon {
        width: calc(var(--widthRate) * 16);
        height: calc(var(--heightRate) * 16);
        margin-right: calc(var(--widthRate) * 5);
      }

      .genderIP,
      .email,
      .gitHub {
        width: 100%;
        height: calc(var(--heightRate) * 20);
        line-height: calc(var(--heightRate) * 20);
      }

      .email,
      .gitHub {
        margin-top: calc(var(--heightRate) * 10);
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
          height: 100%;
          display: flex;
        }

        .gender {
          width: calc(var(--widthRate) * 80);
        }

        .ip {
          width: calc(var(--widthRate) * 120);
        }
      }
    }
  }

  .navbar {
    width: calc(var(--widthRate) * 410);
    height: calc(var(--heightRate) * 395);
    border-top: calc(var(--heightRate) * 2) solid #cccccc;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    .selected {
      color: #00b6cc;
    }

    .selectBtn {
      width: calc(var(--widthRate) * 300);
      height: calc(var(--heightRate) * 70);
      margin-top: calc(var(--heightRate) * 5);
      border-bottom: calc(var(--heightRate) * 1) solid #808080;
      display: flex;
      justify-content: flex-end;
      .navBarTitle {
        height: 100%;
        width: fit-content;
        line-height: calc(var(--heightRate) * 70);
        font-size: calc(var(--heightRate) * 28);
        margin-right: calc(var(--widthRate) * 30);
        cursor: pointer;
      }
    }

    .noBorder {
      border: none;
    }
  }
}

.rightSlide {
  width: calc(var(--widthRate) * 950);
  height: calc(var(--heightRate) * 1000);
  margin-left: calc(var(--widthRate) * 128);
  display: inline-block;
}
</style>