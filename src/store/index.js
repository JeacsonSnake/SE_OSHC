import Vue from 'vue'
import Vuex from 'vuex'

import {
    loginApi,
    registerApi,
    followingApi,
    followerApi,
    hotTagApi,
    getTagApi,
    getTagPostApi,
    getPostApi,
    searchApi,
    homeApi
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
        isSearchUpdate: true,
        tagTitle: "接口测试数据1",
        tagId: "",
        postId: "",
        followObj: {
            "totalNum": 1,
            "totalPage": 1,
            "nowPage": 1,
            "showNum": 1,
            "followingObjArr": [],
            "followerObjArr": []
        },
        hotTagArr: [],
        tagInfo: {},
        postArr: [],
        postInfo: {},
        searchData: "",
        searchObj: {
            "nowPage": 1,
            "size": 7,
            "showNum": 1,
            "totalNum": 1,
            "totalPage": 1,
            "isTag": false,
            "tagsObj": {},
            "resultArrList": [],
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
        },

        SETHOTTAG(state, value) {
            state.hotTagArr = value;
        },

        SETTAGINFO(state, value) {
            state.tagInfo = { ...value };
        },

        SETPOSTARR(state, value) {
            state.postArr = value;
        },

        SETTAGID(state, value) {
            state.tagId = value;
        },

        SETPOSTID(state, value) {
            state.postId = value;
        },

        SETPOSTINFO(state, value) {
            state.postInfo = { ...value };
        },

        SETTAGTITLE(state, value) {
            state.tagTitle = value;
        },

        SETSEARCHDATA(state, value) {
            state.searchData = value;
        },

        SETSEARCHUPDATE(state, value) {
            state.isSearchUpdate = value;
        },

        SETSEARCHOBJ(state, value) {
            state.searchObj = { "tagsObj": {},...value };
        },
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
        },

        async getHotTag(context, value) {
            await hotTagApi(value).then((res) => {
                if (res.code === 200) {
                        context.commit('SETHOTTAG', res.data);
                }else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async getTag(context, value) {
            await getTagApi(value).then((res) => {
                if (res.code === 200) {
                        context.commit('SETTAGINFO', res.data);
                }else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async getTagPost(context, value) {
            await getTagPostApi(value).then((res) => {
                if (res.code === 200) {
                    if (res.data) {
                        let ele = [];
                        res.data.resultArrList.forEach((element) => {
                            let arr = element.imgUrlArr.split(" ");
                            if (arr.length === 0 || arr[0].charAt(0) !== "h") {
                                arr = [];
                            }
                            element.imgUrlArr = arr;
                            ele.push(element);

                        });

                        context.commit('SETPOSTARR', ele);
                    } else {
                        context.commit('SETPOSTARR', [])
                        }
                }else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async getPostCotent(context, value) {
            await getPostApi(value).then((res) => {
                console.log("nihao");
                if (res.code === 200) {
                        context.commit('SETPOSTINFO', res.data);
                }else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async getSearchResult(context, value) {
            await searchApi(value).then((res) => {
                if (res.code === 200) {
                        context.commit("SETSEARCHUPDATE", true);
                        context.commit('SETSEARCHOBJ', res.data);
                }else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async getHomeRecommand(context, value) {
            await homeApi(value).then((res) => {
                if (res.code === 200) {
                    if (res.data) {
                        res.data.resultArrList.pop()
                        let ele = [];
                            res.data.resultArrList.forEach((element) => {
                            let arr = element.imgUrlArr.split(" ");
                            if (arr.length === 0 || arr[0].charAt(0) !== "h") {
                                arr = [];
                            }
                            element.imgUrlArr = arr;
                            if (ele.length !== 3) {
                                ele.push(element);
                            }
                        });

                        context.commit('SETPOSTARR', ele);
                    } else {
                        context.commit('SETPOSTARR', [])
                    }
                }
            }).catch((err) => {
                console.log(err);
            })
        },

  },
})
