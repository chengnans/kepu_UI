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
<!--  height: auto;-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->

<!--.carousel-container img {-->
<!--  width: 100%;-->
<!--  height: auto;-->
<!--  max-height: 100vh; /* 限制图片高度不超过视口高度 */-->
<!--  object-fit: contain; /* 保持图片的完整性 */-->
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
<!--  height: auto;-->
<!--}-->
<!--</style>-->


<!--<template>-->
<!--  <el-row type="flex" class="row-bg" justify="space-between">-->
<!--    <div class="block carousel-container marr10">-->
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
<!--/* PC端样式 */-->
<!--@media (min-width: 768px) {-->
<!--  .carousel-container, .news_article_index {-->
<!--    width: 48%;-->
<!--  }-->

<!--  .carousel-container {-->
<!--    margin-right: 2%; /* 留出间隙 */-->
<!--  }-->
<!--}-->

<!--/* 移动端样式 */-->
<!--@media (max-width: 767px) {-->
<!--  .carousel-container, .news_article_index {-->
<!--    width: 100%;-->
<!--    margin-right: 0;-->
<!--    margin-bottom: 1rem; /* 给元素之间增加一些间距 */-->
<!--  }-->
<!--}-->

<!--.block div {-->
<!--  img {-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--  }-->
<!--}-->
<!--</style>-->


<!--<template>-->
<!--  <div class="content-wrapper">-->
<!--    <div class="carousel-container">-->
<!--      <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">-->
<!--        <div v-for="(item1, index1) in imgList_news" :key="index1" class="carousel-slide" @click="gonew(item1.id)">-->
<!--          <img :src="'http://47.98.239.223:7070/' + item1.picturePath" alt="News Image" />-->
<!--        </div>-->
<!--      </div>-->
<!--&lt;!&ndash;      <button class="carousel-prev" @click="prevSlide">‹</button>&ndash;&gt;-->
<!--&lt;!&ndash;      <button class="carousel-next" @click="nextSlide">›</button>&ndash;&gt;-->
<!--      <button @click="prev" class="carousel-control prev">-->
<!--        <i class="el-icon-arrow-left"></i>-->
<!--      </button>-->
<!--      <button @click="next" class="carousel-control next">-->
<!--        <i class="el-icon-arrow-right"></i>-->
<!--      </button>-->
<!--    </div>-->
<!--    <news_article_index class="news-article-index"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { getNewsList } from '@/api/api'-->
<!--import news_article_index from '../views/news_article_index.vue'-->

