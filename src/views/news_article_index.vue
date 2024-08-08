<template>
  <div>
    <!-- 通知公告导航条 -->
<!--    <el-row type="flex" class="row-bg underline marb10" justify="space-between">-->
<!--      <span class="color"><b>通知</b></span>-->
<!--      <span @click="goMore('通知公告')" class="liPointer"> 更多<i class="el-icon-d-arrow-right"></i> </span>-->
<!--    </el-row>-->
    <!-- 新闻 -->
    <div style="max-height:382px;overflow:hidden;">
      <ul>
        <li class="lieBiao liPointer" :key="index" v-for="(item, index) in noticeList">
          <div class="time">
            {{ item.releaseTime }}
          </div>
          <div class="title" @click="toNoticeMsg(item.id)">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { getMinTitle, getNewsList } from '../api/api'
export default {
  name: 'notice',
  data() {
    return {
      noticeList: []
    }
  },
  created() {},
  mounted() {
    //获取小标题
    // axios.get('http://localhost:8080/news_category/list/1').then(res => {
    //   console.log(res);
    //   if(res.status==200){
    //     this.noticeList = res.data.data
    //   }
    // }).catch(err => {
    //   console.log(err);
    // })
    this.getnews()
  },
  methods: {
    //获取新闻列表
    getnews() {
      const data = {
        current: 1,
        newsCategoryId: 40||41,
        size: 6
      }
      getNewsList(data)
        .then(res => {
          // console.log(res)
          if (res.code == 200) {
            this.noticeList = res.data.records
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 去到新闻展示页
    toNoticeMsg(id) {
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
    //去到更多新闻列表页
    goMore(val) {
      this.$router.push({
        path: '/home/moreMessage',
        query: {
          type: val
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
html {
  font-size: 16px; /* 默认字体大小 */
}
.underline {
  border-bottom: 1px solid rgb(1, 72, 153);
}
//.lieBiao {
//  width: 100%;
//  height: 55px;
//  background: rgb(241, 241, 241);
//  display: flex;
//  justify-content: left;
//  overflow: hidden;
//  margin-bottom: 10px;
//}
//.time {
//  width: 100px;
//  padding: 17px 0px;
//  display: flex;
//  flex-direction: column;
//  background-color: rgb(00, 116, 87);
//  color: white;
//  text-align: center;
//}
//.title {
//  width: 500px;
//  height: 50px;
//  overflow: hidden;
//  line-height: 50px;
//  // background-color: rgb(179, 19, 19);
//  padding: 0 0 0 10px;
//}

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
  font-size: 1rem; /* 使用 rem 单位 */
}

.title {
  width: calc(100% - 100px); /* 自动计算剩余宽度 */
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  padding: 0 0 0 10px;
  font-size: 1rem; /* 使用 rem 单位 */
}

/* 响应式样式 */
@media (max-width: 768px) {
  .lieBiao {
    height: 2.5rem; /* 使用 rem 单位 */
  }

  .time {
    width: 4rem; /* 使用 rem 单位 */
    padding: 0.9rem 0; /* 使用 rem 单位 */
    font-size: 0.6rem; /* 减小字体大小 */
  }

  .title {
    width: calc(100% - 4rem); /* 自动计算剩余宽度 */
    height: 3.2rem; /* 使用 rem 单位 */
    font-size: 0.8rem; /* 减小字体大小 */
    line-height: 2.6rem; /* 与高度匹配 */
  }
}
</style>
