import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import News from './views/news.vue'
import Hot from './views/hot.vue'
import Brand_introduction from './views/brand_introduction.vue'
import Contact from "./views/contact.vue"
import User from "./views/user.vue"
import New_details from "./views/new_details.vue"
import lid1 from "./components/lid1.vue"
import lid2 from "./components/lid2.vue"
import lid3 from "./components/lid3.vue"
import lid4 from "./components/lid4.vue"
import lid5 from "./components/lid5.vue"
import lid6 from "./components/lid6.vue"
import lid7 from "./components/lid7.vue"

Vue.use(Router);
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/new_details',
      component: New_details,
      children:[
        {path:"lid1",component:lid1},
        {path:"lid2",component:lid2},
        {path:"lid3",component:lid3},
        {path:"lid4",component:lid4},
        {path:"lid5",component:lid5},
        {path:"lid6",component:lid6},
        {path:"lid7",component:lid7}
      ]
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/brand_introduction',
      component: Brand_introduction,
    },
    {
      path: '/hot',
      component: Hot
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/index',
      component: Index
    },
    // 路由重定向初始界面为index
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
