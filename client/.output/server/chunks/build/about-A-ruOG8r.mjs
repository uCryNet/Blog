import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-BBIdebwV.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const SKILLS = [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "PREPROCESSORS",
      "BUNDLERS",
      "UI FRAMEWORKS",
      "TESTING",
      "STATE MANAGERS",
      "СMS",
      "VUE",
      "NUXT",
      "REACT",
      "REACT NATIVE",
      "NEXT",
      "LINUX",
      "NODE",
      "EXPRESS",
      "SQL",
      "POSTGRESQL",
      "MARIADB",
      "MONGODB",
      "CLICKHOUSE",
      "RABBITMQ",
      "REDIS"
    ];
    const head = {
      title: "About Me",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-94f9d05d><div class="title text--left" data-v-94f9d05d> About <span data-v-94f9d05d> me</span></div><div class="about__wrap" data-v-94f9d05d><div class="about__text" data-v-94f9d05d><p data-v-94f9d05d>Hello! My name is Denis and I am a front-end developer and this is my blog.</p><p data-v-94f9d05d>My cozy little blog is completely self-written. The front-end is built with Vue, TypeScript, and SCSS, while the back-end is built with Node.JS, Express, and TypeScript, and the database is Mongo. The source code is available on Github.</p><p data-v-94f9d05d>I am incredibly passionate about everything related to IT. For a long time, I couldn&#39;t decide what I wanted to do specifically. As a result, I learned Linux administration, created my own websites, dabbled in computer security and Android development, studied PHP and SQL, as well as C++.</p><p data-v-94f9d05d>When I started freelancing, I realized that there were many web development opportunities available. That&#39;s why I decided to pursue this field. Over time, I discovered that I specifically enjoyed front-end development more. I love trying out new things in the IT world.</p><p data-v-94f9d05d>And, I&#39;m also a die-hard Linux user. I switched to Linux around the end of 2012. My first distribution was Linux Mint with Cinnamon.</p><br data-v-94f9d05d><div class="about__nav" data-v-94f9d05d><a class="btn btn--big btn--disabled" data-v-94f9d05d><svg width="15" viewBox="0 0 384 512" data-v-94f9d05d><path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256z" data-v-94f9d05d></path></svg><span data-v-94f9d05d>resume.doc</span></a><a class="btn btn--big" href="https://github.com/uCryNet" target="_blank" data-v-94f9d05d><svg width="18" viewBox="0 0 496 512" data-v-94f9d05d><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" data-v-94f9d05d></path></svg><span data-v-94f9d05d>uCryNet</span></a><a class="btn btn--big" href="https://telegram.me/ucrynet" target="_blank" data-v-94f9d05d><svg width="18" viewBox="0 0 496 512" data-v-94f9d05d><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" data-v-94f9d05d></path></svg><span data-v-94f9d05d>@uCryNet</span></a><a class="btn btn--big btn--yellow" href="mailto:ucrynet@proton.me" data-v-94f9d05d><svg width="18" viewBox="0 0 512 512" data-v-94f9d05d><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" data-v-94f9d05d></path></svg><span data-v-94f9d05d>ucrynet@proton.me</span></a></div></div><div data-v-94f9d05d><div class="title-small" data-v-94f9d05d> Skills </div><!--[-->`);
      ssrRenderList(SKILLS, (skill) => {
        _push(`<div class="btn--small" data-v-94f9d05d>${ssrInterpolate(skill.toUpperCase())}</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94f9d05d"]]);

export { about as default };
//# sourceMappingURL=about-A-ruOG8r.mjs.map
