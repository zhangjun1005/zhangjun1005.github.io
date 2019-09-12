import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	redirect:'/index'
    },
    {
    	path:'/index',
    	name:'index',
    	component:()=>import("@/pages/index.vue")
    },
    {
    	path:'/aboutMe',
    	name:'aboutMe',
    	component:()=>import("@/pages/aboutMe.vue")
    },
    {
    	path:'/experience',
    	name:'experience',
    	component:()=>import("@/pages/experience.vue")
    },
    {
    	path:'/subject',
    	name:'subject',
    	component:()=>import("@/pages/subject.vue")
    }
  ]
})
