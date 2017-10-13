import Vue from 'vue'
import Router from 'vue-router'
import vueproject from '@/components/vue-project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vue-project',
      component: vueproject
    }
  ]
})
