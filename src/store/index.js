import Vue from 'vue'
import Vuex from 'vuex'

import {
    loginApi,
    registerApi
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
                    context.commit('INPUTERROR', false);
                    context.commit('SETAUTH', true);
                    // window.sessionStorage.setItem("token", res.data.token);
                    window.localStorage.setItem("user",JSON.stringify(user));


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
  },
})
