<template>
      <el-row type="flex" class="row-bg" justify="space-between">
        <div class="block marr10">
          <el-carousel height="25rem" arrow="always" :interval="5000">
            <el-carousel-item v-for="(item1, index1) in imgList_news" :key="index1">
              <div @click="gonew(item1.id)" class="cursor" style="width:100%; height:auto">
  <!--              <img :src="'http://localhost:7070/' + item1.picturePath" alt="" style="width:100%; height:90%" />-->
                <img :src="item1.picturePath" alt="" style="width:100%; height:90%" />
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
  components:{news_article_index},
  data() {
    return {
      imgList_news: [],
    }
  },
  created() {
    this.getnews_news()

  },
  methods: {

    // 第二轮播图数据实现
    getnews_news() {
      const data_news = {
        current: 1,
        newsCategoryId: 40||41,
        size: 3
      }
      getNewsList(data_news)
        .then(res => {
          // console.log(res)
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
<style scoped lang="less">
.news_article_index {
  width: 100%;
}
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
</style>
