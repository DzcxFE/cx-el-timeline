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
      tlShow: true,
      headerData: [
        {
          orderNumber: 123123123,
          rounds: 'dasda',
          driver: 'wushain'
        }
      ],
      bodyData: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.bodyData = [{
        color: "#E5E7ED",
        content: "",
        description: "2019-08-29 10:11:41",
        isOpen: true,
        timestamp: "推送订单,抢单模式未开启指派",
      }, {
        color: "#E5E7ED",
        content: "推送已送达",
        description: "2019-08-29 10:11:43",
        isOpen: false,
        timestamp: "推送已送达",
      }, {
        color: "#FF352F",
        content: "订单反馈健康状态为null",
        description: "2019-08-29 10:11:42",
        isOpen: true,
        timestamp: "订单反馈健康状态为null",
      }]
    }, 2000);
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
