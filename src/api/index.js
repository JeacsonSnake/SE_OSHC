//API接口统一管理点
import {requests, mockRequests} from "./request";
import Vue from 'vue'
import axios from "axios";

// export const findSellingGood = (params) => {
//     //发请求
//     return requests({
//         url: '#',
//         method: 'get',
//         params,
//         cancelToken: new axios.CancelToken(c => {          
//         Vue.prototype.$httpRequestList.push(c);    //中断请求时,将对应中断方法存进集合
//       })
//     })
// }

// export const searchGood = (value) => {
//     //发请求
//     return requests({
//         url: '#',
//         method: 'get',
//         params: {
//             goodDescrip: value
//         }
//     })
// }

// export const searchUserByID = (value) => {
//     //发请求
//     return requests({
//         url: '#',
//         method: 'get',
//         params: {
//             userId: value,
//         }
//     })
// }

// export const searchSellerGoods = (value) => {
//     //发请求
//     return requests({
//         url: '#',
//         method: 'get',
//         params: {
//             sellerId: value,
//         }
//     })
// }

// export const searchBuyerGoods = (value) => {
//     //发请求
//     return requests({
//         url: '#',
//         method: 'get',
//         params: {
//             buyerId: value,
//         }
//     })
// }

// export const searchGoodByID = (value) => {
//     return requests({
//         url: '#',
//         method: 'get',
//         params: {
//             userId: value.userId,
//             goodId: value.goodId,
//         }
//     })
// }

// export const findHistory = (value) => {
//     //发请求
//     return requests({
//         url: '#',
//         method: 'get',
//         params: {
//             userId: value,
//         }
//     })
// }

// export const findCollect = (value) => {
//     //发请求
//     return requests({
//         url: '#',
//         method: 'get',
//         params: {
//             userId: value,
//         }
//     })
// }

export const registerApi = (value) => {
    //发请求
    return requests({
        url: 'user/register',
        method: 'post',
        params: {
            useremail: value.userEmail,
            password: value.password,
            username: value.userName
        }
    })
}

// export const loginApi = (value) => {
//     return requests({
//         url: 'user/login',
//         method: 'post',
//         params: {
//             useremail: value.userEmail,
//             password: value.password
//         }
//     })
// }

export const loginApi = (value) => {
    return mockRequests({
        url: 'http://127.0.0.1:4523/m1/1325294-0-default/user/login',
        method: 'post',
        params: {
            useremail: value.userEmail,
            password: value.password
        }
    })
}


export const test = (value) => {
    return mockRequests({
        url: 'api/news',
        method: 'get',
    })
}