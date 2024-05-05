import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

const BUTTON_SIZE = {
  S: 'py-1 px-2 text-xs',
  M: 'py-2 px-4 text-sm',
  L: 'py-3 px-6 text-lg',
}

export type ButtonSize = keyof typeof BUTTON_SIZE

type Props = {
  size?: ButtonSize

  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  size = 'M',
  className,
  children,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={twMerge(
        'bg-transparent border border-white mr-2 rounded-[5px]',
        className,
        BUTTON_SIZE[size],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
