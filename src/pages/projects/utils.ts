export type ProjectFrontInfo = {
  imageSize: number
  date: string
  description: string
  detailExplain?: string
  descriptionHightlight?: string[]
  details: {
    label: string
    text: string
  }[]
}

export type ProjectTaskDetail = {
  frontEnd?: ProjectInfoContent
  backEnd?: ProjectInfoContent
  etc?: InfoContent
}

export type ProjectInfoContent = InfoContent & {
  contribute: number
}

export type InfoContent = {
  contents: string[]
  highlights?: string[]
}

export type ProjectBackInfo = {
  taskDetails: ProjectTaskDetail
  takeaway?: InfoContent
}

export type ProjectInfo = {
  id: string
  title: string
  front: ProjectFrontInfo
  back?: ProjectBackInfo
}
