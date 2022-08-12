import axios  from "axios";
import {http} from '@/utils'
import { clearToken } from "./memory";
const http = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 50000
});
//请求拦截器
http.interceptors.request.use(config=>{
    return config;
})
//响应拦截器
http.interceptors.response.use(response=>{
    return response;
},error=>{
    if(error.response.status == 401){
        clearToken()
        history.pushState('/login')
    }
    return Promise.reject(error)
})
export default http;