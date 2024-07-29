<!--<template>-->
<!--  <div>-->
<!--    <el-row>-->
<!--      <globalTitle />-->
<!--    </el-row>-->
<!--    <ul class="flex-container">-->
<!--      <li class="flex-item">-->
<!--        <router-link to="/home/kePuFengCai?title=kePuFengCai&id=27">-->
<!--          <iframe class="iimg" frameborder="0" allowfullscreen="true" src="https://news.qau.edu.cn/userfiles/video/news/2024/06/20240624085317892.mp4"></iframe>-->
<!--&lt;!&ndash;          <img src="../../assets/images/logo.jpg" alt="" class="iimg"/>&ndash;&gt;-->
<!--        </router-link>-->
<!--      </li>-->
<!--      <li class="flex-item">2</li>-->
<!--      <li class="flex-item">3</li>-->
<!--      <li class="flex-item">4</li>-->
<!--    </ul>-->

<!--    <ul class="flex-container1">-->
<!--      <li class="flex-item1">农业生产</li>-->
<!--      <li class="flex-item1">2</li>-->
<!--      <li class="flex-item1">3</li>-->
<!--      <li class="flex-item1">4</li>-->
<!--    </ul>-->

<!--    <ul class="flex-container">-->
<!--      <li class="flex-item">-->
<!--        <router-link to="/home/kePuFengCai?title=kePuFengCai&id=27">-->
<!--          <img src="../../assets/images/logo.jpg" alt="" class="iimg"/>-->
<!--        </router-link>-->
<!--      </li>-->
<!--      <li class="flex-item">2</li>-->
<!--      <li class="flex-item">3</li>-->
<!--      <li class="flex-item">4</li>-->
<!--    </ul>-->

<!--    <ul class="flex-container1">-->
<!--      <li class="flex-item1">农业生产</li>-->
<!--      <li class="flex-item1">2</li>-->
<!--      <li class="flex-item1">3</li>-->
<!--      <li class="flex-item1">4</li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="less" scoped>-->

<!--.flex-container {-->
<!--  display: flex;-->

<!--  /* Then we define the flow direction-->
<!--     and if we allow the items to wrap-->
<!--   * Remember this is the same as:-->
<!--   * flex-direction: row;-->
<!--   * flex-wrap: wrap;-->
<!--   */-->
<!--  flex-flow: row wrap;-->

<!--  /* Then we define how is distributed the remaining space */-->
<!--  justify-content: space-between;-->

<!--  padding: 0;-->
<!--  margin: 0;-->
<!--  list-style: none;-->
<!--}-->

<!--.flex-item {-->
<!--  background: #f3f6ee;-->
<!--  padding: 5px;-->
<!--  width: 250px;-->
<!--  height: 150px;-->
<!--  margin-top: 20px;-->
<!--  line-height: 150px;-->
<!--  color: white;-->
<!--  font-weight: bold;-->
<!--  font-size: 3em;-->
<!--  text-align: center;-->
<!--}-->
<!--.iimg{-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->

<!--.flex-container1 {-->
<!--  display: flex;-->
<!--  flex-flow: row wrap;-->
<!--  justify-content: space-between;-->

<!--  padding: 0;-->
<!--  margin: 0;-->
<!--  list-style: none;-->
<!--}-->

<!--.flex-item1 {-->
<!--  background: #f3f6ee;-->
<!--  padding: 5px;-->
<!--  width: 250px;-->
<!--  height: 20px;-->
<!--  margin-top: 0px;-->
<!--  line-height: 10px;-->
<!--  color: #000000;-->
<!--  font-weight: normal;-->
<!--  font-size: 1em;-->
<!--  text-align: center;-->
<!--}-->
<!--</style>-->

<!--<script setup>-->

<!--import globalTitle from '@/components/globalTitle.vue'-->
<!--</script>-->


<template>
  <div>
    <el-row>
      <globalTitle />
    </el-row>
  <div class="video-list">
    <div class="video-item" @click="toNoticeMsg(item.id)" :key="index" v-for="(item, index) in noticeList" >
<!--      远程图片路径-->
<!--      <img :src="item.picturePath" :alt="item.title" class="video-thumbnail" />-->
<!--      本地图片路径-->
      <img :src="'http://localhost:7070/' + item.picturePath" :alt="item.title" class="video-thumbnail" />
      <div class="video-title">{{ item.title }}</div>
    </div>
  </div>
  <!-- 分页 -->
  <div class="fenye">
    <el-pagination background @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pageSize" layout="prev, pager, next,total" :total="total"> </el-pagination>
  </div>
  </div>
</template>

<script>
import { getMinTitle, getNewsList } from '@/api/api'
import globalTitle from '@/components/globalTitle.vue'
export default {
  name: 'notice',
  components: { globalTitle },
  data() {
    return {
      noticeList: [],
      //下面项目后加
      cont: '',
      menuList: [],
      pageSize: 8,
      currentPage: 1,
      total: 0,
      item: {}
    }
  },
  created() {},
  mounted() {
    this.getnews()
  },
  //watch后加
  watch: {
    menuList(n, o) {
      this.cont = this.menuList[0].name
      this.item = this.menuList[0]
      this.getnews(this.menuList[0])
    }
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.getnews(this.item)
    },
    getTitle() {
      const data = Number(this.$route.query.id)
      getMinTitle(data)
        .then(res => {
          console.log(res)
          if (res.code == 200) {
            this.menuList = res.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getnews() {
      const data = {
        current: this.currentPage,
        newsCategoryId: 42,
        size: this.pageSize
      }
      getNewsList(data)
        .then(res => {
          console.log(res)
          if (res.code == 200) {
            this.noticeList = res.data.records
            this.total = Number(res.data.total)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 去到新闻展示页
    toNoticeMsg(id) {
      //实现新标签页打开
      const url = this.$router.resolve({ path: '/home/news', query: { id: id } }).href;
      window.open(url, '_blank');
    }
    // //获取新闻列表
    // getnews() {
    //   const data = {
    //     current: 1,
    //     newsCategoryId: 42,
    //     size: 80
    //   }
    //   getNewsList(data)
    //     .then(res => {
    //       console.log(res)
    //       if (res.code == 200) {
    //         this.noticeList = res.data.records
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },
    // // 去到新闻展示页
    // toNoticeMsg(id) {
    //   //实现新标签页打开
    //   const url = this.$router.resolve({ path: '/home/news', query: { id: id } }).href;
    //   window.open(url, '_blank');
    // }
  }
}
</script>

<style>
.video-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 10px;
}

.video-item {
  width: 22%;
  margin-bottom: 30px;
  cursor: pointer;
  transition: transform 0.2s;
}

.video-item:hover {
  transform: scale(1.05);
}

.video-thumbnail {
  width: 100%;
  height: 80%;
}

.video-title {
  margin-top: 10px;
  text-align: center;
  font-size: 1em;
}
.fenye{
  text-align: center;
}
</style>
