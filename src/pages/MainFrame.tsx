import { useScrollSnap } from '../hooks/useScrollSnap'
import { OnBoarding } from './OnBoarding'
import { ProjectPages } from './projects/ProjectPages'
import { TimeLine } from './timeLine/TimeLine'
import CodeIcon from '@mui/icons-material/Code'
import IconButton from '@mui/material/IconButton'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import clsx from 'clsx'

export const MainFrame = () => {
  const { outerDivRef, currentPage, setCurrentPage } = useScrollSnap()
  const height = window.innerHeight

  console.log(currentPage)

  return (
    <div
      ref={outerDivRef}
      className="overflow-y-auto scrollbar-hide h-screen w-screen"
      style={{ height: `${height}px` }}
    >
      <OnBoarding />
      <TimeLine />
      <ProjectPages />
      <div className="absolute right-5 top-5 flex flex-col items-center space-y-3">
        <IconButton onClick={() => setCurrentPage(2)}>
          <CodeIcon
            className={clsx(currentPage === 0 ? 'text-blue-500' : 'text-white')}
            fontSize="large"
          />
        </IconButton>

        <WorkHistoryIcon
          className={clsx(currentPage === 1 ? 'text-blue-500' : 'text-white')}
          fontSize="large"
        />
        <div className="flex flex-col justify-end items-end space-y-2">
          <FormatListBulletedOutlinedIcon
            className={clsx(currentPage > 1 ? 'text-blue-500' : 'text-white')}
            fontSize="large"
          />
          <div className="c"></div>
        </div>
      </div>
    </div>
  )
}
