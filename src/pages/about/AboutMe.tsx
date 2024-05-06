export const AboutMe = () => {
  const personalInfo = [
    { label: '이름', value: '한승우' },
    { label: '생년월일', value: '2000년 12월 23일' },
    { label: '주소지', value: '서울특별시 성동구' },
    { label: '이메일', value: 'hsoooo2341@gamil.com' },
    { label: '연락처', value: '+82-10-7299-2341' },
    { label: '학력', value: '한양대학교 컴퓨터소프트웨어학부 (4학년 재학)' },
  ]

  return (
    <div className="h-screen bg-black flex justify-center items-center flex-col">
      <img
        src="img/about.jpeg"
        alt="profile"
        className="rounded-full w-[300px] h-[300px] object-cover shadow-lg mb-10"
      />
      <div className="bg-white p-8 shadow rounded-lg max-w-md sm:max-w-4xl mx-auto w-full">
        <div className="text-4xl mb-4 font-extrabold">About me 🙂</div>
        <div className="text-md mb-4 font-regular border-l-4 border-blue-500 pl-4">
          {
            '저는 한번 시작한 일은 끝을 봐야 직성이 풀리는 개발자 한승우입니다. 끈기와 열정을 가지고 항상 새로운 것을 배우고자 노력하며, 현실에 안주하지 않고 끊임없이 성장하는 개발자가 되기 위해 노력하고 있습니다.'
          }
        </div>
        <ul>
          {personalInfo.map((info) => (
            <li
              key={info.label}
              className="flex flex-row justify-between text-lg py-1"
            >
              <span className="font-semibold">{info.label}:</span>
              <span>{info.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
