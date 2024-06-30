import { useEffect, useRef, useState } from 'react'
import { PAGE_SIZE } from '../common/utils/pages'

const SCROLL_DEBOUNCE_TIME = 100

export const useScrollSnap = () => {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const outerDivRef = useRef<HTMLDivElement>(null)
  const scrollEndTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScrollEnd = (direction: number): void => {
      const newPage: number = Math.max(
        0,
        Math.min(currentPage + direction, PAGE_SIZE - 1),
      )
      if (newPage !== currentPage) {
        setCurrentPage(newPage)
        outerDivRef.current?.scrollTo({
          top: newPage * window.innerHeight,
          behavior: 'smooth',
        })
      }
    }

    const wheelHandler = (e: WheelEvent): void => {
      e.preventDefault()
      if (!outerDivRef.current) return

      const direction: number = e.deltaY > 0 ? 1 : -1

      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current)
      }

      scrollEndTimeoutRef.current = setTimeout(
        () => handleScrollEnd(direction),
        SCROLL_DEBOUNCE_TIME,
      )
    }

    const keyHandler = (e: KeyboardEvent): void => {
      e.preventDefault()
      if (!outerDivRef.current) return

      const direction: number =
        e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0

      if (direction !== 0) {
        if (scrollEndTimeoutRef.current) {
          clearTimeout(scrollEndTimeoutRef.current)
        }

        scrollEndTimeoutRef.current = setTimeout(
          () => handleScrollEnd(direction),
          SCROLL_DEBOUNCE_TIME,
        )
      }
    }

    const outerDiv = outerDivRef.current
    outerDiv?.addEventListener('wheel', wheelHandler, { passive: false })
    window.addEventListener('keydown', keyHandler)

    return () => {
      outerDiv?.removeEventListener('wheel', wheelHandler)
      window.removeEventListener('keydown', keyHandler)
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current)
      }
    }
  }, [currentPage])

  return { outerDivRef, currentPage, setCurrentPage }
}
