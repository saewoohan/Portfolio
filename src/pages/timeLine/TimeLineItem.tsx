export const TimeLineItem = ({
  date,
  icon,
  title,
  description,
}: {
  date: string
  icon?: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <div className="flex items-start space-x-4 my-4">
      <div className="flex-shrink-0 w-[150px]">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-400 text-white">
          {icon}
        </div>
        <div className="text-start text-sm font-semibold mt-2">{date}</div>
      </div>
      <div className="flex-grow border-l-2 pl-4">
        <div className="text-lg font-bold">{title}</div>
        <div className="text-gray-600">{description}</div>
      </div>
    </div>
  )
}
