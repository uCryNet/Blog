<template>
  <footer class="footer">
    <div>
      © {{ date }}
    </div>
    <div>
      Created by

      <router-link
        class="router-link text--sandybrown"
        :to="ROUTES_CONFIG.about.path"
      >
        CryNet
      </router-link>
    </div>
  </footer>
</template>

<script setup lang="ts">
import ROUTES_CONFIG from '@/config/routes'


const date = new Date().getUTCFullYear()
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 62px;
  padding: 30.5px;
  background: #333;
  color: #fff;
  white-space: break-spaces;

  @media (max-width: 576px) {
    margin-top: 50px;
  }

  .router-link {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>