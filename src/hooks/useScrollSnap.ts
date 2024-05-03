import { useEffect, useRef, useState } from 'react'

const DIVIDER_HEIGHT = 5
const SCROLL_DEBOUNCE_TIME = 150

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
        const newPage = Math.min(Math.max(currentPage + direction, 0), 2) // 새 페이지 계산
        if (newPage !== currentPage) {
          setCurrentPage(newPage)
          if (!outerDivRef.current) return
          outerDivRef.current.scrollTo({
            top: newPage * (window.innerHeight + DIVIDER_HEIGHT),
            left: 0,
            behavior: 'smooth',
          })
        }
      }, SCROLL_DEBOUNCE_TIME)
    }

    const outerDiv = outerDivRef.current
    outerDiv?.addEventListener('wheel', wheelHandler, { passive: false })

    return () => {
      outerDiv?.removeEventListener('wheel', wheelHandler)
      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [currentPage])

  return { outerDivRef, currentPage }
}
