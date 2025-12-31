<template>
  <div class="header-menu">
    <div class="header-menu__category">
      <NuxtLink
        class="router-link"
        :to="ROUTES_CONFIG.root.path"
      >
        Home
      </NuxtLink>
    </div>

    <div
      v-for="categoryUnit in category"
      :key="categoryUnit.title"
      class="header-menu__category"
    >
      <div class="router-link">
        {{ categoryUnit.title }}
      </div>

      <div class="header-menu__subcategory-lists">
        <div
          v-for="subCategoriesUnit in categoryUnit.subCategories"
          :key="subCategoriesUnit.name"
          class="header-menu__subcategory-unit"
        >
          <NuxtLink
            class="header-menu__subcategory-unit-link"
            :to="ROUTES_CONFIG.articles.path.replace(':category?', subCategoriesUnit.name)"
            @click="onChangeCategory(subCategoriesUnit.name)"
          >
            {{ subCategoriesUnit.name }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="header-menu__category">
      <NuxtLink
        class="router-link"
        :to="ROUTES_CONFIG.about.path"
      >
        About
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '~/stores/category'
import { usePostStore } from '~/stores/post'
import { computed } from 'vue'

import ROUTES_CONFIG from '@/config/routes'

const categoryStore = useCategoryStore()
const postStore = usePostStore()

const category = computed(() => categoryStore.categories)

const onChangeCategory = (category: string) => {
  postStore.setFilters({ category })
}
</script>

<style lang="scss" scoped>
.header-menu {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 25px;
  text-align: center;
  color: #fff;

  @media (max-width: 576px) {
    flex-direction: column;
    padding-left: 8px;
    padding-right: 8px;
  }

  .router-link {
    text-transform: uppercase;
    font-weight: bold;

  }

  &__category {
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding: 3px 8px;

    div.router-link {
      cursor: default;
    }

    @media (max-width: 576px) {
      margin-bottom: 15px;
    }

    &:hover {
      .header-menu__subcategory-lists {
        opacity: 1;
        visibility: visible;
      }
    }

    &:not(:last-child) {
      &:after {
        content: "|";
        position: absolute;
        right: -3px;
        top: 1px;

        @media (max-width: 576px) {
          display: none;
        }
      }
    }
  }

  &__subcategory-lists {
    position: absolute;
    top: calc(100% + 10px);
    left: -10px;
    text-align: left;
    padding: 10px 20px;
    background-color: #282828;
    min-width: 150px;
    opacity: 0;
    visibility: hidden;
    transition: opacity .2s ease-in-out,margin-top .3s ease-in-out,visibility .2s ease-in-out;
    border-radius: 5px;
    z-index: 1;

    @media (max-width: 576px) {
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  &__subcategory-unit {
    text-transform: uppercase;

    &:hover {
      color: #ddc051;
    }
  }

  &__subcategory-unit-link {
    padding: 8px 0;
    display: block;
  }

  .router-link {
    transition: .3s ease;
  }
}
</style>
