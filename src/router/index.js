import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export const router = createRouter({
    history: createWebHistory('/'),
    routes
})


router.beforeEach((to, from, next) => {
    /*setTimeout(() => {
        if (from && from.matched.length) {
            console.log(from.matched[0].components.default.methods.next);
            // from.matched[0].components.default.methods.next();
        }
    }, 1000);*/

    return next();
})

router.afterEach(to => {
    window.scrollTo(0, 0)
})

export default router
