<template>
  <div class="article">
    <h1 class="article__title title">
      {{ post.title }}
    </h1>

    <div class="article__info">
      <div class="article__date">
        {{ post.date }}
      </div>

      <div class="article__category">
        {{ post.category.toUpperCase() }}
      </div>
    </div>

    <div
      class="article__text"
      v-html="post.text"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { highlightAll } from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-okaidia.css'


import parseResponseError from '@/utils/parseResponseError'
import API from '@/api/api'

const route = useRoute()
const config = useRuntimeConfig()

const server = config.public.vueAppApiHost
const id = String(route.params.id || '')

const { data: post } = await useAsyncData(`post-${id}`, () => {
  try {
    return API.getOnePost(id)
  } catch (err) {
    console.error(parseResponseError(err))
  }
})

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found',
  })
}

const description = post.value?.text
  .replace(/(<([^>]+)>)/ig, '')
  .substring(0, 150)
  .trim()

useSeoMeta({
  title: post.value.title,
  ogTitle: post.value.title,
  description: description,
  ogDescription: description,
  twitterCard: 'summary_large_image',
  ogImage: server + post.value.image,
})

onMounted(() => {
  highlightAll()
})
</script>

<style lang="scss" scoped>
.article {
  max-width: 992px;
  margin: auto;

  &__title {
    margin-bottom: 50px;
    text-align: center;

    @media (max-width: 576px) {
      margin-bottom: 20px;
      font-size: 25px;
    }
  }

  &__text {
    &:deep() {
      p {
        font-family: "Open Sans", sans-serif;
        margin-block-start: 1em;
        margin-block-end: 1em;
        line-height: 1.6;
        font-weight: 400;
      }

      blockquote {
        font-size: 17px;
        font-style: italic;
        color: #696248;
        border-left: 5px solid #fcdb5a;
        margin-top: 40px;
        margin-bottom: 40px;
        padding-left: 20px;
      }

      a {
        color: #baa245;

        &:focus,
        &:hover {
          color: #fcdb5a;
        }
      }

      pre {
        max-height: 400px;
      }

      code:not([class]) {
        background-color: #e8e8e8;
        border-radius: 3px;
        padding: 0.1rem 0.2rem;
      }

      audio,
      iframe,
      video,
      img {
        max-width: 100%;
        height: 100%;
      }

      ul, ol {
        padding-left: 15px;
        margin-left: 15px;
      }

      ol {
        counter-reset: num;

        li {
          &:before {
            counter-increment: num;
            content: counter(num) ".";
            float: left;
            margin-left: -15px;
            margin-right: 5px;
          }
        }
      }

      ul li {
        &:before {
          content: "";
          width: 0;
          height: 0;
          margin-top: 6px;
          border: 2px solid #555;
          float: left;
          margin-left: -15px;
          margin-right: 5px;
        }
      }

      ol li,
      ul li {
        line-height: 1.25rem;
      }

      em {
        font-style: italic;
      }

      h1 {
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        font-weight: bold;
      }

      h2 {
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        font-weight: bold;
      }

      h3 {
        display: block;
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        font-weight: bold;
      }

      h4 {
        display: block;
        margin-block-start: 1.33em;
        margin-block-end: 1.33em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        font-weight: bold;
      }

      h5 {
        display: block;
        font-size: 0.83em;
        margin-block-start: 1.67em;
        margin-block-end: 1.67em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        font-weight: bold;
      }

      h6 {
        display: block;
        font-size: 0.67em;
        margin-block-start: 2.33em;
        margin-block-end: 2.33em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        font-weight: bold;
      }
    }
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }

  &__category,
  &__date {
    font-size: 13px;
  }

  &__category {
    color: #ddc051;
  }

  &__date {
    color: #c1c1c1;
  }
}
</style>