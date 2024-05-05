import { useEffect, useState } from 'react'

type Props = {
  text: string
  speed?: number
}

export const useTypewriter = ({ text, speed = 100 }: Props) => {
  const [visibleText, setVisibleText] = useState('')
  const [count, setCount] = useState(0)
  useEffect(() => {
    const textTimer = setInterval(() => {
      if (count < text.length) {
        setCount((prev) => prev + 1)
        setVisibleText((prev) => prev + text[count])
      } else {
        clearInterval(textTimer)
      }
    }, speed)

    return () => clearInterval(textTimer)
  }, [text, speed, count])

  return visibleText
}
