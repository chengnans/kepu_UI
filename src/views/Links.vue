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
  flex-flow: row wrap; // 允许换行
  justify-content: space-evenly;
  padding: 5px;
  margin: 10px;
  list-style: none;

  // 在小屏幕设备上调整为双列布局
  @media screen and (max-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-around; // 换成空间平均分布
    align-items: stretch; // 使子元素在垂直方向上拉伸以占据可用空间

    .flex-item_other {
      width: 45%; // 调整宽度以适应两列布局
      margin-bottom: 10px; // 增加底部内边距
    }
  }
}

.flex-item_other {
  background: #ffffff;
  padding: 8px;
  width: auto;
  height: auto;
  margin-top: 0px;
  margin-bottom: 3px;
  line-height: 1px;
  color: white;
  font-weight: normal;
  font-size: 1em;
  text-align: center;

  // 在小屏幕设备上调整宽度和内边距
  @media screen and (max-width: 768px) {
    width: 45%; // 占据大约一半的容器宽度
    margin-bottom: 10px; // 增加底部内边距
  }
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
