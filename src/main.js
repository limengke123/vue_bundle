/**
 * Created by li on 2018/2/1 16:26.
 */
import Vue from 'vue'
import App from './app.vue'

import router from './router'
import selfLib from  './self-lib/index'
Vue.use(selfLib)

const root = document.createElement('div')
document.body.appendChild(root)


new Vue({
    render: (h) => h(App),
    router
}).$mount(root)



