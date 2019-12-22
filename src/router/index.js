import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import TestPage from '@/components/TestPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: 'HomePage',
      component: HomePage
    },
    {
      path: "/test",
      name: 'TestPage',
      component: TestPage
    }
  ]
})
