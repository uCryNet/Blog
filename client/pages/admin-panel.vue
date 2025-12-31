<template>
  <div
    class="admin-panel"
  >
    <TheAside
      :menus="MENUS"
      :switch-block="switchBlock"
      :block="state.block"
    />

    <div>
      <AdminArticle
        v-if="state.block === 'article'"
        :edit="state.edit"
        :category="category"
        :update-post-data="updatePostData"
        :get-posts="getPosts"
      />

      <AdminArticles
        v-else-if="state.block === 'articles'"
        :edit-article="editArticle"
        :delete-article="deleteArticle"
        :lists="state.allArticles"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import { computed, onMounted, reactive, watch } from 'vue'

import type { IArticle } from '@/interfaces/article'
import type { IMenus, IMenusType } from '@/interfaces/interfaces'

import TheAside from '@/views/AdminPanel/TheAside/TheAside.vue'
import AdminArticle from '@/views/AdminPanel/AdminArticle/AdminArticle.vue'
import AdminArticles from '@/views/AdminPanel/AdminArticles/AdminArticles.vue'

import parseResponseError from '@/utils/parseResponseError'

import API from '@/api/api'


const categoryStore = useCategoryStore()

const state = reactive<{
  isAdmin: boolean,
  block: IMenusType,
  edit: IArticle
  allArticles: IArticle[]
}>({
  isAdmin: false,
  block: 'article',
  edit: {
    author: '',
    category: '',
    date: '',
    image: '',
    text: '',
    title: '',
    _id: '',
  },
  allArticles: []
})

const MENUS: IMenus = {
  article: { text: 'Add article', value: 'article' },
  articles: { text: 'All articles', value: 'articles' },
}

const category = computed(() => categoryStore.categories)

const switchBlock = (block: IMenusType) => {
  if (state.block !== block) state.block = block
}

const editArticle = (article: IArticle) => {
  state.block = 'article'
  state.edit = { ...article }
}

const getPosts = () => {
  API.getPosts()
    .then(res => {
      state.allArticles = res.data
    })
    .catch(error => {
      console.error(parseResponseError(error))
    })
}

const deleteArticle = async (id: string, title: string) => {
  const isDelete = confirm(`Are you sure you want to delete this post: "${title}"`)

  if (isDelete) {
    await API.deletePost(id)
      .catch(error => console.error(parseResponseError(error)))

    getPosts()
  }
}

const updatePostData = () => {
  state.edit = {
    author: '',
    category: '',
    date: '',
    image: '',
    text: '',
    title: '',
    _id: '',
  }

  getPosts()
}

onMounted(() => {
  API.checkAccess()
    .then(() => state.isAdmin = true)
    .catch(error => console.error(parseResponseError(error)))

  getPosts()
})

watch(
  () => state.block,
  () => {
    if (state.block === MENUS.articles.value && state.edit._id) {
      updatePostData()
    }
  }
)

const head = {
  title: 'Admin Panel',
  description: 'Admin Panel',
}

useSeoMeta({
  title: head.title,
  description: head.description,
  robots: 'noindex, nofollow',
  ogImage: '/media/meta/meta.png',
})
</script>

<style scoped lang="scss">
.admin-panel {
  display: grid;
  grid-template-columns: 260px 1fr;
  width: 100%;

  @media (max-width: 992px) {
    grid-template-columns: 180px 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>