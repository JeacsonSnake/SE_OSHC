<template>
  <div class="userPage">
    <div class="leftSlide">
      <div class="userBoard">
        <el-avatar :size="180" :src="circleUrl" class="Avatar"></el-avatar>
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
  padding-top:calc(100vh / 1080px * 105px);
  display: flex;
  width: 100%;
  height: 100vh;
}

.leftSlide {
  width:calc(100vw / 1920 * 410);
  height:calc(100vh / 1080 * 930);
  display: inline-block;
  margin-left:calc(100vw / 1920 * 213);
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #808080;
  box-sizing: border-box;
  border-radius: 10px;

  .userBoard {
    width:calc(100vw / 1920 * 300);
    height:calc(100vh / 1080 * 476);
    margin:0 auto;  //左右居中
    margin-top:calc(100vh / 1080 * 42);
    background-color: #c0ccd1;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:calc(100vh / 1080px * 35px) ;
    .Avatar {
      margin-top:calc(100vh / 1080 * 19);
      margin-bottom:calc(100vh / 1080 * 36);
    }

    .userName {
      font-size: 23px;
      height:calc(var(--heighthRate) * 45);
      max-width:calc(100vw / 1920 * 260);
      line-height:calc(100vh / 1080 * 45);
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .userInfo {
      width:calc(var(--widthRate) * 250);
      height:calc(100vh / 1080 * 80);
      margin-top:calc(100vh / 1080 * 25);
      display: flex;
      flex-direction: column;
      font-size: 12px;
      color: #383838;
      .smallIcon {
        width: 12px;
        height: 12px;
      }

      .bigIcon {
        width:calc(var(--widthRate) * 16);
        height:calc(100vh / 1080 * 16);
        margin-right:calc(100vw / 1920 * 5);
      }

      .genderIP,
      .email,
      .gitHub {
        width: 100%;
        height:calc(100vh / 1080 * 20);
        line-height:calc(100vh / 1080 * 20);
      }

      .email,
      .gitHub {
        margin-top:calc(100vh / 1080 * 10);
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
          width:calc(var(--widthRate) * 80);
          height: 100%;
          display: flex;
        }
      }
    }
  }

  .navbar {
    width:calc(var(--widthRate) * 410);
    height:calc(100vh / 1080 * 375);
    border-top:calc(100vh / 1080 * 2) solid #cccccc;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    .selectBtn {
      width:calc(var(--widthRate) * 300);
      height: calc(100vh / 1080 * 70);
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
  width:calc(100vw / 1920 * 950);
  height: calc(100vh / 1080 * 930);
  margin-left:calc(100vw / 1920 * 128);
  display: inline-block;
}
</style>