import { Drawer, IconButton } from '@mui/material'
import { projectInfos } from './data'
import { ProjectFrame } from './ProjectFrame'
import { ProjectGrid } from './ProjectGrid'
import { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

export const ProjectPages = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedProject, setSelectedProject] = useState<string>('')
  const handleClose = () => {
    setSelectedProject('')
    setIsOpen(false)
  }

  const handleSelectProject = (id: string) => {
    setSelectedProject(id)
  }

  useEffect(() => {
    if (selectedProject) {
      setIsOpen(true)
    }
  }, [selectedProject])

  const projectInfo = projectInfos.find(
    (projectInfo) => projectInfo.id === selectedProject,
  )

  return (
    <div>
      <ProjectGrid onSelectProject={handleSelectProject} />
      <Drawer
        open={isOpen}
        onClose={handleClose}
        anchor="right"
        PaperProps={{
          style: {
            height: '100vh',
            width: '60vh',
            backgroundColor: 'black',
          },
        }}
      >
        <div className="absolute right-5 top-2">
          <IconButton onClick={handleClose}>
            <CloseIcon className="text-white" fontSize="large" />
          </IconButton>
        </div>
        {selectedProject && projectInfo && (
          <ProjectFrame projectInfo={projectInfo} onClose={handleClose} />
        )}
      </Drawer>
    </div>
  )
}
