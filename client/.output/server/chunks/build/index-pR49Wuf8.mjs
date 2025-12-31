import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './ThePosts-C2L5scAG.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-BBIdebwV.mjs';
import './server.mjs';
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
    const head = {
      title: "The CryNet",
      description: "Yet another developer"
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
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb--20"><h2 class="title text--center mb--20"> ARTICLES <span> &amp; NOTES</span></h2><div class="text text--center"> Let&#39;s try to find </div></div>`);
      _push(ssrRenderComponent(_component_SearchPost, null, null, _parent));
      _push(ssrRenderComponent(_component_ThePosts, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-pR49Wuf8.mjs.map
