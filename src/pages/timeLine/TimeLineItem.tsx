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
    <div className="flex items-start sm:space-x-4 sm:my-4 space-x-2 my-2">
      <div className="flex-shrink-0 sm:w-[150px] w-[80px]">
        <div className="flex items-center justify-center sm:h-10 sm:w-10 w-7 h-7 rounded-full bg-blue-400 text-white">
          {icon}
        </div>
        <div className="text-start sm:text-sm text-xs font-semibold mt-2">
          {date}
        </div>
      </div>
      <div className="flex-grow border-l-2 pl-4">
        <div className="sm:text-lg text-sm font-bold">{title}</div>
        <div className="sm:text-base text-xs text-gray-600">{description}</div>
      </div>
    </div>
  )
}
