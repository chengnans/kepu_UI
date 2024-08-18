<template>
  <el-container class="home-container">
    <!-- 时间 -->
    <!--
    <el-row class="welcome">
      <span>欢迎! &nbsp&nbsp今天是{{ timeInfo.year }}年{{ timeInfo.month + 1 }}月{{ timeInfo.day }}日 </span>
      <span style="margin-left: 18px">星期{{ week2 }} </span>
      <span style="margin-left: 18px">当前时间 {{ timeInfo.hours }}: {{ timeInfo.minutes }}: {{ timeInfo.secondes }} </span>
    </el-row>
    -->
    <!-- 主页头部 -->
    <el-header>
      <div>
<!--        <img src="../assets/images/xiaohui4.png" alt="" style="width: auto" height="100"/>-->
        <img src="../assets/images/xiaohui4.png" alt="" style="width: 100%; height: auto"/>
      </div>
<!--      <div>-->
<!--        <img src="../assets/images/bg.png" alt="" />-->
<!--      </div>-->
    </el-header>
    <!-- 主页导航栏 -->
    <el-row>
<!--      <el-menu mode="horizontal" background-color="rgb(00, 116, 87)" text-color="white" class="menu" active-text-color="#000000" :default-active="activeIndex" @select="handleSelect">-->
<!--        <el-menu-item :key="index" v-for="(item, index) in menuList" :index="item.id.toString()" style="font-size: calc(100vw * 20 / 1920)">-->
<!--          {{ item.name }}-->
<!--        </el-menu-item>-->
<!--      </el-menu>-->
      <el-menu
        mode="horizontal"
        background-color="rgb(0, 116, 87)"
        text-color="white"
        class="menu"
        active-text-color="#000000"
        :default-active="activeIndex"
        @select="handleSelect"
      >
        <el-menu-item
          :key="index"
          v-for="(item, index) in menuList"
          :index="item.id.toString()"
        >
          {{ item.name }}
        </el-menu-item>
      </el-menu>

    </el-row>
    <el-container>
      <!-- 更变的内容区域 -->
      <el-main class="main">
        <router-view class="box"></router-view>
      </el-main>
    </el-container>
    <el-footer>Copyright © 青岛农业大学版权所有 鲁ICP备13028537号-5 鲁公网安备 37021402000104号</el-footer>
<!--    <el-footer>  地址：山东省 青岛市 城阳区 长城路700号 邮编：266109 电话：0532-58957222</el-footer>-->
  </el-container>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data() {
    return {
      timeInfo: {
        currentTime: '',
        year: '',
        month: '',
        day: '',
        week: '',
        hours: '',
        minutes: '',
        secondes: ''
      },
      activeIndex: '1',
      menuList: [
        { name: '首页', id: 1 },
        { name: '热点新闻', id: 27 },
        { name: '科普文章', id: 23 },
        { name: '科普视频', id: 24 },
        { name: '少儿科普', id: 26 },
        { name: '科技特派员', id: 25 },
        { name: '盐碱地风采', id: 22 },
        { name: '科普大讲堂', id: 29 },
        { name: '学校首页', id: 28 }
      ],
      menuList2: []
    }
  },
  created() {},
  mounted() {
    this.initTime()
    setInterval(this.initTime, 1000)
    let api3 = 'http://kepu.sd-smartagriculture.cn:7070/news_type/all'
    axios
      .get(api3)
      .then(res => {
        // console.log(res);
        this.menuList2 = res.data.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  watch: {},
  methods: {
    formatterTitle(t) {
      switch (t) {
        case '1':
          return 'index'
        case '22':
          return 'salt'
        case '23':
          return 'kpArtcle'
        case '24':
          return 'kpVideos'
        case '25':
          return 'commissioner'
        case '26':
          return 'child'
        case '27':
          return 'new_article'
        case '28':
          return 'xueXiaoShouYe'
        case '29':
          return 'lecture_hall'
      }
    },
    handleSelect(key, keyPath) {
      if (key == '28') {
        window.open('https://www.qau.edu.cn/')
      } else {
        this.$router.push({
          path: '/home/' + this.formatterTitle(key),
          query: {
            title: this.formatterTitle(key),
            id: key
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
}
.welcome {
  padding: 8px;
  background-color: rgb(2, 64, 135);
  color: rgba(255, 255, 255, 0.562);
  font-size: 10px;
}
.el-header {
  background-color: rgb(255, 255, 255);
  height: 12% !important;
  padding: 0 80px 0 80px;
  //padding: 0 0 0 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
}
//.el-menu {
//  .el-menu-item {
//    width: 20%;
//    font-size: 5px;
//    text-align: center;
//  }
//}
//.menu {
//  display: flex;
//  justify-content: space-between;
//}
.menu {
  /* 添加过渡效果让变化更加平滑 */
  transition: all 0.3s ease-in-out;
  .el-menu-item {
    /* 在小屏幕设备上减少宽度以适应更多内容 */
    width: 11%;
    font-size: 20px; /* 默认字体大小 */
    text-align: center;
  }
}

/* 响应式样式 */
@media (max-width: 768px) {
  .menu {
    .el-menu-item {
      width: 18%;
      font-size: 10px;
    }
  }
  .el-menu--horizontal>.el-menu-item {
    float: left;
    height: 40px;
    line-height: 40px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399;
  }
}
/* 响应式样式 */
@media (max-width: 768px) {
  .el-header {
    height: 8%!important; /* 调整高度以适应较小的屏幕 */
    padding: 0 0px 0 0px;
  }

  img {
    max-width: 60%; /* 或者使用 max-width 限制图片最大宽度 */
  }
}
.main {
  padding: 0px 0px;
}
.el-footer {
  background-color: rgb(0, 116, 87);
  font-size: 15px;
  color: white;
  text-align: center;
  padding: 10px 0;  // 上下内边距
  display: flex;  // 使用 flexbox 布局
  justify-content: center;  // 水平居中
  align-items: center;  // 垂直居中
  height: 60px;  // 设置固定高度

  @media (max-width: 768px) {
    font-size: 12px;  // 调整字体大小以适应较小屏幕
    height: 50px;  // 移动端减少高度
    padding: 5px 0;  // 移动端减少内边距
  }
}
//全局box
.box {
  width: 85%;
  margin: 0 auto;
}
</style>
