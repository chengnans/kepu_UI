<template>
  <div>
    <el-row>
      <globalTitle />
    </el-row>
    <el-row class="mart10">
      <!-- 小标题 -->
      <el-col :span="4" class="marr10">
        <ul>
          <li v-for="(item, index) in menuList" :key="index" class="liStylenone liPointer marb10" @click="changeMenu(item)">
            <b :class="cont == item.name ? 'ft-blue' : 'ft-black'">{{ item.name }}</b>
          </li>
        </ul>
      </el-col>
      <el-card class="box-card">
        <p class="name">{{ this.cont }}</p>
        <hr class="namehr" />
        <el-col :span="24">
          <div>
            <el-row class="marb10" :key="index" v-for="(item, index) in newsList">
              <div class="flex-v flex-between marb5 cursor" @click="show(item)">
                <div class="title">{{ item.title }}</div>
                <div class="releaseTime">{{ item.releaseTime }}</div>
              </div>
              <el-divider class="hr"></el-divider>
            </el-row>
          </div>
          <!-- 分页 -->
          <div class="fenye">
            <el-pagination background @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pageSize" layout="prev, pager, next,total" :total="total"> </el-pagination>
          </div>
        </el-col>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import globalTitle from '../globalTitle.vue'
import { getMinTitle, getNewsList } from '../../api/api'
export default {
  name: 'kpArtcle',
  components: {
    globalTitle
  },
  data() {
    return {
      cont: '', //小标题变色
      menuList: [],
      newsList: [],
      pageSize: 8,
      currentPage: 1,
      total: 0,
      item: {}
    }
  },
  created() {},
  mounted() {
    this.getTitle()
  },
  watch: {
    menuList(n, o) {
      this.cont = this.menuList[0].name
      this.item = this.menuList[0]
      this.getnews(this.menuList[0])
    }
  },
  methods: {
    getTitle() {
      const data = Number(this.$route.query.id)
      getMinTitle(data)
        .then(res => {
          // console.log(res)
          if (res.code == 200) {
            this.menuList = res.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeMenu(val) {
      this.cont = val.name
      this.item = val
      this.currentPage = 1
      this.getnews(val)
    },
    getnews(item) {
      const data = {
        current: this.currentPage,
        newsCategoryId: item.id,
        size: this.pageSize
      }
      getNewsList(data)
        .then(res => {
          // console.log(res)
          if (res.code == 200) {
            this.newsList = res.data.records
            this.total = Number(res.data.total)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      // this.currentPage = val
      this.getnews(this.item)
    },
    // 跳转到新闻展示页面
    show(item) {
      // console.log(item.id);
      // this.$router.push({ path: '/home/news', query: { id: item.id } })
      //实现新标签页打开
      const url = this.$router.resolve({ path: '/home/news', query: { id: item.id } }).href;
      window.open(url, '_blank');
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  li {
    background-color: rgb(242, 243, 245);
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}

.ft-blue {
  color: rgb(00, 116, 87);
}

.ft-black {
  color: #000;
}

.box-card {
  height: 500px;
  position: relative;

  .fenye {
    position: absolute;
    bottom: 10px;
  }
}

// 添加响应式的样式
@media screen and (max-width: 768px) {
  .el-col {
    margin-bottom: 0;
  }

  .box-card {
    height: auto; // 移除固定高度，使其自适应内容
  }

  .name {
    font-size: 18px;
  }

  ul li {
    height: auto;
    padding: 10px;
    line-height: 18px;
  }

  .box-card {
    .fenye {
      position: static; // 移除绝对定位
      text-align: center; // 居中文本
      margin-top: 10px;
    }

    .title {
      font-size: 13px;
    }

    .releaseTime {
      font-size: 13px;
    }
  }
}
</style>
