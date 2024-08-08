<!--<template>-->
<!--      <el-row type="flex" class="row-bg" justify="space-between">-->
<!--        <div class="block marr10">-->
<!--          <el-carousel height="25rem" arrow="always" :interval="5000">-->
<!--            <el-carousel-item v-for="(item1, index1) in imgList_news" :key="index1">-->
<!--              <div @click="gonew(item1.id)" class="cursor" style="width:100%; height:auto">-->
<!--  &lt;!&ndash;              <img :src="'http://localhost:7070/' + item1.picturePath" alt="" style="width:100%; height:90%" />&ndash;&gt;-->
<!--                <img :src="item1.picturePath" alt="" style="width:100%; height:90%" />-->
<!--              </div>-->
<!--            </el-carousel-item>-->
<!--          </el-carousel>-->
<!--        </div>-->
<!--        <news_article_index class="news_article_index" />-->
<!--      </el-row>-->
<!--</template>-->
<!--<script>-->
<!--import { getNewsList } from '@/api/api'-->
<!--import news_article_index from '../views/news_article_index.vue'-->
<!--export default {-->
<!--  components:{news_article_index},-->
<!--  data() {-->
<!--    return {-->
<!--      imgList_news: [],-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.getnews_news()-->

<!--  },-->
<!--  methods: {-->

<!--    // 第二轮播图数据实现-->
<!--    getnews_news() {-->
<!--      const data_news = {-->
<!--        current: 1,-->
<!--        newsCategoryId: 42,-->
<!--        size: 3-->
<!--      }-->
<!--      getNewsList(data_news)-->
<!--        .then(res => {-->
<!--          // console.log(res)-->
<!--          if (res.code == 200) {-->
<!--            this.imgList_news = res.data.records-->
<!--          }-->
<!--        })-->
<!--        .catch(err => {-->
<!--          console.log(err)-->
<!--        })-->
<!--    },-->
<!--    gonew(id) {-->
<!--      // this.$router.push({ path: '/home/news', query: { id: id } })-->
<!--      const url = this.$router.resolve({ path: '/home/news', query: { id: id } }).href;-->
<!--      window.open(url, '_blank');-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style scoped lang="less">-->
<!--.news_article_index {-->
<!--  width: 100%;-->
<!--}-->
<!--.block {-->
<!--  width: 100%;-->
<!--}-->
<!--.block div {-->
<!--  img {-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    // object-fit:cover;-->
<!--  }-->
<!--}-->
<!--</style>-->

<!--<template>-->
<!--  <el-row type="flex" class="row-bg">-->
<!--    <div class="block">-->
<!--      <el-carousel height="25rem" arrow="always" :interval="5000">-->
<!--        <el-carousel-item v-for="(item1, index1) in imgList_news" :key="index1">-->
<!--          <div @click="gonew(item1.id)" class="cursor" style="width:100%; height:auto">-->
<!--            <img :src="'http://47.98.239.223:7070/' + item1.picturePath" alt="" style="width:100%; height:90%" />-->
<!--          </div>-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->
<!--    </div>-->
<!--    <news_article_index class="news_article_index" />-->
<!--  </el-row>-->
<!--</template>-->

<!--<script>-->
<!--import { getNewsList } from '@/api/api'-->
<!--import news_article_index from '../views/news_article_index.vue'-->

<!--export default {-->
<!--  components: { news_article_index },-->
<!--  data() {-->
<!--    return {-->
<!--      imgList_news: [],-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.getnews_news()-->
<!--  },-->
<!--  methods: {-->
<!--    getnews_news() {-->
<!--      const data_news = {-->
<!--        current: 1,-->
<!--        newsCategoryId: 42,-->
<!--        size: 3-->
<!--      }-->
<!--      getNewsList(data_news)-->
<!--        .then(res => {-->
<!--          if (res.code == 200) {-->
<!--            this.imgList_news = res.data.records-->
<!--          }-->
<!--        })-->
<!--        .catch(err => {-->
<!--          console.log(err)-->
<!--        })-->
<!--    },-->
<!--    gonew(id) {-->
<!--      const url = this.$router.resolve({ path: '/home/news', query: { id: id } }).href;-->
<!--      window.open(url, '_blank');-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="less">-->
<!--.row-bg {-->
<!--  display: flex;-->
<!--  flex-wrap: wrap;-->
<!--}-->

<!--.block, .news_article_index {-->
<!--  width: 100%;-->
<!--}-->

<!--@media (min-width: 768px) {-->
<!--  .row-bg {-->
<!--    flex-wrap: nowrap;-->
<!--  }-->

<!--  .block, .news_article_index {-->
<!--    width: 48%;-->
<!--  }-->

<!--  .block {-->
<!--    margin-right: 2%;-->
<!--  }-->
<!--}-->

<!--.block div img {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->
<!--</style>-->

<!--<template>-->
<!--  <el-row type="flex" class="row-bg">-->
<!--    <div class="block">-->
<!--      <el-carousel arrow="always" :interval="5000">-->
<!--        <el-carousel-item v-for="(item1, index1) in imgList_news" :key="index1">-->
<!--          <div @click="gonew(item1.id)" class="cursor carousel-container">-->
<!--            <img :src="'http://47.98.239.223:7070/' + item1.picturePath" alt="" />-->
<!--          </div>-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->
<!--    </div>-->
<!--    <news_article_index class="news_article_index" />-->
<!--  </el-row>-->
<!--</template>-->

<!--<script>-->
<!--import { getNewsList } from '@/api/api'-->
<!--import news_article_index from '../views/news_article_index.vue'-->

<!--export default {-->
<!--  components: { news_article_index },-->
<!--  data() {-->
<!--    return {-->
<!--      imgList_news: [],-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.getnews_news()-->
<!--  },-->
<!--  methods: {-->
<!--    getnews_news() {-->
<!--      const data_news = {-->
<!--        current: 1,-->
<!--        newsCategoryId: 42,-->
<!--        size: 3-->
<!--      }-->
<!--      getNewsList(data_news)-->
<!--        .then(res => {-->
<!--          if (res.code == 200) {-->
<!--            this.imgList_news = res.data.records-->
<!--          }-->
<!--        })-->
<!--        .catch(err => {-->
<!--          console.log(err)-->
<!--        })-->
<!--    },-->
<!--    gonew(id) {-->
<!--      const url = this.$router.resolve({ path: '/home/news', query: { id: id } }).href;-->
<!--      window.open(url, '_blank');-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="less">-->
<!--.row-bg {-->
<!--  display: flex;-->
<!--  flex-wrap: wrap;-->
<!--}-->

<!--.block, .news_article_index {-->
<!--  width: 100%;-->
<!--}-->

<!--.carousel-container {-->
<!--  position: relative;-->
<!--  width: 100%;-->
<!--  padding-bottom: 56.25%; /* 16:9 aspect ratio */-->
<!--}-->

<!--.carousel-container img {-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  object-fit: cover;-->
<!--}-->

<!--@media (min-width: 768px) {-->
<!--  .row-bg {-->
<!--    flex-wrap: nowrap;-->
<!--  }-->

<!--  .block, .news_article_index {-->
<!--    width: 48%;-->
<!--  }-->

<!--  .block {-->
<!--    margin-right: 2%;-->
<!--  }-->
<!--}-->

<!--.news_article_index {-->
<!--  width: 100%;-->
<!--}-->

<!--.block div img {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->
<!--</style>-->

<template>
  <el-row type="flex" class="row-bg">
    <div class="block">
      <el-carousel arrow="always" :interval="5000">
        <el-carousel-item v-for="(item1, index1) in imgList_news" :key="index1">
          <div @click="gonew(item1.id)" class="cursor carousel-container">
            <img :src="'http://47.98.239.223:7070/' + item1.picturePath" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <news_article_index class="news_article_index" />
  </el-row>
</template>

<script>
import { getNewsList } from '@/api/api'
import news_article_index from '../views/news_article_index.vue'

export default {
  components: { news_article_index },
  data() {
    return {
      imgList_news: [],
    }
  },
  created() {
    this.getnews_news()
  },
  methods: {
    getnews_news() {
      const data_news = {
        current: 1,
        newsCategoryId: 42,
        size: 3
      }
      getNewsList(data_news)
        .then(res => {
          if (res.code == 200) {
            this.imgList_news = res.data.records
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    gonew(id) {
      const url = this.$router.resolve({ path: '/home/news', query: { id: id } }).href;
      window.open(url, '_blank');
    },
  }
}
</script>

<style scoped lang="less">
.row-bg {
  display: flex;
  flex-wrap: wrap;
}

.block, .news_article_index {
  width: 100%;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-container img {
  width: 100%;
  height: auto;
  max-height: 100vh; /* 限制图片高度不超过视口高度 */
  object-fit: contain; /* 保持图片的完整性 */
}

@media (min-width: 768px) {
  .row-bg {
    flex-wrap: nowrap;
  }

  .block, .news_article_index {
    width: 48%;
  }

  .block {
    margin-right: 2%;
  }
}

.news_article_index {
  width: 100%;
}

.block div img {
  width: 100%;
  height: auto;
}
</style>
