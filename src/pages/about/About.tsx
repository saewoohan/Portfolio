export const About = () => {
  const personalInfo = [
    { label: '이름', value: '한승우' },
    { label: '생년월일', value: '2000년 12월 23일' },
    { label: '주소지', value: '서울특별시 성동구' },
    { label: '이메일', value: 'hsoooo2341@gamil.com' },
    { label: '연락처', value: '+82-10-7299-2341' },
  ]

  return (
    <div className="h-screen bg-black flex justify-center items-center flex-col">
      <img
        src="img/about.jpeg"
        alt="profile"
        className="rounded-full w-[300px] h-[300px] object-cover shadow-lg mb-10"
      />
      <div className="bg-white p-8 shadow rounded-lg max-w-md sm:max-w-4xl mx-auto w-full">
        <div className="text-4xl mb-4 font-extrabold">About</div>
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
