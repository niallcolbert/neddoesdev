import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Posts from '../assets/posts.json'

Vue.use(Router)

const blogRoutes = Object.keys(Posts).map(section => {
  const children = Posts[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../assets/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import('../views/Blog.vue'),
    children
  }
})

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
    ...blogRoutes
  ]
})
