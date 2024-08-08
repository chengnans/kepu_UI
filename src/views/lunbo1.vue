<template>
  <div class="lunbo">
    <el-row type="flex" class="row-bg">
      <div class="block marr10_new">
        <el-carousel arrow="always" :interval="5000">
          <el-carousel-item v-for="(item, index) in imgList" :key="index">
            <!--            <div @click="gonew(item.id)" class="cursor" style="width:100%; height:450px">-->
            <div @click="gonew(item.id)" class="cursor">
              <img :src="'http://47.98.239.223:7070/' + item.picturePath" alt="" class="carousel-image"/>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>
  </div>
</template>
<script>
import { getNewsList } from '@/api/api'

export default {
  name: 'lunbo1',
  data() {
    return {
      imgList: [],
    }
  },
  created() {
    this.getnews()
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
          // console.log(res)
          if (res.code == 200) {
            this.imgList = res.data.records
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
<style scoped lang="less">
.block {
  width: 100%;
}
.block div {
  img {
    width: 100%;
    height: 100%; /* 确保图片高度随容器变化 */
    object-fit: cover;
  }
}
.lunbo {
  width: 100%;
  margin: 0 auto;
}

.el-carousel__container {
  height: 300px !important; /* 默认设置为300px */
}

@media (max-width: 768px) {
  .el-carousel__container {
    height: 100px !important; /* 移动端设置为100px */
  }
}
</style>
