import { useTypewriter } from '../hooks/useTypewriter'

export const OnBoarding = () => {
  const fullText = '그 여정이 곧 보상이다.'
  const subTitle = '개발자 한승우'
  const visibleText = useTypewriter({ text: fullText, speed: 100 })
  const visibleSubText = useTypewriter({ text: subTitle, speed: 150 })

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="z-10 p-5 text-center">
        <div className="mb-3 text-4xl font-black">{visibleText}</div>
        <p className="mb-5 text-2xl font-black">{visibleSubText}</p>
      </div>
    </div>
  )
}
