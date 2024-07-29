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
        <img src="../assets/images/xiaohui4.png" alt="" />
      </div>
<!--      <div>-->
<!--        <img src="../assets/images/bg.png" alt="" />-->
<!--      </div>-->
    </el-header>
    <!-- 主页导航栏 -->
    <el-row>
      <el-menu mode="horizontal" background-color="rgb(00, 116, 87)" text-color="white" class="menu" active-text-color="#000000" :default-active="activeIndex" @select="handleSelect">
        <el-menu-item :key="index" v-for="(item, index) in menuList" :index="item.id.toString()" style="font-size: large">
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
    <el-footer>Copyright © 青岛农业大学版权所有 鲁ICP备13028537号-5 鲁公网安备 37021402000104号 青岛市互联网违法信息举报中心</el-footer>
    <el-footer>  地址：山东省 青岛市 城阳区 长城路700号 邮编：266109 电话：0532-58957222 意见反馈  </el-footer>
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
      // menuList: [
      //   { name: '首页', id: 1 },
      //   { name: '科协概况_热点新闻', id: 27 },
      //   { name: '政策法规_科普文章', id: 23 },
      //   { name: '科协项目_科普视频', id: 24 },
      //   { name: '学术交流_少儿科普', id: 26 },
      //   { name: '办事指南_科技特派员', id: 25 },
      //   { name: '科普风采_盐碱地风采', id: 22 },
      //   { name: '联系我们_科普大讲堂', id: 29 },
      //   { name: '学校首页', id: 28 }
      // ],
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
    let api3 = 'http://localhost:7070/news_type/all'
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
  computed: {
    week2() {
      if (this.timeInfo.week == 1) return '一'
      else if (this.timeInfo.week == 2) return '二'
      else if (this.timeInfo.week == 3) return '三'
      else if (this.timeInfo.week == 4) return '四'
      else if (this.timeInfo.week == 5) return '五'
      else if (this.timeInfo.week == 6) return '六'
      else return '日'
    }
  },
  methods: {
    formatterTitle(t) {
      switch (t) {
        case '1':
          return 'index'
        case '22':
          return 'introduce'
        case '23':
          return 'zhengce'
        case '24':
          return 'keXieXiangMu'
        case '25':
          return 'xueShuJiaoLiu'
        case '26':
          return 'banShiZhiNan'
        case '27':
          return 'kePuFengCai'
        case '28':
          return 'xueXiaoShouYe'
        case '29':
          return 'telephone'
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
    },
    // 初始化时间
    initTime() {
      this.timeInfo.currentTime = new Date()
      this.timeInfo.year = this.timeInfo.currentTime.getFullYear()
      this.timeInfo.month = this.timeInfo.currentTime.getMonth()
      this.timeInfo.day = this.timeInfo.currentTime.getDate()
      this.timeInfo.week = this.timeInfo.currentTime.getDay()
      this.timeInfo.hours = this.formattingTime(this.timeInfo.currentTime.getHours())
      this.timeInfo.minutes = this.formattingTime(this.timeInfo.currentTime.getMinutes())
      this.timeInfo.secondes = this.formattingTime(this.timeInfo.currentTime.getSeconds())
    },
    // 格式化时间——两位数
    formattingTime(val) {
      if (val < 10) {
        val = '0' + val
      }
      return val
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
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
}
.el-header {
  height: 120px !important;
  padding: 0 80px 0 120px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-menu {
  .el-menu-item {
    width: 150px;
    font-size: 15px;
    text-align: center;
  }
}
.menu {
  display: flex;
  justify-content: space-between;
}
.el-footer {
  background-color: rgb(00, 116, 87);
}
.main {
  padding: 0px 0px;
}
.el-footer {
  font-size: 14px;
  color: white;
  text-align: center;
  line-height: 60px;
}
//全局box
.box {
  width: 85%;
  margin: 0 auto;
}
</style>
