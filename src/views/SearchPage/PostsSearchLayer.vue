<template>
  <div class="postsSearchLayer">
   <div v-for="(item,index) in getSearchData" :key="idnex">
  {{item}}
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      //   value: false,
      
      searchSection:[""],
      getSearchData: [
        {user:"RICK_A",date:"三天前",postLabel:"#ESP32",views:"114514",
        topic:"[新人必备] ESP32是个啥?全网最详细介绍ESP32!",brief:"ESP32DDDDDDDDDDDDDDDDDD"},
        {user:"RICK_b",date:"三天前",postLabel:"#ESP32",views:"1919810",
        topic:"[新人必备] ESP32是个啥?全网最详细介绍ESP32!",brief:"ESP32DDDDDDDDDDDDDDDDDD"},
        {user:"RICK_c",date:"三天前",postLabel:"#ESP32",views:"114514",
        topic:"[新人必备] ESP32是个啥?全网最详细介绍ESP32!",brief:"ESP32DDDDDDDDDDDDDDDDDD"},
        {user:"RICK_d",date:"三天前",postLabel:"#ESP32",views:"114514",
        topic:"[新人必备] ESP32是个啥?全网最详细介绍ESP32!",brief:"ESP32DDDDDDDDDDDDDDDDDD"},],
      isEmpty: false,
    };
  },

  methods: {
    pushGoodsPage() {
      this.$router.push({
        name: "goodsDisplayPage",
      });
    },
    pushUserPage() {
      this.$router.push({
        name: "userPage",
      });
    },
  },

  computed: {
    isUpdate: function () {
      return this.$store.state.isSearchUpdate;
    },
  },

  async created() {
    this.searchData = await this.$store.state.searchData;
    this.$store.commit("SETSEARCHUPDATE", false);
    if (this.searchData.length !== 0) {
      this.isEmpty = false;
      this.searchData.forEach(function (goods) {
        goods.pictureUrl = goods.pictureUrl.split(" ");
      });
    } else {
      this.isEmpty = true;
    }
  },

  mounted() {},

  async beforeUpdate() {
    this.searchData = await this.$store.state.searchData;
    if (this.searchData.length !== 0) {
      this.$store.commit("SETSEARCHUPDATE", false);
      this.isEmpty = false;
      this.searchData.forEach(function (goods) {
        goods.pictureUrl = goods.pictureUrl.split(" ");
      });
    } else {
      this.isEmpty = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.postsSearchLayer {
  border-radius: 12px;
  height: auto;
  min-height: calc(100vh / 1080px * 930px);
  width: calc(1536px / 1920px * 1190px);
  margin-top: calc(100vh / 1080px * 50px);
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}

.el-row {
  margin-bottom: calc(100vh / 1080px * 20px);
  &:first-child {
    margin-top: calc(100vh / 1080px * 30px);
  }

  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.LayerCol {
  margin: 15px 27px 15px 27px;
}

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: calc(100vh / 1080px * 36px);
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.goodsDiscript {
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goodTag {
  margin-right: 10px;
}

.cardBottom {
  height: 100%;
  margin-top: calc(100vh / 1080px * 13px);
  line-height: calc(100vh / 1080px * 24px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.user {
  height:  calc(100vh / 1080px * 25px);
  display: flex;
  align-items: center;
  justify-content: center;
}

#userName {
  width:calc(1536px / 1920px * 100px);
  min-width: 0;
  height: 100%;
  margin: 0 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goodsPrise {
  color: rgb(240, 65, 65);
}
</style>