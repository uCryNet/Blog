<template>
  <NuxtLink
    class="post"
    :to="linkToPost"
  >
    <img
      class="post__image"
      :src="isError
        ? NotFoundImage
        : poster"
      :alt="title"
      @error="onError"
    >

    <div class="post__time">
      <div class="post__date">
        <strong>
          {{ articleDate[0] }}
        </strong>

        {{ articleDate[1] }}.{{ articleDate[2] }}
      </div>
    </div>

    <div class="post__text">
      <h4 class="post__category">
        {{ category }}
      </h4>

      <h1 class="post__title">
        {{ title }}
      </h1>

      <div
        class="post__desc"
        v-html="getDescription"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { IArticle } from "~/interfaces/interfaces";

import NotFoundImage from "~/assets/img/post/404.webp";
import ROUTES_CONFIG from '@/config/routes'


interface IPostProps {
  post: IArticle
}

const props = defineProps<IPostProps>()
const { post } = toRefs(props)
const {
  _id: id,
  text,
  image,
  date,
  category,
  title,
} = post.value

const config = useRuntimeConfig()
const server = config.public.vueAppApiHost

const isError = ref<boolean>(false)

const articleDate = date.split(".")
const poster = server + image
const linkToPost = ROUTES_CONFIG.article.path
  .replace(':category', category)
  .replace(':id', id)

const onError = () => isError.value = true
const getDescription = text
  .replace(/(<([^>]+)>)/ig,'')
  .substring(0, 100)
  .trim()
  + '...'
</script>

<style lang="scss" scoped>
.post {
  position: relative;
  display: block;

  &:hover {
    .post {
      color: #000;

      &__text {
        top: -100px;
      }

      &__title {
        color: #fcdb5a;
      }

      &__image {
        opacity: .9;
      }
    }
  }

  &__image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
    transition: .3s ease;

    @media (max-width: 1200px) and (min-width: 992px) {
      max-height: 200px;
    }

    @media (max-width: 768px) and (min-width: 576px) {
      max-height: 200px;
    }
  }

  &__time {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    left: 20px;
    min-width: 60px;
    min-height: 65px;
    background: #fcdb5a;
  }

  &__date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 900;
    font-family: "Raleway", sans-serif;
    color: #c2b26f;

    strong {
      font-size: 23px;
      color: #333;
      margin-bottom: 6px;
      margin-top: -5px;
      font-weight: 900;
    }
  }

  &__text {
    position: relative;
    top: -50px;
    margin-left: 30px;
    margin-right: 30px;
    padding: 30px 20px 20px;
    text-align: center;
    background: #fff;
    border-radius: 5px;
    transition: .3s ease;

    @media (max-width: 1200px) and (min-width: 992px) {
      top: -40px;
      margin-left: 15px;
      margin-right: 15px;
      padding: 20px 10px 10px;
    }

    @media (max-width: 768px) {
      top: -40px;
      margin-left: 15px;
      margin-right: 15px;
      padding: 20px 10px 10px;
    }
  }

  &__category {
    color: #ddc051;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  &__title {
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    line-height: calc(24px / 18px);
    color: #333;
    margin-bottom: 10px;
    font-weight: 700;
    transition: .3s ease;
  }

  &__desc {
    font-size: 14px;
    font-weight: 400;
    color: #666;
    line-height: 22.4px;
  }
}
</style>