import Slider from 'react-slick'
import { ProjectInfo } from './utils'
import { formattedDescription, isUrl } from '../../common/utils/regex'
import { HighlightText } from '../../common/components/HightlightSpan'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IconButton } from '@mui/material'
import FlipIcon from '@mui/icons-material/Flip'
type Props = {
  projectInfo: ProjectInfo
  onClickFlip?: () => void
}

export const ProjectCardFront = ({ projectInfo, onClickFlip }: Props) => {
  const { id, title, front } = projectInfo
  const { imageSize, date, description, descriptionHightlight, details } = front

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <div className="flex flex-col sm:flex-row max-w-[100px] sm:max-w-4xl mx-auto w-full overflow-auto">
      <div className="w-full sm:w-2/5 flex items-center justify-center px-4 sm:px-8">
        <Slider {...settings} className="w-full h-full">
          {Array.from({ length: imageSize }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-full"
            >
              <img
                src={`img/${id}/${index}.png`}
                alt={`${id}_${index}`}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="flex flex-col p-4 sm:p-8 bg-white rounded-lg w-full sm:w-3/5 justify-between"
        onClick={onClickFlip}
      >
        <div className="space-y-2">
          <div className="flex flex-row justify-between">
            <div className="text-2xl sm:text-4xl font-extrabold">{title}</div>
            <IconButton onClick={onClickFlip}>
              <FlipIcon className="text-blue-500" fontSize="small" />
            </IconButton>
          </div>
          <div className="text-md sm:text-xl text-gray-500 font-medium">
            {date}
          </div>
          <div className="text-sm sm:text-base whitespace-pre-wrap">
            <HighlightText
              text={formattedDescription(description)}
              highlights={descriptionHightlight ?? []}
            />
          </div>
        </div>
        <ul className="list-none space-y-1">
          {details.map((detail) => (
            <li key={detail.label}>
              <span className="font-semibold pr-[5px]">{detail.label}:</span>
              {isUrl(detail.text) ? (
                <a
                  href={detail.text}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm sm:text-md"
                >
                  {detail.text}
                </a>
              ) : (
                <span className="text-sm sm:text-md">{detail.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
