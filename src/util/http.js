/**
 * Created by li on 2018/2/2 17:08.
 */
import axios from 'axios'


class httpRequest {
    constructor(url,params){
        this.url = url
        this.params = params
    }
    GET(config){
        this.log('GET')
        return new Promise((resolve,reject) => {
            axios.get(this.__stringifyParam(),config)
                .then(resp => {
                    if(resp.status === 200){
                        resolve(resp.data)
                    } else {
                        reject({
                            success:false,
                            error:"网络连接出现错误"
                        })
                    }
                })
                .catch(reject)
        })
    }
    __stringifyParam(){
        /**
         * e.g
         * {a:1,b:"da"}
         * this.url?a=1&b="da"
         * */
        if(typeof this.params !== "object"){
            throw "params must be a object"
        }
        return Object.keys(this.params).reduce((pre,cur,index) => {
            if(index === 0){
                return `${pre}?${cur}=${this.params[cur]}`
            }
            return `${pre}&${cur}=${this.params[cur]}`
        },this.url)
    }
    POST(config){
        this.log('POST')
        return new Promise((resolve,reject) => {
            axios.post(this.url,this.params,config)
                .then(resp => {
                    if(resp.status === 200){
                        if(resp.data.success === true){
                            resolve(resp.data.data)
                        } else {
                            reject({
                                success:false,
                                error:resp.data.data
                            })
                        }
                    } else {
                        reject({
                            success:false,
                            error:"网络连接错误"
                        })
                    }
                })
                .catch(reject)
        })
    }
    log(method){
        console.log(`
            your method is ${method},
            url is ${this.url},
            params is ${JSON.stringify(this.params)}
        `)
    }
}
export default httpRequest