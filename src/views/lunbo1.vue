<!--<template>-->
<!--  <div class="lunbo">-->
<!--&lt;!&ndash;    <el-row type="flex" class="row-bg">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="block marr10_new">&ndash;&gt;-->
<!--        <el-carousel arrow="always" :interval="5000">-->
<!--          <el-carousel-item v-for="(item, index) in imgList" :key="index">-->
<!--            &lt;!&ndash;            <div @click="gonew(item.id)" class="cursor" style="width:100%; height:450px">&ndash;&gt;-->
<!--            <div @click="gonew(item.id)" class="cursor">-->
<!--              <img :src="'http://47.98.239.223:7070/' + item.picturePath" alt="" class="carousel-image"/>-->
<!--            </div>-->
<!--          </el-carousel-item>-->
<!--        </el-carousel>-->
<!--      </div>-->
<!--&lt;!&ndash;    </el-row>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--</template>-->
<!--<script>-->
<!--import { getNewsList } from '@/api/api'-->

<!--export default {-->
<!--  name: 'lunbo1',-->
<!--  data() {-->
<!--    return {-->
<!--      imgList: [],-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.getnews()-->
<!--  },-->
<!--  methods: {-->
<!--    getnews() {-->
<!--      const data = {-->
<!--        current: 1,-->
<!--        newsCategoryId: 45,-->
<!--        size: 3-->
<!--      }-->
<!--      getNewsList(data)-->
<!--        .then(res => {-->
<!--          // console.log(res)-->
<!--          if (res.code == 200) {-->
<!--            this.imgList = res.data.records-->
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
<!--.block {-->
<!--  width: 100%;-->
<!--}-->
<!--.block div {-->
<!--  img {-->
<!--    width: auto;-->
<!--    height: 100%; /* 确保图片高度随容器变化 */-->
<!--    //object-fit: cover;-->
<!--  }-->
<!--}-->
<!--.lunbo {-->
<!--  width: auto;-->
<!--  margin: 0 auto;-->
<!--}-->
<!--/* 添加响应式设计 */-->
<!--@media (max-width: 768px) {-->
<!--  .carousel-image {-->
<!--    height: auto; /* 或者根据你的需求调整高度 */-->
<!--  }-->
<!--}-->
<!--</style>-->


<!--<template>-->
<!--  <div class="lunbo">-->
<!--    <el-row type="flex" class="row-bg">-->
<!--      <div class="block marr10_new">-->
<!--        <el-carousel class="lb1" height="23rem" arrow="always" :interval="5000">-->
<!--          <el-carousel-item v-for="(item, index) in imgList" :key="index">-->
<!--&lt;!&ndash;                        <div @click="gonew(item.id)" class="cursor" style="width:100%; height:450px">&ndash;&gt;-->
<!--            <div @click="gonew(item.id)" class="cursor">-->
<!--              <img :src="'http://47.98.239.223:7070/' + item.picturePath" alt="" class="carousel-image"/>-->
<!--            </div>-->
<!--          </el-carousel-item>-->
<!--        </el-carousel>-->
<!--      </div>-->
<!--    </el-row>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--import { getNewsList } from '@/api/api'-->

<!--export default {-->
<!--  name: 'lunbo1',-->
<!--  data() {-->
<!--    return {-->
<!--      imgList: [],-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.getnews()-->
<!--  },-->
<!--  methods: {-->
<!--    getnews() {-->
<!--      const data = {-->
<!--        current: 1,-->
<!--        newsCategoryId: 45,-->
<!--        size: 3-->
<!--      }-->
<!--      getNewsList(data)-->
<!--        .then(res => {-->
<!--          // console.log(res)-->
<!--          if (res.code == 200) {-->
<!--            this.imgList = res.data.records-->
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
<!--.block {-->
<!--  width: 100%;-->
<!--}-->
<!--.block div {-->
<!--  img {-->
<!--    width: 100%;-->
<!--    height: auto; /* 确保图片高度随容器变化 */-->
<!--    object-fit: cover;-->
<!--  }-->
<!--}-->
<!--.lunbo {-->
<!--  width: 100%;-->
<!--  margin: 0 auto;-->
<!--}-->
<!--/* 添加响应式设计 */-->
<!--@media (max-width: 768px) {-->
<!--  .carousel-image {-->
<!--    height: 300px; /* 或者根据你的需求调整高度 */-->
<!--  }-->
<!--.lb1{-->
<!--  height: 100px;-->
<!--}-->
<!--}-->
<!--</style>-->


<!--<template>-->
<!--  <div class="carousel1-wrapper">-->
<!--    <el-carousel arrow="always" :interval="5000" class="carousel1">-->
<!--      <el-carousel-item v-for="(item, index) in imgList" :key="index">-->
<!--        <div @click="handleClick(item.id)" class="carousel1-item">-->
<!--          <img :src="'http://47.98.239.223:7070/' + item.picturePath" alt="" class="carousel1-image" />-->
<!--        </div>-->
<!--      </el-carousel-item>-->
<!--    </el-carousel>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--import { getNewsList } from '@/api/api'-->

<!--export default {-->
<!--  name: 'lunbo1',-->
<!--  data() {-->
<!--    return {-->
<!--      imgList: [],-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.getnews()-->
<!--  },-->
<!--  methods: {-->
<!--    getnews() {-->
<!--      const data = {-->
<!--        current: 1,-->
<!--        newsCategoryId: 45,-->
<!--        size: 3-->
<!--      }-->
<!--      getNewsList(data)-->
<!--        .then(res => {-->
<!--          // console.log(res)-->
<!--          if (res.code == 200) {-->
<!--            this.imgList = res.data.records-->
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
<!--.carousel1-wrapper {-->
<!--  width: 100%;-->
<!--  //max-width: 1200px;-->
<!--  margin: 0 auto;-->
<!--}-->

<!--.carousel1 {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->

<!--.carousel1-item {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--}-->

<!--.carousel1-image {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  object-fit: cover;-->
<!--}-->

<!--@media (max-width: 768px) {-->
<!--  .carousel1-wrapper {-->
<!--    width: 100%;-->
<!--    height: 100px;-->
<!--    margin: 0 auto;-->
<!--  }-->
<!--  .carousel1 {-->
<!--    width: 100%;-->
<!--    height: 100px;-->
<!--  }-->
<!--  .carousel1-image {-->
<!--    height: 100px; /* 适配移动端的图片高度 */-->
<!--  }-->
<!--}-->

<!--@media (min-width: 769px) {-->
<!--  .carousel1-image {-->
<!--    height: 300px; /* 适配 PC 端的图片高度 */-->
<!--  }-->
<!--}-->
<!--</style>-->

<!--<template>-->
<!--  <div class="carousel-wrapper">-->
<!--    <el-carousel arrow="always" :interval="5000" class="carousel el-carousel__container1">-->
<!--      <el-carousel-item v-for="(item, index) in imgList" :key="index">-->
<!--        <div @click="handleClick(item.id)" class="carousel-item">-->
<!--          <img :src="'http://47.98.239.223:7070/' + item.picturePath" alt="" class="carousel-image" />-->
<!--        </div>-->
<!--      </el-carousel-item>-->
<!--    </el-carousel>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { getNewsList } from '@/api/api'-->

<!--export default {-->
<!--  name: 'lunbo1',-->
<!--  data() {-->
<!--    return {-->
<!--      imgList: [],-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.getnews()-->
<!--  },-->
<!--  methods: {-->
<!--    getnews() {-->
<!--      const data = {-->
<!--        current: 1,-->
<!--        newsCategoryId: 45,-->
<!--        size: 3-->
<!--      }-->
<!--      getNewsList(data)-->
<!--        .then(res => {-->
<!--          if (res.code == 200) {-->
<!--            this.imgList = res.data.records-->
<!--          }-->
<!--        })-->
<!--        .catch(err => {-->
<!--          console.log(err)-->
<!--        })-->
<!--    },-->
<!--    handleClick(id) {-->
<!--      const url = this.$router.resolve({ path: '/home/news', query: { id: id } }).href;-->
<!--      window.open(url, '_blank');-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="less">-->
<!--.carousel-wrapper {-->
<!--  //height: 200px;-->
<!--  width: 100%;-->
<!--  overflow: hidden; /* 防止出现滚动条 */-->
<!--}-->

<!--.carousel {-->
<!--  height: 100px;-->
<!--  width: 100%;-->
<!--}-->

<!--//.carousel-item {-->
<!--//  display: flex;-->
<!--//  align-items: center;-->
<!--//  justify-content: center;-->
<!--//  height: 100%;-->
<!--//}-->

<!--.carousel-image {-->
<!--  width: 100%;-->
<!--  height: 100%; /* 确保图片填充容器 */-->
<!--  object-fit: cover; /* 使图片覆盖整个容器而不变形 */-->
<!--}-->

<!--/* 移动端样式 */-->
<!--@media (max-width: 768px) {-->
<!--  .carousel-image {-->
<!--    height: 100px; /* 适配移动端的图片高度 */-->
<!--  }-->
<!--  //.el-carousel__item{-->
<!--  //  height: 100px!important;-->
<!--  //}-->
<!--}-->

<!--/* PC 端样式 */-->
<!--@media (min-width: 769px) {-->
<!--  .carousel-wrapper {-->
<!--    height: 300px; /* 适配 PC 端的轮播图高度 */-->
<!--  }-->
<!--  .carousel {-->
<!--    height: 300px;-->
<!--  }-->
<!--  .carousel-image {-->
<!--    height: 300px; /* 适配 PC 端的图片高度 */-->
<!--  }-->
<!--}-->
<!--</style>-->

<!--<template>-->
<!--  <div class="carousel-wrapper">-->
<!--    <el-carousel-->
<!--      arrow="always"-->
<!--      :interval="5000"-->
<!--      class="carousel-container"-->
<!--    >-->
<!--      <el-carousel-item-->
<!--        v-for="(item, index) in imgList"-->
<!--        :key="index"-->
<!--      >-->
<!--        <img-->
<!--          :src="item.picturePath"-->
<!--          alt=""-->
<!--          class="carousel-image"-->
<!--        />-->
<!--      </el-carousel-item>-->
<!--    </el-carousel>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--  name: "ResponsiveCarousel",-->
<!--  data() {-->
<!--    return {-->
<!--      imgList: [-->
<!--        { picturePath: "https://via.placeholder.com/800x400" },-->
<!--        { picturePath: "https://via.placeholder.com/800x400" },-->
<!--        { picturePath: "https://via.placeholder.com/800x400" },-->
<!--      ],-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->
<!--<style scoped>-->
<!--.carousel-wrapper {-->
<!--  width: 100%;-->
<!--  overflow: hidden; /* 防止出现滚动条 */-->
<!--}-->

<!--.carousel-container {-->
<!--  width: 100%;-->
<!--  height: 100%; /* 确保轮播容器自适应 */-->
<!--}-->

<!--.carousel-image {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  object-fit: cover; /* 确保图片填充容器 */-->
<!--}-->

<!--/* 移动端样式 */-->
<!--@media (max-width: 768px) {-->
<!--  .carousel-container {-->
<!--    height: 100px; /* 适配移动端的轮播图高度 */-->
<!--  }-->
<!--}-->

<!--/* PC 端样式 */-->
<!--@media (min-width: 769px) {-->
<!--  .carousel-container {-->
<!--    height: auto; /* PC 端高度自适应 */-->
<!--  }-->
<!--}-->
<!--</style>-->

<!--<template>-->
<!--  <div class="carousel-container">-->
<!--    <div-->
<!--      class="carousel-track"-->
<!--      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"-->
<!--    >-->
<!--      <div v-for="(item, index) in imgList" :key="index" class="carousel-item">-->
<!--        <div @click="handleClick(item.id)" class="carousel-item">-->
<!--          <img :src="'http://47.98.239.223:7070/' + item.picturePath" alt="" class="carousel-image" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <button @click="prev" class="carousel-control prev">&#10094;</button>-->
<!--    <button @click="next" class="carousel-control next">&#10095;</button>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { getNewsList } from '@/api/api'-->
<!--export default {-->
<!--  name: 'SimpleCarousel',-->
<!--  data() {-->
<!--    return {-->
<!--      currentIndex: 0,-->
<!--      // imgList: [-->
<!--      //   { picturePath: 'https://via.placeholder.com/800x400?text=Slide+1' },-->
<!--      //   { picturePath: 'https://via.placeholder.com/800x400?text=Slide+2' },-->
<!--      //   { picturePath: 'https://via.placeholder.com/800x400?text=Slide+3' }-->
<!--      // ]-->
<!--      imgList:[]-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.getnews()-->
<!--  },-->
<!-- methods: {-->
<!--    next() {-->
<!--      this.currentIndex = (this.currentIndex + 1) % this.imgList.length-->
<!--    },-->
<!--    prev() {-->
<!--      this.currentIndex =-->
<!--        (this.currentIndex - 1 + this.imgList.length) % this.imgList.length-->
<!--    },-->
<!--    getnews() {-->
<!--            const data = {-->
<!--             current: 1,-->
<!--              newsCategoryId: 45,-->
<!--              size: 3-->
<!--            }-->
<!--            getNewsList(data)-->
<!--              .then(res => {-->
<!--                if (res.code == 200) {-->
<!--                  this.imgList = res.data.records-->
<!--                }-->
<!--              })-->
<!--              .catch(err => {-->
<!--                console.log(err)-->
<!--              })-->
<!--         },-->
<!--         handleClick(id) {-->
<!--           const url = this.$router.resolve({ path: '/home/news', query: { id: id } }).href;-->
<!--            window.open(url, '_blank');-->
<!--          },-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.carousel-container {-->
<!--  position: relative;-->
<!--  width: 100%;-->
<!--  overflow: hidden;-->
<!--}-->

<!--.carousel-track {-->
<!--  display: flex;-->
<!--  transition: transform 0.5s ease;-->
<!--}-->

<!--.carousel-item {-->
<!--  min-width: 100%;-->
<!--  height: auto;-->
<!--}-->

<!--.carousel-image {-->
<!--  width: 100%;-->
<!--  height: 100%; /* 保证图片高度填满容器 */-->
<!--  object-fit: cover; /* 确保图片填充容器 */-->
<!--}-->

<!--/* 控制按钮 */-->
<!--.carousel-control {-->
<!--  position: absolute;-->
<!--  top: 50%;-->
<!--  transform: translateY(-50%);-->
<!--  background-color: rgba(0, 0, 0, 0.5);-->
<!--  color: white;-->
<!--  border: none;-->
<!--  padding: 10px;-->
<!--  cursor: pointer;-->
<!--  font-size: 18px;-->
<!--  z-index: 10;-->
<!--}-->

<!--.prev {-->
<!--  left: 10px;-->
<!--}-->

<!--.next {-->
<!--  right: 10px;-->
<!--}-->

<!--/* 移动端样式 */-->
<!--@media (max-width: 768px) {-->
<!--  .carousel-item,-->
<!--  .carousel-image {-->
<!--    height: 100px; /* 固定高度为100px */-->
<!--  }-->
<!--}-->

<!--/* PC 端样式 */-->
<!--@media (min-width: 769px) {-->
<!--  .carousel-item,-->
<!--  .carousel-image {-->
<!--    height: 350px; /* 自适应图片高度 */-->
<!--  }-->
<!--}-->
<!--</style>-->
<template>
  <div class="carousel-container">
    <div
      class="carousel-track"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(item, index) in imgList" :key="index" class="carousel-item">
<!--        <div @click="handleClick(item.id)" class="carousel-item">-->
          <img :src="'http://kepu.sd-smartagriculture.cn:7070/' + item.picturePath" alt="" class="carousel-image" />
<!--        </div>-->
      </div>
    </div>
    <button @click="prev" class="carousel-control prev">
      <i class="el-icon-arrow-left"></i>
    </button>
    <button @click="next" class="carousel-control next">
      <i class="el-icon-arrow-right"></i>
    </button>
  </div>
</template>

<script>
import { getNewsList } from '@/api/api'

export default {
  name: 'SimpleCarousel',
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
        newsCategoryId: 45,
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
  .carousel-item,
  .carousel-image {
    height: 100px;
  }
}

/* PC 端样式 */
@media (min-width: 769px) {
  .carousel-item,
  .carousel-image {
    height: 400px;
  }
}
</style>
