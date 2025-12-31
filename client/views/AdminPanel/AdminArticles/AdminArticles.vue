<template>
  <div class="all-articles">
    <div class="all-articles__lists-header">
      <div
        v-for="headerTitle in HEADER"
        :key="headerTitle"
        class="all-articles__list-header"
      >
        {{ headerTitle }}
      </div>
    </div>

    <div class="all-articles__lists">
      <div
        v-for="article in lists"
        :key="article._id"
        class="all-articles__list"
      >
        <div class="all-articles__list-title">
          {{ article.title }}
        </div>

        <div class="all-articles__list-date">
          {{ article.date }}
        </div>

        <div class="all-articles__list-category">
          {{ article.category }}
        </div>

        <button
          class="all-articles__list-nav all-articles__list-nav-edit"
          @click="editArticle(article)"
        >
          Update
        </button>

        <button
          class="all-articles__list-nav all-articles__list-nav-del"
          @click="deleteArticle(article._id, article.title)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IArticle } from '@/interfaces/interfaces'


interface IAdminArticlesProps {
  editArticle: (article: IArticle) => void
  deleteArticle: (id: string, title: string) => void
  lists: IArticle[]
}

defineProps<IAdminArticlesProps>()

const HEADER = ['Name', 'Date', 'Categories', 'Update', 'Delete']
</script>

<style scoped lang="scss">
.all-articles {

  &__lists-header {
    font-size: 14px;
    color: #333;
    font-weight: 900;
    margin-bottom: 25px;
  }

  &__lists-header,
  &__list {
    display: grid;
    grid-template-columns: 1.5fr 120px 120px 130px 130px;
    grid-gap: 20px;
  }

  &__list-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__list-category {
    text-transform: uppercase;
  }

  &__list {
    margin-bottom: 10px;
    line-height: 1.2;
  }

  &__list-nav {
    text-align: left;
    transition: .3s ease;

    &:hover {
      opacity: .6;
    }
  }

  &__list-nav-edit {
    color: #ddc051;
  }

  &__list-nav-del {
    color: red;
  }
}
</style>