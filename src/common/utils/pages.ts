export type Page = {
  name: string
  index: number
  items?: Page[]
}

export const PAGE_SIZE = 9

export const pages: Page[] = [
  { name: 'Home', index: 0 },
  { name: 'History', index: 1 },
  {
    name: 'Projects',
    index: 2,
    items: [
      { name: 'Idea Networking', index: 3 },
      { name: 'TraB', index: 4 },
      { name: 'WalgaAdmin', index: 5 },
      { name: 'Walga', index: 6 },
    ],
  },
  { name: 'Labs', index: 3 },
  { name: 'Contact', index: 4 },
]
