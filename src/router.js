/**
 * Created by li on 2018/2/2 16:27.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from './page/index.vue'
import Test from './page/test.vue'
import Api from './page/api.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'index',
            component:Index
        },
        {
            path:'/test',
            name:'test',
            component:Test
        },
        {
            path:'/api',
            name:'api',
            component:Api
        }
    ]
})