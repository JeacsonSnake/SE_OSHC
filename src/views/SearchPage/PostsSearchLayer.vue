<template>
  <div class="postsSearchLayer">
    <div class="search_section_background">
      <!-- searchSection -->
      <p class="search_section_topic">
        {{ searchSection.topic }}
      </p>
      <div class="search_section_button">点击进入</div>
      <div class="search_section">
        <!-- left -->
        <div class="search_section_left">
         <h2>{{searchSection.sectionLable}}</h2>
         <p id="search_section_left_posts">贴子数：{{searchSection.posts}}</p>
         <p id="search_section_left_hots">热度：{{searchSection.hots}}</p>
         <p id="search_section_left_news">最新动态：{{searchSection.news}}</p>
        </div>
        <!-- right -->
        <div class="search_section_right">
          <img src="../../assets/images/tag_example/esp32.jpg" alt="" />
        </div>
      </div>
    </div>
    <!-- {{searchList}} -->
    <div v-for="(item, index) in getSearchData" :key="idnex">
      <div class="searchList_item">
        <!-- itemTopic -->
        <div class="item_topic">{{ item.topic }}   
          <img src="../../assets/images/label_head/精华_w30px.png" />
        </div>
        <!-- itemLabel -->
        <div class="item_label">
          <div>#{{item.postLabel}}</div>
          <div>{{item.user}}</div>
          <div>{{item.date}}</div>
        </div>
        </div>
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

      searchSection: {
        topic: "这里有相关搜索内容的子版块，是否进入?",
        sectionLable: "ARDUINO",
        posts: "114514",
        hots: "1919810",
        news: "666",
      },

      getSearchData: [
        {
          user: "RICK_A",
          date: "三天前",
          postLabel: "ESP32",
          views: "114514",
          topic: "[新人必备] ESP32是个啥?全网最详细介绍ESP32!",
          brief: "ESP32DDDDDDDDDDDDDDDDDD",
        },
        {
          user: "RICK_b",
          date: "三天前",
          postLabel: "ESP32",
          views: "1919810",
          topic: "[新人必备] ESP32是个啥?全网最详细介绍ESP32!",
          brief: "ESP32DDDDDDDDDDDDDDDDDD",
        },
        {
          user: "RICK_c",
          date: "三天前",
          postLabel: "ESP32",
          views: "114514",
          topic: "[新人必备] ESP32是个啥?全网最详细介绍ESP32!",
          brief: "ESP32DDDDDDDDDDDDDDDDDD",
        },
        {
          user: "RICK_d",
          date: "三天前",
          postLabel: "#ESP32",
          views: "114514",
          topic: "[新人必备] ESP32是个啥?全网最详细介绍ESP32!",
          brief: "ESP32DDDDDDDDDDDDDDDDDD",
        },
      ],
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
  height: calc(100vh / 1080px * 25px);
  display: flex;
  align-items: center;
  justify-content: center;
}

#userName {
  width: calc(1536px / 1920px * 100px);
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

// new code
.search_section_background {
  display: flex;
  background-color: #01d1bb;
  width: 100%;
  height: calc(100vh / 1080px * 220px);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

//search_section_background_left

.search_section_topic {
  cursor: default;
  position: relative;
  font-size: 23px;
  font-weight: 600;
  margin-top: 30px;
  margin-left: 25px;
}
.search_section_button {
  cursor: pointer;
  background-color: #00bdc8;
  border-radius: 18px;
  border-style: solid;
  border-color: hsl(198, 100%, 20%);
  border-width: 1px;
  width: calc(1536px / 1920px * 143px);
  height: calc(100vh / 1080px * 40px);
  position: absolute;
  margin-top: 100px;
  margin-left: 25px;
  color: white;
  text-align: center;
  line-height: calc(100vh / 1080px * 40px);
  letter-spacing: 2px;
}

//search_section_background_right
.search_section {
  display: flex;
  background-color: #00b6cc;
  position: absolute;
  top: 12px;
  right: 15px;
  width: calc(1536px / 1920px * 523px);
  height: calc(100vh / 1080px * 186px);
  border-radius: 7px;
}

//left
.search_section_left {
  width: calc(1536px / 1920px * 483px / 2);
  height: 86%;
  margin-top: 10px;
  margin-left: 10px;
}
.search_section_left h2{
  cursor:default;
  color:white;
  margin-top:-5px;
  font-weight:10;
  letter-spacing:1px;
  font-size:40px;
}
.search_section_left p{
  opacity:0.75;
  position:absolute;
  left:20px;
  color:white;
  height: calc(100vh / 1080px * 45px);
  font-size:8px; 
}
#search_section_left_posts{
  position:absolute;
  margin-top:10px;

}
#search_section_left_hots{
  position:absolute;
  margin-top:25px;

}
#search_section_left_news{
  position:absolute;
  margin-top:40px;

}
//right
.search_section_right {
  width: calc(1536px / 1920px * 245px);
  height: 86%;
  margin-top: 10px;
  margin-left: 10px;
  //overflow:hidden;   可以用注释里面的部分来进行图片裁剪，但是可能只适用于部分图片
}
.search_section_right img {
  position: relative;
  width: 100%;
  height: 100%;
  //top:-40px;
}

//searchList
.searchList_item{
  width:95%;
  margin:0 auto;
  margin-top:5px;
  height: calc(100vh / 1080px * 100px);
  border-style:solid;
  border-width:1px;
  border-color:transparent transparent #808080 transparent;
  padding-bottom:20px;
}
.item_topic{
  display:flex;
  position:relative;
  margin-top:10px;
  height:22px;
  left:30px;
  img {
   margin-left:5px;
   width:30px;
   height:19px;
  }
}
.item_label{
  display:flex;
  position:relative;
  margin-top:10px;
  width:100%;
  height:22px;
  background-color:whitesmoke;
}

</style>