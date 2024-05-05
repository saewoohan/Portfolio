import { TimeLineItem } from './TimeLineItem'
import { events } from './utils'

export const TimeLine = () => {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="bg-white p-8 shadow rounded-lg max-w-[100px] sm:max-w-4xl mx-auto w-full">
        <div className="text-4xl mb-4 font-extrabold">TimeLine</div>
        <div className="space-y-4">
          {events.map((event, index) => (
            <TimeLineItem key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  )
}
