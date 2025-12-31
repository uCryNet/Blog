export interface ICategory {
  _id: string
  subCategories: Array<{ name: string }>
  title: string
}