<template>
  <div class="search-post">
    <div class="search-post__wrap">
      <div class="search-post__search-inner">
        <input
          v-model.trim="state.search"
          class="input search-post__search-input"
          placeholder="Search"
        >

        <button
          v-if="state.search"
          class="search-post__search-clear"
          @click="onClearSearch"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 352 512"
          >
            <path
              fill="#c2b26f"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from '~/stores/post'

import debounce from '@/utils/debounce'

const postStore = usePostStore()

const filters = computed(() => postStore.filters)
const state = reactive({
  search: ''
})

const onClearSearch = () => state.search = ''

watch(
  filters,
  (newFilters) => {
    state.search = newFilters.search || ''
  },
  { immediate: true }
)

watch(
  () => state.search,
  (search) => {
    debounce(() => {
      postStore.setFilters({ search, page: 1 })
    }, 500)
  }
)
</script>

<style scoped lang="scss">
.search-post {
  &__wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    .search-post__search-clear {
      margin-left: 20px;
    }
  }

  &__search-inner {
    position: relative;
  }

  &__search-clear {
    position: absolute;
    width: 30px;
    right: 0;
    height: 100%;

    path {
      transition: .3s ease;
    }

    &:hover {
      path {
        fill: #fcdb5a;
      }
    }
  }

  &__search-input {
    padding-right: 30px;
  }

  .input {
    max-width: 300px;
    width: 100%;
  }
}
</style>