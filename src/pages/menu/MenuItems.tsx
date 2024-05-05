import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { Page } from '../../common/utils/pages'
import { Collapse, IconButton } from '@mui/material'
import { TextButton } from '../../common/components/TextButton'

type Props = {
  item: Page
  expandedSet: Set<number>
  onClickMenu?: (page: number) => void
  onToggleExpand?: (index: number) => void
}

export const MenuItem = ({
  item,
  expandedSet,
  onClickMenu,
  onToggleExpand,
}: Props) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <TextButton
          size="L"
          className="py-10 px-2"
          onClick={() => onClickMenu?.(item.index)}
        >
          {item.name}
        </TextButton>
        {item.items && (
          <IconButton onClick={() => onToggleExpand?.(item.index)}>
            {expandedSet.has(item.index) ? (
              <ExpandLessIcon
                className="text-white hover:text-blue-500"
                fontSize="large"
              />
            ) : (
              <ExpandMoreIcon
                className="text-white hover:text-blue-500"
                fontSize="large"
              />
            )}
          </IconButton>
        )}
      </div>
      {item.items && (
        <Collapse in={expandedSet.has(item.index)} timeout="auto" unmountOnExit>
          <div className="flex flex-col items-center">
            {item.items.map((subItem) => (
              <div key={subItem.index} className="py-2">
                <TextButton
                  size="S"
                  className="text-blue-100"
                  onClick={() => onClickMenu?.(subItem.index)}
                >
                  {subItem.name}
                </TextButton>
              </div>
            ))}
          </div>
        </Collapse>
      )}
    </>
  )
}
