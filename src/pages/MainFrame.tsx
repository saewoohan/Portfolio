import { Home } from './Home'
import { ProjectPages } from './projects/ProjectPages'
import { TimeLine } from './timeLine/TimeLine'
import { useState } from 'react'
import { usePage } from './provider/PageContext'
import { RightTopFrame } from './RightTopFrame'
import { About } from './about/About'

export const MainFrame = () => {
  const { outerDivRef, onChangePage } = usePage()

  const height = window.innerHeight
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleClickMenu = (page: number) => {
    onChangePage(page)
    setIsOpenMenu(false)
  }

  const handleCloseDrawer = () => {
    setIsOpenMenu(false)
  }

  return (
    <>
      <div
        ref={outerDivRef}
        className="overflow-y-auto scrollbar-hide h-screen w-screen bg-black"
        style={{ height: `${height}px` }}
      >
        <Home />
        <About />
        <ProjectPages />
        <TimeLine />
      </div>
      <RightTopFrame
        isOpenMenu={isOpenMenu}
        onOpenMenu={() => setIsOpenMenu(true)}
        onCloseMenu={handleCloseDrawer}
        onClickMenu={handleClickMenu}
      />
    </>
  )
}
