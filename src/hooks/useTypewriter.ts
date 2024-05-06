import { useEffect, useState } from 'react'

type Props = {
  text: string
  speed?: number
  restart?: boolean
}

export const useTypewriter = ({
  text,
  speed = 100,
  restart = false,
}: Props) => {
  const [visibleText, setVisibleText] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    setVisibleText('')
    setCount(0)
  }, [restart, text]) // 재시작 트리거가 변경될 때마다 리셋

  useEffect(() => {
    if (count < text.length) {
      const textTimer = setTimeout(() => {
        setVisibleText(text.slice(0, count + 1))
        setCount((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(textTimer)
    }
  }, [text, speed, count])

  return visibleText
}
