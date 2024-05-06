import { Drawer, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { pages } from '../../common/utils/pages'
import { MenuItem } from './MenuItems'
import { useMediaQuery } from 'react-responsive'
type Props = {
  open: boolean
  onClose?: () => void
  onClickMenu?: (page: number) => void
}

export const MenuDrawer = ({ open, onClose, onClickMenu }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
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
          <CloseIcon
            className="text-white  hover:text-blue-500"
            fontSize={`${isMobile ? 'small' : 'large'}`}
          />
        </IconButton>
      </div>
      <div className="h-screen w-screen flex flex-col justify-center">
        {pages.map((item) => (
          <div
            key={item.index}
            className="flex flex-col justify-center items-center bg-black text-white"
          >
            <MenuItem item={item} onClickMenu={onClickMenu} />
          </div>
        ))}
      </div>
    </Drawer>
  )
}
