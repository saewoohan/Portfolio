import { ProjectInfo } from './utils'
import { IconButton } from '@mui/material'
import FlipIcon from '@mui/icons-material/Flip'
import { ListDeatils } from './TaskDetails'

type Props = {
  projectInfo: ProjectInfo
  onClickFlip?: () => void
}

export const ProjectCardBack = ({ projectInfo, onClickFlip }: Props) => {
  const { title, back } = projectInfo

  return (
    <div
      className="absolute inset-0 bg-white text-black p-4 sm:p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[5px]"
      onClick={onClickFlip}
    >
      <div className="flex flex-row justify-between pb-[30px]">
        <div className="text-4xl sm:text-4xl text-blue-500 font-extrabold">
          {title}
        </div>
        <IconButton onClick={onClickFlip}>
          <FlipIcon className="text-blue-500" fontSize="small" />
        </IconButton>
      </div>
      {back && (
        <div className="flex flex-col space-y-5">
          <div className="space-y-1">
            <div className="text-2xl font-bold pb-1">참여 기능</div>
            <ListDeatils
              title={`Front-End (${back.taskDetails.frontEnd?.contribute ?? ''}%)`}
              details={back.taskDetails.frontEnd?.contents ?? []}
              highlights={back.taskDetails.frontEnd?.highlights ?? []}
            />
            <ListDeatils
              title={`Back-End (${back.taskDetails.backEnd?.contribute ?? ''}%)`}
              details={back.taskDetails.backEnd?.contents ?? []}
              highlights={back.taskDetails.backEnd?.highlights ?? []}
            />
            <ListDeatils
              title="ETC"
              details={back.taskDetails.etc?.contents ?? []}
              highlights={back.taskDetails.etc?.highlights ?? []}
            />
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold pb-1">느낀점</div>
            <ListDeatils
              details={back.takeaway?.contents ?? []}
              highlights={back.takeaway?.highlights ?? []}
            />
          </div>
        </div>
      )}
    </div>
  )
}
