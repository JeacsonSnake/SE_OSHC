<template>
  <div class="userPage">
    <div class="leftSlide">
      <div class="userBoard">
        <el-avatar :size="196" :src="circleUrl" class="Avatar"></el-avatar>
        <p class="userName">我是用户名da⭐ze</p>
        <div class="userInfo">
          <div class="genderIP">
            <p class="gender">
              <img src="../../assets/images/small_icon/性别.png" alt="" class="bigIcon" />
              : NAN
            </p>
            <p class="ip">
              <img src="../../assets/images/small_icon/ip.png" alt="" class="bigIcon" />
              : NAN
            </p>
          </div>
          <p class="email">
            <img src="../../assets/images/small_icon/邮箱.png" alt="" class="bigIcon" />
            : 3141592653@gmail.com
          </p>
          <p class="gitHub">
            <img src="../../assets/images/small_icon/github.png" alt="" class="bigIcon" />
            : 3141592653@gmail.com
          </p>
        </div>
      </div>
      <ul class="navbar">
        <li class="selectBtn">
          <p class="navBarTitle" @click="myInfo()">我的信息 >></p>
        </li>
        <li class="selectBtn">
          <p class="navBarTitle" @click="myFollow()">关注与粉丝 >></p>
        </li>
        <li class="selectBtn">
          <p class="navBarTitle" @click="myPost()">我的帖子 >></p>
        </li>
        <li class="selectBtn">
          <p class="navBarTitle" @click="myCollection()">我的收藏 >></p>
        </li>
        <li class="selectBtn noBorder">
          <p class="navBarTitle" @click="myHistory()">浏览记录 >></p>
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
    return {
      circleUrl: "",
    };
  },

  methods: {
    myInfo() {
      this.$router.push({ name: "userPage" });
    },

    myFollow() {
      this.$router.push({ name: "FollowerFollowing" });
    },

    myPost() {
      this.$router.push({ name: "MyPost" });
    },

    myCollection() {
      this.$router.push({ name: "MyCollection" });
    },

    myHistory() {
      this.$router.push({ name: "BrowsingHistory" });
    },
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
          width: 60px;
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