import { ProjectInfo } from './utils'
import { IconButton } from '@mui/material'
import FlipIcon from '@mui/icons-material/Flip'
import { ListDetails } from './ListDetails'

type Props = {
  projectInfo: ProjectInfo
  onClickFlip?: () => void
}

export const ProjectCardBack = ({ projectInfo, onClickFlip }: Props) => {
  const { title, back } = projectInfo

  return (
    <div
      className="absolute inset-0 h-[700px] bg-white text-black p-4 sm:p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[5px]"
      onClick={onClickFlip}
    >
      {back && (
        <div className="h-full flex flex-col">
          <div className="flex flex-row justify-between sm:pb-[30px] pb-[10px]">
            <div className="text-2xl sm:text-4xl text-blue-500 font-extrabold">
              {title}
            </div>
            <IconButton onClick={onClickFlip}>
              <FlipIcon className="text-blue-500" fontSize="small" />
            </IconButton>
          </div>
          <div className="flex flex-col justify-between h-full sm:space-y-5 space-y-2">
            <div className="space-y-1">
              <div className="sm:text-2xl text-lg font-bold pb-1">
                참여 기능
              </div>
              <ListDetails
                title={`Front-End (${back.taskDetails.frontEnd?.contribute ?? ''}%)`}
                details={back.taskDetails.frontEnd?.contents ?? []}
                highlights={back.taskDetails.frontEnd?.highlights ?? []}
              />
              <ListDetails
                title={`Back-End (${back.taskDetails.backEnd?.contribute ?? ''}%)`}
                details={back.taskDetails.backEnd?.contents ?? []}
                highlights={back.taskDetails.backEnd?.highlights ?? []}
              />
              <ListDetails
                title="ETC"
                details={back.taskDetails.etc?.contents ?? []}
                highlights={back.taskDetails.etc?.highlights ?? []}
              />
            </div>
            <div className="space-y-1">
              <div className="sm:text-2xl text-lg font-bold pb-1">느낀점</div>
              <ListDetails
                details={back.takeaway?.contents ?? []}
                highlights={back.takeaway?.highlights ?? []}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
