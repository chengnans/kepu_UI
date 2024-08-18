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
      <img :src="'http://kepu.sd-smartagriculture.cn:7070/' + item.picturePath" :alt="item.title" class="video-thumbnail" />
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
      // console.log(`当前页: ${val}`)
      this.getnews(this.item)
    },
    getTitle() {
      const data = Number(this.$route.query.id)
      getMinTitle(data)
        .then(res => {
          // console.log(res)
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
          // console.log(res)
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