<!--export default {-->
<!--  components: { news_article_index },-->
<!--  data() {-->
<!--    return {-->
<!--      imgList_news: [],-->
<!--      currentIndex: 0,-->
<!--    };-->
<!--  },-->
<!--  created() {-->
<!--    this.getnews_news();-->
<!--  },-->
<!--  methods: {-->
<!--    getnews_news() {-->
<!--      const data = {-->
<!--        current: 1,-->
<!--        newsCategoryId: 42,-->
<!--        size: 3,-->
<!--      };-->
<!--      getNewsList(data)-->
<!--        .then((res) => {-->
<!--          if (res.code === 200) {-->
<!--            this.imgList_news = res.data.records;-->
<!--          }-->
<!--        })-->
<!--        .catch((err) => {-->
<!--          console.log(err);-->
<!--        });-->
<!--    },-->
<!--    gonew(id) {-->
<!--      const url = this.$router.resolve({ path: '/home/news', query: { id } }).href;-->
<!--      window.open(url, '_blank');-->
<!--    },-->
<!--    // nextSlide() {-->
<!--    //   this.currentIndex = (this.currentIndex + 1) % this.imgList_news.length;-->
<!--    // },-->
<!--    // prevSlide() {-->
<!--    //   this.currentIndex = (this.currentIndex - 1 + this.imgList_news.length) % this.imgList_news.length;-->
<!--    // },-->
<!--    next() {-->
<!--      this.currentIndex = (this.currentIndex + 1) % this.imgList.length-->
<!--    },-->
<!--    prev() {-->
<!--      this.currentIndex =-->
<!--        (this.currentIndex - 1 + this.imgList.length) % this.imgList.length-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--/* 容器样式 */-->
<!--.content-wrapper {-->
<!--  display: flex;-->
<!--  flex-wrap: wrap;-->
<!--}-->

<!--/* 轮播图容器样式 */-->
<!--.carousel-container {-->
<!--  position: relative;-->
<!--  width: 100%;-->
<!--  overflow: hidden;-->
<!--  flex: 1 1 50%;-->
<!--}-->

<!--/* 轮播图内容样式 */-->
<!--.carousel {-->
<!--  display: flex;-->
<!--  transition: transform 0.5s ease-in-out;-->
<!--  transform: translateX(calc(-100% * var(&#45;&#45;current-index)));-->
<!--}-->

<!--/* 单个幻灯片样式 */-->
<!--.carousel-slide {-->
<!--  flex: 0 0 100%;-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  cursor: pointer;-->
<!--}-->

<!--.carousel-slide img {-->
<!--  width: 100%;-->
<!--  height: auto;-->
<!--  border-radius: 15px;-->
<!--}-->

<!--/* 控制按钮样式 */-->
<!--.carousel-prev,-->
<!--.carousel-next {-->
<!--  position: absolute;-->
<!--  top: 50%;-->
<!--  transform: translateY(-50%);-->
<!--  background-color: rgba(0, 0, 0, 0.5);-->
<!--  color: white;-->
<!--  border: none;-->
<!--  font-size: 2rem;-->
<!--  padding: 0.5rem 1rem;-->
<!--  cursor: pointer;-->
<!--  z-index: 100;-->
<!--}-->

<!--.carousel-prev {-->
<!--  left: 10px;-->
<!--}-->

<!--.carousel-next {-->
<!--  right: 10px;-->
<!--}-->

<!--/* 新闻文章样式 */-->
<!--.news-article-index {-->
<!--  flex: 1 1 50%;-->
<!--  padding: 0 15px;-->
<!--}-->

<!--/* PC端样式 */-->
<!--@media (min-width: 768px) {-->
<!--  .content-wrapper {-->
<!--    flex-wrap: nowrap;-->
<!--  }-->
<!--}-->

<!--/* 移动端样式 */-->
<!--@media (max-width: 767px) {-->
<!--  .carousel-container,-->
<!--  .news-article-index {-->
<!--    width: 100%;-->
<!--    flex: 1 1 100%;-->
<!--    padding: 0;-->
<!--  }-->
<!--}-->
<!--/* 控制按钮 */-->
<!--.carousel-control {-->
<!--  position: absolute;-->
<!--  top: 50%;-->
<!--  transform: translateY(-50%);-->
<!--  background-color: rgba(0, 0, 0, 0.2);-->
<!--  color: white;-->
<!--  border: none;-->
<!--  padding: 10px;-->
<!--  cursor: pointer;-->
<!--  font-size: 18px;-->
<!--  border-radius: 50%; /* 设置为圆形 */-->
<!--  z-index: 10;-->
<!--  opacity: 0.7; /* 透明度设置为70% */-->
<!--  transition: background-color 0.3s ease;-->
<!--}-->

<!--.carousel-control:hover {-->
<!--  background-color: rgba(0, 0, 0, 0.5); /* 调整鼠标悬停时的透明度 */-->
<!--  opacity: 0.7;-->
<!--}-->

<!--.prev {-->
<!--  left: 10px;-->
<!--}-->

<!--.next {-->
<!--  right: 10px;-->
<!--}-->

<!--</style>-->


<template>
  <div class="carousel-and-news-container">
    <div class="carousel-container">
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(item, index) in imgList" :key="index" class="carousel-item">
          <div @click="handleClick(item.id)" class="carousel-item">
            <img :src="'http://kepu.sd-smartagriculture.cn:7070/' + item.picturePath" alt="" class="carousel-image" />
          </div>
        </div>
      </div>
      <button @click="prev" class="carousel-control prev">
        <i class="el-icon-arrow-left"></i>
      </button>
      <button @click="next" class="carousel-control next">
        <i class="el-icon-arrow-right"></i>
      </button>
    </div>
    <news_article_index class="article_index"/>

  </div>
</template>
<script>
import { getNewsList } from '@/api/api'
import news_article_index from './news_article_index.vue'

export default {
  name: 'lunbo2',
  components: { news_article_index },
  data() {
    return {
      currentIndex: 0,
      imgList: [],
      intervalId: null // 用于保存定时器 ID
    }
  },
  created() {
    this.getnews()
    this.startAutoPlay() // 启动自动轮播
  },
  beforeDestroy() {
    this.stopAutoPlay() // 组件销毁前停止自动轮播
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.imgList.length
      this.pauseAutoPlay() // 暂停自动轮播
      setTimeout(() => this.resumeAutoPlay(), 1000) // 1秒后恢复自动轮播
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.imgList.length) % this.imgList.length
      this.pauseAutoPlay() // 暂停自动轮播
      setTimeout(() => this.resumeAutoPlay(), 1000) // 1秒后恢复自动轮播
    },
    getnews() {
      const data = {
        current: 1,
        newsCategoryId: 29,
        size: 3
      }
      getNewsList(data)
        .then(res => {
          if (res.code === 200) {
            this.imgList = res.data.records
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleClick(id) {
      const url = this.$router.resolve({ path: '/home/news', query: { id: id } }).href;
      window.open(url, '_blank');
    },
    startAutoPlay() {
      this.intervalId = setInterval(() => {
        this.next()
      }, 5000) // 每 5 秒切换一次
    },
    stopAutoPlay() {
      clearInterval(this.intervalId)
      this.intervalId = null
    },
    pauseAutoPlay() {
      clearInterval(this.intervalId)
      this.intervalId = null
    },
    resumeAutoPlay() {
      if (!this.intervalId) {
        this.startAutoPlay()
      }
    }
  }
};
</script>
<style scoped>
.carousel-and-news-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 添加间距 */
}

.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  height: auto;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 控制按钮 */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 10px;
  border-radius: 50%; /* 设置为圆形 */
  z-index: 10;
  opacity: 0.7; /* 透明度设置为70% */
  transition: background-color 0.3s ease;
}

.carousel-control:hover {
  background-color: rgba(0, 0, 0, 0.5); /* 调整鼠标悬停时的透明度 */
  opacity: 0.7;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

/* 移动端样式 */
@media (max-width: 768px) {
  .carousel-and-news-container {
    flex-direction: column;
  }

  .carousel-item,
  .carousel-image {
    height: 200px;
    padding-bottom: 10px;
  }

  .article_index {
    width: 100%;
  }
}

/* PC 端样式 */
@media (min-width: 769px) {
  .carousel-and-news-container {
    flex-direction: row;
    justify-content: space-between; /* 平均分配剩余空间 */
  }

  .carousel-container {
    flex-basis: calc(50% - 10px); /* 减去一半的间距 */
  }

  .carousel-item,
  .carousel-image {
    height: 400px;
    padding-bottom: 20px;
  }

  .article_index {
    width: 49%;
  }
}
</style>
