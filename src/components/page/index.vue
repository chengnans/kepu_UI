<template>
<!--  index_zong实现整个可变区域占宽100%-->
  <div class="index_zong">
<!--    顶部轮播-->
    <lunbo1 />

<!--    热点新闻-->
    <div class="box1">

      <br>
      <el-row>
        <router-link to="/home/new_article?title=new_article&id=27">
          <img src="http://47.98.239.223:7070/images/rdxw.png"  alt="rdxw" style="width: 100% ; height: 10%"/>
        </router-link>
      </el-row>
<!--新闻轮播图实现-->
      <el-row>
        <lunbo2 />
      </el-row>
<!--    <el-row type="flex" class="row-bg" justify="space-between">-->
<!--      <el-row class="news-carousel-row">-->
<!--      <div class="block marr10">-->
<!--        <el-carousel height="25rem" arrow="always" :interval="5000">-->
<!--          <el-carousel-item v-for="(item1, index1) in imgList_news" :key="index1">-->
<!--            <div @click="gonew(item1.id)" class="cursor" style="width:100%; height:auto">-->
<!--&lt;!&ndash;              <img :src="'http://localhost:7070/' + item1.picturePath" alt="" style="width:100%; height:90%" />&ndash;&gt;-->
<!--              <img :src="item1.picturePath" alt="" style="width:100%; height:90%" />-->
<!--            </div>-->
<!--          </el-carousel-item>-->
<!--        </el-carousel>-->
<!--      </div>-->
<!--      <news_article_index class="news_article_index" />-->
<!--    </el-row>-->
      <br>
      <el-row>
        <router-link to="/home/kpArtcle?title=kpArtcle&id=23">
          <img src="http://47.98.239.223:7070/images/kpwz.png"  alt="kpwz" style="width: 100% ; height: 20%"/>
        </router-link>
      </el-row>
    <el-row type="flex" class="row-bg">
      <kpArticle_index class="kpArticle_index" />
    </el-row>

<!--科普视频-->
      <br>
      <el-row>
        <router-link to="/home/kpVideos?title=kpVideos&id=24">
          <img src="http://47.98.239.223:7070/images/kpsp.png"  alt="kpsp" style="width: 100% ; height: 20%"/>
        </router-link>
      </el-row>
    <el-row>
      <videos class="videos" />
    </el-row>

<!--少儿科普-->
      <br>
      <el-row>
        <router-link to="/home/child?title=child&id=26">
          <img src="http://47.98.239.223:7070/images/sekp.png"  alt="sekp" style="width: 100% ; height: 20%"/>
        </router-link>
      </el-row>
    <el-row>
      <child_index class="child_index" />
    </el-row>


      <!--科技特派员-->
      <el-row>
        <router-link to="/home/commissioner?title=commissioner&id=25">
          <img src="http://47.98.239.223:7070/images/kjtpy.png"  alt="kjtpy" style="width: 100% ; height: 20%"/>
        </router-link>
      </el-row>
      <el-row type="flex" class="row-bg">
        <commissioner_index class="commissioner_index" />
      </el-row>

<!--科普大讲堂-->
      <br>
      <el-row>
        <router-link to="/home/lecture_hall?title=lecture_hall&id=29">
          <img src="http://47.98.239.223:7070/images/kpdjt.png"  alt="kpdjt" style="width: 100% ; height: 20%"/>
        </router-link>
      </el-row>
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


import { getNewsList } from '@/api/api'
import lunbo1 from '@/views/lunbo1.vue'
import lunbo2 from '@/views/lunbo2.vue'

export default {
  components: { lunbo2, lunbo1, news_article_index, kpArticle_index, videos, commissioner_index, Links, kpVideos, child, child_index, lecture_hall_index},
  name: 'index',
  // data() {
  //   return {
  //     imgList: [],
  //     imgList_news: [],
  //   }
  // },
  // created() {
  //   this.getnews()
  //   this.getnews_news()
  //
  // },
  // methods: {
  //   getnews() {
  //     const data = {
  //       current: 1,
  //       newsCategoryId: 45,
  //       size: 3
  //     }
  //     getNewsList(data)
  //       .then(res => {
  //         // console.log(res)
  //         if (res.code == 200) {
  //           this.imgList = res.data.records
  //         }
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   },
  //
  //   // 第二轮播图数据实现
  //   getnews_news() {
  //     const data_news = {
  //       current: 1,
  //       newsCategoryId: 40||41,
  //       size: 3
  //     }
  //     getNewsList(data_news)
  //       .then(res => {
  //         // console.log(res)
  //         if (res.code == 200) {
  //           this.imgList_news = res.data.records
  //         }
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   },
  //   gonew(id) {
  //     // this.$router.push({ path: '/home/news', query: { id: id } })
  //     const url = this.$router.resolve({ path: '/home/news', query: { id: id } }).href;
  //     window.open(url, '_blank');
  //   },
  // }
}
</script>
<style lang="less" scoped>
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
//仅首页box1属性
.box1{
  width: 85%;
  margin: 0 auto
}
</style>
