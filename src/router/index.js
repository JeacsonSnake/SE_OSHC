import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'

import PostRelease from '../views/PostRelease/index.vue'
import Login from '../views/Login/index.vue'
import HomePage from '../views/Home/index.vue'
import Register from '../views/Register/index.vue'
import UserPage from '../views/UserPage/index.vue'
import MyPost from '../views/UserPage/MyPost.vue'
import SearchPage from '../views/SearchPage/index.vue'
import testPage from '../views/testPage/index.vue'
import TagPage from '../views/TagPage/index.vue'
import Follower from '../views/UserPage/Follower.vue'
import PostContent from '../views/PostContent/index.vue'
import Following from '../views/UserPage/Following.vue'
import MyCollection from '../views/UserPage/MyCollection.vue'
import UserInfomation from '../views/UserPage/UserInfomation.vue'
import BrowsingHistory from '../views/UserPage/BrowsingHistory.vue'
import PostsSearchLayer from '../views/SearchPage/PostsSearchLayer.vue'
import FollowerFollowing from '../views/UserPage/FollowerFollowing.vue'

Vue.use(VueRouter)

const routes = [
    {
        name: 'homePage',
        path: '/',
        component: HomePage,
        
    },

    {
        path: '/user',
        component: UserPage,
        meta:{needAuth: true},
        children: [
            {
                name: 'userPage',
                path: '',
                component: UserInfomation,
            },
            {
                name: 'MyCollection',
                path: 'collection',
                component: MyCollection,
            },
            {
                path: 'fo',
                component: FollowerFollowing,
                children: [
                    {
                        name: 'FollowerFollowing',
                        path: '',
                        component: Following
                    },

                    {
                        name: 'Follower',
                        path: 'Follow',
                        component: Follower
                    }
                ]
            },
            {
                name: 'MyPost',
                path: 'post',
                component: MyPost,
            },
            {
                name: 'BrowsingHistory',
                path: 'history',
                component: BrowsingHistory,
            },
        ]
    },

    {
        name: 'loginPage',
        path: '/login',
        component: Login,
        meta: { noBar: true },
    },
    
    {
        name: 'RegisterPage',
        path: '/register',
        component: Register,
        meta:{noBar: true}
    },

    {
        name: 'searchPage',
        path: '/search',
        component: SearchPage,
        meta: { noSearch: true, needAuth: true }
    },

    {
        name: 'testPage',
        path: '/test',
        component: testPage,
        // meta:{needAuth: true},
    },

    {
        name: 'postContent',
        path: '/post',
        component: PostContent,
        meta:{needAuth: true},
    },

    {
        name: 'PostRelease',
        path: '/release',
        component: PostRelease,
        // meta:{needAuth: true},
    },

    {
        name: 'tagPage',
        path: '/tag',
        component: TagPage,
        // meta:{needAuth: true},
    },
]

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.noBar) {
        store.commit('CHANGEBAR', false);
    } else {
        store.commit('CHANGEBAR', true);
    }

    // if (to.name === "loginPage") {
    //     window.localStorage.setItem("refresh",'1');
    // }

    // if (from.name === "loginPage") {
    //     if (window.localStorage.getItem("refresh") === "1") {
    //         router.go();
    //         window.localStorage.setItem("refresh",'0');
    //     }
    // }

    if (to.meta.noSearch) {
        store.commit('CHANGESEARCH', false);
    } else {
        store.commit('CHANGESEARCH', true);
    }

    if (window.localStorage.getItem("user")) {
        // console.log(`store.state.isAuth`, store.state.isAuth);
        store.commit('SETAUTH', true);
        // console.log(`store.state.isAuth change`, store.state.isAuth);
    } else {
        // console.log(`store.state.isAuth no change`, store.state.isAuth);
    }

    // if(Vue.prototype.$httpRequestList.length>0){       //检查是否有需要中断的请求
    //   Vue.prototype.$httpRequestList.forEach(item=>{ //遍历,执行中断方法并传入中断信息
    //       item('interrupt');    
    //   })
    // }
        // next();
    if (!to.meta.needAuth) {
        next();       
    } else {
        if (store.state.isAuth) {
            next();
        } else {
            alert("需要登录才可以进行后续操作!!");
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    }
})

export default router
