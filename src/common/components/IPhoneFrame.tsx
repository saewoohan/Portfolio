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
        'mx-auto p-[5px] bg-black rounded-[15px] w-[200px] h-[420px] relative shadow-xl overflow-hidden cursor-pointer transition duration-300 ease-in-out',
        'hover:shadow-2xl hover:scale-105',
        'active:scale-95 active:bg-gray-900',
        className,
      )}
      onClick={onClick}
      aria-label="iPhone Frame"
    >
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 w-20 h-5 rounded-full flex items-center justify-between px-3">
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        <div className="w-5 h-1 bg-gray-600 rounded-full"></div>
      </div>
      <div className="h-full w-full rounded-[25px]">{children}</div>
    </div>
  )
}
