//API接口统一管理点
import {requests, mockRequests, imgRequests} from "./request";
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
    return requests({
        url: 'user/login',
        method: 'post',
        params: {
            useremail: value.userEmail,
            password: value.password
        }
    })
}

export const postCreateApi = (value) => {
    return requests({
        url: 'post/create',
        method: 'post',
        params: {
            userId: value.userId,
            tags: value.postTag,
            title: value.postTitle,
            contentHtml: value.contentHtml,
            contentMark: value.contentMark,
            imgUrlArr: value.imgUrlArr,
            postBrief: value.postBrief
        }
    })
}


export const test = (value) => {
    return mockRequests({
        url: 'api/news',
        method: 'get',
    })
}

export const imgUpload = (formdata) => {
    console.log(`formdata.get("file")`, formdata.get("file"));
    return imgRequests({
        url: 'v2/upload',
        method: 'post',
        data: formdata
    })
}

export const followingApi = (value) => {
    return requests({
        url: 'user/GetFollow',
        method: 'post',
        params: {
            userId: value.userId,
            page: value.needPage,
            size: 7
        }
    })
}

export const followerApi = (value) => {
    return requests({
        url: 'user/GetFollower',
        method: 'post',
        params: {
            userId: value.userId,
            page: value.needPage,
            size: 7
        }
    })
}

export const hotTagApi = (value) => {
    return requests({
        url: 'tag/hotTag',
        method: 'get'
    })
}

export const getTagApi = (value) => {
    return requests({
        url: 'tag/get',
        method: 'get',
        params: {
            tagId: value
        }
    })
}

export const getTagPostApi = (value) => {
    return requests({
        url: 'tag/posts',
        method: 'get',
        params: {
            tagId: value
        }
    })
}

export const getPostApi = (value) => {
    return requests({
        url: 'post/info',
        method: 'get',
        params: {
            postId: value
        }
    })
}