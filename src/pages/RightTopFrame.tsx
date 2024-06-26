import { IconButton } from '@mui/material'
import { MenuDrawer } from './menu/MenuDrawer'
import GitHubIcon from '@mui/icons-material/GitHub'
import MenuIcon from '@mui/icons-material/Menu'
import ArticleIcon from '@mui/icons-material/Article'
import { useMediaQuery } from 'react-responsive'

type Props = {
  isOpenMenu: boolean
  onOpenMenu?: () => void
  onCloseMenu?: () => void
  onClickMenu?: (page: number) => void
}

export const RightTopFrame = ({
  isOpenMenu,
  onOpenMenu,
  onCloseMenu,
  onClickMenu,
}: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <>
      <div className="absolute right-5 top-2 flex flex-col">
        <IconButton onClick={onOpenMenu}>
          <MenuIcon
            className={'text-white hover:text-blue-500'}
            fontSize={`${isMobile ? 'medium' : 'large'}`}
          />
        </IconButton>
        <IconButton href="https://github.com/saewoohan">
          <GitHubIcon
            className={'text-white  hover:text-blue-500'}
            fontSize={`${isMobile ? 'medium' : 'large'}`}
          />
        </IconButton>
        <IconButton href="https://velog.io/@saewoohan/posts">
          <ArticleIcon
            className={'text-white  hover:text-blue-500'}
            fontSize={`${isMobile ? 'medium' : 'large'}`}
          />
        </IconButton>
      </div>
      <MenuDrawer
        open={isOpenMenu}
        onClose={onCloseMenu}
        onClickMenu={onClickMenu}
      />
    </>
  )
}
