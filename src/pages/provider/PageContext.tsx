import { createContext, useContext, PropsWithChildren, RefObject } from 'react'
import { useScrollSnap } from '../../hooks/useScrollSnap'

interface PageContextType {
  outerDivRef: RefObject<HTMLDivElement>
  currentPage: number
  onChangePage: (page: number) => void
}

const defaultValues: PageContextType = {
  outerDivRef: { current: null },
  currentPage: 0,
  onChangePage: () => {},
}

const PageContext = createContext<PageContextType>(defaultValues)

export const PageProvider = ({ children }: PropsWithChildren<{}>) => {
  const { outerDivRef, currentPage, setCurrentPage } = useScrollSnap()

  const onChangePage = (page: number) => {
    setCurrentPage(page)
    outerDivRef.current?.scrollTo({
      top: page * window.innerHeight,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <PageContext.Provider value={{ outerDivRef, currentPage, onChangePage }}>
      {children}
    </PageContext.Provider>
  )
}

export const usePage = () => useContext(PageContext)
