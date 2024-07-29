<template>
  <div>
    <el-row type="flex" justify="space-between" class="underline row-bg">
      <span class="color"><b>科技特派员</b></span>
      <!--页面跳转实现-->
      <router-link to="/home/commissioner?title=commissioner&id=25">
        <span  class="liPointer"> 更多<i class="el-icon-d-arrow-right"></i> </span>
      </router-link>
    </el-row>
    <div style="max-height:420px;overflow:hidden;">
      <ul>
        <li class="lieBiao liPointer" :key="index" v-for="(item, index) in workList">
          <div class="time">
            {{ item.releaseTime }}
          </div>
          <div class="title" @click="toWorkMsg(item.id)">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getNewsList } from '@/api/api'
export default {
  name: 'commissioner_index',
  data() {
    return {
      workList: []
    }
  },
  created() {
    this.getnews()
  },
  methods: {
    //获取新闻列表
    getnews() {
      const data = {
        current: 1,
        newsCategoryId: 38 || 39,
        size: 6
      }
      getNewsList(data)
        .then(res => {
          console.log(res)
          if (res.code == 200) {
            this.workList = res.data.records
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    toWorkMsg(id) {
      // this.$router.push({
      //   path: '/home/news',
      //   query: {
      //     id: id
      //   }
      // })
      //实现新标签页打开
      const url = this.$router.resolve({ path: '/home/news', query: { id: id } }).href;
      window.open(url, '_blank');
    },
  }
}
</script>
<style lang="less" scoped>
.underline {
  border-bottom: 1px solid rgb(1, 72, 153);
}

.lieBiao {
  width: 100%;
  height: 55px;
  background: rgb(241, 241, 241);
  display: flex;
  justify-content: left;
  overflow: hidden;
  margin-bottom: 10px;
}

.time {
  width: 100px;
  padding: 17px 0px;
  display: flex;
  flex-direction: column;
  background-color: rgb(00, 116, 87);
  color: white;
  text-align: center;
}

.title {
  width: 500px;
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  // background-color: rgb(179, 19, 19);
  padding: 0 0 0 10px;
}
</style>
