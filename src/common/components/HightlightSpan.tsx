import clsx from 'clsx'
import { Fragment } from 'react/jsx-runtime'
import { twMerge } from 'tailwind-merge'

type Props = {
  text: string
  highlights: string[]
  className?: string
}

export const HighlightText = ({ text, highlights, className }: Props) => {
  const regex = new RegExp(`(${highlights.join('|')})`, 'gi')

  const parts = text.split(regex)

  const lowerHightlights = highlights.map((highlight) =>
    highlight.toLowerCase(),
  )

  return (
    <p className={twMerge(clsx('text-sm sm:text-base', className))}>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {lowerHightlights.includes(part.toLowerCase()) ? (
            <span className="text-blue-500 font-bold">{part}</span>
          ) : (
            part
          )}
        </Fragment>
      ))}
    </p>
  )
}
