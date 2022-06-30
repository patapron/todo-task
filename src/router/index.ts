import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TodoMain from '@/views/TodoMain/TodoMain.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/all",
    name: "all",
    component: TodoMain,
    props: true,
  },
  {
    path: "/active",
    name: "active",
    component: TodoMain,
    props: true,
  },
  {
    path: "/completed",
    name: "completed",
    component: TodoMain,
    props: true,
  },
  {
    path: "/",
    alias:"all",
    props: true,
  },
]

const router = new VueRouter({
  routes
})

export default router
