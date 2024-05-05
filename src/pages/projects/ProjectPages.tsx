import { projectInfos } from './data'
import { ProjectFrame } from './ProjectFrame'
import { PortfolioGrid } from './ProjectGrid'

export const ProjectPages = () => {
  return (
    <div>
      <PortfolioGrid />
      {projectInfos.map((projectInfo) => (
        <ProjectFrame key={projectInfo.id} projectInfo={projectInfo} />
      ))}
    </div>
  )
}
