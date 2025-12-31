<template>
  <div
    v-if="!isPending"
    class="posts"
  >
    <div v-if="posts.length">
      <div class="posts__lists">
        <ThePost
          v-for="article in posts"
          :key="article._id"
          :post="article"
        />
      </div>

      <ThePaginator
        :max-visible-buttons="3"
        :total-pages="meta.total_pages"
        :current-page="filters.page"
        :on-change-page="onChangePage"
      />
    </div>

    <h3
      v-else
      class="posts__empty"
    >
      <span>OOPS!</span>

      No records found
    </h3>
  </div>

  <ThePreloader v-else />
</template>

<script setup lang="ts">
import { usePostStore } from '~/stores/post'

import ThePost from './components/ThePost/ThePost.vue'
import ThePreloader from '@/components/ThePreloader/ThePreloader.vue'
import ThePaginator from '@/components/ThePaginator/ThePaginator.vue'


const postStore = usePostStore()

const posts = computed(() => postStore.posts)
const isPending = computed(() => postStore.getPending)
const meta = computed(() => postStore.meta)
const filters = computed(() => postStore.filters)

const onChangePage = (page: number) => {
  postStore.setFilters({ page })
}
</script>

<style scoped lang="scss">
.posts {
  &__lists {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding-top: 24px;
    padding-bottom: 21px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  &__empty {
    text-align: center;
    line-height: 1.2;
    font-weight: 100;
    font-size: 30px;
    font-family: Raleway,sans-serif;
    text-transform: uppercase;
    color: #333;
    margin: 60px 0;

    span {
      font-weight: 900;
    }
  }
}
</style>