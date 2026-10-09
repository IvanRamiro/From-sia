import userIcon from '../../assets/figma/icons/user-round.svg'
import { PRIMARY_NAV } from '../../data/navigation.ts'
import { classNames } from '../../utils/classNames.ts'
import { Button } from '../ui/Button.tsx'
import { DIVIDER, ICON, ICON_HIT_AREA, NAV_LINK } from './headerStyles.ts'

type MenuPanelProps = {
  id: string
  isOpen: boolean
  onNavigate: () => void
}

export function MenuPanel({ id, isOpen, onNavigate }: MenuPanelProps) {
  return (
    <div
      id={id}
      hidden={!isOpen}
      className="gutter absolute inset-x-0 top-full border-b border-tone-7 bg-ivory px-(--gutter) pb-6 lg:hidden"
    >
      <nav aria-label="Primary" className="flex flex-col items-start">
        {PRIMARY_NAV.map((link) => (
          <a key={link.href} href={link.href} onClick={onNavigate} className={NAV_LINK}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-1 pt-3 md:hidden">
        <a
          href="#account"
          aria-label="Account"
          onClick={onNavigate}
          className={classNames('-ml-2.75 flex', ICON_HIT_AREA)}
        >
          <img src={userIcon} alt="" className={ICON} />
        </a>
        <span aria-hidden="true" className={DIVIDER} />
        <Button href="#occasions" onClick={onNavigate}>
          Order Flowers
        </Button>
      </div>
    </div>
  )
}
