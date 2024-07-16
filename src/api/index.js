//API接口统一管理点
import {requests, mockRequests, imgRequests} from "./request";
import Vue from 'vue'
import axios from "axios";


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
            imgUrlArr: value.imgUrlArr.join(),
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
    return requests({
        url: 'user/upload',
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
            needPage: value.needPage,
        }
    })
}

export const followerApi = (value) => {
    console.log("value", value);
    return requests({
        url: 'user/GetFollower',
        method: 'post',
        params: {
            userId: value.userId,
            needPage: value.nowPage,
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

export const searchApi = (value) => {
    return requests({
        url: 'search',
        method: 'get',
        params: {
            content: value.searchData,
            nowPage: value.nowPage,
            size: value.size
        }
    })
}

export const homeApi = (value) => {
    return requests({
        url: 'post/recommend',
        method: 'get',
    })
}

export const getUserPostApi = (value) => {
    return requests({
        url: 'user/GetAllPost',
        method: 'post',
        params: {
            userId: value.userId,
            needPage: value.needPage
        }
    })
}

export const getUserCollectApi = (value) => {
    return requests({
        url: 'user/collection',
        method: 'get',
        params: {
            userId: value.userId,
            needPage: value.needPage
        }
    })
}

export const sendCommentApi = (value) => {
    return requests({
        url: 'post/addcomment',
        method: 'post',
        params: {
            postId: value.postId,
            userId: value.userId,
            postComment: value.postComment,
            commentFlour: value.commentFlour,
        }
    })
}

export const getCommentApi = (value) => {
    return requests({
        url: 'post/comment',
        method: 'get',
        params: {
            postId: value.postId,
            nowPage: value.nowPage,
        }
    })
}