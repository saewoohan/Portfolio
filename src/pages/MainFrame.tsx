import { useScrollSnap } from '../hooks/useScrollSnap'
import { OnBoarding } from './OnBoarding'
import { ProjectPages } from './projects/ProjectPages'
import { TimeLine } from './timeLine/TimeLine'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { MenuDrawer } from './menu/MenuDrawer'

export const MainFrame = () => {
  const { outerDivRef, setCurrentPage } = useScrollSnap()
  const height = window.innerHeight
  const [open, setOpen] = useState(false)

  const handleClick = (page: number) => {
    console.log(page)
    setCurrentPage(page)
    setOpen(false)
    outerDivRef.current?.scrollTo({
      top: page * (window.innerHeight + 40),
      left: 0,
      behavior: 'smooth',
    })
  }

  const handleCloseDrawer = () => {
    setOpen(false)
  }

  return (
    <div
      ref={outerDivRef}
      className="overflow-y-auto scrollbar-hide h-screen w-screen"
      style={{ height: `${height}px` }}
    >
      <OnBoarding />
      <TimeLine />
      <ProjectPages />
      <div className="absolute right-5 top-2 flex flex-col items-center space-y-1">
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon className={'text-white'} fontSize="large" />
        </IconButton>
      </div>
      <MenuDrawer
        open={open}
        onClose={handleCloseDrawer}
        onClickMenu={handleClick}
      />
    </div>
  )
}
