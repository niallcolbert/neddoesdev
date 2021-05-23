import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Posts from '../assets/posts.json'

Vue.use(Router)

const children = Posts['posts'].map(child => ({
  path: child.id,
  name: child.id,
  component: () => import(`../assets/posts/${child.id}.md`)
}))

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/Blog.vue'),
      children
    }
  ]
})
