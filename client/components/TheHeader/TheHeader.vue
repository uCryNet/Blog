<template>
  <header class="header">
    <TheMenu />

    <NuxtLink
      class="header__info container router-link text--sandybrown"
      :to="ROUTES_CONFIG.root.path"
    >
      <span class="title-think">
        YET ANOTHER
      </span>

      <span class="title-big-bold">
        DEVELOPER
      </span>

      <span>🇺🇦</span>
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
import TheMenu from "@/components/TheHeader/components/HeaderMenu/HeaderMenu.vue"
import ROUTES_CONFIG from '@/config/routes'
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  background: center / cover no-repeat url("~/assets/img/bg/header.webp");
  height: 100%;
  min-height: 310px;
  max-height: 310px;
  margin-bottom: 60px;
  overflow: hidden;

  @media (max-width: 576px) {
    max-height: unset;
    margin-bottom: 30px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: max-content;
    margin-top: auto;
    margin-bottom: 60px;
    margin-left: 0;
    padding-left: 6%;
    word-wrap: break-word;

    @media (max-width: 768px) {
      margin-bottom: 40px;
      width: 100%;
    }

    @media (max-width: 576px) {
      text-align: center;
    }

    .title-think {
      margin-bottom: 10px;
    }

    .title-big-bold {
      margin-bottom: 20px;
    }
  }
}
</style>
