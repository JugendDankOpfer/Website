import {createRouter, createMemoryHistory} from 'vue-router'
const homeView = import("../views/Home.vue")

const router = createRouter({
    history: createMemoryHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: homeView
        },
        {
            path: "/current",
            name: "Aktuelles JuDaO",
            component: () => import('../views/currentJuDaO.vue')
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
