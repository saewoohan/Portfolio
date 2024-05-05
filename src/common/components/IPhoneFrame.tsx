import clsx from 'clsx'
import { PropsWithChildren } from 'react'
type Props = {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const IPhoneFrame = ({
  children,
  className,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={clsx(
        'mx-auto p-2 bg-white rounded-[17px] w-[200px] h-[415px] relative shadow-xl overflow-hidden cursor-pointer',
        className,
      )}
      onClick={onClick}
    >
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 w-20 h-5 rounded-full flex items-center justify-between px-3">
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        <div className="w-5 h-1 bg-gray-600 rounded-full"></div>
      </div>
      <div className="h-full w-full rounded-[25px]">{children}</div>
    </div>
  )
}
