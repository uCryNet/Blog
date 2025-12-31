import { defineComponent, reactive, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, A as API, n as navigateTo, R as ROUTES_CONFIG, p as parseResponseError } from './server.mjs';
import { u as useSeoMeta } from './composables-BBIdebwV.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      isAuthorized: false,
      login: "",
      password: "",
      error: {
        isError: false,
        message: ""
      }
    });
    watch(
      () => state.isAuthorized,
      async (isAuthorized) => {
        if (!isAuthorized) return;
        try {
          const res = await API.checkAccess();
          const { isAdmin } = res;
          if (isAdmin) {
            navigateTo(ROUTES_CONFIG.adminPanel.path);
          } else {
            navigateTo(ROUTES_CONFIG.root.path);
          }
        } catch (error) {
          navigateTo(ROUTES_CONFIG.root.path);
          console.error(parseResponseError(error));
        }
      }
    );
    const head = {
      title: "Login",
      description: "Login - Admin Panel"
    };
    useSeoMeta({
      title: head.title,
      description: head.description,
      robots: "noindex, nofollow",
      ogImage: "/media/meta/meta.png"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "admin-login" }, _attrs))} data-v-8cbff483><label class="admin-login__field" data-v-8cbff483><input${ssrRenderAttr("value", unref(state).login)} required name="admin-login" placeholder="Login" class="input login__input" data-v-8cbff483></label><label class="admin-login__field" data-v-8cbff483><input${ssrRenderAttr("value", unref(state).password)} required name="password" placeholder="Password" class="input login__input" type="password" data-v-8cbff483></label>`);
      if (unref(state).error.isError) {
        _push(`<div class="admin-login__error" data-v-8cbff483>${ssrInterpolate(unref(state).error.message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="btn btn--big login__btn" data-v-8cbff483> LOGIN </button></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8cbff483"]]);

export { login as default };
//# sourceMappingURL=login-BkM6gFtz.mjs.map
