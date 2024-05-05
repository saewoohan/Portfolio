import { OnBoarding } from './OnBoarding'
import { ProjectPages } from './projects/ProjectPages'
import { TimeLine } from './timeLine/TimeLine'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { MenuDrawer } from './menu/MenuDrawer'
import { usePage } from './provider/PageContext'

export const MainFrame = () => {
  const { outerDivRef, onChangePage } = usePage()

  const height = window.innerHeight
  const [open, setOpen] = useState(false)

  const handleClickMenu = (page: number) => {
    onChangePage(page)
    setOpen(false)
  }

  const handleCloseDrawer = () => {
    setOpen(false)
  }

  return (
    <div
      ref={outerDivRef}
      className="overflow-y-auto scrollbar-hide h-screen w-screen bg-black"
      style={{ height: `${height}px` }}
    >
      <OnBoarding />
      <TimeLine />
      <ProjectPages />

      <div className="absolute right-5 top-2">
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon className={'text-white'} fontSize="large" />
        </IconButton>
      </div>
      <MenuDrawer
        open={open}
        onClose={handleCloseDrawer}
        onClickMenu={handleClickMenu}
      />
    </div>
  )
}
