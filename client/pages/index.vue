<template>
  <div>
    <div class="mb--20">
      <h2 class="title text--center mb--20">
        ARTICLES
        <span> & NOTES</span>
      </h2>
      <div class="text text--center">
        Let's try to find
      </div>
    </div>

    <SearchPost />

    <ThePosts />
  </div>
</template>

<script setup lang="ts">
const head = {
  title: 'The CryNet',
  description: 'Yet another developer',
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