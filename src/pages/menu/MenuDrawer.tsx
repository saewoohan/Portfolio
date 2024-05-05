import { Drawer, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { pages } from '../../common/utils/pages'
import { MenuItem } from './MenuItems'
type Props = {
  open: boolean
  onClose?: () => void
  onClickMenu?: (page: number) => void
}

export const MenuDrawer = ({ open, onClose, onClickMenu }: Props) => {
  const [expandedSet, setExpandedSet] = useState<Set<number>>(new Set())

  const handleToggleExpand = (index: number) => {
    setExpandedSet((prev) => {
      if (prev.has(index)) {
        prev.delete(index)
      } else {
        prev.add(index)
      }
      return new Set(prev)
    })
  }

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      PaperProps={{
        style: { height: '100vh', backgroundColor: 'black', color: 'white' },
      }}
    >
      <div className="absolute right-5 top-2">
        <IconButton onClick={onClose}>
          <CloseIcon className="text-white" fontSize="large" />
        </IconButton>
      </div>
      <div className="h-screen w-screen flex flex-col justify-center">
        {pages.map((item) => (
          <div
            key={item.index}
            className="flex flex-col justify-center items-center bg-black text-white"
          >
            <MenuItem
              item={item}
              expandedSet={expandedSet}
              onClickMenu={onClickMenu}
              onToggleExpand={handleToggleExpand}
            />
          </div>
        ))}
      </div>
    </Drawer>
  )
}
