import { createRouter,createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppShowProject from './pages/AppShowProject.vue';
import AppNotFound from './pages/AppNotFound.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component: AppHome
        },
        {
            path:'/projects',
            name:'projects',
            component: AppProjects
        },
        {
            path:'/projects/:slug',
            name:'project',
            component: AppShowProject
        },
        {
            path: "/:pathMatch(.*)*",
            name:'not-found',
            component: AppNotFound
        },
        
    ]
});
export default router;