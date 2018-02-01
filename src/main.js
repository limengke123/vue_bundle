/**
 * Created by li on 2018/2/1 16:26.
 */
import Vue from 'vue'
import App from './app.vue'


const root = document.createElement('div')
root.setAttribute('id','root')
document.body.appendChild(root)



new Vue({
    render: (h) => h(App)
}).$mount(root)

/*new Vue({
    el: '#root',
    // router,
    template: '<App/>',
    components: { App }
})*/

