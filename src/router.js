import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'
import index from './components/page/index.vue'
import salt from './components/page/salt.vue'
import kpArtcle from './components/page/kpArticle.vue'
import kpVideos from './components/page/kpVideos.vue'
import commissioner from './components/page/commissioner.vue'
import child from './components/page/child.vue'
import new_article from './components/page/new_article.vue'
import xueXiaoShouYe from './components/page/xueXiaoShouYe.vue'
import lecture_hall from './components/page/lecture_hall.vue'
import News from './components/page/News.vue'
// import moreMessage from './views/homePage/moreMessage'
import Administrator from './components/Administrator/AdminHome.vue'
import Welcome from './components/Administrator/Welcome.vue'
import Main from './components/Administrator/Main.vue'
import Edit from './components/Administrator/Edit.vue'
import EditLunBo from './components/Administrator/EditLunBo.vue'
import AdMain from './components/Administrator/AdMain.vue'
import AdEdit from './components/Administrator/AdEdit.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login },
    {
      path: '/administrator',
      component: Administrator,
      children: [
        { path: 'welcome', component: Welcome },
        { path: 'main', component: Main },
        { path: 'edit', component: Edit },
        { path: 'news', component: News },
        { path: 'editlunbo', component: EditLunBo },
        { path: 'admain', component: AdMain },
        { path: 'adedit', component: AdEdit }
      ]
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home',
          redirect: 'index'
        },
        {
          path: 'index',
          component: index
        },
        {
          path: 'salt',
          name: 'salt',
          component: salt
        },
        {
          path: 'kpArtcle',
          name: 'kpArtcle',
          component: kpArtcle
        },
        {
          path: 'kpVideos',
          name: 'kpVideos',
          component: kpVideos
        },
        {
          path: 'commissioner',
          name: 'commissioner',
          component: commissioner
        },
        {
          path: 'child',
          name: 'child',
          component: child
        },
        {
          path: 'new_article',
          name: 'new_article',
          component: new_article
        },
        {
          path: 'xueXiaoShouYe',
          name: 'xueXiaoShouYe',
          component: xueXiaoShouYe
        },
        {
          path: 'lecture_hall',
          name: 'lecture_hall',
          component: lecture_hall
        },
        // {
        //   path: 'moreMessage',
        //   name: 'moreMessage',
        //   component: moreMessage
        // },
        {
          path: 'news',
          name: 'News',
          component: News
        }
      ]
    },
    { path: '*', component: NotFound }
  ],
  scrollBehavior(to, from, savedPosition) {
    //页面跳转后自动回到顶部
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  const tokenStr = window.sessionStorage.getItem('token')
  if (to.path === '/administrator/main' && !tokenStr) return next('/login')
  if (to.path === '/administrator/admain' && !tokenStr) return next('/login')
  if (to.path === '/administrator' && !tokenStr) return next('/login')
  if (to.path === '/administrator/edit' && !tokenStr) return next('/login')
  if (to.path === '/administrator/welcome' && !tokenStr) return next('/login')
  // if (!tokenStr) return next('/login')
  next()
})

export default router
