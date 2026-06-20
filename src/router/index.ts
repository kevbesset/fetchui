import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { RouteContext, RouteMiddleware } from './Router.type'
import { RouteName } from './RouteName'
import EmptyLayout from '@/components/layouts/EmptyLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.Home,
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFoundPage.vue'),
    meta: {
      layout: EmptyLayout,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      behavior: 'instant',
    }
  },
})

router.beforeEach((to, from) => {
  let middlewares: RouteMiddleware[] = [] // default middleware
  if (to.meta.middleware) {
    const routeMiddlewares = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware]
    middlewares = middlewares.concat(routeMiddlewares)
  }

  const context: RouteContext = { from, router, to }

  // Run each middleware in order. The first one that returns a value
  // (false or a redirect target) short-circuits the navigation.
  for (const middleware of middlewares) {
    const result = middleware(context)
    if (result !== undefined && result !== true) {
      return result
    }
  }

  return true
})

export default router
