import { useEffect, useState } from 'react'
import { IPhoneFrame } from '../../../common/components/IPhoneFrame'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'
import { projectInfos } from '../data'

type Props = {
  onSelectProject?: (id: string) => void
}
export const MobileProjectGrid = ({ onSelectProject }: Props) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0)
  const [projectImgIndex, setProjectImgIndex] = useState<number>(0)

  const isMobile = useMediaQuery({ maxWidth: 768 })
  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isMobile) {
      intervalId = setInterval(() => {
        setProjectImgIndex(
          (prevIndex) =>
            (prevIndex + 1) % projectInfos[currentProjectIndex].front.imageSize,
        )
      }, 2000)
    }

    return () => clearInterval(intervalId)
  }, [isMobile, currentProjectIndex])

  const renderProjectImage = (projectIndex: number, projectId: string) => {
    return (
      <IPhoneFrame
        onClick={() => onSelectProject?.(projectId)}
        className="mx-auto"
      >
        <img
          src={`img/${projectId}/${projectIndex}.png`}
          alt={String(projectIndex)}
          loading="lazy"
          className="rounded-lg object-cover w-full h-auto"
        />
      </IPhoneFrame>
    )
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentProjectIndex(next + 1),
  }

  return (
    <div className="w-full rounded-[28px] ">
      <Slider {...settings}>
        {projectInfos.map((project) => (
          <div key={project.id}>
            {renderProjectImage(projectImgIndex, project.id)}
          </div>
        ))}
      </Slider>
    </div>
  )
}
