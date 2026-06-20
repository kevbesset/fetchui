import type { RouteLocation, RouteLocationRaw, Router } from 'vue-router'

export type RouteMiddleware = (context: RouteContext) => RouteMiddlewareResult

// Return nothing/true to continue, false to abort, or a route to redirect.
export type RouteMiddlewareResult = void | boolean | RouteLocationRaw

export interface RouteContext {
  from: RouteLocation
  router: Router
  to: RouteLocation
}
