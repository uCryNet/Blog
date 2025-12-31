import { defineComponent, reactive, computed, watch, mergeProps, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc, b as useCategoryStore, A as API, p as parseResponseError, c as useRuntimeConfig, d as __nuxt_component_0$2 } from './server.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TheAside",
  __ssrInlineRender: true,
  props: {
    menus: {},
    switchBlock: { type: Function },
    block: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aside" }, _attrs))} data-v-949cd693><h6 class="title-block" data-v-949cd693> MENU </h6><ul class="aside__lists" data-v-949cd693><!--[-->`);
      ssrRenderList(Object.values(__props.menus), (menu) => {
        _push(`<li data-v-949cd693><div class="${ssrRenderClass([__props.block === menu.value && "aside__active"])}" data-v-949cd693>${ssrInterpolate(menu.text)}</div></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/AdminPanel/TheAside/TheAside.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TheAside = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-949cd693"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AdminArticle",
  __ssrInlineRender: true,
  props: {
    updatePostData: { type: Function },
    category: {},
    edit: {}
  },
  setup(__props) {
    const categoryStore = useCategoryStore();
    const config = useRuntimeConfig();
    const { vueAppTinymceKey } = config.public;
    const allCategory = computed(() => categoryStore.categories);
    const state = ref({
      _id: "",
      title: "",
      category: "css",
      image: null,
      text: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-article" }, _attrs))} data-v-4278b681><form data-v-4278b681><input${ssrRenderAttr("value", unref(state).title)} required placeholder="Title" class="input admin-article__title" data-v-4278b681><select name="category" required class="select admin-article__select" data-v-4278b681><!--[-->`);
      ssrRenderList(unref(allCategory), (categoryUnit) => {
        _push(`<optgroup${ssrRenderAttr("label", categoryUnit.title)} data-v-4278b681><!--[-->`);
        ssrRenderList(categoryUnit.subCategories, (subCategoriesUnit) => {
          _push(`<option${ssrRenderAttr("value", subCategoriesUnit.name)} data-v-4278b681${ssrIncludeBooleanAttr(Array.isArray(unref(state).category) ? ssrLooseContain(unref(state).category, subCategoriesUnit.name) : ssrLooseEqual(unref(state).category, subCategoriesUnit.name)) ? " selected" : ""}>${ssrInterpolate(subCategoriesUnit.name)}</option>`);
        });
        _push(`<!--]--></optgroup>`);
      });
      _push(`<!--]--></select><div class="admin-article__text" data-v-4278b681>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><input${ssrIncludeBooleanAttr(!unref(state)?._id) ? " required" : ""} accept="image/*" class="admin-article__preview" type="file" data-v-4278b681><button type="submit" class="btn btn--yellow btn--big" data-v-4278b681>`);
      if (unref(state)?._id) {
        _push(`<!--[--> UPDATE <!--]-->`);
      } else {
        _push(`<!--[--> ADD <!--]-->`);
      }
      _push(`</button></form>`);
      if (unref(state)?._id) {
        _push(`<button class="btn btn--red btn--big mt--20" data-v-4278b681> CANCEL </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/AdminPanel/AdminArticle/AdminArticle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AdminArticle = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4278b681"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AdminArticles",
  __ssrInlineRender: true,
  props: {
    editArticle: { type: Function },
    deleteArticle: { type: Function },
    lists: {}
  },
  setup(__props) {
    const HEADER = ["Name", "Date", "Categories", "Update", "Delete"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "all-articles" }, _attrs))} data-v-8f60e301><div class="all-articles__lists-header" data-v-8f60e301><!--[-->`);
      ssrRenderList(HEADER, (headerTitle) => {
        _push(`<div class="all-articles__list-header" data-v-8f60e301>${ssrInterpolate(headerTitle)}</div>`);
      });
      _push(`<!--]--></div><div class="all-articles__lists" data-v-8f60e301><!--[-->`);
      ssrRenderList(__props.lists, (article) => {
        _push(`<div class="all-articles__list" data-v-8f60e301><div class="all-articles__list-title" data-v-8f60e301>${ssrInterpolate(article.title)}</div><div class="all-articles__list-date" data-v-8f60e301>${ssrInterpolate(article.date)}</div><div class="all-articles__list-category" data-v-8f60e301>${ssrInterpolate(article.category)}</div><button class="all-articles__list-nav all-articles__list-nav-edit" data-v-8f60e301> Update </button><button class="all-articles__list-nav all-articles__list-nav-del" data-v-8f60e301> Delete </button></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/AdminPanel/AdminArticles/AdminArticles.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AdminArticles = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8f60e301"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin-panel",
  __ssrInlineRender: true,
  setup(__props) {
    const categoryStore = useCategoryStore();
    const state = reactive({
      isAdmin: false,
      block: "article",
      edit: {
        author: "",
        category: "",
        date: "",
        image: "",
        text: "",
        title: "",
        _id: ""
      },
      allArticles: []
    });
    const MENUS = {
      article: { text: "Add article", value: "article" },
      articles: { text: "All articles", value: "articles" }
    };
    const category = computed(() => categoryStore.categories);
    const switchBlock = (block) => {
      if (state.block !== block) state.block = block;
    };
    const editArticle = (article) => {
      state.block = "article";
      state.edit = { ...article };
    };
    const getPosts = () => {
      API.getPosts().then((res) => {
        state.allArticles = res.data;
      }).catch((error) => {
        console.error(parseResponseError(error));
      });
    };
    const deleteArticle = async (id, title) => {
      const isDelete = confirm(`Are you sure you want to delete this post: "${title}"`);
      if (isDelete) {
        await API.deletePost(id).catch((error) => console.error(parseResponseError(error)));
        getPosts();
      }
    };
    const updatePostData = () => {
      state.edit = {
        author: "",
        category: "",
        date: "",
        image: "",
        text: "",
        title: "",
        _id: ""
      };
      getPosts();
    };
    watch(
      () => state.block,
      () => {
        if (state.block === MENUS.articles.value && state.edit._id) {
          updatePostData();
        }
      }
    );
    const head = {
      title: "Admin Panel",
      description: "Admin Panel"
    };
    useSeoMeta({
      title: head.title,
      description: head.description,
      robots: "noindex, nofollow",
      ogImage: "/media/meta/meta.png"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-panel" }, _attrs))} data-v-374a4419>`);
      _push(ssrRenderComponent(TheAside, {
        menus: MENUS,
        "switch-block": switchBlock,
        block: state.block
      }, null, _parent));
      _push(`<div data-v-374a4419>`);
      if (state.block === "article") {
        _push(ssrRenderComponent(AdminArticle, {
          edit: state.edit,
          category: category.value,
          "update-post-data": updatePostData,
          "get-posts": getPosts
        }, null, _parent));
      } else if (state.block === "articles") {
        _push(ssrRenderComponent(AdminArticles, {
          "edit-article": editArticle,
          "delete-article": deleteArticle,
          lists: state.allArticles
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin-panel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const adminPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-374a4419"]]);

export { adminPanel as default };
//# sourceMappingURL=admin-panel-Bfj9slkJ.mjs.map
