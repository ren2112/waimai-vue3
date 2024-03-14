import {createRouter,createWebHashHistory} from 'vue-router';

const routes=[
    {
        path:'/',
        redirect:'/login',
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/login/index.vue')
    },
    {
        path:'/home',
        name:'home',
        component:()=>import('../components/layout/index.vue'),
        children:[
            {
                path:'/index',//首页
                name:'index',
                redirect:'/index/interest',
                component:()=>import('../views/index/index.vue'),
                // 当你导航到子路由时，默认情况下父级路由的组件会一直保留在视图中，除非你明确地配置不同的行为。
                children:[
                    {
                        path:'/index/interest', //关注页
                        name:'interest'
                        ,component:()=>import('../views/index/interest/index.vue')
                    },
                    {
                        path:'/index/recommend', //推荐
                        name:'recommend'
                        ,component:()=>import('../views/index/recommend/index.vue')
                    },
                    {
                        path:'/index/hotlist', //热榜
                        name:'hotlist'
                        ,component:()=>import('../views/index/hotlist/index.vue')
                    },
                    {
                        path:'/index/video', //视频
                        name:'video'
                        ,component:()=>import('../views/index/video/index.vue')
                    },
                ]
            },
            {
                path:'/education',//知乎知学堂
                name:'education',
                component:()=>import('../views/education/index.vue')
            },
            {
                path:'/explore',//发现
                name:'explore',
                component:()=>import('../views/explore/index.vue')
            },
            {
                path:'/waiting',//等你来答
                name:'waiting',
                component:()=>import('../views/waiting/index.vue')
            },
            {
                path:'/details',
                name:'details',
                component:()=>import('../views/details/index.vue')
            }

        ]
    },
];

const router=createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;