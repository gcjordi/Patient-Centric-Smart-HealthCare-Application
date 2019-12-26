import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import TestPage from '@/components/TestPage'
import HeartTestPage from '@/components/HeartTestPage'
import ArrhythmiaTestPage from '@/components/ArrhythmiaTestPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/starttest',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/test/heartdisease',
      name: 'HeartTestPage',
      component: HeartTestPage
    },
    {
      path: '/test/arrhythmia',
      name: 'ArrhythmiaTestPage',
      component: ArrhythmiaTestPage
    }
  ]
})
