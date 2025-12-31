import { defineStore } from 'pinia'
import type { IFiltersStore } from '@/interfaces/store'
import type { IArticlesResponse, IArticle } from '@/interfaces/article'

export const usePostStore = defineStore('post', () => {
  const posts = ref<IArticle[]>([])
  const isPending = ref(false)
  const meta = ref({
    total_pages: 1
  })
  const filters = ref<IFiltersStore>({
    page: 1,
    limit: 9,
    search: '',
    category: ''
  })

  function setPosts(data: IArticlesResponse) {
    posts.value = data.data
    meta.value = data.meta
  }

  function setFilters(data: Partial<IFiltersStore>) {
    Object.assign(filters.value, data)
  }

  function setPending(status: boolean) {
    isPending.value = status
  }

  return {
    posts,
    filters,
    meta,
    isPending,
    setPosts,
    setFilters,
    setPending
  }
})
