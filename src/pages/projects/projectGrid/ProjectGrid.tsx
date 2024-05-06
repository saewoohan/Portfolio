import { projectInfos } from '../data'
import { IPhoneFrame } from '../../../common/components/IPhoneFrame'
import { useMediaQuery } from 'react-responsive'
import { MobileProjectGrid } from './MobileProjectGrid'

type Props = {
  onSelectProject?: (id: string) => void
}

export const ProjectGrid = ({ onSelectProject }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <div className="h-screen flex justify-center items-center flex-col w-screen p-20">
      <div>
        <div className="text-2xl sm:text-4xl mb-10 sm:mb-20 font-black text-white">
          Projects
        </div>
      </div>
      <div className="flex justify-center items-center rounded-lg w-full bg-black">
        {isMobile ? (
          <MobileProjectGrid onSelectProject={onSelectProject} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-black rounded-[28px]">
            {projectInfos.map((project) => (
              <IPhoneFrame
                key={project.id}
                onClick={() => onSelectProject?.(project.id)}
              >
                <img
                  src={`img/${project.id}/thumbnail.png`}
                  alt={project.id}
                  loading="lazy"
                  className="rounded-lg object-cover w-full h-auto"
                />
              </IPhoneFrame>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
