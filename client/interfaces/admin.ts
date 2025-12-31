export interface IUpdatePost {
  _id: string
  title: string
  category: string
  image: null | File
  text: string
}

export interface ICreatePost {
  title: string
  category: string
  image: File
  text: string
}