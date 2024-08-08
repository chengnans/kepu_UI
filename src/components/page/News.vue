<template>
  <div class="box0">
    <!-- <p>{{ this.$route.query.id }}</p> -->
    <div class="header">
      <h2>{{ title }}</h2>
      <p>文章来源：{{ sources }}&emsp;作者：{{ author }}&emsp;发布日期：{{ releaseTime }}&emsp;点击量：[ {{ hits }} ]</p>
    </div>
    <div v-html="content" class="ql-editor"></div>
    <hr />
    <br>
    <share/>
  </div>
</template>
<script>
import { getnew } from '../../api/api'
import share from '@/views/share.vue'
export default {
  name: 'noticeMessage',
  components: {share},
  props: ["sysInfo"],
  data() {
    return {
      content: '',
      hits: '',
      releaseTime: '',
      title: '',
      //后加
      sources: '',
      author: '',
    }
  },
  created() {
    // console.log(">>>>>>>>",this.$route.query.id);
    this.getalone()
  },
  methods: {
    getalone() {
      const data = this.$route.query.id
      getnew(data).then(res => {
        // console.log(res)
        this.content = res.data.content
        this.hits = res.data.hits
        this.releaseTime = res.data.releaseTime
        this.title = res.data.title
        //后加
        this.author = res.data.author
        this.sources = res.data.sources
      })
    },
  }
}
</script>
<style>

.box0 {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header h2 {
  color: rgb(00, 116, 87);
  text-align: center;
}

.header p {
  background-color: rgb(246, 246, 246);
  text-align: center;
  height: 35px;
  line-height: 35px;
  display: table;
  margin: 0 auto;
  width: 100%;
}

.ql-editor {
  padding: 12px 0px !important;
}

.ql-editor p {
  letter-spacing: 1px;
  line-height: 25px;
}

.ql-editor img {
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;
}

.ql-editor iframe {
  width: 600px;
  height: 300px;
  margin: auto;
  display: block;
}

// 添加响应式的样式
@media screen and (max-width: 768px) {
  .box0 {
    padding: 10px;
  }

  .ql-editor img {
    width: 100%;
    height: auto;
  }

  .ql-editor iframe {
    width: 100%;
    height: 200px;
    margin: auto;
  }
}
</style>
