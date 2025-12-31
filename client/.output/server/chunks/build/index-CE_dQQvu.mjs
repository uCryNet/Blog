import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './ThePosts-C2L5scAG.mjs';
import { _ as __unimport_stringValidate } from './stringValidate-CPtg2cKk.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const sanitizeUrlParam = (param) => {
      return decodeURIComponent(param).replace(/[<>"'&]/g, "").trim();
    };
    const category = sanitizeUrlParam(route.params.category)?.toUpperCase() || "Blog";
    const head = {
      title: category,
      description: `All articles and notes about ${category}`
    };
    useSeoMeta({
      title: head.title,
      ogTitle: head.title,
      description: head.description,
      ogDescription: head.description,
      twitterCard: "summary_large_image",
      ogImage: "/media/meta/meta.png"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchPost = __nuxt_component_0;
      const _component_ThePosts = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "articles" }, _attrs))} data-v-50977617><div class="title text--center mb--20" data-v-50977617>`);
      if (!unref(route).params.category) {
        _push(`<!--[--> BLOG <!--]-->`);
      } else {
        _push(`<!--[-->${ssrInterpolate(("stringValidate" in _ctx ? _ctx.stringValidate : unref(__unimport_stringValidate))(unref(route).params.category))}<!--]-->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SearchPost, null, null, _parent));
      _push(ssrRenderComponent(_component_ThePosts, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[category]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-50977617"]]);

export { index as default };
//# sourceMappingURL=index-CE_dQQvu.mjs.map
