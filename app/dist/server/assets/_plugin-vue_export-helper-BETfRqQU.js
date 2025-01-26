import { inject } from "vue";
import { createMemoryHistory, createWebHistory, useRoute } from "vue-router";
const isServer = typeof window === "undefined" && typeof process === "object";
const createHistory = isServer ? createMemoryHistory : createWebHistory;
const serverRouteContext = Symbol("serverRouteContext");
const routeLayout = Symbol("routeLayout");
function useRouteContext() {
  if (isServer) {
    return inject(serverRouteContext);
  }
  return useRoute().meta[serverRouteContext];
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export {
  _export_sfc as _,
  createHistory as c,
  routeLayout as r,
  serverRouteContext as s,
  useRouteContext as u
};
