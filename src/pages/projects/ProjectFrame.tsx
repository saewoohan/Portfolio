import { useState } from 'react'
import { ProjectInfo } from './utils'
import { ProjectCardFront } from './ProjectCardFront'
import { ProjectCardBack } from './ProjectCardBack'

type Props = {
  projectInfo: ProjectInfo
  onClose?: () => void
}

export const ProjectFrame = ({ projectInfo, onClose }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleBackgroundClick = () => {
    onClose?.()
  }

  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation()
  }

  return (
    <div
      className="flex justify-center items-center bg-black w-full h-full overflow-auto"
      onClick={handleBackgroundClick}
    >
      <div
        className={`relative w-[80vw] sm:max-w-4xl mx-auto [perspective:1000px]`}
        onClick={handleCardClick}
      >
        <div
          className={`[transform-style:preserve-3d] transition-transform duration-700 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
        >
          <ProjectCardFront
            projectInfo={projectInfo}
            onClickFlip={handleFlip}
          />
          <ProjectCardBack projectInfo={projectInfo} onClickFlip={handleFlip} />
        </div>
      </div>
    </div>
  )
}
