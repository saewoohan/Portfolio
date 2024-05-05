import { HighlightText } from '../common/components/HightlightSpan'
import { useTypewriter } from '../hooks/useTypewriter'

export const Home = () => {
  const fullText = 'Hello, World!'
  const subTitle = '개발자 한승우의 포트폴리오입니다.'
  const visibleText = useTypewriter({ text: fullText, speed: 100 })
  const visibleSubText = useTypewriter({ text: subTitle, speed: 150 })

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="z-10 p-5 text-center">
        <div className="mb-3 text-4xl font-black">{visibleText}</div>
        <HighlightText
          text={visibleSubText}
          highlights={['한승우']}
          className="mb-5 !text-2xl font-black"
        />
      </div>
    </div>
  )
}
