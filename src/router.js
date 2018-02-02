/**
 * Created by li on 2018/2/2 16:27.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index.vue'
import Test from './components/test.vue'

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
        }
    ]
})