import { RefObject, useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (
  targetRef: RefObject<HTMLDivElement>,
) => {
  const [isInViewport, setIsInViewport] = useState(false)
  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    if (!observer.current) {
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          setIsInViewport(entry.isIntersecting)
        })
      }

      observer.current = new window.IntersectionObserver(observerCallback, {
        threshold: 0.1,
      })
    }

    if (targetRef.current) {
      observer.current.observe(targetRef.current)
    }

    return () => {
      if (observer.current && targetRef.current) {
        observer.current.unobserve(targetRef.current)
      }
    }
  }, [targetRef])

  return isInViewport
}
