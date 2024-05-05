import { projectInfos } from './data'
import { ProjectFrame } from './ProjectFrame'

export const ProjectPages = () => {
  return (
    <div>
      {projectInfos.map((projectInfo) => (
        <ProjectFrame key={projectInfo.id} projectInfo={projectInfo} />
      ))}
    </div>
  )
}
