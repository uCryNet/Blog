<template>
  <form
    class="admin-login"
    @submit.prevent="onSubmit"
  >
    <label class="admin-login__field">
      <input
        v-model.lazy.trim="state.login"
        required
        name="admin-login"
        placeholder="Login"
        class="input login__input"
      >
    </label>

    <label class="admin-login__field">
      <input
        v-model.lazy.trim="state.password"
        required
        name="password"
        placeholder="Password"
        class="input login__input"
        type="password"
      >
    </label>

    <div
      v-if="state.error.isError"
      class="admin-login__error"
    >
      {{ state.error.message }}
    </div>

    <button
      type="submit"
      class="btn btn--big login__btn"
    >
      LOGIN
    </button>
  </form>
</template>

<script setup lang="ts">
import API from "@/api/api"
import parseResponseError from "@/utils/parseResponseError"
import ROUTES_CONFIG from '@/config/routes'

const state = reactive<{
  isAuthorized: boolean
  login: string
  password: string
  error: {
    isError: boolean
    message: string
  }
}>({
  isAuthorized: false,
  login: '',
  password: '',
  error: {
    isError: false,
    message: ''
  }
})

onMounted(async () => {
  try {
    const { isAdmin } = await API.checkAccess()

    if (isAdmin) {
      navigateTo(ROUTES_CONFIG.adminPanel.path)
    }
  } catch (error) {
    console.error(parseResponseError(error))
  }
})

watch(
  () => state.isAuthorized,
  async (isAuthorized) => {
    if (!isAuthorized) return

    try {
      const res = await API.checkAccess()

      const { isAdmin } = res

      if (isAdmin) {
        navigateTo(ROUTES_CONFIG.adminPanel.path)
      } else {
        navigateTo(ROUTES_CONFIG.root.path)
      }
    } catch (error) {
      navigateTo(ROUTES_CONFIG.root.path)
      console.error(parseResponseError(error))
    }
  }
)

const onSubmit = async () => {
  const { login, password } = state

  try {
    await API.login({ login, password })
    state.isAuthorized = true
  } catch (error) {
    const message = parseResponseError(error)
    state.error.isError = true
    state.error.message = message
  }
}

const head = {
  title: 'Login',
  description: 'Login - Admin Panel',
}

useSeoMeta({
  title: head.title,
  description: head.description,
  robots: 'noindex, nofollow',
  ogImage: '/media/meta/meta.png',
})
</script>

<style lang="scss" scoped>
.admin-login {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
  margin: auto;

  &__field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 8px;
  }

  &__input {
    margin: 0 auto;
  }

  &__btn {
    margin-top: 8px;
  }

  &__error {
    width: 100%;
    color: #fff;
    padding: 6px 8px;
    background: #ff7c7c;
    border-radius: 5px;
    box-sizing: border-box;
  }
}
</style>