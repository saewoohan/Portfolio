import { projectInfos } from './data'
import { ProjectFrame } from './ProjectFrame'
import { ProjectGrid } from './ProjectGrid'

export const ProjectPages = () => {
  return (
    <div>
      <ProjectGrid />
      {projectInfos.map((projectInfo) => (
        <ProjectFrame key={projectInfo.id} projectInfo={projectInfo} />
      ))}
    </div>
  )
}
