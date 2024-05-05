export type Page = {
  id: string
  name: string
  index?: number
  items?: Page[]
}

export const PAGE_SIZE = 9

export const pages: Page[] = [
  { id: 'home', name: 'Home', index: 0 },
  { id: 'timeLine', name: 'TimeLine', index: 1 },
  {
    id: 'projects',
    name: 'Projects',
    index: 2,
    items: [
      { id: 'ideaNetworking', name: 'Idea Networking' },
      { id: 'traB', name: 'TraB' },
      { id: 'walgaAdmin', name: 'WalgaAdmin' },
      { id: 'walga', name: 'Walga' },
    ],
  },
]
