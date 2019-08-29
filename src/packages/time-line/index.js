import timeLine from './time-line'

timeLine.install = Vue => Vue.component(timeLine.name, timeLine)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(timeLine)
}

export default timeLine
