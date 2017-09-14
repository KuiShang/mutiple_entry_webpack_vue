import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
const Hello = r => require.ensure([], () => r(require('@/components/Hello')), 'Hello')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
