import Vue from 'vue'
import Vuex from 'vuex'

import {
    loginApi,
    registerApi,
    followingApi,
    followerApi
} from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ifBar: true,
        ifSearch: true,
        HWIdentification: false,
        isAuth: false, 
        inputError: false,
        showUserCard: false,
        isRepeat: false,
        isFollowEmpty: true,
        postTag:"接口测试数据1",
        followObj: {
            "totalNum": 1,
            "totalPage": 1,
            "nowPage": 1,
            "showNum": 1,
            "followingObjArr": [],
            "followerObjArr": []
        }
  },
  getters: {
  },
    mutations: {
        HWIDENTIFICATION(state, value) {
            state.HWIdentification = value;
        },

        CHANGEBAR(state, value) {
            state.ifBar = value;
        },
        
        CHANGESEARCH(state, value) {
            state.ifSearch = value;
        },

        SETAUTH(state, value) {
            state.isAuth = value;
        },

        INPUTERROR(state, value) {
            state.inputError = value;
        },

        SHOWUSERCARD(state, value) {
            state.showUserCard = value;
        },

        ISREPEAT(state, value) {
            state.isRepeat = value;
        },

        ISFOLLOWEMPTY(state, value) {
            state.isFollowEmpty = value;
        },

        SETFOLLOWOBJ(state, value) {
            state.followObj = { ...value };
        }
  },
    actions: {
        async login(context, value) {
            await loginApi(value).then((res) => {
                if (res.code === 200) {
                    const user = {
                        avatar: res.data.avatar,
                        following: res.data.following,
                        follower: res.data.follower,
                        userName: res.data.userName,
                        userBrief: res.data.userBrief,
                        userEmail: res.data.userEmail,
                        ipLocation: res.data.ipLocation,
                        userGender: res.data.userGender,
                        userId: res.data.userId,
                        userJoinTime: res.data.userJoinTime,
                        userGitAddress: res.data.userGitAddress,
                    }
                    const userDetail = {
                        avatar: res.data.avatar,
                        following: res.data.following,
                        follower: res.data.follower,
                        userName: res.data.userName,
                        userBrief: res.data.userBrief,
                        userEmail: res.data.userEmail,
                        ipLocation: res.data.ipLocation,
                        userGender: res.data.userGender,
                        userId: res.data.userId,
                        userJoinTime: res.data.userJoinTime,
                        userGitAddress: res.data.userGitAddress,
                    }
                    context.commit('INPUTERROR', false);
                    context.commit('SETAUTH', true);
                    // window.sessionStorage.setItem("token", res.data.token);
                    window.localStorage.setItem("user", JSON.stringify(user));
                    window.localStorage.setItem("userDetail", JSON.stringify(userDetail));


                } else if (res.status === 403) {
                    context.commit('INPUTERROR', true);
                }else {
                    throw res
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async regist(context, value) {
            await registerApi(value).then((res) => {
                if (res.code === 200) {
                    context.commit('ISREPEAT', false);
                } else if (res.code === 409) {
                    context.commit('ISREPEAT', true);
                }else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async getFollowingArr(context, value) {
            await followingApi(value).then((res) => {
                if (res.code === 200) {
                    if (res.data.totalNum == '0') {
                        context.commit('ISFOLLOWEMPTY', true);
                    } else {
                        context.commit('ISFOLLOWEMPTY', false);
                        context.commit('SETFOLLOWOBJ',res.data);
                    }
                } else if (res.code = 409) {
                    context.commit('ISFOLLOWEMPTY', true);
                }else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async getFollowerArr(context, value) {
            await followerApi(value).then((res) => {
                if (res.code === 200) {
                    if (res.data.totalNum == '0') {
                        context.commit('ISFOLLOWEMPTY', true);
                    } else {
                        context.commit('ISFOLLOWEMPTY', false);
                        context.commit('SETFOLLOWOBJ',res.data);
                    }
                }else if (res.code = 409) {
                    context.commit('ISFOLLOWEMPTY', true);
                }else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        }
  },
})
