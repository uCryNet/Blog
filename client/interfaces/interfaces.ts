export type IMenusType = 'article' | 'articles'

export interface IMenus {
  [key: string]: {
    text: string
    value: IMenusType
  }
}