import {createRouter, createMemoryHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createMemoryHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/history',
            name: 'Geschichte',
            component: () => import('../views/History.vue')
        },
        {
            path: "/quiz",
            name: "Quiz",
            component: () => import("../views/Quiz.vue")
        }
    ]
})

export default router
