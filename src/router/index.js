import PageHome from '../components/PageHome'
import PageThreadShow from '../components/PageThreadShow'
import PageNotFound from '../components/PageNotFound'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/thread/show/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
        props: true,
        beforeEnter(to, from, next) {
            // check if thread exist
            const thradExist = sourceData.threads.find(thread => thread.id === to.params.id)
            // if exist continue
            if (thradExist) next()
            else {
                next({
                    name: 'PageNotFound', 
                    params: {
                        pathMath: to.path.substring(1).split('/'),
                        query: to.query,
                        hash: to.hash
                    }
                })
            }
            // if not exist redirect to not found
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound
    },
]

export default createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),

    routes,
})