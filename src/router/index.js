import { createRouter, createWebHashHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const PostView = () => import('@/views/PostView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
