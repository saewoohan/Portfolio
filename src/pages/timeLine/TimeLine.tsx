import { useMediaQuery } from 'react-responsive'
import { TimeLineItem } from './TimeLineItem'
import { events } from './utils'

export const TimeLine = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="bg-white sm:p-8 p-5 shadow rounded-lg w-[80vw] max-w-[1000px]">
        <div className="text-2xl sm:text-4xl mb-4 font-extrabold">TimeLine</div>
        <div className="sm:space-y-4 space-y-2">
          {events(isMobile).map((event, index) => (
            <TimeLineItem key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  )
}
