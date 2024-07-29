<template>
<!--  index_zong实现整个可变区域占宽100%-->
  <div class="index_zong">
<!--  lunbo单独定义轮播图属性-->
  <div class="lunbo">
    <!-- 首页上半部分 -->
    <el-row type="flex" class="row-bg">
      <div class="block marr10_new">
        <el-carousel height="450px" arrow="always" :interval="5000">
          <el-carousel-item v-for="(item, index) in imgList" :key="index">
            <div @click="gonew(item.id)" class="cursor" style="width:100%; height:450px">
              <img :src="'http://localhost:7070/' + item.picturePath" alt="" style="width:100%; height:90%" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>
  </div>
    <div class="box1">
      <el-row type="flex" class="row-bg underline marb10" justify="space-between">
        <span class="color"><b>要闻热点</b></span>
<!--页面跳转实现-->
        <router-link to="/home/kePuFengCai?title=kePuFengCai&id=27">
          <span  class="liPointer"> 更多<i class="el-icon-d-arrow-right"></i> </span>
        </router-link>
      </el-row>

    <el-row type="flex" class="row-bg" justify="space-between">
      <div class="block marr10">
        <el-carousel height="450px" arrow="always" :interval="5000">
          <el-carousel-item v-for="(item1, index1) in imgList_news" :key="index1">
            <div @click="gonew(item1.id)" class="cursor" style="width:100%; height:94%">
<!--              <img :src="'http://localhost:7070/' + item1.picturePath" alt="" style="width:100%; height:90%" />-->
              <img :src="item1.picturePath" alt="" style="width:100%; height:90%" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <notice class="notice" />
    </el-row>


    <!-- 首页下半部分 -->
    <el-row type="flex" class="row-bg">
      <work class="work" />
    </el-row>

<!--科普视频列表实现-->
    <el-row type="flex" class="row-bg underline marb10" justify="space-between">
      <span class="color"><b>科普视频</b></span>
      <router-link to="/home/keXieXiangMu?title=keXieXiangMu&id=24">
        <span  class="liPointer"> 更多<i class="el-icon-d-arrow-right"></i> </span>
      </router-link>
    </el-row>

    <el-row>
      <videos class="videos" />
    </el-row>



<!--    <el-row>-->
<!--      <school class="school" />-->
<!--    </el-row>-->

    <el-row type="flex" class="row-bg underline marb10" justify="space-between">
      <span class="color"><b>少儿科普</b></span>
      <router-link to="/home/banShiZhiNan?title=banShiZhiNan&id=26">
        <span  class="liPointer"> 更多<i class="el-icon-d-arrow-right"></i> </span>
      </router-link>
    </el-row>
      <el-row>
            <div class="video-list">
              <div class="video-item" @click="toNoticeMsg(item2.id)" :key="index2" v-for="(item2, index2) in videoList" >
                <!--      远程图片路径-->
                <!--      <img :src="item.picturePath" :alt="item.title" class="video-thumbnail" />-->
                <!--      本地图片路径-->
                <img :src="'http://localhost:7070/' + item2.picturePath" :alt="item2.title" class="video-thumbnail" />
                <div class="video-title">{{ item2.title }}</div>
              </div>
            </div>
      </el-row>
<!--    <el-row>-->
<!--      <banShiZhiNan class="banShiZhiNan" />-->
<!--    </el-row>-->
      <!--      科技特派员-->
      <el-row type="flex" class="row-bg">
        <school class="school" />
      </el-row>


    <el-row>
      <other class="other" />
    </el-row>

  </div>
  </div>
</template>
<script>
import notice from '../../views/notice.vue'
import work from '../../views/work.vue'
import school from '../../views/school.vue'
import other from '../../views/other.vue'
import keXieXiangMu from './keXieXiangMu'
import banShiZhiNan from './banShiZhiNan.vue'
import videos from '../../views/videos.vue'


import { getNewsList } from '../../api/api'

export default {
  components: { notice, work, videos, school, other, keXieXiangMu },
  name: 'index',
  data() {
    return {
      // imgList:[
      //   { path:require('../../assets/images/1.jpg'),index: 1},
      //   { path:require('../../assets/images/2.jpg'),index: 2},
      //   { path:require('../../assets/images/3.jpg'),index: 3},
      // ],
      imgList: [],
      imgList_news: [],
      //测试
      videoList: []
    }
  },
  created() {
    this.getnews()
    this.getnews_news()
    //测试
    this.getvideos()
  },
  methods: {
    getnews() {
      const data = {
        current: 1,
        newsCategoryId: 45,
        size: 3
      }
      getNewsList(data)
        .then(res => {
          console.log(res)
          if (res.code == 200) {
            this.imgList = res.data.records
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    // 第二轮播图数据实现
    getnews_news() {
      const data_news = {
        current: 1,
        newsCategoryId: 40||41,
        size: 3
      }
      getNewsList(data_news)
        .then(res => {
          console.log(res)
          if (res.code == 200) {
            this.imgList_news = res.data.records
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    gonew(id) {
      // this.$router.push({ path: '/home/news', query: { id: id } })
      const url = this.$router.resolve({ path: '/home/news', query: { id: id } }).href;
      window.open(url, '_blank');
    },

    //测试
    getvideos() {
      const data = {
        current: 2,
        newsCategoryId: 42,
        size: 8
      }
      getNewsList(data)
        .then(res => {
          console.log(res)
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
<style lang="less" scoped>
.block {
  width: 100%;
}
.block div {
  img {
    width: 100%;
    height: 100%;
    // object-fit:cover;
  }
}
.notice {
  width: 100%;
}
.video {
  width: 100%;
}
.work {
  width: 100%;
  margin-right: 0px;
}
.school {
  width: 100%;
}
.other {
  width: 100%;
  margin-left: 0px;
}
.index_zong {
  width: 100%;
  margin: 0 auto;
}
.lunbo {
  width: 100%;
  margin: 0 auto;
}
//仅首页box1属性
.box1{
  width: 85%;
  margin: 0 auto
}

//测试
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
