<template>
  <div>
    <TheHeader/>
    <div class="container">
      <NuxtPage/>
    </div>
    <TheFooter/>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import { useCategoryStore } from '~/stores/category'
import { usePostStore } from '~/stores/post'

import ROUTES_CONFIG from '@/config/routes'
import API from '@/api/api'
import parseResponseError from '@/utils/parseResponseError'


const categoryStore = useCategoryStore()
const postStore = usePostStore()
const route = useRoute()

onMounted(async () => {
  try {
    const res = await API.getCategory()
    categoryStore.setCategories(res)
  } catch (error) {
    console.error(parseResponseError(error))
    categoryStore.setCategories([])
  }
})

const routes = computed(() => route.fullPath)
const filters = computed(() => postStore.filters)

watch(
  routes,
  (newRoute) => {
    const payload = newRoute === ROUTES_CONFIG.root.path
      ? { search: '', category: '', page: 1 }
      : { category: route.params.category, page: 1 }

    postStore.setFilters(payload)
  },
  { deep: true, immediate: true }
)

watch(
  filters,
  async (newFilters) => {
    try {
      postStore.setPending(true)

      const res = await API.getPosts(newFilters)
      postStore.setPosts(res)
    } catch (error) {
      console.error(parseResponseError(error))
      postStore.setPosts({ data: [], meta: { total_pages: 1 } })
    } finally {
      postStore.setPending(false)
    }
  },
  { deep: true, immediate: true }
)
</script>