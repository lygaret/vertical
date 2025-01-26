import { unref, mergeProps, withCtx, renderSlot, useSSRContext, computed, createVNode, defineComponent, resolveDynamicComponent, openBlock, createBlock, Fragment, createTextVNode, toDisplayString, ref, toRaw, useCssModule, renderList, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrGetDynamicModelProps, ssrInterpolate, ssrRenderVNode, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { u as useRouteContext, _ as _export_sfc } from "./_plugin-vue_export-helper-BETfRqQU.js";
import { cva } from "class-variance-authority";
import { useForwardPropsEmits, DialogRoot, DialogPortal, DialogOverlay, DialogContent, DialogClose, createContext, Primitive, TooltipRoot, TooltipPortal, TooltipContent, TooltipTrigger, TooltipProvider, SelectRoot, SelectPortal, SelectContent, SelectViewport, SelectGroup, useForwardProps, SelectItem, SelectItemIndicator, SelectItemText, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectIcon, SelectValue } from "radix-vue";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Cross2Icon, CheckIcon, ChevronDownIcon, ChevronUpIcon, CaretSortIcon } from "@radix-icons/vue";
import { useVModel, useMediaQuery, useEventListener } from "@vueuse/core";
import { defineStore } from "pinia";
import { some, partition } from "lodash-es";
import ICAL from "ical.js";
import "vue-router";
function useState() {
  return useRouteContext().state;
}
const _sfc_main$u = {
  __name: "Sheet",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(forwarded), _attrs), {
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
      }, _parent));
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/Sheet.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const _sfc_main$t = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "SheetContent",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false },
    side: { type: null, required: false },
    forceMount: { type: Boolean, required: false },
    trapFocus: { type: Boolean, required: false },
    disableOutsidePointerEvents: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, side, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps({
              class: unref(cn)(unref(sheetVariants)({ side: __props.side }), props.class)
            }, { ...unref(forwarded), ..._ctx.$attrs }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Cross2Icon), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Cross2Icon), { class: "w-4 h-4" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                      default: withCtx(() => [
                        createVNode(unref(Cross2Icon), { class: "w-4 h-4" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
              createVNode(unref(DialogContent), mergeProps({
                class: unref(cn)(unref(sheetVariants)({ side: __props.side }), props.class)
              }, { ...unref(forwarded), ..._ctx.$attrs }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                    default: withCtx(() => [
                      createVNode(unref(Cross2Icon), { class: "w-4 h-4" })
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetContent.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const [useSidebar, provideSidebarContext] = createContext("Sidebar");
const _sfc_main$s = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    side: { type: String, required: false, default: "left" },
    variant: { type: String, required: false, default: "sidebar" },
    collapsible: { type: String, required: false, default: "offcanvas" },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.collapsible === "none") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: unref(cn)(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            props.class
          )
        }, _ctx.$attrs, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else if (unref(isMobile)) {
        _push(ssrRenderComponent(_sfc_main$u, mergeProps({ open: unref(openMobile) }, _ctx.$attrs, { "onUpdate:open": unref(setOpenMobile) }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$t, {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                side: __props.side,
                class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                  "--sidebar-width": unref(SIDEBAR_WIDTH_MOBILE)
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex h-full w-full flex-col"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex h-full w-full flex-col" }, [
                        renderSlot(_ctx.$slots, "default")
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$t, {
                  "data-sidebar": "sidebar",
                  "data-mobile": "true",
                  side: __props.side,
                  class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                  style: {
                    "--sidebar-width": unref(SIDEBAR_WIDTH_MOBILE)
                  }
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex h-full w-full flex-col" }, [
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ]),
                  _: 3
                }, 8, ["side", "style"])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "group peer hidden md:block",
          "data-state": unref(state),
          "data-collapsible": unref(state) === "collapsed" ? __props.collapsible : "",
          "data-variant": __props.variant,
          "data-side": __props.side
        }, _attrs))}><div class="${ssrRenderClass(
          unref(cn)(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            __props.variant === "floating" || __props.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )
        )}"></div><div${ssrRenderAttrs(mergeProps({
          class: unref(cn)(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            __props.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            __props.variant === "floating" || __props.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            props.class
          )
        }, _ctx.$attrs))}><div data-sidebar="sidebar" class="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></div></div>`);
      }
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/Sidebar.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = {
  __name: "SidebarContent",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "content",
        class: unref(cn)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarContent.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = {
  __name: "SidebarGroup",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "group",
        class: unref(cn)("relative flex w-full min-w-0 flex-col p-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarGroup.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = {
  __name: "SidebarGroupLabel",
  __ssrInlineRender: true,
  props: {
    as: { type: String, default: void 0 },
    asChild: { type: Boolean, default: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-sidebar": "group-label",
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(
          "duration-200 flex h-8 shrink-0 items-center rounded-sm px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          props.class
        )
      }, _attrs), {
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
      }, _parent));
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarGroupLabel.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
  __name: "SidebarHeader",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "header",
        class: unref(cn)("flex flex-col gap-2 p-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarHeader.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    defaultValue: { type: [String, Number], required: false },
    modelValue: { type: [String, Number], required: false },
    class: { type: null, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        class: unref(cn)(
          "flex h-9 w-full rounded-sm border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/input/Input.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "SidebarInset",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "relative flex min-h-svh flex-1 flex-col bg-background",
          "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarInset.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = {
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    delayDuration: { type: Number, required: false },
    disableHoverableContent: { type: Boolean, required: false },
    disableClosingTrigger: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    ignoreNonKeyboardFocus: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipRoot), mergeProps(unref(forwarded), _attrs), {
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
      }, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/Tooltip.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "TooltipContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    ariaLabel: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    side: { type: null, required: false },
    sideOffset: { type: Number, required: false, default: 4 },
    align: { type: null, required: false },
    alignOffset: { type: Number, required: false },
    avoidCollisions: { type: Boolean, required: false },
    collisionBoundary: { type: null, required: false },
    collisionPadding: { type: [Number, Object], required: false },
    arrowPadding: { type: Number, required: false },
    sticky: { type: String, required: false },
    hideWhenDetached: { type: Boolean, required: false },
    class: { type: null, required: false }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TooltipContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)(
                "z-50 overflow-hidden rounded-sm bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TooltipContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)(
                  "z-50 overflow-hidden rounded-sm bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipContent.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
  __name: "TooltipTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipTrigger), mergeProps(props, _attrs), {
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
      }, _parent));
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipTrigger.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "SidebarMenuButtonChild",
  __ssrInlineRender: true,
  props: {
    as: { type: String, default: "button" },
    variant: { type: String, default: "default" },
    size: { type: String, default: "default" },
    isActive: { type: Boolean, default: false },
    class: { type: null, required: false },
    asChild: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-sidebar": "menu-button",
        "as-child": props.asChild,
        "data-size": props.size,
        "data-active": props.isActive,
        class: unref(cn)(unref(sidebarMenuButtonVariants)({ variant: props.variant, size: props.size }), props.class),
        as: props.as
      }, _ctx.$attrs, _attrs), {
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
      }, _parent));
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuButtonChild.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "SidebarMenuButton",
  __ssrInlineRender: true,
  props: {
    as: { type: String, default: "button" },
    variant: { type: String, default: "default" },
    size: { type: String, default: "default" },
    tooltip: { type: [String, Object], default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { isMobile, state } = useSidebar();
    const delegatedProps = computed(() => {
      const { tooltip, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.tooltip) {
        _push(ssrRenderComponent(_sfc_main$i, mergeProps({ ...delegatedProps.value, ..._ctx.$attrs }, _attrs), {
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
        }, _parent));
      } else {
        _push(ssrRenderComponent(_sfc_main$l, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$j, { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$i, { ...delegatedProps.value, ..._ctx.$attrs }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$i, { ...delegatedProps.value, ..._ctx.$attrs }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 16)
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$k, {
                side: "right",
                align: "center",
                hidden: unref(state) !== "collapsed" || unref(isMobile)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (typeof __props.tooltip === "string") {
                      _push3(`<!--[-->${ssrInterpolate(__props.tooltip)}<!--]-->`);
                    } else {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(__props.tooltip), null, null), _parent3, _scopeId2);
                    }
                  } else {
                    return [
                      typeof __props.tooltip === "string" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString(__props.tooltip), 1)
                      ], 64)) : (openBlock(), createBlock(resolveDynamicComponent(__props.tooltip), { key: 1 }))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$j, { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$i, { ...delegatedProps.value, ..._ctx.$attrs }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 16)
                  ]),
                  _: 3
                }),
                createVNode(_sfc_main$k, {
                  side: "right",
                  align: "center",
                  hidden: unref(state) !== "collapsed" || unref(isMobile)
                }, {
                  default: withCtx(() => [
                    typeof __props.tooltip === "string" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(__props.tooltip), 1)
                    ], 64)) : (openBlock(), createBlock(resolveDynamicComponent(__props.tooltip), { key: 1 }))
                  ]),
                  _: 1
                }, 8, ["hidden"])
              ];
            }
          }),
          _: 3
        }, _parent));
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuButton.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuSubItem.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "SidebarProvider",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, default: true },
    open: { type: Boolean, default: void 0 },
    class: { type: null, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const isMobile = useMediaQuery("(max-width: 768px)");
    const openMobile = ref(false);
    const open = useVModel(props, "open", emits, {
      defaultValue: props.defaultOpen ?? false,
      passive: props.open === void 0
    });
    function setOpen(value) {
      open.value = value;
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }
    function setOpenMobile(value) {
      openMobile.value = value;
    }
    function toggleSidebar() {
      return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value);
    }
    useEventListener("keydown", (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    });
    const state = computed(() => open.value ? "expanded" : "collapsed");
    provideSidebarContext({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps({ "delay-duration": 0 }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({
              "--sidebar-width": unref(SIDEBAR_WIDTH),
              "--sidebar-width-icon": unref(SIDEBAR_WIDTH_ICON)
            })}" class="${ssrRenderClass(unref(cn)("group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar", props.class))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                style: {
                  "--sidebar-width": unref(SIDEBAR_WIDTH),
                  "--sidebar-width-icon": unref(SIDEBAR_WIDTH_ICON)
                },
                class: unref(cn)("group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar", props.class)
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 6)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarProvider.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 rounded px-2",
        sm: "h-8 rounded-sm px-3 text-xs",
        lg: "h-10 rounded-sm px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$e = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: { type: null, required: false },
    size: { type: null, required: false },
    class: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false, default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(unref(buttonVariants)({ variant: __props.variant, size: __props.size }), props.class)
      }, _attrs), {
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
      }, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/button/Button.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-sm p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--border))] hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--border))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$d = {
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    variant: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(unref(badgeVariants)({ variant: __props.variant }), props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/badge/Badge.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const _sfc_main$c = {
  __name: "BrandBadge",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$d), mergeProps({
        variant: "brand",
        class: "grow-0 self-end"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` /vˈɝtɪkæl/ `);
          } else {
            return [
              createTextVNode(" /vˈɝtɪkæl/ ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/BrandBadge.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var ETypeByteCode = /* @__PURE__ */ ((ETypeByteCode2) => {
  ETypeByteCode2[ETypeByteCode2["Constant"] = 0] = "Constant";
  ETypeByteCode2[ETypeByteCode2["String"] = 16] = "String";
  ETypeByteCode2[ETypeByteCode2["Integer"] = 32] = "Integer";
  ETypeByteCode2[ETypeByteCode2["Float"] = 48] = "Float";
  ETypeByteCode2[ETypeByteCode2["BigInt"] = 64] = "BigInt";
  ETypeByteCode2[ETypeByteCode2["Array"] = 80] = "Array";
  ETypeByteCode2[ETypeByteCode2["Typed_Array"] = 96] = "Typed_Array";
  ETypeByteCode2[ETypeByteCode2["Object"] = 112] = "Object";
  ETypeByteCode2[ETypeByteCode2["Set"] = 128] = "Set";
  ETypeByteCode2[ETypeByteCode2["Map"] = 144] = "Map";
  ETypeByteCode2[ETypeByteCode2["Symbol"] = 160] = "Symbol";
  ETypeByteCode2[ETypeByteCode2["Refs"] = 176] = "Refs";
  ETypeByteCode2[ETypeByteCode2["Date"] = 192] = "Date";
  ETypeByteCode2[ETypeByteCode2["Instruction"] = 240] = "Instruction";
  return ETypeByteCode2;
})(ETypeByteCode || {});
const bytesToInteger = (bytes) => {
  const len = Array.isArray(bytes) ? bytes.length : bytes.byteLength;
  if (len === 0) {
    return 0;
  }
  let int = 0;
  for (let i = 0; i < len; i += 1) {
    const byte = bytes[i];
    int = byte * 256 ** i + int;
  }
  return int;
};
var EConstantByteCode = ((EConstantByteCode2) => {
  EConstantByteCode2[EConstantByteCode2["FALSE"] = ETypeByteCode.Constant | 0] = "FALSE";
  EConstantByteCode2[EConstantByteCode2["TRUE"] = ETypeByteCode.Constant | 1] = "TRUE";
  EConstantByteCode2[EConstantByteCode2["Null"] = ETypeByteCode.Constant | 2] = "Null";
  EConstantByteCode2[EConstantByteCode2["Undefined"] = ETypeByteCode.Constant | 3] = "Undefined";
  EConstantByteCode2[EConstantByteCode2["NaN"] = ETypeByteCode.Constant | 4] = "NaN";
  EConstantByteCode2[EConstantByteCode2["Pos_Infinity"] = ETypeByteCode.Constant | 5] = "Pos_Infinity";
  EConstantByteCode2[EConstantByteCode2["Neg_Infinity"] = ETypeByteCode.Constant | 6] = "Neg_Infinity";
  EConstantByteCode2[EConstantByteCode2["Empty_Value"] = ETypeByteCode.Constant | 7] = "Empty_Value";
  return EConstantByteCode2;
})(EConstantByteCode || {});
const decodeInteger = (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.Integer) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding integer`);
  }
  const count = typeByte & 7;
  const isNegative = Boolean(typeByte & 8);
  if (count === 0) {
    return isNegative ? -0 : 0;
  }
  const bytesCount = stream.readBytes(count);
  const int = bytesToInteger(bytesCount);
  return isNegative ? -int : int;
};
const decodeArray = (typeByte, stream, options, initArr = []) => {
  if ((typeByte & 240) !== ETypeByteCode.Array) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding array`);
  }
  const isKeyValueEncoding = typeByte & 8;
  const bytesCount = typeByte & 7;
  if (bytesCount === 0) {
    return initArr;
  }
  const arrayLen = bytesToInteger(stream.readBytes(bytesCount));
  const itemsCoint = isKeyValueEncoding ? bytesToInteger(stream.readBytes(bytesCount)) : arrayLen;
  const arr = initArr;
  arr.length = arrayLen;
  if (isKeyValueEncoding) {
    for (let i = 0; i < itemsCoint; i += 1) {
      const key = decodeInteger(stream.readByte(), stream);
      const value = decode(stream.readByte(), stream, options);
      arr[key] = value;
    }
  } else {
    for (let i = 0; i < arrayLen; i += 1) {
      const byte = stream.readByte();
      if (byte === EConstantByteCode.Empty_Value) {
        continue;
      }
      const value = decode(byte, stream, options);
      arr[i] = value;
    }
  }
  return arr;
};
const bytesToBigInt = (bytes) => {
  const len = Array.isArray(bytes) ? bytes.length : bytes.byteLength;
  if (len === 0) {
    return 0n;
  }
  let bint = 0n;
  for (let i = 0; i < len; i += 1) {
    const byte = BigInt(bytes[i]);
    bint = byte << BigInt(8 * i) | bint;
  }
  return bint;
};
const decodeBigInt = (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.BigInt) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding bigint`);
  }
  const count = typeByte & 7;
  const isNegative = Boolean(typeByte & 8);
  if (count === 0) {
    return isNegative ? -0n : 0n;
  }
  const bytesCount = stream.readBytes(count);
  const encodeCount = bytesToInteger(bytesCount);
  const encodeBytes = stream.readBytes(encodeCount);
  const bint = bytesToBigInt(encodeBytes);
  return isNegative ? -bint : bint;
};
const constantMap = /* @__PURE__ */ new Map([
  [EConstantByteCode.FALSE, false],
  [EConstantByteCode.TRUE, true],
  [EConstantByteCode.Null, null],
  [EConstantByteCode.Undefined, void 0],
  [EConstantByteCode.NaN, NaN],
  [EConstantByteCode.Pos_Infinity, Infinity],
  [EConstantByteCode.Neg_Infinity, -Infinity],
  [EConstantByteCode.Empty_Value, ""]
]);
const decodeConstant = (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.Constant) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding contant`);
  }
  if (!constantMap.has(typeByte)) {
    throw new Error("Not supported contsant for decoding");
  }
  return constantMap.get(typeByte);
};
const decodeDate = (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.Date) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding Date`);
  }
  const count = typeByte & 7;
  const isNegative = Boolean(typeByte & 8);
  if (count === 0) {
    return /* @__PURE__ */ new Date(0);
  }
  const bytesCount = stream.readBytes(count);
  const int = bytesToInteger(bytesCount);
  return new Date(isNegative ? -int : int);
};
const decodeFloat = (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.Float) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding float`);
  }
  const count = (typeByte & 7) + 1;
  let map = 0;
  if (typeByte & 8) {
    map = stream.readByte();
  } else {
    for (let i = 0; i < count; i += 1) {
      map = map | 1 << i;
    }
  }
  const bytesCount = stream.readBytes(count);
  const floatBytes = new Uint8Array(8);
  let byteIndex = 0;
  for (let i = 0; i < 8; i += 1) {
    if (map & 128 >>> i) {
      floatBytes[i] = bytesCount[byteIndex];
      byteIndex += 1;
    }
  }
  const float = new Float64Array(floatBytes.buffer);
  return float[0];
};
const decodeMap = (typeByte, stream, options, initMap = /* @__PURE__ */ new Map()) => {
  if ((typeByte & 240) !== ETypeByteCode.Map) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding map`);
  }
  const bytesCount = typeByte & 7;
  if (bytesCount === 0) {
    return initMap;
  }
  const count = bytesToInteger(stream.readBytes(bytesCount));
  const map = initMap;
  for (let i = 0; i < count; i += 1) {
    const key = decode(stream.readByte(), stream, options);
    const value = decode(stream.readByte(), stream, options);
    map.set(key, value);
  }
  return map;
};
const decodeObject = (typeByte, stream, options, initObj = {}) => {
  if ((typeByte & 240) !== ETypeByteCode.Object) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding object`);
  }
  const bytesCount = typeByte & 7;
  if (bytesCount === 0) {
    return initObj;
  }
  const count = bytesToInteger(stream.readBytes(bytesCount));
  const isClassInstance2 = Boolean(typeByte & 8);
  const constructorName = isClassInstance2 ? decode(null, stream, options) : null;
  const obj = initObj;
  for (let i = 0; i < count; i += 1) {
    const key = decode(null, stream, options);
    const value = decode(null, stream, options);
    obj[key] = value;
  }
  if (isClassInstance2) {
    const constructorNameKey = options.objects.classInstanceConstructorNameKey;
    if (constructorNameKey !== null) {
      Object.defineProperty(obj, constructorNameKey, {
        value: constructorName,
        configurable: true,
        enumerable: false,
        writable: false
      });
    }
  }
  return obj;
};
const decodePrimitiveObjectWrapper = (typeByte, stream, options) => {
  if (typeByte !== (ETypeByteCode.Instruction | 0)) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding primitive object wrapper`);
  }
  const value = decode(stream.readByte(), stream, options);
  switch (typeof value) {
    case "string":
      return new String(value);
    case "boolean":
      return new Boolean(value);
    case "number":
      return new Number(value);
  }
  throw new Error(`Can not create Primitive Object Wrapper for value ${value}, type ${typeof value}`);
};
class ByteStream {
  constructor(msg = []) {
    this._msgArrIndex = 0;
    this._msgChrIndex = 0;
    this._restByte = 0;
    this._isStreamComplete = false;
    this._isEOF = false;
    this._waitingPromise = null;
    this._waitingPromiseResolver = null;
    this._waitingRejectTimeout = null;
    this._readBytes = [];
    this._msg = Array.isArray(msg) ? [...msg] : [msg];
  }
  getReadBytesIndex() {
    return this._readBytes.length;
  }
  getReadBytes() {
    return this._readBytes;
  }
  addMessage(msg) {
    if (Array.isArray(msg)) {
      this._msg.push(...msg);
    } else {
      this._msg.push(msg);
    }
    if (this._waitingPromise && this._waitingPromiseResolver) {
      this._waitingPromiseResolver();
    }
  }
  completeStream(msg = []) {
    this.addMessage(msg);
    this._isStreamComplete = true;
  }
  isCompleteMessage() {
    return this._isStreamComplete;
  }
  isEOF() {
    return this._isEOF;
  }
  waitMessages(timeout) {
    if (this._waitingPromise) {
      return this._waitingPromise;
    }
    if (this._isStreamComplete) {
      return Promise.reject("Can not wait completed stream");
    }
    const promise = new Promise((resolve, reject) => {
      this._waitingPromiseResolver = resolve;
      this._waitingRejectTimeout = setTimeout(() => {
        reject(`Waiting timeout ${timeout}ms is riched`);
      }, timeout);
    }).finally(() => {
      if (this._waitingRejectTimeout) {
        clearTimeout(this._waitingRejectTimeout);
        this._waitingRejectTimeout = null;
      }
      this._waitingPromise = null;
      this._waitingPromiseResolver = null;
    });
    this._waitingPromise = promise;
    return promise;
  }
  async readStreamBytes(count = 1, timeout = 3e4) {
    const bytes = new Uint8Array(count);
    let bytesLen = 0;
    while (bytesLen < count) {
      if (this._restByte) {
        bytes[bytesLen] = this._restByte;
        this._readBytes.push(this._restByte);
        this._restByte = 0;
        bytesLen += 1;
        continue;
      }
      if (!(this._msgArrIndex in this._msg)) {
        if (!this._isStreamComplete) {
          await this.waitMessages(timeout);
          continue;
        }
        this._isEOF = true;
        throw new Error(`Can not read ${count - bytesLen} bytes`);
      }
      let charCode = NaN;
      const block = this._msg[this._msgArrIndex];
      if (typeof block === "number") {
        charCode = block;
        this._msgChrIndex = 0;
        delete this._msg[this._msgArrIndex];
        this._msgArrIndex += 1;
      } else {
        charCode = block.charCodeAt(this._msgChrIndex);
        if (charCode > 255) {
          this._restByte = (charCode & 65280) >>> 8;
          charCode = charCode & 255;
        }
        this._msgChrIndex += 1;
      }
      if (Number.isNaN(charCode)) {
        delete this._msg[this._msgArrIndex];
        this._msgArrIndex += 1;
        this._msgChrIndex = 0;
        continue;
      }
      bytes[bytesLen] = charCode;
      this._readBytes.push(charCode);
      bytesLen += 1;
    }
    return bytes;
  }
  async readStreamByte() {
    return (await this.readStreamBytes(1))[0];
  }
  readBytes(count = 1) {
    if (!this._isStreamComplete) {
      throw new Error("Sync bytes read is allowed only for completed stream");
    }
    const bytes = new Uint8Array(count);
    let bytesLen = 0;
    while (bytesLen < count) {
      if (this._restByte) {
        bytes[bytesLen] = this._restByte;
        this._readBytes.push(this._restByte);
        this._restByte = 0;
        bytesLen += 1;
        continue;
      }
      if (!(this._msgArrIndex in this._msg)) {
        this._isEOF = true;
        throw new Error(`Can not read ${count - bytesLen} bytes`);
      }
      let charCode = NaN;
      const block = this._msg[this._msgArrIndex];
      if (typeof block === "number") {
        charCode = block;
        this._msgChrIndex = 0;
        delete this._msg[this._msgArrIndex];
        this._msgArrIndex += 1;
      } else {
        charCode = block.charCodeAt(this._msgChrIndex);
        if (charCode > 255) {
          this._restByte = (charCode & 65280) >>> 8;
          charCode = charCode & 255;
        }
        this._msgChrIndex += 1;
      }
      if (Number.isNaN(charCode)) {
        delete this._msg[this._msgArrIndex];
        this._msgArrIndex += 1;
        this._msgChrIndex = 0;
        continue;
      }
      bytes[bytesLen] = charCode;
      this._readBytes.push(charCode);
      bytesLen += 1;
    }
    return bytes;
  }
  readByte() {
    return this.readBytes(1)[0];
  }
}
const createDecodeOptions = () => {
  return {
    context: {
      refs: [],
      refByteSlice: [],
      readBytes: []
    },
    objects: {
      classInstanceConstructorNameKey: "__jsbtConstructorName"
    }
  };
};
const decodeRef = (typeByte, stream, options) => {
  if ((typeByte & 240) !== ETypeByteCode.Refs) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding ref`);
  }
  const isCopy = Boolean(typeByte & 8);
  const count = typeByte & 7;
  const id = count === 0 ? 0 : bytesToInteger(stream.readBytes(count));
  const refs = options.context.refs;
  if (!(id in refs)) {
    throw new Error(`Incorrect ref ID ${id}, max id is ${refs.length}`);
  }
  if (isCopy) {
    const refSlice = options.context.refByteSlice[id];
    const slice = options.context.readBytes.slice(refSlice.index, refSlice.index + refSlice.length);
    const decOptions = createDecodeOptions();
    decOptions.context = options.context;
    const st = new ByteStream(slice);
    st.completeStream();
    const copy = decode(null, st, decOptions);
    return copy;
  }
  return refs[id];
};
const decodeSet = (typeByte, stream, options, initSet = /* @__PURE__ */ new Set()) => {
  if ((typeByte & 240) !== ETypeByteCode.Set) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding set`);
  }
  const bytesCount = typeByte & 7;
  if (bytesCount === 0) {
    return initSet;
  }
  const count = bytesToInteger(stream.readBytes(bytesCount));
  const set = initSet;
  for (let i = 0; i < count; i += 1) {
    const value = decode(stream.readByte(), stream, options);
    set.add(value);
  }
  return set;
};
const decodeString = (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.String) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding string`);
  }
  const count = typeByte & 7;
  if (count === 0) {
    return "";
  }
  const bytesCount = stream.readBytes(count);
  const bytesLength = bytesToInteger(bytesCount);
  const decoder = new TextDecoder("utf-8");
  const bytes = stream.readBytes(bytesLength);
  return decoder.decode(bytes);
};
const bytesToUtf16 = (bytes) => {
  const msg = [];
  const len = Array.isArray(bytes) ? bytes.length : bytes.byteLength;
  for (let i = 0; i < len; i += 1) {
    const currentByte = bytes[i];
    const nextByte = bytes[i + 1];
    if (nextByte >= 216 && nextByte <= 219 || nextByte >= 220 && nextByte <= 223) {
      msg.push(String.fromCharCode(nextByte << 8 | currentByte));
      i += 1;
      continue;
    }
    msg.push(String.fromCharCode(currentByte));
  }
  return msg.join("");
};
const decodeSymbol = (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.Symbol) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding symbol`);
  }
  const count = typeByte & 7;
  if (count === 0) {
    return Symbol.for("");
  }
  const bytesCount = stream.readBytes(count);
  const strLen = bytesToInteger(bytesCount);
  const bytes = stream.readBytes(strLen);
  return Symbol.for(bytesToUtf16(bytes));
};
var ETypedArrayByteCode = ((ETypedArrayByteCode2) => {
  ETypedArrayByteCode2[ETypedArrayByteCode2["ArrayBuffer"] = 0 | ETypeByteCode.Typed_Array] = "ArrayBuffer";
  ETypedArrayByteCode2[ETypedArrayByteCode2["Int8Array"] = 1 | ETypeByteCode.Typed_Array] = "Int8Array";
  ETypedArrayByteCode2[ETypedArrayByteCode2["Uint8Array"] = 2 | ETypeByteCode.Typed_Array] = "Uint8Array";
  ETypedArrayByteCode2[ETypedArrayByteCode2["Uint8ClampedArray"] = 3 | ETypeByteCode.Typed_Array] = "Uint8ClampedArray";
  ETypedArrayByteCode2[ETypedArrayByteCode2["Int16Array"] = 4 | ETypeByteCode.Typed_Array] = "Int16Array";
  ETypedArrayByteCode2[ETypedArrayByteCode2["Uint16Array"] = 5 | ETypeByteCode.Typed_Array] = "Uint16Array";
  ETypedArrayByteCode2[ETypedArrayByteCode2["Int32Array"] = 6 | ETypeByteCode.Typed_Array] = "Int32Array";
  ETypedArrayByteCode2[ETypedArrayByteCode2["Uint32Array"] = 7 | ETypeByteCode.Typed_Array] = "Uint32Array";
  ETypedArrayByteCode2[ETypedArrayByteCode2["Float32Array"] = 8 | ETypeByteCode.Typed_Array] = "Float32Array";
  ETypedArrayByteCode2[ETypedArrayByteCode2["Float64Array"] = 9 | ETypeByteCode.Typed_Array] = "Float64Array";
  ETypedArrayByteCode2[ETypedArrayByteCode2["BigInt64Array"] = 10 | ETypeByteCode.Typed_Array] = "BigInt64Array";
  ETypedArrayByteCode2[ETypedArrayByteCode2["BigUint64Array"] = 11 | ETypeByteCode.Typed_Array] = "BigUint64Array";
  return ETypedArrayByteCode2;
})(ETypedArrayByteCode || {});
const getBytesPerElement = (arr) => {
  if (arr instanceof ArrayBuffer) {
    return 1;
  }
  return arr.BYTES_PER_ELEMENT;
};
const typedArrayConstructorByType = {};
if (typeof Uint8Array !== "undefined") {
  typedArrayConstructorByType[ETypedArrayByteCode.ArrayBuffer] = Uint8Array;
  typedArrayConstructorByType[ETypedArrayByteCode.Uint8Array] = Uint8Array;
}
if (typeof Int8Array !== "undefined") {
  typedArrayConstructorByType[ETypedArrayByteCode.Int8Array] = Int8Array;
}
if (typeof Uint8ClampedArray !== "undefined") {
  typedArrayConstructorByType[ETypedArrayByteCode.Uint8ClampedArray] = Uint8ClampedArray;
}
if (typeof Int16Array !== "undefined") {
  typedArrayConstructorByType[ETypedArrayByteCode.Int16Array] = Int16Array;
}
if (typeof Uint16Array !== "undefined") {
  typedArrayConstructorByType[ETypedArrayByteCode.Uint16Array] = Uint16Array;
}
if (typeof Int32Array !== "undefined") {
  typedArrayConstructorByType[ETypedArrayByteCode.Int32Array] = Int32Array;
}
if (typeof Uint32Array !== "undefined") {
  typedArrayConstructorByType[ETypedArrayByteCode.Uint32Array] = Uint32Array;
}
if (typeof Float32Array !== "undefined") {
  typedArrayConstructorByType[ETypedArrayByteCode.Float32Array] = Float32Array;
}
if (typeof Float64Array !== "undefined") {
  typedArrayConstructorByType[ETypedArrayByteCode.Float64Array] = Float64Array;
}
if (typeof BigInt64Array !== "undefined") {
  typedArrayConstructorByType[ETypedArrayByteCode.BigInt64Array] = BigInt64Array;
}
if (typeof BigUint64Array !== "undefined") {
  typedArrayConstructorByType[ETypedArrayByteCode.BigUint64Array] = BigUint64Array;
}
const dataViewGetter = {
  [ETypedArrayByteCode.ArrayBuffer]: "getUint8",
  [ETypedArrayByteCode.Int8Array]: "getInt8",
  [ETypedArrayByteCode.Uint8Array]: "getUint8",
  [ETypedArrayByteCode.Uint8ClampedArray]: "getUint8",
  [ETypedArrayByteCode.Int16Array]: "getInt16",
  [ETypedArrayByteCode.Uint16Array]: "getUint16",
  [ETypedArrayByteCode.Int32Array]: "getInt32",
  [ETypedArrayByteCode.Uint32Array]: "getUint32",
  [ETypedArrayByteCode.Float32Array]: "getFloat32",
  [ETypedArrayByteCode.Float64Array]: "getFloat64",
  [ETypedArrayByteCode.BigInt64Array]: "getBigInt64",
  [ETypedArrayByteCode.BigUint64Array]: "getBigInt64"
};
const decodeTypedArray = (typeByte, stream, options) => {
  if ((typeByte & 240) !== ETypeByteCode.Typed_Array) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding typed array`);
  }
  const secondByte = stream.readByte();
  const isKeyValueEncoding = secondByte & 64;
  const itemsBytesCount = secondByte & 7;
  const lengthBytesCount = (secondByte & 56) >>> 3;
  const TypedArrayConstructor = typedArrayConstructorByType[typeByte];
  const tarr0 = new TypedArrayConstructor(0);
  const bytesPerElement = getBytesPerElement(tarr0);
  const len = isKeyValueEncoding ? bytesToInteger(stream.readBytes(lengthBytesCount)) : bytesToInteger(stream.readBytes(itemsBytesCount));
  const count = isKeyValueEncoding ? bytesToInteger(stream.readBytes(itemsBytesCount)) : len;
  const dataGetterName = dataViewGetter[typeByte];
  if (isKeyValueEncoding) {
    const tarr = new TypedArrayConstructor(Math.round(len / bytesPerElement));
    for (let i = 0; i < count; i += 1) {
      const key = decodeInteger(stream.readByte(), stream);
      const valueBytes = stream.readBytes(bytesPerElement);
      const view = new DataView(valueBytes.buffer);
      tarr[key] = view[dataGetterName](0, true);
    }
    if (typeByte === ETypedArrayByteCode.ArrayBuffer) {
      return tarr.buffer;
    }
    return tarr;
  } else {
    const tarr = new TypedArrayConstructor(len);
    const view = new DataView(stream.readBytes(bytesPerElement * len).buffer);
    for (let i = 0; i < len; i += 1) {
      tarr[i] = view[dataGetterName](i * bytesPerElement, true);
    }
    if (typeByte === ETypedArrayByteCode.ArrayBuffer) {
      return tarr.buffer;
    }
    return tarr;
  }
};
const decode = (typeByte, stream, options) => {
  const { refs, refByteSlice } = options.context;
  if (typeByte === null) {
    typeByte = stream.readByte();
  }
  const type = typeByte & 240;
  const isRefEnabled = !(type === ETypeByteCode.Refs);
  const refId = refs.length;
  let isRefAllowed = true;
  if (isRefEnabled) {
    refs.push(void 0);
    refByteSlice.push({
      index: stream.getReadBytesIndex() - 1,
      length: 0
    });
  }
  let result;
  let isResultReceived = false;
  switch (type) {
    case ETypeByteCode.Refs: {
      result = decodeRef(typeByte, stream, options);
      isResultReceived = true;
      isRefAllowed = false;
      break;
    }
    case ETypeByteCode.Constant: {
      result = decodeConstant(typeByte);
      isResultReceived = true;
      isRefAllowed = false;
      break;
    }
    case ETypeByteCode.String: {
      result = decodeString(typeByte, stream);
      isResultReceived = true;
      isRefAllowed = result.length > 2;
      break;
    }
    case ETypeByteCode.Integer: {
      result = decodeInteger(typeByte, stream);
      isResultReceived = true;
      isRefAllowed = result > 255 || result < -255;
      break;
    }
    case ETypeByteCode.Float: {
      result = decodeFloat(typeByte, stream);
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.BigInt: {
      result = decodeBigInt(typeByte, stream);
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.Array: {
      result = decodeArray(typeByte, stream, options, refs[refId] = []);
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.Typed_Array: {
      result = decodeTypedArray(typeByte, stream);
      isResultReceived = true;
      break;
    }
    case ETypeByteCode.Object: {
      result = decodeObject(typeByte, stream, options, refs[refId] = {});
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.Set: {
      result = decodeSet(typeByte, stream, options, refs[refId] = /* @__PURE__ */ new Set());
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.Map: {
      result = decodeMap(typeByte, stream, options, refs[refId] = /* @__PURE__ */ new Map());
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.Symbol: {
      result = decodeSymbol(typeByte, stream);
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.Date: {
      result = decodeDate(typeByte, stream);
      isResultReceived = true;
      isRefAllowed = Math.abs(result.getTime()) > 255;
      break;
    }
    case ETypeByteCode.Instruction: {
      switch (typeByte) {
        case ETypeByteCode.Instruction | 240: {
          result = decodePrimitiveObjectWrapper(typeByte, stream, options);
          isResultReceived = true;
          isRefAllowed = true;
          break;
        }
        default: {
          throw new Error(`Not supported instruction ${typeByte}`);
        }
      }
      break;
    }
  }
  if (isResultReceived === false) {
    throw new Error(`Unsupported decoding value: "${typeByte}"`);
  }
  if (isRefEnabled) {
    if (isRefAllowed) {
      refs[refId] = result;
      refByteSlice[refId].length = stream.getReadBytesIndex() - refByteSlice[refId].index;
    } else {
      refs.pop();
      refByteSlice.pop();
    }
  }
  return result;
};
const decodeIntegerStream = async (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.Integer) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding integer`);
  }
  const count = typeByte & 7;
  const isNegative = Boolean(typeByte & 8);
  if (count === 0) {
    return isNegative ? -0 : 0;
  }
  const bytesCount = await stream.readStreamBytes(count);
  const int = bytesToInteger(bytesCount);
  return isNegative ? -int : int;
};
const decodeArrayStream = async (typeByte, stream, options, initArr = []) => {
  if ((typeByte & 240) !== ETypeByteCode.Array) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding array`);
  }
  const isKeyValueEncoding = typeByte & 8;
  const bytesCount = typeByte & 7;
  if (bytesCount === 0) {
    return initArr;
  }
  const arrayLen = bytesToInteger(await stream.readStreamBytes(bytesCount));
  const itemsCoint = isKeyValueEncoding ? bytesToInteger(await stream.readStreamBytes(bytesCount)) : arrayLen;
  const arr = initArr;
  arr.length = arrayLen;
  if (isKeyValueEncoding) {
    for (let i = 0; i < itemsCoint; i += 1) {
      const key = await decodeIntegerStream(await stream.readStreamByte(), stream);
      const value = await decodeStream(await stream.readStreamByte(), stream, options);
      arr[key] = value;
    }
  } else {
    for (let i = 0; i < arrayLen; i += 1) {
      const byte = await stream.readStreamByte();
      if (byte === EConstantByteCode.Empty_Value) {
        continue;
      }
      const value = await decodeStream(byte, stream, options);
      arr[i] = value;
    }
  }
  return arr;
};
const decodeBigIntStream = async (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.BigInt) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding bigint`);
  }
  const count = typeByte & 7;
  const isNegative = Boolean(typeByte & 8);
  if (count === 0) {
    return isNegative ? -0n : 0n;
  }
  const bytesCount = await stream.readStreamBytes(count);
  const encodeCount = bytesToInteger(bytesCount);
  const encodeBytes = await stream.readStreamBytes(encodeCount);
  const bint = bytesToBigInt(encodeBytes);
  return isNegative ? -bint : bint;
};
const decodeConstantStream = async (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.Constant) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding contant`);
  }
  if (!constantMap.has(typeByte)) {
    throw new Error("Not supported contsant for decoding");
  }
  return constantMap.get(typeByte);
};
const decodeDateStream = async (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.Date) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding Date`);
  }
  const count = typeByte & 7;
  const isNegative = Boolean(typeByte & 8);
  if (count === 0) {
    return /* @__PURE__ */ new Date(0);
  }
  const bytesCount = await stream.readStreamBytes(count);
  const int = bytesToInteger(bytesCount);
  return new Date(isNegative ? -int : int);
};
const decodeFloatStream = async (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.Float) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding float`);
  }
  const count = (typeByte & 7) + 1;
  let map = 0;
  if (typeByte & 8) {
    map = await stream.readStreamByte();
  } else {
    for (let i = 0; i < count; i += 1) {
      map = map | 1 << i;
    }
  }
  const bytesCount = await stream.readStreamBytes(count);
  const floatBytes = new Uint8Array(8);
  let byteIndex = 0;
  for (let i = 0; i < 8; i += 1) {
    if (map & 128 >>> i) {
      floatBytes[i] = bytesCount[byteIndex];
      byteIndex += 1;
    }
  }
  const float = new Float64Array(floatBytes.buffer);
  return float[0];
};
const decodeMapStream = async (typeByte, stream, options, initMap = /* @__PURE__ */ new Map()) => {
  if ((typeByte & 240) !== ETypeByteCode.Map) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding map`);
  }
  const bytesCount = typeByte & 7;
  if (bytesCount === 0) {
    return initMap;
  }
  const count = bytesToInteger(await stream.readStreamBytes(bytesCount));
  const map = initMap;
  for (let i = 0; i < count; i += 1) {
    const key = await decodeStream(await stream.readStreamByte(), stream, options);
    const value = await decodeStream(await stream.readStreamByte(), stream, options);
    map.set(key, value);
  }
  return map;
};
const decodeObjectStream = async (typeByte, stream, options, initObj = {}) => {
  if ((typeByte & 240) !== ETypeByteCode.Object) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding object`);
  }
  const bytesCount = typeByte & 7;
  if (bytesCount === 0) {
    return initObj;
  }
  const count = bytesToInteger(await stream.readStreamBytes(bytesCount));
  const isClassInstance2 = Boolean(typeByte & 8);
  const constructorName = isClassInstance2 ? await decodeStream(null, stream, options) : null;
  const obj = initObj;
  for (let i = 0; i < count; i += 1) {
    const key = await decodeStream(null, stream, options);
    const value = await decodeStream(null, stream, options);
    obj[key] = value;
  }
  if (isClassInstance2) {
    const constructorNameKey = options.objects.classInstanceConstructorNameKey;
    if (constructorNameKey !== null) {
      Object.defineProperty(obj, constructorNameKey, {
        value: constructorName,
        configurable: true,
        enumerable: false,
        writable: false
      });
    }
  }
  return obj;
};
const decodePrimitiveObjectWrapperStream = async (typeByte, stream, options) => {
  if (typeByte !== (ETypeByteCode.Instruction | 0)) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding primitive object wrapper`);
  }
  const value = await decodeStream(null, stream, options);
  switch (typeof value) {
    case "string":
      return new String(value);
    case "boolean":
      return new Boolean(value);
    case "number":
      return new Number(value);
  }
  throw new Error(`Can not create Primitive Object Wrapper for value ${value}, type ${typeof value}`);
};
const decodeRefStream = async (typeByte, stream, options) => {
  if ((typeByte & 240) !== ETypeByteCode.Refs) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding ref`);
  }
  const isCopy = Boolean(typeByte & 8);
  const count = typeByte & 7;
  const id = count === 0 ? 0 : bytesToInteger(await stream.readStreamBytes(count));
  const refs = options.context.refs;
  if (!(id in refs)) {
    throw new Error(`Incorrect ref ID ${id}, max id is ${refs.length}`);
  }
  if (isCopy) {
    const refSlice = options.context.refByteSlice[id];
    const slice = options.context.readBytes.slice(refSlice.index, refSlice.index + refSlice.length);
    const decOptions = createDecodeOptions();
    decOptions.context = options.context;
    const st = new ByteStream(slice);
    st.completeStream();
    const copy = decode(null, st, decOptions);
    return copy;
  }
  return refs[id];
};
const decodeSetStream = async (typeByte, stream, options, initSet = /* @__PURE__ */ new Set()) => {
  if ((typeByte & 240) !== ETypeByteCode.Set) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding set`);
  }
  const bytesCount = typeByte & 7;
  if (bytesCount === 0) {
    return initSet;
  }
  const count = bytesToInteger(await stream.readStreamBytes(bytesCount));
  const set = initSet;
  for (let i = 0; i < count; i += 1) {
    const value = await decodeStream(await stream.readStreamByte(), stream, options);
    set.add(value);
  }
  return set;
};
const decodeStringStream = async (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.String) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding string`);
  }
  const count = typeByte & 7;
  if (count === 0) {
    return "";
  }
  const bytesCount = await stream.readStreamBytes(count);
  const bytesLength = bytesToInteger(bytesCount);
  const decoder = new TextDecoder("utf-8");
  const bytes = await stream.readStreamBytes(bytesLength);
  return decoder.decode(bytes);
};
const decodeSymbolStream = async (typeByte, stream) => {
  if ((typeByte & 240) !== ETypeByteCode.Symbol) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding symbol`);
  }
  const count = typeByte & 7;
  if (count === 0) {
    return Symbol.for("");
  }
  const bytesCount = await stream.readStreamBytes(count);
  const strLen = bytesToInteger(bytesCount);
  const bytes = await stream.readStreamBytes(strLen);
  return Symbol.for(bytesToUtf16(bytes));
};
const decodeTypedArrayStream = async (typeByte, stream, options) => {
  if ((typeByte & 240) !== ETypeByteCode.Typed_Array) {
    throw new Error(`Provaded incorrect type ${typeByte} for decoding typed array`);
  }
  const secondByte = await stream.readStreamByte();
  const isKeyValueEncoding = secondByte & 64;
  const itemsBytesCount = secondByte & 7;
  const lengthBytesCount = (secondByte & 56) >>> 3;
  const TypedArrayConstructor = typedArrayConstructorByType[typeByte];
  const tarr0 = new TypedArrayConstructor(0);
  const bytesPerElement = getBytesPerElement(tarr0);
  const len = isKeyValueEncoding ? bytesToInteger(await stream.readStreamBytes(lengthBytesCount)) : bytesToInteger(await stream.readStreamBytes(itemsBytesCount));
  const count = isKeyValueEncoding ? bytesToInteger(await stream.readStreamBytes(itemsBytesCount)) : len;
  const dataGetterName = dataViewGetter[typeByte];
  if (isKeyValueEncoding) {
    const tarr = new TypedArrayConstructor(Math.round(len / bytesPerElement));
    for (let i = 0; i < count; i += 1) {
      const key = await decodeIntegerStream(await stream.readStreamByte(), stream);
      const valueBytes = await stream.readStreamBytes(bytesPerElement);
      const view = new DataView(valueBytes.buffer);
      tarr[key] = view[dataGetterName](0, true);
    }
    if (typeByte === ETypedArrayByteCode.ArrayBuffer) {
      return tarr.buffer;
    }
    return tarr;
  } else {
    const tarr = new TypedArrayConstructor(len);
    const view = new DataView((await stream.readStreamBytes(bytesPerElement * len)).buffer);
    for (let i = 0; i < len; i += 1) {
      tarr[i] = view[dataGetterName](i * bytesPerElement, true);
    }
    if (typeByte === ETypedArrayByteCode.ArrayBuffer) {
      return tarr.buffer;
    }
    return tarr;
  }
};
const decodeStream = async (typeByte, stream, options) => {
  const { refs, refByteSlice } = options.context;
  if (typeByte === null) {
    typeByte = await stream.readStreamByte();
  }
  const type = typeByte & 240;
  const isRefEnabled = !(type === ETypeByteCode.Refs);
  const refId = refs.length;
  let isRefAllowed = true;
  if (isRefEnabled) {
    refs.push(void 0);
    refByteSlice.push({
      index: stream.getReadBytesIndex() - 1,
      length: 0
    });
  }
  let result;
  let isResultReceived = false;
  switch (type) {
    case ETypeByteCode.Refs: {
      result = await decodeRefStream(typeByte, stream, options);
      isResultReceived = true;
      isRefAllowed = false;
      break;
    }
    case ETypeByteCode.Constant: {
      result = await decodeConstantStream(typeByte);
      isResultReceived = true;
      isRefAllowed = false;
      break;
    }
    case ETypeByteCode.String: {
      result = await decodeStringStream(typeByte, stream);
      isResultReceived = true;
      isRefAllowed = result.length > 2;
      break;
    }
    case ETypeByteCode.Integer: {
      result = await decodeIntegerStream(typeByte, stream);
      isResultReceived = true;
      isRefAllowed = result > 255 || result < -255;
      break;
    }
    case ETypeByteCode.Float: {
      result = await decodeFloatStream(typeByte, stream);
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.BigInt: {
      result = await decodeBigIntStream(typeByte, stream);
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.Array: {
      result = await decodeArrayStream(typeByte, stream, options, refs[refId] = []);
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.Typed_Array: {
      result = await decodeTypedArrayStream(typeByte, stream);
      isResultReceived = true;
      break;
    }
    case ETypeByteCode.Object: {
      result = await decodeObjectStream(typeByte, stream, options, refs[refId] = {});
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.Set: {
      result = await decodeSetStream(typeByte, stream, options, refs[refId] = /* @__PURE__ */ new Set());
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.Map: {
      result = await decodeMapStream(typeByte, stream, options, refs[refId] = /* @__PURE__ */ new Map());
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.Symbol: {
      result = await decodeSymbolStream(typeByte, stream);
      isResultReceived = true;
      isRefAllowed = true;
      break;
    }
    case ETypeByteCode.Date: {
      result = await decodeDateStream(typeByte, stream);
      isResultReceived = true;
      isRefAllowed = Math.abs(result.getTime()) > 255;
      break;
    }
    case ETypeByteCode.Instruction: {
      switch (typeByte) {
        case ETypeByteCode.Instruction | 240: {
          result = await decodePrimitiveObjectWrapperStream(typeByte, stream, options);
          isResultReceived = true;
          isRefAllowed = true;
          break;
        }
        default: {
          throw new Error(`Not supported instruction ${typeByte}`);
        }
      }
      break;
    }
  }
  if (isResultReceived === false) {
    throw new Error(`Unsupported decoding value: "${typeByte}"`);
  }
  if (isRefEnabled) {
    if (isRefAllowed) {
      refs[refId] = result;
      refByteSlice[refId].length = stream.getReadBytesIndex() - refByteSlice[refId].index;
    } else {
      refs.pop();
      refByteSlice.pop();
    }
  }
  return result;
};
const isClassInstance = (value) => {
  var _a;
  return typeof value === "object" && value && !Array.isArray(value) && ((_a = value == null ? void 0 : value.constructor) == null ? void 0 : _a.name) && value.constructor.name !== "Object";
};
const isFloat = (value) => {
  return typeof value === "number" && !Number.isInteger(value) && Number.isFinite(value) && value % 1 !== 0;
};
const isInteger = (value) => {
  return typeof value === "number" && Number.isInteger(value);
};
const isMap = (value) => {
  return value instanceof Map;
};
const isObject = (value) => {
  var _a;
  return typeof value === "object" && value && !Array.isArray(value) && ((_a = value == null ? void 0 : value.constructor) == null ? void 0 : _a.name) === "Object";
};
const isPrimitiveObjectWrapper = (value) => {
  return value instanceof Number || value instanceof String || value instanceof Boolean;
};
const isSet = (value) => {
  return value instanceof Set;
};
const isTypedArray = (value) => {
  return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer || typeof Int8Array !== "undefined" && value instanceof Int8Array || typeof Uint8Array !== "undefined" && value instanceof Uint8Array || typeof Uint8ClampedArray !== "undefined" && value instanceof Uint8ClampedArray || typeof Int16Array !== "undefined" && value instanceof Int16Array || typeof Uint16Array !== "undefined" && value instanceof Uint16Array || typeof Int32Array !== "undefined" && value instanceof Int32Array || typeof Uint32Array !== "undefined" && value instanceof Uint32Array || typeof Float32Array !== "undefined" && value instanceof Float32Array || typeof Float64Array !== "undefined" && value instanceof Float64Array || typeof BigInt64Array !== "undefined" && value instanceof BigInt64Array || typeof BigUint64Array !== "undefined" && value instanceof BigUint64Array;
};
const MAX_7_BYTES_INTEGER = 9007199254740991;
const MAX_DATE_INTEGER = 864e13;
const integerToBytes = (int, byteSize = 0, bigEndianOrder = false) => {
  if (int < 0) {
    throw new Error("integerToBytes does not support negative integers");
  }
  const bytes = [];
  let num = Math.abs(int);
  for (let i = 1; byteSize ? i <= byteSize : num; i += 1) {
    const n = num % 256;
    bytes.push(n);
    num = num - n;
    num = Math.floor(num / 256);
  }
  return bigEndianOrder ? bytes.reverse() : bytes;
};
const getFilledItemsCount$1 = (arr) => {
  let count = 0;
  arr.forEach(() => {
    count += 1;
  });
  return count;
};
const toChar = (...codes) => {
  return String.fromCharCode(...codes);
};
const EMPTY_VALUE_BYTE_CHR = toChar(EConstantByteCode.Empty_Value);
const encodeEmptyValue = () => {
  return EMPTY_VALUE_BYTE_CHR;
};
const POS_ZERO_BYTE_CHAR = toChar(ETypeByteCode.Integer & 240);
const NEG_ZERO_BYTE_CHAR = toChar(ETypeByteCode.Integer & 240 | 8);
const encodeInteger = (value) => {
  if (!isInteger(value)) {
    throw new Error(`Expecting "integer" type, received "${value}" (${typeof value})`);
  }
  if (Math.abs(value) > MAX_7_BYTES_INTEGER) {
    throw new Error(`Can not encode unsafe integer`);
  }
  if (value === 0) {
    return Object.is(value, 0) ? POS_ZERO_BYTE_CHAR : NEG_ZERO_BYTE_CHAR;
  }
  const msg = [];
  const val = Math.abs(value);
  const isPositive = value > 0;
  const bytes = integerToBytes(val);
  msg.push(toChar(ETypeByteCode.Integer | (7 & bytes.length | (isPositive ? 0 : 8))));
  msg.push(toChar(...bytes));
  return msg.join("");
};
const EMPTY_ARRAY_BYTE_CHAR = toChar(ETypeByteCode.Array & 240);
const SPARSE_RATE = 0.5;
const encodeArray = (arr, options) => {
  if (!Array.isArray(arr)) {
    throw new Error(`Expecting "array" type, received "${arr}" (${typeof arr})`);
  }
  if (arr.length === 0) {
    return EMPTY_ARRAY_BYTE_CHAR;
  }
  if (arr.length > MAX_7_BYTES_INTEGER) {
    throw new Error(`Provided array has too large length, limit ${MAX_7_BYTES_INTEGER}, received ${arr.length}`);
  }
  const filledCount = getFilledItemsCount$1(arr);
  const isSparseEncoding = filledCount / arr.length < SPARSE_RATE;
  const bytes = integerToBytes(arr.length);
  const msg = [];
  msg.push(toChar(
    ETypeByteCode.Array | (7 & bytes.length | (isSparseEncoding ? 8 : 0))
  ));
  msg.push(toChar(...bytes));
  if (isSparseEncoding) {
    const countBytes = integerToBytes(filledCount, bytes.length);
    msg.push(toChar(...countBytes));
    arr.forEach((item, index) => {
      msg.push(encodeInteger(index));
      msg.push(encode(item, options));
    });
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      const isEmptyValue = !(String(i) in arr);
      msg.push(isEmptyValue ? encodeEmptyValue() : encode(arr[i], options));
    }
  }
  return msg.join("");
};
const bigIntToBytes = (bint, byteSize = 0, bigEndianOrder = false) => {
  if (bint < 0 && !byteSize) {
    throw new Error(`byteSize param should be provided for negative bigInt ${bint}`);
  }
  const bytes = [];
  let num = bint < 0 ? -(bint + 1n) : bint;
  for (let i = 1; byteSize ? i <= byteSize : num; i += 1) {
    bytes.push(num & 0xFFn);
    num = num >> 8n;
  }
  if (bint < 0) {
    for (let i = 0; i < bytes.length; i += 1) {
      bytes[i] = 255n - bytes[i];
    }
  }
  return bigEndianOrder ? bytes.reverse() : bytes;
};
const isBigInt = (value) => {
  return typeof value === "bigint";
};
const ZERO_BYTE_CHAR$1 = toChar(ETypeByteCode.BigInt & 240);
const encodeBigInt = (value) => {
  if (!isBigInt(value)) {
    throw new Error(`Expecting "bigint" type, received "${value}" (${typeof value})`);
  }
  if (value === 0n) {
    return ZERO_BYTE_CHAR$1;
  }
  const val = value < 0n ? -value : value;
  const isPositive = value > 0;
  const msg = [];
  const bytes = bigIntToBytes(val);
  const lenBytes = integerToBytes(bytes.length);
  msg.push(toChar(
    ETypeByteCode.BigInt | 7 & lenBytes.length | (isPositive ? 0 : 8)
  ));
  msg.push(toChar(...lenBytes));
  msg.push(toChar(...bytes.map((i) => Number(i))));
  return msg.join("");
};
const TRUE_BYTE_CHR = toChar(EConstantByteCode.TRUE);
const FALSE_BYTE_CHR = toChar(EConstantByteCode.FALSE);
const encodeBoolean = (value) => {
  if (typeof value !== "boolean") {
    throw new Error(`Expecting "boolean" type, received "${value}" (${typeof value})`);
  }
  return value ? TRUE_BYTE_CHR : FALSE_BYTE_CHR;
};
const encodeClassInstance = (obj, options) => {
  var _a;
  if (!isClassInstance(obj)) {
    throw new Error(`Expecting "object" type, received "${obj}" (${typeof obj})`);
  }
  const props = typeof (obj == null ? void 0 : obj.toJSBT) === "function" ? obj.toJSBT() : typeof (obj == null ? void 0 : obj.toJSON) === "function" ? obj.toJSON() : obj.valueOf();
  const msgBody = [];
  let count = 0;
  const constructorName = ((_a = obj == null ? void 0 : obj.constructor) == null ? void 0 : _a.name) || "";
  msgBody.push(encode(constructorName, options));
  for (const key in props) {
    if (!props.hasOwnProperty(key)) {
      continue;
    }
    msgBody.push(encode(key, options));
    msgBody.push(encode(props[key], options));
    count += 1;
  }
  for (const sym of Object.getOwnPropertySymbols(props)) {
    msgBody.push(encode(sym, options));
    msgBody.push(encode(props[sym], options));
    count += 1;
  }
  if (count > MAX_7_BYTES_INTEGER) {
    throw new Error(`Provided object has too many props, limit ${MAX_7_BYTES_INTEGER}, received ${count}`);
  }
  const msgHeaders = [];
  const countBytes = integerToBytes(count);
  msgHeaders.push(toChar(
    ETypeByteCode.Object | 8 | 7 & countBytes.length
  ));
  msgHeaders.push(toChar(...countBytes));
  return msgHeaders.join("") + msgBody.join("");
};
const ZERO_BYTE_CHAR = toChar(ETypeByteCode.Date & 240);
const encodeDate = (value, options) => {
  if (!(value instanceof Date)) {
    throw new Error(`Expecting "Date" type, received "${value}" (${typeof value})`);
  }
  const ms = value.getTime();
  if (Math.abs(ms) > MAX_DATE_INTEGER) {
    throw new Error(`Can not encode invalid date`);
  }
  if (ms === 0) {
    return ZERO_BYTE_CHAR;
  }
  const msg = [];
  const val = Math.abs(ms);
  const isPositive = ms > 0;
  const bytes = integerToBytes(val);
  msg.push(toChar(ETypeByteCode.Date | (7 & bytes.length | (isPositive ? 0 : 8))));
  msg.push(toChar(...bytes));
  return msg.join("");
};
const doubleToBytes = (value, bigEndianOrder = false) => {
  const buffer = new ArrayBuffer(8);
  const longNum = new Float64Array(buffer);
  longNum[0] = value;
  const bytes = Array.from(new Uint8Array(buffer));
  return bigEndianOrder ? bytes.reverse() : bytes;
};
const encodeFloat = (value, mapping = true) => {
  if (!isFloat(value)) {
    throw new Error(`Expecting "float" type, received "${value}" (${typeof value})`);
  }
  const bytes = doubleToBytes(value);
  const msg = [];
  const mappedBytes = [];
  let byteMap = 0;
  if (mapping) {
    for (let i = 0; i < 8; i += 1) {
      const byte = bytes[i];
      if (byte) {
        byteMap = byteMap + 2 ** (7 - i);
        mappedBytes.push(byte);
      }
    }
  }
  while (!bytes[0] && bytes.length) {
    bytes.shift();
  }
  const isMapping = mapping && byteMap && mappedBytes.length < bytes.length - 1;
  msg.push(
    toChar(
      ETypeByteCode.Float | 7 & (isMapping ? mappedBytes.length : bytes.length) - 1 | (isMapping ? 8 : 0)
    )
  );
  if (isMapping) {
    msg.push(toChar(byteMap));
  }
  msg.push(toChar(...isMapping ? mappedBytes : bytes));
  return msg.join("");
};
const POS_INFINITY_CHR = toChar(EConstantByteCode.Pos_Infinity);
const NEG_INFINITY_CHR = toChar(EConstantByteCode.Neg_Infinity);
const encodeInfinity = (value) => {
  if (value !== Infinity && value !== -Infinity) {
    throw new Error(`Expecting "Infinity", received "${value}" (${typeof value})`);
  }
  return value > 0 ? POS_INFINITY_CHR : NEG_INFINITY_CHR;
};
const EMPTY_MAP_BYTE_CHAR = toChar(ETypeByteCode.Map & 240);
const encodeMap = (map, options) => {
  if (!isMap(map)) {
    throw new Error(`Expecting "map" type, received "${map}" (${typeof map})`);
  }
  if (map.size === 0) {
    return EMPTY_MAP_BYTE_CHAR;
  }
  if (map.size > MAX_7_BYTES_INTEGER) {
    throw new Error(`Provided map has too many items, limit ${MAX_7_BYTES_INTEGER}, received ${map.size}`);
  }
  const sizeBytes = integerToBytes(map.size);
  const msg = [];
  msg.push(toChar(
    ETypeByteCode.Map | 7 & sizeBytes.length
  ));
  msg.push(toChar(...sizeBytes));
  map.forEach((value, key) => {
    msg.push(encode(key, options));
    msg.push(encode(value, options));
  });
  return msg.join("");
};
const NAN_BYTE = toChar(EConstantByteCode.NaN);
const encodeNaN = () => {
  return NAN_BYTE;
};
const NULL_BYTE = toChar(EConstantByteCode.Null);
const encodeNull = () => {
  return NULL_BYTE;
};
const EMPTY_OBJECT_BYTE_CHAR = toChar(ETypeByteCode.Object & 240);
const encodeObject = (obj, options) => {
  if (!isObject(obj)) {
    throw new Error(`Expecting "object" type, received "${obj}" (${typeof obj})`);
  }
  const msgBody = [];
  let count = 0;
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    msgBody.push(encode(key, options));
    msgBody.push(encode(obj[key], options));
    count += 1;
  }
  for (const sym of Object.getOwnPropertySymbols(obj)) {
    msgBody.push(encode(sym, options));
    msgBody.push(encode(obj[sym], options));
    count += 1;
  }
  if (count === 0) {
    return EMPTY_OBJECT_BYTE_CHAR;
  }
  if (count > MAX_7_BYTES_INTEGER) {
    throw new Error(`Provided object has too many props, limit ${MAX_7_BYTES_INTEGER}, received ${count}`);
  }
  const msgHeaders = [];
  const countBytes = integerToBytes(count);
  msgHeaders.push(toChar(
    ETypeByteCode.Object | 7 & countBytes.length
  ));
  msgHeaders.push(toChar(...countBytes));
  return msgHeaders.join("") + msgBody.join("");
};
const encodePrimitiveObjectWrapper = (obj, options) => {
  if (!isPrimitiveObjectWrapper(obj)) {
    throw new Error(`Expecting Promitive Object Wrapper, received "${obj}" (${typeof obj})`);
  }
  const msg = [];
  msg.push(toChar(ETypeByteCode.Instruction & 240));
  msg.push(encode(obj.valueOf(), options));
  return msg.join("");
};
const encodeRef = (mode, refId, options) => {
  if (!isInteger(refId)) {
    throw new Error(`Expecting "integer" type, received "${refId}" (${typeof refId})`);
  }
  if (Math.abs(refId) > MAX_7_BYTES_INTEGER) {
    throw new Error(`Can not encode unsafe integer`);
  }
  const msg = [];
  const bytes = integerToBytes(refId);
  msg.push(toChar(
    ETypeByteCode.Refs | (mode === "copy" ? 8 : 0) | 7 & bytes.length
  ));
  msg.push(toChar(...bytes));
  return msg.join("");
};
const EMPTY_SET_BYTE_CHAR = toChar(ETypeByteCode.Set & 240);
const encodeSet = (set, options) => {
  if (!isSet(set)) {
    throw new Error(`Expecting "set" type, received "${set}" (${typeof set})`);
  }
  if (set.size === 0) {
    return EMPTY_SET_BYTE_CHAR;
  }
  if (set.size > MAX_7_BYTES_INTEGER) {
    throw new Error(`Provided set has too many items, limit ${MAX_7_BYTES_INTEGER}, received ${set.size}`);
  }
  const sizeBytes = integerToBytes(set.size);
  const msg = [];
  msg.push(toChar(
    ETypeByteCode.Set | 7 & sizeBytes.length
  ));
  msg.push(toChar(...sizeBytes));
  set.forEach((value) => {
    msg.push(encode(value, options));
  });
  return msg.join("");
};
const EMPTY_STRING_BYTE_CHAR = toChar(ETypeByteCode.String & 240);
const encodeString = (value) => {
  if (typeof value !== "string") {
    throw new Error(`Expecting "string" type, received "${value}" (${typeof value})`);
  }
  if (value === "") {
    return EMPTY_STRING_BYTE_CHAR;
  }
  const msg = [];
  const encoder = new TextEncoder();
  const encodeBytes = encoder.encode(value);
  if (encodeBytes.byteLength > MAX_7_BYTES_INTEGER) {
    throw new Error(`Too large string. ${encodeBytes.byteLength} bytes, limit ${MAX_7_BYTES_INTEGER}`);
  }
  const bytes = integerToBytes(encodeBytes.byteLength);
  msg.push(toChar(ETypeByteCode.String | 7 & bytes.length));
  msg.push(toChar(...bytes));
  msg.push(toChar(...encodeBytes));
  return msg.join("");
};
const getBytesSizeForString = (str) => {
  let size = 0;
  for (let i = 0; i < str.length; i += 1) {
    const chr = str[i];
    for (let codeAt = 0; codeAt < 2; codeAt += 1) {
      const code = chr.charCodeAt(codeAt);
      if (isNaN(code)) {
        continue;
      }
      if (code < 256) {
        size += 1;
      } else {
        size += 2;
      }
    }
  }
  return size;
};
const encodeSymbol = (value) => {
  if (typeof value !== "symbol") {
    throw new Error(`Expecting "symbol" type, received "${String(value)}" (${typeof value})`);
  }
  const msg = [];
  const key = Symbol.keyFor(value);
  if (key === void 0) {
    throw new Error(`Not found key for symbol ${String(value)}`);
  }
  const bytesCount = getBytesSizeForString(key);
  if (bytesCount > MAX_7_BYTES_INTEGER) {
    throw new Error(`Too large symbol key. ${bytesCount} bytes, limit ${MAX_7_BYTES_INTEGER}`);
  }
  const bytes = integerToBytes(bytesCount);
  msg.push(toChar(ETypeByteCode.Symbol | 7 & bytes.length));
  if (bytes.length) {
    msg.push(toChar(...bytes));
  }
  if (key) {
    msg.push(key);
  }
  return msg.join("");
};
const getFilledItemsCount = (arr) => {
  let count = 0;
  const tarr = arr instanceof ArrayBuffer ? new Uint8Array(arr) : arr;
  tarr.forEach((item) => {
    if (item !== 0) {
      count += 1;
    }
  });
  return count;
};
const calculateByteCountVariants = (tarr) => {
  const arr = tarr instanceof ArrayBuffer ? new Uint8Array(tarr) : tarr;
  const bytesPerElement = getBytesPerElement(arr);
  const resutls = {
    envValueSize: arr.byteLength,
    encKeyValueSize: 0
  };
  for (let i = 0; i < arr.length; i += 1) {
    const num = arr[i];
    if (num) {
      const bytes = integerToBytes(i);
      resutls.encKeyValueSize += /* type */
      1 + /* int */
      +(i > 0 ? bytes.length : 0) + bytesPerElement;
    }
  }
  return resutls;
};
const TYPED_ARRAY_CHAR_BY_NAME = {
  ArrayBuffer: ETypedArrayByteCode.ArrayBuffer,
  Int8Array: ETypedArrayByteCode.Int8Array,
  Uint8Array: ETypedArrayByteCode.Uint8Array,
  Uint8ClampedArray: ETypedArrayByteCode.Uint8ClampedArray,
  Int16Array: ETypedArrayByteCode.Int16Array,
  Uint16Array: ETypedArrayByteCode.Uint16Array,
  Int32Array: ETypedArrayByteCode.Int32Array,
  Uint32Array: ETypedArrayByteCode.Uint32Array,
  Float32Array: ETypedArrayByteCode.Float32Array,
  Float64Array: ETypedArrayByteCode.Float64Array,
  BigInt64Array: ETypedArrayByteCode.BigInt64Array,
  BigUint64Array: ETypedArrayByteCode.BigUint64Array
};
const encodeTypedArray = (tarr, options) => {
  if (!isTypedArray(tarr)) {
    throw new Error(`Expecting "typedArray" type, received "${tarr}" (${typeof tarr})`);
  }
  const name = tarr.constructor.name;
  const typeCode = TYPED_ARRAY_CHAR_BY_NAME[name];
  if (tarr.byteLength === 0) {
    return toChar(typeCode, 0);
  }
  const arr = tarr instanceof ArrayBuffer ? new Uint8Array(tarr) : tarr;
  const bytesPerElement = getBytesPerElement(tarr);
  const definedItemsCount = getFilledItemsCount(tarr);
  if (tarr.byteLength > MAX_7_BYTES_INTEGER) {
    throw new Error(
      `Provided typed array has too large length, limit ${MAX_7_BYTES_INTEGER}, received ${tarr.byteLength}`
    );
  }
  const msg = [];
  const calculation = calculateByteCountVariants(tarr);
  const isValueEncoding = calculation.envValueSize <= calculation.encKeyValueSize;
  msg.push(toChar(typeCode));
  const byteLenBytes = integerToBytes(tarr.byteLength);
  const lenBytes = integerToBytes(arr.length);
  const defCountBytes = integerToBytes(definedItemsCount);
  msg.push(
    toChar(
      0 | (isValueEncoding ? 0 : 64) | (isValueEncoding ? 0 : (7 & byteLenBytes.length) << 3) | (isValueEncoding ? 7 & lenBytes.length : 7 & defCountBytes.length)
    )
  );
  if (isValueEncoding) {
    msg.push(toChar(...lenBytes));
    const uint8arr = new Uint8Array(tarr instanceof ArrayBuffer ? tarr : tarr.buffer);
    msg.push(toChar(...uint8arr));
  } else {
    msg.push(toChar(...byteLenBytes));
    msg.push(toChar(...defCountBytes));
    for (let i = 0; i < arr.length; i += 1) {
      const num = arr[i];
      if (num) {
        const uint8arr = new Uint8Array(arr.buffer, i * bytesPerElement, bytesPerElement);
        msg.push(encodeInteger(i));
        msg.push(toChar(...uint8arr));
      }
    }
  }
  return msg.join("");
};
const UNDEFINED_BYTE = toChar(EConstantByteCode.Undefined);
const encodeUndefined = () => {
  return UNDEFINED_BYTE;
};
const encode = (value, options) => {
  var _a;
  const context = options.context;
  const isRefEnabled = ((_a = options.refs) == null ? void 0 : _a.enabled) || false;
  let val = value;
  if (isPrimitiveObjectWrapper(value) && options.primitives.objectWrappersAsPrimitiveValue) {
    val = value.valueOf();
  }
  let refData = null;
  if (isRefEnabled) {
    refData = context.refMap.get(val) || null;
    if (refData) {
      if (!refData.encodedRefLink) {
        refData.encodedRefLink = encodeRef("link", refData.refId);
      }
      return refData.encodedRefLink;
    } else {
      const refId = context.refMap.size;
      refData = {
        refId,
        encodedRefLink: null,
        encodedRefCopy: null
      };
      context.refMap.set(val, refData);
    }
  }
  let result = null;
  let isRefAllowed = false;
  const type = typeof val;
  switch (type) {
    case "undefined": {
      isRefAllowed = false;
      result = encodeUndefined();
      break;
    }
    case "boolean": {
      isRefAllowed = false;
      result = encodeBoolean(val);
      break;
    }
    case "number": {
      if (isInteger(val)) {
        isRefAllowed = val > 255 || val < -255;
        result = encodeInteger(val);
        break;
      }
      if (isFloat(val)) {
        isRefAllowed = true;
        result = encodeFloat(val);
        break;
      }
      if (Number.isNaN(val)) {
        isRefAllowed = false;
        result = encodeNaN();
        break;
      }
      if (val === Infinity || val === -Infinity) {
        isRefAllowed = false;
        result = encodeInfinity(val);
        break;
      }
      break;
    }
    case "string": {
      isRefAllowed = val.length > 2;
      result = encodeString(val);
      break;
    }
    case "object": {
      if (val === null) {
        isRefAllowed = false;
        result = encodeNull();
        break;
      }
      if (Array.isArray(val)) {
        isRefAllowed = true;
        result = encodeArray(val, options);
        break;
      }
      if (isObject(val)) {
        isRefAllowed = true;
        result = encodeObject(val, options);
        break;
      }
      if (isSet(val)) {
        isRefAllowed = true;
        result = encodeSet(val, options);
        break;
      }
      if (isMap(val)) {
        isRefAllowed = true;
        result = encodeMap(val, options);
        break;
      }
      if (isTypedArray(val)) {
        isRefAllowed = true;
        result = encodeTypedArray(val);
        break;
      }
      if (val instanceof Date) {
        isRefAllowed = Math.abs(val.getTime()) > 255;
        result = encodeDate(val);
        break;
      }
      if (isPrimitiveObjectWrapper(val)) {
        isRefAllowed = true;
        result = encodePrimitiveObjectWrapper(val, options);
        break;
      }
      if (isClassInstance(val)) {
        isRefAllowed = true;
        result = encodeClassInstance(val, options);
        break;
      }
      break;
    }
    case "bigint": {
      isRefAllowed = true;
      result = encodeBigInt(val);
      break;
    }
    case "symbol": {
      isRefAllowed = true;
      result = encodeSymbol(val);
      break;
    }
  }
  if (result === null) {
    throw new Error(`Unsupported encoding value: "${val}", type: "${type}"`);
  }
  if (refData) {
    if (isRefAllowed) {
      const refCopy = context.refCopy.get(result);
      if (refCopy) {
        if (!refData.encodedRefCopy) {
          refData.encodedRefCopy = encodeRef("copy", refCopy.refId);
        }
        return refData.encodedRefCopy;
      } else {
        context.refCopy.set(result, refData);
      }
    } else {
      context.refMap.delete(val);
    }
  }
  return result;
};
const createEncodeOptions = () => {
  return {
    refs: {
      enabled: false
    },
    context: {
      refMap: /* @__PURE__ */ new Map(),
      refCopy: /* @__PURE__ */ new Map()
    },
    primitives: {
      objectWrappersAsPrimitiveValue: false
    }
  };
};
class JSBT {
  static encode(value) {
    const options = createEncodeOptions();
    options.refs = {
      enabled: true
    };
    const result = encode(value, options);
    return result;
  }
  static decode(value) {
    const stream = new ByteStream(value);
    stream.completeStream();
    const options = createDecodeOptions();
    options.context.readBytes = stream.getReadBytes();
    const result = decode(null, stream, options);
    return result;
  }
  static async decodeStream(stream) {
    const options = createDecodeOptions();
    options.context.readBytes = stream.getReadBytes();
    const result = decodeStream(null, stream, options);
    return result;
  }
}
function monthName(monthIdx, style = "long") {
  const date = new Date(2023, monthIdx, 1);
  return date.toLocaleDateString("en-US", { month: style });
}
function weekdayName(dayIndex, style = "long") {
  const date = new Date(2023, 0, 1 + dayIndex);
  return date.toLocaleDateString("en-US", { weekday: style });
}
const YearOptions = [
  { label: "2024", value: 2024 },
  { label: "2025", value: 2025 },
  { label: "2026", value: 2026 },
  { label: "2027", value: 2027 },
  { label: "2028", value: 2028 },
  { label: "2029", value: 2029 },
  { label: "2030", value: 2030 }
];
const MonthOptions = [];
for (let i = 0; i < 12; i++) {
  MonthOptions.push({ label: monthName(i), value: i });
}
let internalUid = 0;
function makeInternalUid(prefix) {
  internalUid = internalUid + 1;
  return `${prefix}-uid-${internalUid}`;
}
async function makeCalendarFromICS(file) {
  const content = await file.text();
  const jcal = ICAL.parse(content);
  const calcomp = new ICAL.Component(jcal);
  const vevents = calcomp.getAllSubcomponents("vevent");
  const mapped = vevents.map((v) => {
    const event = new ICAL.Event(v);
    event.uid = event.uid || makeInternalUid("ical-event");
    try {
      let startDate = event.startDate.toJSDate();
      let endDate = event.endDate.toJSDate();
      if (event.endDate.isDate && endDate > startDate) {
        event.endDate = ICAL.Time.fromJSDate(new Date(endDate.getTime() - 1));
      }
      return event;
    } catch (e) {
      return null;
    }
  }).filter((c) => c !== null);
  const [exceptions, events] = partition(mapped, (e) => e.isRecurrenceException());
  return {
    id: file.name,
    name: calcomp.getFirstPropertyValue("x-wr-calname") || file.name,
    events,
    exceptions
  };
}
function makeEventFromICS(event) {
  return {
    uid: event.uid,
    name: event.summary,
    startDate: event.startDate.toJSDate(),
    endDate: event.endDate.toJSDate()
  };
}
const recurrenceIterMax = 1e3;
function* expandRecurrencesFor(event, calendar, month2, year2) {
  const mstart = new Date(year2, month2, 1);
  const mend = new Date(year2, month2 + 1, 0);
  const estart = event.startDate.toJSDate();
  const eend = event.endDate.toJSDate();
  if (!event.isRecurring()) {
    if (eend >= mstart && estart <= mend) {
      yield makeEventFromICS(event);
    }
    return;
  }
  const exceptions = calendar.exceptions;
  const exdates = /* @__PURE__ */ new Set();
  event.component.getAllProperties("exdate").forEach((exdate) => {
    exdates.add(
      exdate.getFirstValue().toJSDate().getTime()
    );
  });
  let next;
  let itercount = 0;
  const iterator = event.iterator();
  while ((next = iterator.next()) && itercount < recurrenceIterMax) {
    const occurrence = event.getOccurrenceDetails(next);
    const ostart = occurrence.startDate.toJSDate();
    const oend = occurrence.endDate.toJSDate();
    if (ostart > mend) break;
    if (exdates.has(ostart.getTime())) continue;
    if (some(exceptions, (ex) => ex.uid === event.uid && toRaw(ex.recurrenceId).toJSDate().getTime() === ostart.getTime())) continue;
    if (oend >= mstart && ostart <= mend && ostart >= estart) {
      const oevent = makeEventFromICS(event);
      yield {
        ...oevent,
        startDate: occurrence.startDate.toJSDate(),
        endDate: occurrence.endDate.toJSDate(),
        recurrenceUid: oevent.uid,
        itercount
      };
    }
    itercount++;
  }
  if (itercount === recurrenceIterMax)
    console.warn("bailed out of occurrence iterator after", itercount, "iterations, event:", event, "next occurence:", next);
}
const useCalendarStore = defineStore("calendarStore", () => {
  const today = /* @__PURE__ */ new Date();
  const currentMonth = ref(today.getMonth());
  const currentYear = ref(today.getFullYear());
  const currentCacheKey = computed(() => `${currentMonth.value}-${currentYear.value}`);
  const localEvents = ref(/* @__PURE__ */ new Map());
  const icsCalendars = ref(/* @__PURE__ */ new Map());
  const expandedCache = /* @__PURE__ */ new Map();
  const expandedEvents = computed(() => {
    if (!expandedCache.has(currentCacheKey.value)) {
      const events = /* @__PURE__ */ new Set();
      for (const calendar of icsCalendars.value.values()) {
        for (const icsEvent of [...calendar.events, ...calendar.exceptions]) {
          const rawICSEvent = toRaw(icsEvent);
          for (const recurrence of expandRecurrencesFor(rawICSEvent, calendar, currentMonth.value, currentYear.value)) {
            events.add({ ...recurrence, calendarId: calendar.id });
          }
        }
      }
      expandedCache.set(currentCacheKey.value, events);
    }
    return expandedCache.get(currentCacheKey.value);
  });
  const currentEvents = computed(() => {
    const result = {};
    const mstart = new Date(currentYear.value, currentMonth.value, 1);
    const mend = new Date(currentYear.value, currentMonth.value + 1, 0);
    for (const event of [...localEvents.value.values(), ...expandedEvents.value.values()]) {
      if (event.endDate < mstart || event.startDate > mend)
        continue;
      const startDay = event.startDate < mstart ? 1 : event.startDate.getDate();
      const endDay = event.endDate > mend ? mend.getDate() : event.endDate.getDate();
      for (let day = startDay; day <= endDay; day++) {
        result[day] = result[day] || [];
        result[day].push(event);
      }
    }
    return result;
  });
  const currentDays = computed(() => {
    const last = new Date(currentYear.value, currentMonth.value + 1, 1);
    const days = [];
    const events = currentEvents.value;
    for (let day = 1; ; day++) {
      const date = new Date(currentYear.value, currentMonth.value, day);
      if (date >= last)
        break;
      days.push({ date, weekday: date.getDay(), events: events[day] || [] });
    }
    return days;
  });
  async function importICSFile(file) {
    const calendar = await makeCalendarFromICS(file);
    if (icsCalendars.value.has(calendar.id)) {
      calendar.id = makeInternalUid("calendar");
    }
    expandedCache.clear();
    icsCalendars.value.set(calendar.id, calendar);
  }
  async function previewICSFile(file) {
    const content = await file.text();
    const jcal = ICAL.parse(content);
    const calcomp = new ICAL.Component(jcal);
    return {
      file,
      name: calcomp.getFirstPropertyValue("x-wr-calname") || file.name,
      color: calcomp.getFirstPropertyValue("color") || "#4477FF"
    };
  }
  return {
    currentEvents,
    currentDays,
    currentMonth,
    currentYear,
    icsCalendars,
    localEvents,
    previewICSFile,
    importICSFile
  };
}, {
  persist: {
    debug: true,
    pick: ["icsCalendars", "localEvents", "currentMonth", "currentYear"],
    serializer: {
      deserialize: (input) => {
        const res = JSBT.decode(input);
        const icsCalendars = /* @__PURE__ */ new Map();
        res.icsCalendars.entries().forEach(([k, v]) => {
          const events = v.events.map((e) => ICAL.Event.fromJSBT(e));
          const exceptions = v.exceptions.map((e) => ICAL.Event.fromJSBT(e));
          icsCalendars.set(k, { ...v, events, exceptions });
        });
        return { ...res, icsCalendars };
      },
      serialize: (data) => {
        const raw = {
          icsCalendars: toRaw(data.icsCalendars),
          localEvents: toRaw(data.localEvents),
          currentMonth: toRaw(data.currentMonth),
          currentYear: toRaw(data.currentYear)
        };
        return JSBT.encode(raw);
      }
    }
  }
});
ICAL.Event.prototype.toJSBT = function() {
  return { ics: this.toString() };
};
ICAL.Event.fromJSBT = function(data) {
  if (data.__jsbtConstructorName === "_Event") {
    const jevent = ICAL.parse(data.ics);
    const vevent = new ICAL.Component(jevent);
    return new ICAL.Event(vevent);
  }
  throw "not an event!";
};
const page = "_page_1d78a_2";
const month = "_month_1d78a_19";
const year = "_year_1d78a_27";
const date_grid = "_date_grid_1d78a_35";
const date_row = "_date_row_1d78a_50";
const is_weekend = "_is_weekend_1d78a_83";
const col_date = "_col_date_1d78a_107";
const col_weekday = "_col_weekday_1d78a_119";
const col_content = "_col_content_1d78a_130";
const style1 = {
  page,
  month,
  year,
  date_grid,
  date_row,
  is_weekend,
  col_date,
  col_weekday,
  col_content
};
const _sfc_main$b = {
  __name: "CalendarPreview",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCalendarStore();
    const style = useCssModule();
    function weekdayClass(date) {
      const day = date.getDay();
      if (day === 0 || day === 6) {
        return style.is_weekend;
      }
      return "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$style.page
      }, _attrs))}><h2 class="${ssrRenderClass(_ctx.$style.year)}">${ssrInterpolate(unref(store).currentYear)}</h2><h1 class="${ssrRenderClass(_ctx.$style.month)}">${ssrInterpolate(unref(monthName)(unref(store).currentMonth))}</h1><div class="${ssrRenderClass(_ctx.$style.date_grid)}"><!--[-->`);
      ssrRenderList(unref(store).currentDays, (day) => {
        _push(`<div class="${ssrRenderClass([_ctx.$style.date_row, weekdayClass(day.date)])}"><div class="${ssrRenderClass(_ctx.$style.col_date)}">${ssrInterpolate(day.date.getDate())}</div><div class="${ssrRenderClass(_ctx.$style.col_weekday)}">${ssrInterpolate(unref(weekdayName)(day.date.getDay()))}</div><div class="${ssrRenderClass(_ctx.$style.col_content)}"><pre>${ssrInterpolate(day.events.map((e) => e.name).join(", "))}</pre></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const cssModules = {
  "$style": style1
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/calendar/CalendarPreview.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const CalendarPreview = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__cssModules", cssModules]]);
const _sfc_main$a = {
  __name: "ImportICSSidbarGroup",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCalendarStore();
    const calFile = ref(null);
    ref(null);
    ref(null);
    async function readFile(event) {
      calFile.value = event.currentTarget.files[0];
    }
    async function importFile() {
      if (calFile.value == null)
        throw "no file selected";
      await store.importICSFile(calFile.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$q), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$p), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Import ICS`);
                } else {
                  return [
                    createTextVNode("Import ICS")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col space-y-2 items-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$n), {
              type: "file",
              accepts: ".ics",
              onChange: ($event) => readFile($event)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$e), {
              size: "sm",
              onClick: ($event) => importFile()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Import `);
                } else {
                  return [
                    createTextVNode(" Import ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-row"${_scopeId}><!--[-->`);
            ssrRenderList(unref(store).icsCalendars, ([id, calendar]) => {
              _push2(`<div${_scopeId}>${ssrInterpolate(calendar.name)}</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(unref(_sfc_main$p), null, {
                default: withCtx(() => [
                  createTextVNode("Import ICS")
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col space-y-2 items-end" }, [
                createVNode(unref(_sfc_main$n), {
                  type: "file",
                  accepts: ".ics",
                  onChange: ($event) => readFile($event)
                }, null, 8, ["onChange"]),
                createVNode(unref(_sfc_main$e), {
                  size: "sm",
                  onClick: ($event) => importFile()
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Import ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode("div", { class: "flex flex-row" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(store).icsCalendars, ([id, calendar]) => {
                  return openBlock(), createBlock("div", null, toDisplayString(calendar.name), 1);
                }), 256))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/calendar/ImportICSSidbarGroup.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Select",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    defaultValue: { type: String, required: false },
    modelValue: { type: String, required: false },
    dir: { type: String, required: false },
    name: { type: String, required: false },
    autocomplete: { type: String, required: false },
    disabled: { type: Boolean, required: false },
    required: { type: Boolean, required: false }
  },
  emits: ["update:modelValue", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectRoot), mergeProps(unref(forwarded), _attrs), {
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
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/Select.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "SelectContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    position: { type: String, required: false, default: "popper" },
    bodyLock: { type: Boolean, required: false },
    side: { type: null, required: false },
    sideOffset: { type: Number, required: false },
    align: { type: null, required: false },
    alignOffset: { type: Number, required: false },
    avoidCollisions: { type: Boolean, required: false },
    collisionBoundary: { type: null, required: false },
    collisionPadding: { type: [Number, Object], required: false },
    arrowPadding: { type: Number, required: false },
    sticky: { type: String, required: false },
    hideWhenDetached: { type: Boolean, required: false },
    updatePositionStrategy: { type: String, required: false },
    prioritizePosition: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  emits: [
    "closeAutoFocus",
    "escapeKeyDown",
    "pointerDownOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SelectContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)(
                "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-sm border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                __props.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SelectViewport), {
                    class: unref(cn)(
                      "p-1",
                      __props.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                    )
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4)),
                    createVNode(unref(SelectViewport), {
                      class: unref(cn)(
                        "p-1",
                        __props.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                      )
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"]),
                    createVNode(unref(_sfc_main$5))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SelectContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)(
                  "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-sm border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  __props.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4)),
                  createVNode(unref(SelectViewport), {
                    class: unref(cn)(
                      "p-1",
                      __props.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                    )
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["class"]),
                  createVNode(unref(_sfc_main$5))
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectContent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "SelectGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectGroup), mergeProps({
        class: unref(cn)("p-1 w-full", props.class)
      }, delegatedProps.value, _attrs), {
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
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectGroup.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "SelectItem",
  __ssrInlineRender: true,
  props: {
    value: { type: String, required: true },
    disabled: { type: Boolean, required: false },
    textValue: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(SelectItemIndicator), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckIcon), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckIcon), { class: "h-4 w-4" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(unref(SelectItemText), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, [
                createVNode(unref(SelectItemIndicator), null, {
                  default: withCtx(() => [
                    createVNode(unref(CheckIcon), { class: "h-4 w-4" })
                  ]),
                  _: 1
                })
              ]),
              createVNode(unref(SelectItemText), null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "SelectScrollDownButton",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectScrollDownButton), mergeProps(unref(forwardedProps), {
        class: unref(cn)("flex cursor-default items-center justify-center py-1", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronDownIcon), null, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronDownIcon))
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectScrollDownButton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "SelectScrollUpButton",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectScrollUpButton), mergeProps(unref(forwardedProps), {
        class: unref(cn)("flex cursor-default items-center justify-center py-1", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronUpIcon), null, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronUpIcon))
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectScrollUpButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "SelectTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-sm border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(unref(SelectIcon), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CaretSortIcon), { class: "w-4 h-4 opacity-50 shrink-0" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CaretSortIcon), { class: "w-4 h-4 opacity-50 shrink-0" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(unref(SelectIcon), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(CaretSortIcon), { class: "w-4 h-4 opacity-50 shrink-0" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectTrigger.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "SelectValue",
  __ssrInlineRender: true,
  props: {
    placeholder: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectValue), mergeProps(props, _attrs), {
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
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select/SelectValue.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "MonthSelectorSidebarGroup",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCalendarStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$q), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$p), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Select Calendar`);
                } else {
                  return [
                    createTextVNode("Select Calendar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-row space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              "model-value": String(unref(store).currentMonth),
              "onUpdate:modelValue": ($event) => unref(store).currentMonth = parseInt($event)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), { placeholder: "Month" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), { placeholder: "Month" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(MonthOptions), (month_opt) => {
                                _push5(ssrRenderComponent(unref(_sfc_main$6), {
                                  value: String(month_opt.value)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(month_opt.label)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(month_opt.label), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(MonthOptions), (month_opt) => {
                                  return openBlock(), createBlock(unref(_sfc_main$6), {
                                    value: String(month_opt.value)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(month_opt.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(MonthOptions), (month_opt) => {
                                return openBlock(), createBlock(unref(_sfc_main$6), {
                                  value: String(month_opt.value)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(month_opt.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), { placeholder: "Month" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(MonthOptions), (month_opt) => {
                              return openBlock(), createBlock(unref(_sfc_main$6), {
                                value: String(month_opt.value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(month_opt.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 256))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              "model-value": String(unref(store).currentYear),
              "onUpdate:modelValue": ($event) => unref(store).currentYear = parseInt($event)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), { placeholder: "Year" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), { placeholder: "Year" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(YearOptions), (year_opt) => {
                                _push5(ssrRenderComponent(unref(_sfc_main$6), {
                                  value: String(year_opt.value)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(year_opt.label)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(year_opt.label), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(YearOptions), (year_opt) => {
                                  return openBlock(), createBlock(unref(_sfc_main$6), {
                                    value: String(year_opt.value)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(year_opt.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(YearOptions), (year_opt) => {
                                return openBlock(), createBlock(unref(_sfc_main$6), {
                                  value: String(year_opt.value)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(year_opt.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), { placeholder: "Year" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(YearOptions), (year_opt) => {
                              return openBlock(), createBlock(unref(_sfc_main$6), {
                                value: String(year_opt.value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(year_opt.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 256))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(unref(_sfc_main$p), null, {
                default: withCtx(() => [
                  createTextVNode("Select Calendar")
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-row space-x-3" }, [
                createVNode(unref(_sfc_main$9), {
                  "model-value": String(unref(store).currentMonth),
                  "onUpdate:modelValue": ($event) => unref(store).currentMonth = parseInt($event)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), { placeholder: "Month" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(MonthOptions), (month_opt) => {
                              return openBlock(), createBlock(unref(_sfc_main$6), {
                                value: String(month_opt.value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(month_opt.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 256))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model-value", "onUpdate:modelValue"]),
                createVNode(unref(_sfc_main$9), {
                  "model-value": String(unref(store).currentYear),
                  "onUpdate:modelValue": ($event) => unref(store).currentYear = parseInt($event)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), { placeholder: "Year" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(YearOptions), (year_opt) => {
                              return openBlock(), createBlock(unref(_sfc_main$6), {
                                value: String(year_opt.value)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(year_opt.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 256))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model-value", "onUpdate:modelValue"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/calendar/MonthSelectorSidebarGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const clientOnly = true;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { googleFonts } = useState();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SidebarGroup = resolveComponent("SidebarGroup");
      const _component_SidebarGroupLabel = resolveComponent("SidebarGroupLabel");
      _push(`<!--[--><div class="w-[12in] h-[18in] hidden print:block m-0 p-0">`);
      _push(ssrRenderComponent(unref(CalendarPreview), null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$f), { class: "print:hidden" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$m), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CalendarPreview), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CalendarPreview))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$s), {
              side: "right",
              class: "print:hidden"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$o), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$c), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$c))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$r), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$a), null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SidebarGroup, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SidebarGroupLabel, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Font Data: `);
                                  } else {
                                    return [
                                      createTextVNode(" Font Data: ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<pre${_scopeId4}>    ${ssrInterpolate(JSON.stringify(unref(googleFonts), null, 2))}
</pre>`);
                            } else {
                              return [
                                createVNode(_component_SidebarGroupLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Font Data: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("pre", null, "    " + toDisplayString(JSON.stringify(unref(googleFonts), null, 2)) + "\n", 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1)),
                          createVNode(unref(_sfc_main$a)),
                          createVNode(_component_SidebarGroup, null, {
                            default: withCtx(() => [
                              createVNode(_component_SidebarGroupLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Font Data: ")
                                ]),
                                _: 1
                              }),
                              createVNode("pre", null, "    " + toDisplayString(JSON.stringify(unref(googleFonts), null, 2)) + "\n", 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$o), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$c))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$r), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1)),
                        createVNode(unref(_sfc_main$a)),
                        createVNode(_component_SidebarGroup, null, {
                          default: withCtx(() => [
                            createVNode(_component_SidebarGroupLabel, null, {
                              default: withCtx(() => [
                                createTextVNode(" Font Data: ")
                              ]),
                              _: 1
                            }),
                            createVNode("pre", null, "    " + toDisplayString(JSON.stringify(unref(googleFonts), null, 2)) + "\n", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$m), null, {
                default: withCtx(() => [
                  createVNode(unref(CalendarPreview))
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$s), {
                side: "right",
                class: "print:hidden"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$o), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$c))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$r), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$1)),
                      createVNode(unref(_sfc_main$a)),
                      createVNode(_component_SidebarGroup, null, {
                        default: withCtx(() => [
                          createVNode(_component_SidebarGroupLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(" Font Data: ")
                            ]),
                            _: 1
                          }),
                          createVNode("pre", null, "    " + toDisplayString(JSON.stringify(unref(googleFonts), null, 2)) + "\n", 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  clientOnly,
  _sfc_main as default
};
