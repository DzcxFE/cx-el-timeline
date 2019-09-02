<template>
  <div id="app">
    <time-line title="车辆推送详情"
               :headerData='headerData'
               :bodyData='bodyData'
               :dialogVisible.sync='tlShow'></time-line>
    <button @click="xxx">组件展示</button>
  </div>
</template>

<script>
import Vue from 'vue'
import timeLine from './packages/index.js'

Vue.use(timeLine)

export default {
  methods: {
    xxx () {
      this.tlShow = true
    }
  },
  data () {
    return {
      tlShow: false,
      headerData: [
        {
          orderNumber: 123123123,
          rounds: 'dasda',
          driver: 'wushain'
        }
      ],
      bodyData: [{
        description: '支持使用图标',
        content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        timestamp: '2018-04-12 20:46',
        isOpen: true,
        size: 'large'
      }, {
        description: '支持自定义颜色',
        content: '这是内容这是内容这是内容这是内容这<br>是内容这是内容',
        timestamp: '2018-04-03 20:46',
        isOpen: false,
        color: '#FF352F'
      }, {
        description: '支持自定义尺寸',
        content: '这是内容这是内容这是内容这是内容这是内容这是内容',
        timestamp: '2018-04-03 20:46',
        isOpen: false,
        size: 'large',
        color: '#F8A51C'
      }]
    }
  },
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
