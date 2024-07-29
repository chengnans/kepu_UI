<template>
  <div>
    <el-row>
      <div class="fl">
        <span
          ><b>{{ getTitle(this.$route.query.title) }}</b></span
        >
      </div>
      <div class="fr">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <!-- <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item> -->
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ getTitle(this.$route.query.title) }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'globalTitle',
  data() {
    return {
      title: ''
    }
  },
  created() {},
  methods: {
    getTitle(v) {
      switch (v) {
        case 'salt':
          return '盐碱地风采'
        case 'kpArtcle':
          return '科普文章'
        case 'kpVideos':
          return '科普视频'
        case 'commissioner':
          return '科技特派员'
        case 'child':
          return '少儿科普'
        case 'new_article':
          return '热点新闻'
        case 'xueXiaoShouYe':
          return '学校首页'
        case 'lecture_hall':
          return '科普大讲堂'
      }
    }
  }
}
</script>

<style scoped>
.el-row {
  /* background-color: rgb(83, 168, 125); */
  border-bottom: 1px solid #007457;
}
</style>
