import type { ReactNode } from 'react'
import searchIcon from '../../assets/figma/icons/search.svg'
import bagIcon from '../../assets/figma/icons/shopping-bag.svg'
import userIcon from '../../assets/figma/icons/user-round.svg'
import { classNames } from '../../utils/classNames.ts'
import { Button } from '../ui/Button.tsx'
import { DIVIDER, ICON, ICON_HIT_AREA } from './headerStyles.ts'

const BAG_COUNT = 0

type HeaderActionsProps = {
  children?: ReactNode
}

export function HeaderActions({ children }: HeaderActionsProps) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <button
        type="button"
        aria-label="Search"
        className={classNames('flex cursor-pointer', ICON_HIT_AREA)}
      >
        <img src={searchIcon} alt="" className={ICON} />
      </button>

      <a
        href="#account"
        aria-label="Account"
        className={classNames('hidden md:flex', ICON_HIT_AREA)}
      >
        <img src={userIcon} alt="" className={ICON} />
      </a>

      <a
        href="#bag"
        aria-label={`Shopping bag, ${BAG_COUNT} items`}
        className="flex h-10 w-14 shrink-0 items-center justify-center gap-1.25"
      >
        <img src={bagIcon} alt="" className={ICON} />
        <span className="figma-text-13/16 whitespace-nowrap text-charcoal">({BAG_COUNT})</span>
      </a>

      <div className="hidden items-center gap-1 md:flex">
        <span aria-hidden="true" className={DIVIDER} />
        <Button href="#occasions">Order Flowers</Button>
      </div>

      {children}
    </div>
  )
}
