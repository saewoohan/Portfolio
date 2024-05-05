import { Fragment } from 'react/jsx-runtime'

type Props = {
  text: string
  highlights: string[]
}

export const HighlightText = ({ text, highlights }: Props) => {
  const regex = new RegExp(`(${highlights.join('|')})`, 'gi')

  const parts = text.split(regex)

  const lowerHightlights = highlights.map((highlight) =>
    highlight.toLowerCase(),
  )

  return (
    <p className="text-sm sm:text-base">
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
