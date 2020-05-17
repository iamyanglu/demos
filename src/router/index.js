import  router from 'vue-router'
import  Vue from  'vue'
const canvas = ()=>import('@/components/myCanva')
Vue.use(router)
const routes=[
    {
        path:'/',
        component:canvas

    },

]
const Router = new router({

    routes,
    mode:'history'

})