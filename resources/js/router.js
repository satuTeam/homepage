import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Blog from './pages/Blog.vue'
import Portfolio from './pages/Portfolio.vue'
import Product from './pages/Product.vue'


// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/product',
    component: Product
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path:'*',
    redirect: '/'
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
    mode: 'history',
    routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router