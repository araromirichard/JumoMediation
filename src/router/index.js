import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Fees from '../views/Fees.vue'
import Contact from '../views/Contact.vue'
import TransactionalDetails from '../views/Trans-details.vue'
import Partnership from '../views/Partnership.vue'
import Publications from '../views/Publication.vue'
import MediationLaws from '../views/MediationLaws.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/services',
        name: 'Services',
        component: Services
    }, {
        path: '/fees',
        name: 'Fees',
        component: Fees
    }, {
        path: '/transactional-details',
        name: 'TransactionalDetails',
        component: TransactionalDetails
    },
    {
        path: '/partnership',
        name: 'Partnership',
        component: Partnership
    },

    {
        path: '/publications',
        name: 'Publication',
        component: Publications
    },

    {
        path: '/mediation-laws',
        name: 'MediationLaws',
        component: MediationLaws
    },

    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router