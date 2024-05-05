import { IPhoneFrame } from '../../common/components/IPhoneFrame'
import { usePage } from '../provider/PageContext'
import { projectInfos } from './data'

export const ProjectGrid = () => {
  const { onChangePage } = usePage()

  const handleChangePage = (page: number) => {
    onChangePage(page)
  }

  return (
    <div className="h-screen bg-black flex justify-center items-center flex-col">
      <div>
        <div className="text-4xl mb-20 font-black text-white">Projects</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {projectInfos.map((project) => (
          <IPhoneFrame key={project.id} onClick={() => handleChangePage(5)}>
            <img
              src={`img/${project.id}/0.png`}
              alt={project.id}
              className="rounded-lg object-cover w-full h-auto"
            />
          </IPhoneFrame>
        ))}
      </div>
    </div>
  )
}
