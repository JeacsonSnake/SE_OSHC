<template>
  <div class="userInfo">
    <div class="upper">
      <el-avatar :size="200" :src="userInfo.avatar" class="Avatar"></el-avatar>
      <p class="userName">{{ userInfo.userName }}</p>
      <p class="shortInfo">IP属地: {{ userInfo.ipLocation }}</p>
      <p class="shortInfo">
        {{ userInfo.following }} 关注 | {{ userInfo.follower }} 粉丝
      </p>
    </div>
    <div class="middle">
      <div class="shortInfo">
        <p class="title">用户邮箱</p>
        :
        <p class="infoContent">{{ userInfo.userEmail }}</p>
      </div>
      <div class="shortInfo">
        <p class="title">性别</p>
        :
        <p class="infoContent">{{ userInfo.gender }}</p>
      </div>
      <div class="shortInfo">
        <p class="title">个人简介</p>
        :
        <p class="infoContent">{{ userInfo.userBrief }}</p>
      </div>
      <div class="shortInfo">
        <p class="title">加入时间</p>
        :
        <p class="infoContent">{{ userInfo.userJoinTime }}</p>
      </div>
      <div class="shortInfo">
        <p class="title">Git Hub</p>
        :
        <p class="infoContent">{{ userInfo.userGitAddress }}</p>
      </div>
    </div>
    <div class="change"></div>
  </div>
</template>

<script>
export default {
  data() {
    const userDetail = JSON.parse(window.localStorage.getItem("userDetail"));
    let userInfo = {
      avatar: userDetail.avatar,
      userName: userDetail.userName,
      follower: userDetail.follower == null ? "暂无" : userDetail.follower,
      following: userDetail.following == null ? "暂无" : userDetail.following,
      userBrief: userDetail.userBrief == null ? "nope" : userDetail.userBrief,
      gender: userDetail.userGender === null ? "暂无" : userDetail.userGender,
      ipLocation:
        userDetail.ipLocation === null ? "暂无" : userDetail.ipLocation,
      userEmail: userDetail.userEmail,
      userGitAddress:
        userDetail.userGitAddress === null ? "暂无" : userDetail.userGitAddress,
      userJoinTime:
        userDetail.userJoinTime == null ? "暂无" : userDetail.userJoinTime,
    };

    return {
      userInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.userInfo {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/background/用户信息背景.png");
  background-size: contain;
  border: calc(var(--heightRate)* 1) solid #808080;
  border-radius: calc(var(--heightRate)* 10);
  display: flex;
  flex-direction: column;
  align-items: center;

  .upper {
    margin-top:calc(var(--heightRate)* 60);
    width:calc(var(--widthRate) * 590);
    display: flex;
    flex-direction: column;
    align-items: center;

    .Avatar {
        border: calc(var(--heightRate) * 1) solid #808080;
    }

    .userName {
      margin-top:calc(var(--heightRate) * 30);
      font-size: calc(var(--heightRate)* 40);
      font-weight: 700;
      height:calc(var(--heightRate) * 65);
      max-width:calc(var(--widthRate) * 600);
      line-height: calc(var(--heightRate)* 45);
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .shortInfo {
      margin-top: calc(var(--heightRate) * 10);
      font-size: calc(var(--heightRate)* 24);
      height: calc(var(--heightRate) * 30);
      width: fit-content;
      line-height: calc(var(--heightRate)* 30);
    }
  }

  .middle {
    width:calc(var(--widthRate) * 410);
    height:calc(var(--heightRate) * 250);
    margin-top: calc(var(--heightRate)* 68);
    font-size: calc(var(--heightRate)* 24);
    display: flex;
    flex-direction: column;
    .shortInfo {
      margin-top:calc(var(--heightRate) * 10);
      font-size: calc(var(--heightRate)* 24);
      height: calc(var(--heightRate)* 30);
      width: fit-content;
      line-height: calc(var(--heightRate)* 30);
      display: flex;

      .title {
        width: calc(var(--widthRate) * 97);
        height: 100%;
        text-align: justify-all;
        text-align-last: justify;
        margin-right: 5px;
      }

      .infoContent {
        margin-left: calc(var(--widthRate) * 5);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: calc(var(--widthRate) * 290);
      }
    }
  }
}
</style>