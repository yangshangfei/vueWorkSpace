import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vueTest from '@/components/vueTest'
import slots from '@/components/slots'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vueTest',
      name: 'vueTest',
      component: vueTest
    },
    {
      path: '/slots',
      name: 'slots',
      component: slots
    }
  ]
})
