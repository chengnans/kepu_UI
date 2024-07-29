<template>
  <div>

      <el-row class="underline marb20">
        <p class="color"><b>友情链接</b></p>
      </el-row>
      <ul class="flex-container_other">
        <li class="flex-item_other"><a href="https://www.cast.org.cn/" class="anone" target="_blank">中国科协</a></li>
        <li class="flex-item_other"><a href="http://www.kepu.gov.cn/kejiweek/" class="anone" target="_blank">中国科普网</a></li>
        <li class="flex-item_other"><a href="http://www.sdast.org.cn/" class="anone" target="_blank">山东省科协</a></li>
        <li class="flex-item_other"><a href="http://www.qdast.org.cn/" class="anone" target="_blank">青岛市科协</a></li>
        <li class="flex-item_other"><a href="http://dykexie.dongying.gov.cn/" class="anone" target="_blank">东营市科协</a></li>
        <li class="flex-item_other"><a href="http://www.cqast.cn/" class="anone" target="_blank">重庆市科协</a></li>
      </ul>


  </div>
</template>
<script>

</script>
<style lang="less" scoped>

.flex-container_other {
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  padding: 10px;
  margin: 10px;
  list-style: none;
}

.flex-item_other {
  background: #ffffff;
  padding: 5px;
  width: auto;
  height: auto;
  margin-top: 0px;
  line-height: 1px;
  color: white;
  font-weight: normal;
  font-size: 1em;
  text-align: center;
}
//a标签跳转颜色设置
a:link {
  color: #000000;
}
a:visited {
  color: #000000;
}
a:hover {
  color: #007457;
}

</style>
