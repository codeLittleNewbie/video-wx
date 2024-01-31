export default [
    {
        path: '/',
        name: '一级菜单',
        resourceType: 1,
        meta: {
            title: '一级菜单',
            first: true
        },
        component: () => import('@/view/login.vue'),
        children: []
    },
    {
        path: '/next',
        name: '下一页',
        resourceType: 1,
        meta: {
            title: '下一页',
            first: true
        },
        component: () => import('@/view/next.vue'),
        children: []
    }
]
