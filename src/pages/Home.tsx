import { useRef, useEffect } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { IconButton } from '@mui/material'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { HighlightText } from '../common/components/HightlightSpan'

const fullText = 'Hello, World!'
const subTitle = '끈기의 개발자 한승우의 포트폴리오입니다.'

type Props = {
  onClickIcon?: (page: number) => void
}

export const Home = ({ onClickIcon }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isInViewport = useIntersectionObserver(ref)
  const visibleText = useTypewriter({
    text: fullText,
    speed: 100,
    restart: isInViewport,
  })
  const visibleSubText = useTypewriter({
    text: subTitle,
    speed: 150,
    restart: isInViewport,
  })
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const drawLight = (x: number, y: number) => {
      const radius = 30
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2, true)
      ctx.fill()
    }

    const fadeOut = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      requestAnimationFrame(fadeOut)
    }

    const handleMouseMove = (event: MouseEvent) => {
      drawLight(event.clientX, event.clientY)
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    requestAnimationFrame(fadeOut)

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleClickIcon = () => {
    onClickIcon?.(1)
  }

  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-black text-white relative"
      ref={ref}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="z-10 p-5 text-center">
        <div className="mb-3 sm:text-4xl text-3xl font-black">
          {visibleText}
        </div>
        <HighlightText
          text={visibleSubText}
          highlights={['한승우']}
          className="mb-5 sm:text-2xl text-xl font-black"
        />
      </div>
      <IconButton onClick={handleClickIcon} className="z-10">
        <KeyboardArrowDownIcon
          className="mt-5 text-white animate-bounce hover:text-blue-600"
          fontSize="large"
        />
      </IconButton>
    </div>
  )
}
