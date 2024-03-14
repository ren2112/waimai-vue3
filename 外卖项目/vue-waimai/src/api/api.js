// 注意，此处的axios只是request.js里面的HttpRequest实例对象
import axios from "./request";
// 获取首页数据的接口
export const getApiHomeData=(param)=>{
    return axios.request({
        url:'/home/getHomeData',
        method:"get",
        data:param
    })
}

// 获取store数据的接口
export const getApiStoreData=(param)=>{
    return axios.request({
        url:'/home/getStoreData',
        method:"get",
        data:param
    })
}