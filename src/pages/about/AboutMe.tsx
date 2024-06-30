import { HighlightText } from '../../common/components/HightlightSpan'

export const AboutMe = () => {
  const personalInfo = [
    { label: '이름', value: '한승우' },
    { label: '이메일', value: 'hsoooo2341@gamil.com' },
    { label: '연락처', value: '+82-10-7299-2341' },
    { label: '학력', value: '한양대학교 컴퓨터소프트웨어학부 (4학년 재학)' },
  ]

  return (
    <div className="h-full bg-black flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[80vw] max-w-[1000px]">
        <img
          src="img/about.jpeg"
          alt="profile"
          className="rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover shadow-lg mb-4"
        />
        <div className="bg-white sm:p-8 p-5 shadow rounded-lg w-full">
          <div className="text-2xl sm:text-4xl mb-4 font-extrabold">
            About me 🙂
          </div>
          <div className="text-sm sm:text-base mb-4 font-regular border-l-4 border-blue-500 pl-4 flex flex-col space-y-1">
            <HighlightText
              text="🤔 끈기와 열정을 가지고 항상 새로운 것을 배우고자 노력하며, 현재에
              안주하지 않고 끊임없이 성장하는 개발자가 되기 위해 노력하고
              있습니다."
              highlights={['성장', '끈기', '열정']}
            />
            <HighlightText
              text="📞 다양한 사람들과 소통하는 것을 즐기며, 팀원들과 협업하여 더 나은 결과물을 만들어내는 것을 좋아합니다."
              highlights={['소통', '협업']}
            />
            <HighlightText
              text="🤝 한번 시작한 일은 끝까지 완수하는 것을 중요하게 생각하며, 문제가 발생했을 때 빠르게 대처하여 해결하는 것을 좋아합니다."
              highlights={['끝까지', '해결']}
            />
            <HighlightText
              text="🤯 개발이라는 것은 디지털 매체를 통한 일종의 창작활동이라고 생각합니다. 단순히 문제를 해결하는 개발자가 아닌 개발자로서의 주관과 직관을 기르기위해 노력하고 있습니다."
              highlights={['창작활동', '주관', '직관']}
            />
          </div>
          <ul className="w-full">
            {personalInfo.map((info) => (
              <li
                key={info.label}
                className="flex flex-row justify-between text-xs sm:text-lg py-1"
              >
                <span className="font-semibold">{info.label}:</span>
                <span>{info.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
