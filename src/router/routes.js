export default [
    {
        path: '/',
        name: '一级菜单',
        resourceType: 1,
        meta: {
            title: '一级菜单',
            first: true
        },
        component: () => import('@/view/home/index.vue'),
        children: []
    }
]
