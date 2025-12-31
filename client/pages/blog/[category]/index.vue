<template>
  <div class="articles">
    <div class="title text--center mb--20">
      <template v-if="!route.params.category">
        BLOG
      </template>

      <template v-else>
        {{ stringValidate(route.params.category) }}
      </template>
    </div>

    <SearchPost />

    <ThePosts />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const sanitizeUrlParam = (param) => {
  return decodeURIComponent(param)
    .replace(/[<>"'&]/g, '')
    .trim()
}

const category = sanitizeUrlParam(route.params.category)?.toUpperCase() || 'Blog'
const head = {
  title: category,
  description: `All articles and notes about ${category}`,
}

useSeoMeta({
  title: head.title,
  ogTitle: head.title,
  description: head.description,
  ogDescription: head.description,
  twitterCard: 'summary_large_image',
  ogImage: '/media/meta/meta.png',
})
</script>

<style scoped lang="scss">
.articles {
  &__search {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    .btn {
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