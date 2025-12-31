export interface IArticle {
  _id: string
  title: string
  text: string
  author: string
  image: string
  date: string
  category: string
}

export interface IArticlesResponse {
  data: IArticle[]
  meta: {
    total_pages: number
  }
}
