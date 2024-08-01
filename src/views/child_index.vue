<template>
  <div>
    <el-row type="flex" class="row-bg underline marb10" justify="space-between">
      <span class="color"><b>少儿科普</b></span>
      <router-link to="/home/child?title=child&id=26">
        <span  class="liPointer"> 更多<i class="el-icon-d-arrow-right"></i> </span>
      </router-link>
    </el-row>
  <div class="video-list">
    <div class="video-item" @click="toNoticeMsg(item.id)" :key="index" v-for="(item, index) in videoList" >
      <!--      远程图片路径-->
      <!--      <img :src="item.picturePath" :alt="item.title" class="video-thumbnail" />-->
      <!--      本地图片路径-->
      <img :src="'http://localhost:7070/' + item.picturePath" :alt="item.title" class="video-thumbnail" />
<!--      <div class="video-title">{{ item.title }}</div>-->
    </div>
  </div>
  </div>
</template>
<script>
import { getNewsList } from '@/api/api'
export default {
  name: 'videos',
  data() {
    return {
      videoList: [],
    }
  },
  // mounted() {
  //   this.getnews()
  // },
  created() {
    // console.log(123)
    this.getnews()
  },
  methods: {
    //获取新闻列表
    getnews() {
      const data = {
        current: 1,
        newsCategoryId: 43,
        size: 4
      }
      getNewsList(data)
        .then(res => {
          // console.log(res)
          if (res.code == 200) {
            this.videoList = res.data.records
            // //后加
            // this.total = Number(res.data.total)
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
  }
}
</script>

<style>
.video-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
</style>
