<template>
  <div class="userInfo">
    <div class="upper">
      <el-avatar :size="200" :src="circleUrl" class="Avatar"></el-avatar>
      <p class="userName">我是用户名da⭐ze</p>
      <p class="shortInfo">32 关注 | 455 粉丝</p>
      <p class="shortInfo">IP属地: 福建</p>
    </div>
    <div class="middle">
      <div class="shortInfo">
        <p class="title">用户ID</p>
        :
        <p class="infoContent">3141592653@gmail.com</p>
      </div>
      <div class="shortInfo">
        <p class="title">性别</p>
        :
        <p class="infoContent">男</p>
      </div>
      <div class="shortInfo">
        <p class="title">个人简介</p>
        :
        <p class="infoContent">此人很懒,什么都没有写</p>
      </div>
      <div class="shortInfo">
        <p class="title">加入时间</p>
        :
        <p class="infoContent">2022.8.2</p>
      </div>
      <div class="shortInfo">
        <p class="title">Git Hub</p>
        :
        <p class="infoContent">3141592653@gmail.com</p>
      </div>
    </div>
    <div class="change"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.userInfo {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/background/用户信息背景.png");
  background-size: contain;
  border: 2px solid #808080;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .upper {
    margin-top: 60px;
    width: 590px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .userName {
      margin-top: 30px;
      font-size: 36px;
      height: 45px;
      max-width: 600px;
      line-height: 45px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .shortInfo {
      margin-top: 10px;
      font-size: 24px;
      height: 30px;
      width: fit-content;
      line-height: 30px;
    }
  }

  .middle {
    width: 410px;
    height: 250px;
    margin-top: 68px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    .shortInfo {
      margin-top: 10px;
      font-size: 24px;
      height: 30px;
      width: fit-content;
      line-height: 30px;
      display: flex;

      .title {
        width: 97px;
        height: 100%;
        text-align: justify-all;
        text-align-last: justify;
        margin-right: 5px;
      }

      .infoContent {
        margin-left: 5px;
      }
    }
  }
}
</style>