import { mergeProps, useSSRContext, inject, createVNode, resolveDynamicComponent, withCtx, renderSlot, resolveComponent, openBlock, createBlock, Suspense, createApp, createSSRApp, ref } from "vue";
import { createRouter } from "vue-router";
import { _ as _export_sfc, r as routeLayout, c as createHistory, s as serverRouteContext } from "./_plugin-vue_export-helper-BETfRqQU.js";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderVNode, ssrRenderComponent, ssrRenderSuspense } from "vue/server-renderer";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../../../:layouts/default.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const DefaultLayout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _default
}, Symbol.toStringTag, { value: "Module" }));
const appLayouts = /* @__PURE__ */ Object.assign({});
appLayouts["/layouts/default.vue"] ?? (appLayouts["/layouts/default.vue"] = DefaultLayout);
const _sfc_main$2 = {
  components: Object.fromEntries(
    Object.keys(appLayouts).map((path) => {
      const name = path.slice(9, -4);
      return [name, appLayouts[path].default];
    })
  ),
  setup: () => ({
    layout: inject(routeLayout)
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.layout), _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../../../:layout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: ":router",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(ssrRenderComponent(_component_RouterView, _attrs, {
        default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$isServer) {
              _push2(ssrRenderComponent(Layout, null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(Component), {
                      key: _ctx.$route.path
                    }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(Component), {
                        key: _ctx.$route.path
                      }))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              ssrRenderSuspense(_push2, {
                default: () => {
                  _push2(ssrRenderComponent(Layout, null, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(Component), {
                          key: _ctx.$route.path
                        }, null), _parent3, _scopeId2);
                      } else {
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                },
                _: 2
              });
            }
          } else {
            return [
              _ctx.$isServer ? (openBlock(), createBlock(Layout, { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component), {
                    key: _ctx.$route.path
                  }))
                ]),
                _: 2
              }, 1024)) : (openBlock(), createBlock(Suspense, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(Layout, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(Component), {
                        key: _ctx.$route.path
                      }))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../../../:router.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function configure({ app, router }) {
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedState);
  app.use(pinia);
}
const _sfc_main = _sfc_main$1;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
async function create(ctx) {
  const { routes, ctxHydration } = ctx;
  const instance = ctxHydration.clientOnly ? createApp(_sfc_main) : createSSRApp(_sfc_main);
  let scrollBehavior = null;
  const history = createHistory();
  const router = createRouter({ history, routes, scrollBehavior });
  const layoutRef = ref(ctxHydration.layout ?? "default");
  const isServer = true;
  instance.config.globalProperties.$isServer = isServer;
  instance.provide(routeLayout, layoutRef);
  {
    instance.provide(serverRouteContext, ctxHydration);
  }
  instance.use(router);
  if (typeof configure === "function") {
    await configure({ app: instance, router });
  }
  return { instance, ctx, state: ctxHydration.state, router };
}
export {
  create as default
};
