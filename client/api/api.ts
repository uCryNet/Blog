import type { IFiltersStore } from '@/interfaces/store'
import type { IArticlesResponse } from '@/interfaces/article'
import type { ICreatePost, IUpdatePost } from '@/interfaces/admin'

const getPosts = (data?: IFiltersStore) => {
  const { $api } = useNuxtApp()

  return $api<IArticlesResponse>('post/get-all', { // Без apiUrl!
    method: 'POST',
    body: data
  })
}

const getOnePost = (uri: string) => {
  const { $api } = useNuxtApp()

  return $api(`post/get-one/${uri}`)
}

const updatePost = (form: IUpdatePost) => {
  const { $api } = useNuxtApp()
  const formData = new FormData()

  formData.append('title', form.title)
  formData.append('text', form.text)
  formData.append('category', form.category)
  formData.append('id', form._id)
  if (form.image) formData.append('image', form.image)

  return $api('post/update/', {
    method: 'PUT',
    body: formData
  })
}

const createPost = (form: ICreatePost) => {
  const { $api } = useNuxtApp()
  const formData = new FormData()

  formData.append('title', form.title)
  formData.append('text', form.text)
  formData.append('category', form.category)
  if (form.image) formData.append('image', form.image)

  return $api('post/create', {
    method: 'POST',
    body: formData
  })
}

const login = (auth: { login: string; password: string }) => {
  const { $api } = useNuxtApp()

  return $api('user/login/', {
    method: 'POST',
    body: auth
  })
}

const search = (search: string) => {
  const { $api } = useNuxtApp()

  return $api('post/search', {
    method: 'POST',
    body: { search }
  })
}

const checkAccess = () => {
  const { $api } = useNuxtApp()

  return $api('user/check-access')
}

const getCategory = () => {
  const { $api } = useNuxtApp()

  return $api('category/get-all')
}

const deletePost = (id: string) => {
  const { $api } = useNuxtApp()

  return $api(`post/delete/${id}`, {
    method: 'DELETE'
  })
}

const uploadImage = (data: FormData) => {
  const { $api } = useNuxtApp()

  return $api('file/upload', {
    method: 'POST',
    body: data
  })
}

export default {
  getPosts,
  getOnePost,
  updatePost,
  createPost,
  login,
  search,
  checkAccess,
  getCategory,
  deletePost,
  uploadImage
}
