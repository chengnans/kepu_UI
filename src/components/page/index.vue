<template>
<!--  index_zong实现整个可变区域占宽100%-->
  <div class="index_zong">
<!--    顶部轮播-->
<!--  lunbo单独定义轮播图属性-->
  <div class="lunbo">
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

<!--    要闻热点-->
    <div class="box1">
      <el-row type="flex" class="row-bg underline marb10" justify="space-between">
        <span class="color"><b>要闻热点</b></span>
<!--页面跳转实现-->
        <router-link to="/home/new_article?title=new_article&id=27">
          <span  class="liPointer"> 更多<i class="el-icon-d-arrow-right"></i> </span>
        </router-link>
      </el-row>

<!--新闻轮播图实现-->
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
      <news_article_index class="news_article_index" />
    </el-row>


    <!-- 首页下半部分 -->
    <el-row type="flex" class="row-bg">
      <kpArticle_index class="kpArticle_index" />
    </el-row>

<!--科普视频列表实现-->
    <el-row type="flex" class="row-bg underline marb10" justify="space-between">
      <span class="color"><b>科普视频</b></span>
      <router-link to="/home/kpVideos?title=kpVideos&id=24">
        <span  class="liPointer"> 更多<i class="el-icon-d-arrow-right"></i> </span>
      </router-link>
    </el-row>
    <el-row>
      <videos class="videos" />
    </el-row>

<!--少儿科普-->
    <el-row>
      <child_index class="child_index" />
    </el-row>


      <!--科技特派员-->
      <el-row type="flex" class="row-bg">
        <commissioner_index class="commissioner_index" />
      </el-row>

<!--科普大讲堂-->
      <el-row>
        <lecture_hall_index class="lecture_hall_index" />
      </el-row>
<!--友情链接-->
    <el-row>
      <Links class="Links" />
    </el-row>

  </div>
  </div>
</template>
<script>
import news_article_index from '../../views/news_article_index.vue'
import kpArticle_index from '../../views/kpArticle_index.vue'
import commissioner_index from '../../views/commissioner_index.vue'
import Links from '../../views/Links.vue'
import kpVideos from './kpVideos.vue'
import child from './child.vue'
import videos from '../../views/videos.vue'
import child_index from '@/views/child_index.vue'
import lecture_hall_index from '@/views/lecture_hall_index.vue'


import { getNewsList } from '../../api/api'

export default {
  components: { news_article_index, kpArticle_index, videos, commissioner_index, Links, kpVideos, child, child_index, lecture_hall_index},
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
.news_article_index {
  width: 100%;
}
.videos {
  width: 100%;
}
.kpArticle_index {
  width: 100%;
  margin-right: 0px;
}
.commissioner_index {
  width: 100%;
}
.lecture_hall_index {
  width: 100%;
}
.Links {
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
</style>
