import { IPhoneFrame } from '../../common/components/IPhoneFrame'

import { projectInfos } from './data'

type Props = {
  onSelectProject?: (id: string) => void
}

export const ProjectGrid = ({ onSelectProject }: Props) => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div>
        <div className="text-4xl mb-20 font-black text-white">Projects</div>
      </div>
      <div className="bg-white flex justify-center items-center flex-col rounded-lg p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-white">
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
      </div>
    </div>
  )
}
