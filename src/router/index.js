import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pagefirst from '@/view/one'
import pagetwo from '@/view/two'

import karea from '@/view/karea'
import detail from '@/view/detail'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/helllworld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'pagefirst',
            component: pagefirst
        },
        {
            path: '/karea',
            name: 'karea',
            component: karea
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },
        {
            path: '/pagetwo',
            name: 'pagetwo',
            component: pagetwo
        },
    ]
})