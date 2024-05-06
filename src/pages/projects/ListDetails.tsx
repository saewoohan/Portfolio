import { HighlightText } from '../../common/components/HightlightSpan'

type Props = {
  title?: string
  details: string[]
  highlights: string[]
}

export const ListDetails = ({ title, details, highlights }: Props) => {
  return (
    <>
      {details.length > 0 && (
        <div className="font-semibold sm:text-lg text-base mb-2">{title}</div>
      )}
      <ul className="list-none pl-5">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="pr-2">•</span>
            <HighlightText text={detail} highlights={highlights} />
          </li>
        ))}
      </ul>
    </>
  )
}
