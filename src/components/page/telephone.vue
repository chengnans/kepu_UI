<template>
  <div>
    <el-row>
      <globalTitle />
    </el-row>
    <ul class="flex-container">
      <li class="flex-item">
        <router-link to="/home/kePuFengCai?title=kePuFengCai&id=27">
          <img src="../../assets/images/logo.jpg" alt="" class="iimg"/>
        </router-link>
      </li>
      <li class="flex-item">2</li>
      <li class="flex-item">3</li>
      <li class="flex-item">4</li>
    </ul>

    <ul class="flex-container1">
      <li class="flex-item1">农业生产</li>
      <li class="flex-item1">2</li>
      <li class="flex-item1">3</li>
      <li class="flex-item1">4</li>
    </ul>

    <ul class="flex-container">
      <li class="flex-item">
        <router-link to="/home/kePuFengCai?title=kePuFengCai&id=27">
          <img src="../../assets/images/logo.jpg" alt="" class="iimg"/>
        </router-link>
      </li>
      <li class="flex-item">2</li>
      <li class="flex-item">3</li>
      <li class="flex-item">4</li>
    </ul>

    <ul class="flex-container1">
      <li class="flex-item1">农业生产</li>
      <li class="flex-item1">2</li>
      <li class="flex-item1">3</li>
      <li class="flex-item1">4</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>

.flex-container {
  display: flex;

  /* Then we define the flow direction
     and if we allow the items to wrap
   * Remember this is the same as:
   * flex-direction: row;
   * flex-wrap: wrap;
   */
  flex-flow: row wrap;

  /* Then we define how is distributed the remaining space */
  justify-content: space-between;

  padding: 0;
  margin: 0;
  list-style: none;
}

.flex-item {
  background: #f3f6ee;
  padding: 5px;
  width: 250px;
  height: 150px;
  margin-top: 20px;
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}
.iimg{
  width: 100%;
  height: 100%;
}

.flex-container1 {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  padding: 0;
  margin: 0;
  list-style: none;
}

.flex-item1 {
  background: #f3f6ee;
  padding: 5px;
  width: 250px;
  height: 20px;
  margin-top: 0px;
  line-height: 10px;
  color: #000000;
  font-weight: normal;
  font-size: 1em;
  text-align: center;
}
</style>

<script setup>

import globalTitle from '@/components/globalTitle.vue'
</script>
