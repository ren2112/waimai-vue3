import axios from 'axios'
import { Toast } from 'vant';

const baseUrl=''
class HttpRequest{
    constructor(baseUrl){
        this.baseUrl=baseUrl
    }

    // 初始化axios的配置，先以config形式存储
    getInsideConfig(){
        const config={
            baseUrl:this.baseUrl,
            header:{}
        }
        return config
    }

    interceptors(instance){
        // 请求拦截器
        instance.interceptors.request.use(config=>{
            return config
        },err=>{
            return Promise.reject(err)
        });

        // 响应拦截器
        instance.interceptors.response.use(response=>{
            const {data,code}=response.data
            if(code==200){
                return data;
            }
            else{
                Toast("响应失败！请重试")
            }
        },err=>{
            return Promise.reject(err)
        })
    }

    // 传进来的参数上一个有请求url，请求体等内容
    request(options){
        // 这里开始创建一个axios对象
        const instance=axios.create();
        // 将baseurl，header属性（从函数返回的config获得）与option拼接
        options={...this.getInsideConfig(),...options}
        this.interceptors(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)