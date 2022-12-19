//axios 二次封装
import axios from "axios";

const requests = axios.create({
    //基础路径
    baseURL: "http://y4825r8474.zicp.vip:56140/",
    //请求超时时间： 5s
    // timeout: 5000,
    // headers: headers
})
//请求拦截器
//请求在到达服务器之前，先会调用use中的这个回调函数来添加请求头信息
requests.interceptors.request.use((config) => {
    //cconfig: 配置对象
//     //为请求头对象，添加token验证的Authorization字段
//   config.headers.token = window.sessionStorage.getItem("token")
    return config;
})

//相应拦截器
requests.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    // alert(err);
    // return Promise.reject(new Error('Server failed!'));
    return err.response;
})

//对外暴露
export {requests}


const mockRequests = axios.create({
    // 使用mock生成假的请求
    //基础路径
    baseURL: "http://127.0.0.1:4523/m1/1325294-0-default/",
    //请求超时时间： 5s
    // timeout: 5000,
    // headers: headers
})
//请求拦截器
//请求在到达服务器之前，先会调用use中的这个回调函数来添加请求头信息
mockRequests.interceptors.request.use((config) => {
    //cconfig: 配置对象
//     //为请求头对象，添加token验证的Authorization字段
//   config.headers.token = window.sessionStorage.getItem("token")
    return config;
})

//相应拦截器
mockRequests.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    // alert(err);
    // return Promise.reject(new Error('Server failed!'));
    return err.response;
})

export { mockRequests };


const imgRequests = axios.create({
    //基础路径
    baseURL: "https://tuchuangs.com/api/",
    //请求超时时间： 5s
    // timeout: 5000,
    // headers: { "Content-Type": "multipart/form-data" },
})
//请求拦截器
//请求在到达服务器之前，先会调用use中的这个回调函数来添加请求头信息
imgRequests.interceptors.request.use((config) => {
    //cconfig: 配置对象

    config.headers.head.setContentType("multipart/form-data")

//     //为请求头对象，添加token验证的Authorization字段
//   config.headers.token = window.sessionStorage.getItem("token")
    return config;
})

//相应拦截器
imgRequests.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    // alert(err);
    // return Promise.reject(new Error('Server failed!'));
    return err.response;
})

export {imgRequests};