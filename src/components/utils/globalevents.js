import Vue from 'vue'
export const GlobalEventBus = new Vue()

GlobalEventBus.$on('hideLeft', function (a, b, c) {
  a.$refs.layout.hideLeft()
})
