import router from '@/router/index'
// 导航守卫
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
});
