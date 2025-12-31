<template>
  <div class="admin-article">
    <form @submit.prevent="getContent">
      <input
        v-model.lazy.trim="state.title"
        required
        placeholder="Title"
        class="input admin-article__title"
      >

      <select
        v-model="state.category"
        name="category"
        required
        class="select admin-article__select"
      >
        <optgroup
          v-for="categoryUnit in allCategory"
          :key="categoryUnit.title"
          :label="categoryUnit.title"
        >
          <option
            v-for="subCategoriesUnit in categoryUnit.subCategories"
            :key="subCategoriesUnit.name"
            :value="subCategoriesUnit.name"
          >
            {{ subCategoriesUnit.name }}
          </option>
        </optgroup>
      </select>

      <div class="admin-article__text">
        <ClientOnly>
          <Editor
            v-model="state.text"
            :api-key="vueAppTinymceKey"
            :init="CONFIG"
          />
        </ClientOnly>
      </div>

      <input
        :required="!state?._id"
        accept="image/*"
        class="admin-article__preview"
        type="file"
        @change="onFileChanged($event)"
      >

      <button
        type="submit"
        class="btn btn--yellow btn--big"
      >
        <template v-if="state?._id">
          UPDATE
        </template>

        <template v-else>
          ADD
        </template>
      </button>
    </form>

    <button
      v-if="state?._id"
      class="btn btn--red btn--big mt--20"
      @click="onCancel"
    >
      CANCEL
    </button>
  </div>
</template>

<script setup lang="ts">
// Vendor
import Editor from '@tinymce/tinymce-vue'

// Store
import { useCategoryStore } from '@/stores/category'

// Types
import type { IArticle, ICategory } from '@/interfaces/interfaces'
import type { ICreatePost, IUpdatePost } from '@/interfaces/admin'

// Utils
import API from '@/api/api'
import parseResponseError from '@/utils/parseResponseError'

interface IAdminArticle {
  updatePostData: () => void
  category: ICategory[]
  edit: IArticle
}

const props = defineProps<IAdminArticle>()

const categoryStore = useCategoryStore()
const config = useRuntimeConfig()
const { vueAppTinymceKey } = config.public

const allCategory = computed(() => categoryStore.categories)

const state = ref<IUpdatePost>({
  _id: '',
  title: '',
  category: 'css',
  image: null,
  text: '',
})

const CONFIG = {
  height: 500,
  images_upload_handler: (blobInfo: any, success: any) => {
    const formData = new FormData()
    formData.append('file', blobInfo.blob(), blobInfo.filename())

    API.uploadImage(formData)
      .then(res => success(res.link))
      .catch(error => console.error(parseResponseError(error)))
  },
  codesample_global_prismjs: true,
  relative_urls: false,
  menubar: true,
  plugins: [
    'advlist autolink lists link image',
    'code',
    'media table code codesample'
  ],
  toolbar:
    'undo redo | formatselect | bold italic backcolor | \
    alignleft aligncenter alignright alignjustify | \
    bullist numlist outdent indent | removeformat | codesample'
}

const clearPostData = () => {
  state.value = {
    _id: '',
    title: '',
    category: 'css',
    image: null,
    text: '',
  }
}

const onFileChanged = ($event: Event) => {
  const target = $event.target as HTMLInputElement
  state.value.image = target.files ? target.files[0] : null
}

const onCancel = () => {
  props.updatePostData()
  clearPostData()
}

const getContent = async () => {
  if (!state.value.text) {
    alert('Fill all fields!')
    return
  }

  const isUpdate = props.edit?._id
  const data = { ...state.value }

  try {
    if (isUpdate) {
      await API.updatePost(data)
      alert('Article updated!')
    } else {
      await API.createPost(data as ICreatePost)
      alert('Article added!')
    }

    props.updatePostData()
    clearPostData()
  } catch (error) {
    console.error(parseResponseError(error))
  }
}

onMounted(() => {
  if (props.edit?._id) {
    state.value = {
      _id: props.edit._id,
      title: props.edit.title,
      category: props.edit.category,
      image: null,
      text: props.edit.text,
    }
  }
})
</script>

<style scoped lang="scss">
.admin-article {
  display: flex;
  flex-direction: column;

  &__preview,
  &__select,
  &__text,
  &__title {
    margin-bottom: 25px;
  }

  &__select {
    text-transform: uppercase;
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}
</style>