import { defineComponent, computed, reactive, watch, mergeProps, unref, toRefs, ref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, h as usePostStore, c as useRuntimeConfig, R as ROUTES_CONFIG, a as __nuxt_component_0$1 } from './server.mjs';

const debounce = /* @__PURE__ */ (() => {
  let timer;
  return (callback, ms) => {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SearchPost",
  __ssrInlineRender: true,
  setup(__props) {
    const postStore = usePostStore();
    const filters = computed(() => postStore.filters);
    const state = reactive({
      search: ""
    });
    watch(
      filters,
      (newFilters) => {
        state.search = newFilters.search || "";
      },
      { immediate: true }
    );
    watch(
      () => state.search,
      (search) => {
        debounce(() => {
          postStore.setFilters({ search, page: 1 });
        }, 500);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-post" }, _attrs))} data-v-72222e0a><div class="search-post__wrap" data-v-72222e0a><div class="search-post__search-inner" data-v-72222e0a><input${ssrRenderAttr("value", unref(state).search)} class="input search-post__search-input" placeholder="Search" data-v-72222e0a>`);
      if (unref(state).search) {
        _push(`<button class="search-post__search-clear" data-v-72222e0a><svg width="12" height="12" viewBox="0 0 352 512" data-v-72222e0a><path fill="#c2b26f" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" data-v-72222e0a></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchPost/SearchPost.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-72222e0a"]]), { __name: "SearchPost" });
const NotFoundImage = "" + __buildAssetsURL("404.1aKKR8Dk.webp");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ThePost",
  __ssrInlineRender: true,
  props: {
    post: {}
  },
  setup(__props) {
    const props = __props;
    const { post } = toRefs(props);
    const {
      _id: id,
      text,
      image,
      date,
      category,
      title
    } = post.value;
    const config = useRuntimeConfig();
    const server = config.public.vueAppApiHost;
    const isError = ref(false);
    const articleDate = date.split(".");
    const poster = server + image;
    const linkToPost = ROUTES_CONFIG.article.path.replace(":category", category).replace(":id", id);
    const onError = () => isError.value = true;
    const getDescription = text.replace(/(<([^>]+)>)/ig, "").substring(0, 100).trim() + "...";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "post",
        to: unref(linkToPost)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="post__image"${ssrRenderAttr("src", unref(isError) ? unref(NotFoundImage) : poster)}${ssrRenderAttr("alt", unref(title))} data-v-db737db7${_scopeId}><div class="post__time" data-v-db737db7${_scopeId}><div class="post__date" data-v-db737db7${_scopeId}><strong data-v-db737db7${_scopeId}>${ssrInterpolate(unref(articleDate)[0])}</strong> ${ssrInterpolate(unref(articleDate)[1])}.${ssrInterpolate(unref(articleDate)[2])}</div></div><div class="post__text" data-v-db737db7${_scopeId}><h4 class="post__category" data-v-db737db7${_scopeId}>${ssrInterpolate(unref(category))}</h4><h1 class="post__title" data-v-db737db7${_scopeId}>${ssrInterpolate(unref(title))}</h1><div class="post__desc" data-v-db737db7${_scopeId}>${getDescription ?? ""}</div></div>`);
          } else {
            return [
              createVNode("img", {
                class: "post__image",
                src: unref(isError) ? unref(NotFoundImage) : poster,
                alt: unref(title),
                onError
              }, null, 40, ["src", "alt"]),
              createVNode("div", { class: "post__time" }, [
                createVNode("div", { class: "post__date" }, [
                  createVNode("strong", null, toDisplayString(unref(articleDate)[0]), 1),
                  createTextVNode(" " + toDisplayString(unref(articleDate)[1]) + "." + toDisplayString(unref(articleDate)[2]), 1)
                ])
              ]),
              createVNode("div", { class: "post__text" }, [
                createVNode("h4", { class: "post__category" }, toDisplayString(unref(category)), 1),
                createVNode("h1", { class: "post__title" }, toDisplayString(unref(title)), 1),
                createVNode("div", {
                  class: "post__desc",
                  innerHTML: getDescription
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThePosts/components/ThePost/ThePost.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ThePost = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-db737db7"]]), { __name: "ThePostsComponentsThePost" });
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "preloader" }, _attrs))} data-v-b6b3ebb0><div class="preloader__inner" data-v-b6b3ebb0><div class="preloader--dot" data-v-b6b3ebb0></div><div class="preloader--dot" data-v-b6b3ebb0></div><div class="preloader--dot" data-v-b6b3ebb0></div><div class="preloader--dot" data-v-b6b3ebb0></div><div class="preloader--dot" data-v-b6b3ebb0></div><div class="preloader--dot" data-v-b6b3ebb0></div></div><div class="preloader--text" data-v-b6b3ebb0></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThePreloader/ThePreloader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ThePreloader = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b6b3ebb0"]]), { __name: "ThePreloader" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThePaginator",
  __ssrInlineRender: true,
  props: {
    totalPages: {},
    maxVisibleButtons: {},
    currentPage: {},
    onChangePage: { type: Function }
  },
  setup(__props) {
    const props = __props;
    const {
      totalPages,
      maxVisibleButtons,
      currentPage,
      onChangePage
    } = toRefs(props);
    const startPage = computed(() => {
      if (currentPage.value === 1) return 1;
      if (currentPage.value === totalPages.value) {
        const result = totalPages.value - maxVisibleButtons.value + 1;
        return result <= 0 ? 1 : result;
      }
      return currentPage.value - 1;
    });
    const endPage = computed(() => {
      return Math.min(startPage.value + maxVisibleButtons.value - 1, totalPages.value);
    });
    const pages = computed(() => {
      const range = [];
      for (let i = startPage.value; i <= endPage.value; i += 1) {
        range.push({
          name: i,
          isDisabled: i === currentPage.value
        });
      }
      return range;
    });
    const isInFirstPage = computed(() => {
      return currentPage.value === 1;
    });
    const isInLastPage = computed(() => {
      return currentPage.value === totalPages.value;
    });
    const isPageActive = (page) => {
      return currentPage.value === page;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))} data-v-4d86a242><div data-v-4d86a242><button${ssrIncludeBooleanAttr(isInFirstPage.value) ? " disabled" : ""} class="pagination__item pagination__item--nav" data-v-4d86a242> First </button><button${ssrIncludeBooleanAttr(isInFirstPage.value) ? " disabled" : ""} class="pagination__item pagination__item--nav" data-v-4d86a242> Previous </button></div><div class="pagination__nums" data-v-4d86a242><!--[-->`);
      ssrRenderList(pages.value, (page) => {
        _push(`<button${ssrIncludeBooleanAttr(page.isDisabled) ? " disabled" : ""} class="${ssrRenderClass([{ "pagination__item--active": isPageActive(page.name) }, "pagination__item"])}" data-v-4d86a242>${ssrInterpolate(page.name)}</button>`);
      });
      _push(`<!--]--></div><div data-v-4d86a242><button${ssrIncludeBooleanAttr(isInLastPage.value) ? " disabled" : ""} class="pagination__item pagination__item--nav" data-v-4d86a242> Next </button><button${ssrIncludeBooleanAttr(isInLastPage.value) ? " disabled" : ""} class="pagination__item pagination__item--nav" data-v-4d86a242> Last </button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThePaginator/ThePaginator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ThePaginator = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-4d86a242"]]), { __name: "ThePaginator" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThePosts",
  __ssrInlineRender: true,
  setup(__props) {
    const postStore = usePostStore();
    const posts = computed(() => postStore.posts);
    const isPending = computed(() => postStore.getPending);
    const meta = computed(() => postStore.meta);
    const filters = computed(() => postStore.filters);
    const onChangePage = (page) => {
      postStore.setFilters({ page });
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(isPending)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "posts" }, _attrs))} data-v-93b81cb9>`);
        if (unref(posts).length) {
          _push(`<div data-v-93b81cb9><div class="posts__lists" data-v-93b81cb9><!--[-->`);
          ssrRenderList(unref(posts), (article) => {
            _push(ssrRenderComponent(ThePost, {
              key: article._id,
              post: article
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
          _push(ssrRenderComponent(ThePaginator, {
            "max-visible-buttons": 3,
            "total-pages": unref(meta).total_pages,
            "current-page": unref(filters).page,
            "on-change-page": onChangePage
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<h3 class="posts__empty" data-v-93b81cb9><span data-v-93b81cb9>OOPS!</span> No records found </h3>`);
        }
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(ThePreloader, _attrs, null, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThePosts/ThePosts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-93b81cb9"]]), { __name: "ThePosts" });

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=ThePosts-C2L5scAG.mjs.map
