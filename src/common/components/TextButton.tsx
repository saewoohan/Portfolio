import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

const TEXT_BUTTON_SIZE = {
  S: 'sm:text-lg text-sm',
  M: 'sm:text-2xl text-base',
  L: 'sm:text-4xl text-lg',
}

export type TextButtonSize = keyof typeof TEXT_BUTTON_SIZE

type Props = {
  size?: TextButtonSize
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const TextButton = ({
  size = 'M',
  className,
  children,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={twMerge(
        'focus:outline-none hover:text-blue-500',
        TEXT_BUTTON_SIZE[size],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
