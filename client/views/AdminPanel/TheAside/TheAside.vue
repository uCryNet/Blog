<template>
  <div class="aside">
    <h6 class="title-block">
      MENU
    </h6>

    <ul class="aside__lists">
      <li
        v-for="menu in Object.values(menus)"
        :key="menu.value"
      >
        <div
          :class="[block === menu.value && 'aside__active']"
          @click="switchBlock(menu.value)"
        >
          {{ menu.text }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { IMenus, IMenusType } from "@/interfaces/interfaces";


interface IAsideProps {
  menus: IMenus
  switchBlock: (value: IMenusType) => void
  block: IMenusType
}

defineProps<IAsideProps>()
</script>

<style scoped lang="scss">
.aside {
  display: flex;
  flex-direction: column;

  &__lists {
    li {
      color: #ddc051;
      cursor: pointer;
    }
  }

  &__active {
    text-decoration: underline;
    pointer-events: none;
  }
}
</style>