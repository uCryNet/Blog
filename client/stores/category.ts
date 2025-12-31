import { defineStore } from 'pinia'
import type { ICategory } from '@/interfaces/category'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<ICategory[]>([])

  function setCategories(data: ICategory[]) {
    categories.value = data
  }

  return {
    categories,
    setCategories
  }
})
