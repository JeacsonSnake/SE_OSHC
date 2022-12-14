import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'

import Login from '../views/Login/index.vue'
import HomePage from '../views/Home/index.vue'
import Register from '../views/Register/index.vue'
import UserPage from '../views/UserPage/index.vue'
import MyPost from '../views/UserPage/MyPost.vue'
import SearchPage from '../views/SearchPage/index.vue'
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
        meta: { noSearch: true }
    },

    {
        name: 'postContent',
        path: '/post',
        component: PostContent,
    },
]

// ??????ElementUI???????????????vue-router???3.0???????????????????????????????????????
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

    if (to.meta.noSearch) {
        store.commit('CHANGESEARCH', false);
    } else {
        store.commit('CHANGESEARCH', true);
    }

    if (window.sessionStorage.getItem("token")) {
        store.commit('SETAUTH', true);
    }

    // if(Vue.prototype.$httpRequestList.length>0){       //????????????????????????????????????
    //   Vue.prototype.$httpRequestList.forEach(item=>{ //??????,???????????????????????????????????????
    //       item('interrupt');    
    //   })
    // }
        next();
    // if (!to.meta.needAuth) {
    //     next();       
    // } else {
    //     if (store.state.isAuth) {
    //         next();
    //     } else {
    //         alert("???????????????????????????????????????!!");
    //         next({
    //             path: '/login',
    //             query: {
    //                 redirect: to.fullPath
    //             }
    //         })
    //     }
    // }
})

export default router
