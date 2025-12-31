export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const apiUrl = config.public.vueAppApi

  const api = $fetch.create({
    baseURL: apiUrl,
    credentials: 'include',
  })

  return {
    provide: {
      api
    }
  }
})