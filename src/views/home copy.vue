<!--
 * @Author: daidai
 * @Date: 2022-01-12 14:23:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-09 14:47:24
 * @FilePath: \web-pc\src\pages\big-screen\view\home.vue
-->
<template>
  <!-- <div id="index" ref="appRef" class="index_home" :class="{ pageisScale: isScale }"> -->
  <ScaleScreen
    :width="1920"
    :height="1080"
    class="scale-wrap"
    :selfAdaption="$store.state.setting.isScale"
  >
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <!-- 头部 s -->

		<!-- <Header @change-nav="changeNav" /> -->
        <div class="d-flex jc-center title_wrap">
          <div class="zuojuxing"></div>
          <div class="youjuxing"></div>
          <div class="guang"></div>
          <div class="d-flex jc-center">
            <div class="title">
              <span class="title-text">互联网设备可视化平台</span>
            </div>
          </div>
          <div class="timers">
          </div>
        </div>


        <!-- 头部 e-->
        <!-- 内容  s-->
        <router-view></router-view>
        <!-- 内容 e -->
      </div>
    </div>
    <Setting ref="setting" />
  </ScaleScreen>
  <!-- </div> -->
</template>

<script>
import { formatTime } from "../utils/index.js";
import Setting from "./setting.vue";
import ScaleScreen from "@/components/scale-screen/scale-screen.vue";
import Header from '../components/Header.vue'
export default {
  name: 'Home',
  components: {
    Header
  },
  methods: {
    changeNav(index) {
      // 此方法保留用于兼容性，实际导航已在Header组件中通过路由实现
    }
  }
}

</script>

<style lang="scss">
@import "./home.scss";
</style>
