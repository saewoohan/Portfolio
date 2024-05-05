import { useEffect, useRef, useState } from 'react'

const DIVIDER_HEIGHT = 5
const SCROLL_DEBOUNCE_TIME = 150
const MAX_PAGE = 5

export const useScrollSnap = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const outerDivRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault()

      if (!outerDivRef.current) return

      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const direction = e.deltaY > 0 ? 1 : -1
        handleScroll(direction)
      }, SCROLL_DEBOUNCE_TIME)
    }

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault()

        if (!outerDivRef.current) return

        if (scrollTimeoutRef.current !== null) {
          clearTimeout(scrollTimeoutRef.current)
        }

        const direction = e.key === 'ArrowDown' ? 1 : -1
        scrollTimeoutRef.current = setTimeout(
          () => handleScroll(direction),
          SCROLL_DEBOUNCE_TIME,
        )
      }
    }

    const handleScroll = (direction: number) => {
      const newPage = Math.min(Math.max(currentPage + direction, 0), MAX_PAGE)
      if (newPage !== currentPage) {
        setCurrentPage(newPage)
        outerDivRef.current?.scrollTo({
          top: newPage * (window.innerHeight + DIVIDER_HEIGHT),
          left: 0,
          behavior: 'smooth',
        })
      }
    }

    const outerDiv = outerDivRef.current
    outerDiv?.addEventListener('wheel', wheelHandler, { passive: false })
    window.addEventListener('keydown', keyHandler)

    return () => {
      outerDiv?.removeEventListener('wheel', wheelHandler)
      window.removeEventListener('keydown', keyHandler)
      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [currentPage])

  return { outerDivRef, currentPage, setCurrentPage }
}
