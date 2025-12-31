<!-- NOT USED -->
<!-- NOT USED -->
<!-- NOT USED -->
<template>
  <div>
    <TheHeader/>
    <div class="container">
      <div class="not-found">
        <div class="title-think">
          404 PAGE NOT FOUND
        </div>
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/TheHeader/TheHeader.vue'
import TheFooter from '~/components/TheFooter/TheFooter.vue'
</script>
<style scoped lang="scss">
.not-found {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;

  .title-think {
    color: #666;
    margin: 10px 0;
  }
}
</style>