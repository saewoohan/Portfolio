import { Page } from '../../common/utils/pages'
import { TextButton } from '../../common/components/TextButton'

type Props = {
  item: Page

  onClickMenu?: (page: number) => void
}

export const MenuItem = ({ item, onClickMenu }: Props) => {
  return (
    <div className="flex flex-row items-center">
      <TextButton
        size="L"
        className="py-10 px-2"
        onClick={() => onClickMenu?.(item.index ?? 0)}
      >
        {item.name}
      </TextButton>
    </div>
  )
}
