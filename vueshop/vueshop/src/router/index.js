import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/pages/Login'
// import Home from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Products from '@/components/pages/Products'
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'login',
        },
        {
            name:'Login',
            path:'/login',
            component:Login,
        },

        // {
        //     name:'Home',
        //     path:'/',
        //     component:Home,
        //     meta: { requiresAuth: true },
        // },
        
        {
            name:'Dashboard',
            path:'/admin',
            component:Dashboard,
            children:[
                {
                    path:'Products',
                    name:'Products',
                    component:Products,
                    meta: { requiresAuth: true },
                },
            ],
        },
    ],
});