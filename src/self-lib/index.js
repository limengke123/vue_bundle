/**
 * Created by li on 2018/2/7 13:26.
 */
import Message from './packages/message/index.js'

const components = []
const install = function (Vue, options = {}) {
    components.map(component => Vue.component(component.name, component))
    Vue.prototype.$message = Message
}
export default {
    install
}