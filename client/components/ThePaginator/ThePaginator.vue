<template>
  <div class="pagination">
    <div>
      <button
        :disabled="isInFirstPage"
        class="pagination__item pagination__item--nav"
        @click="onChangePage(1)"
      >
        First
      </button>

      <button
        :disabled="isInFirstPage"
        class="pagination__item pagination__item--nav"
        @click="onChangePage(currentPage - 1)"
      >
        Previous
      </button>
    </div>

    <div class="pagination__nums">
      <button
        v-for="page in pages"
        :key="page.name"
        :disabled="page.isDisabled"
        class="pagination__item"
        :class="{ 'pagination__item--active': isPageActive(page.name) }"
        @click="onChangePage(page.name)"
      >
        {{ page.name }}
      </button>
    </div>

    <div>
      <button
        :disabled="isInLastPage"
        class="pagination__item pagination__item--nav"
        @click="onChangePage(currentPage + 1)"
      >
        Next
      </button>

      <button
        :disabled="isInLastPage"
        class="pagination__item pagination__item--nav"
        @click="onChangePage(totalPages)"
      >
        Last
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, toRefs } from 'vue';


interface IPaginatorProps {
  totalPages: number
  maxVisibleButtons: number
  currentPage: number
  onChangePage: (page: number) => void
}


const props = defineProps<IPaginatorProps>();
const {
  totalPages,
  maxVisibleButtons,
  currentPage,
  onChangePage
} = toRefs(props)


const startPage = computed(() => {
  if (currentPage.value === 1) return 1

  if (currentPage.value === totalPages.value) {
    const result = totalPages.value - maxVisibleButtons.value + 1

    return result <= 0
      ? 1
      : result
  }

  return currentPage.value - 1
});

const endPage = computed(() => {
  return Math.min(startPage.value + maxVisibleButtons.value - 1, totalPages.value)
});

const pages = computed(() => {
  const range = []

  for (let i = startPage.value; i <= endPage.value; i += 1) {
    range.push({
      name: i,
      isDisabled: i === currentPage.value,
    })
  }

  return range
});

const isInFirstPage = computed(() => {
  return currentPage.value === 1
});

const isInLastPage = computed(() => {
  return currentPage.value === totalPages.value
});

const isPageActive = (page: number) => {
  return currentPage.value === page
};

</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #2c3e50;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  &__item {
    width: 80px;
    height: 30px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: #4f4a37;
    background: transparent;
    border: 2px solid #fcdb5a;
    border-radius: 30px;
    transition: background-color .25s ease-in-out, border-color .25s ease-in-out;

    &:not(:last-child) {
      margin-right: 12px;
    }

    &:hover:not(:disabled) {
      background: #fcdb5a;
    }

    &--nav {
      border-radius: 30px;
    }

    &--active {
      background: #fcdb5a;
    }

    &:disabled:not(.pagination__item--active) {
      cursor: not-allowed;
      opacity: .7;
    }
  }

  &__nums {
    margin: 0 12px;

    @media (max-width: 768px) {
      margin: 21px 12px;
    }
  }
}
</style>