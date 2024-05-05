export type ProjectInfo = {
  id: string
  imageSize: number
  title: string
  subTitle: string
  description: string
  descriptionHightlight?: string[]
  details: {
    label: string
    text: string
  }[]
}
