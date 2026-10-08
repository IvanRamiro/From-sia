import searchIcon from '../../assets/figma/icons/search.svg'
import bagIcon from '../../assets/figma/icons/shopping-bag.svg'
import userIcon from '../../assets/figma/icons/user-round.svg'
import { Button } from '../Button.tsx'

const BAG_COUNT = 0

const ICON_HIT_AREA = 'flex size-10 shrink-0 items-center justify-center'
const ICON = 'size-4.5 shrink-0'

export function HeaderActions() {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <button type="button" aria-label="Search" className={`${ICON_HIT_AREA} cursor-pointer`}>
        <img src={searchIcon} alt="" className={ICON} />
      </button>

      <a href="#account" aria-label="Account" className={ICON_HIT_AREA}>
        <img src={userIcon} alt="" className={ICON} />
      </a>

      {/* "icon-hit-bag" — 56×40, icon and count 5px apart */}
      <a
        href="#bag"
        aria-label={`Shopping bag, ${BAG_COUNT} items`}
        className="flex h-10 w-14 shrink-0 items-center justify-center gap-1.25"
      >
        <img src={bagIcon} alt="" className={ICON} />
        <span className="figma-text-13/16 whitespace-nowrap text-charcoal">({BAG_COUNT})</span>
      </a>

      <span aria-hidden="true" className="h-5 w-px shrink-0 bg-tone-7" />

      <Button href="#occasions">Order Flowers</Button>
    </div>
  )
}
