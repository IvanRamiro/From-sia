import type { Ref } from 'react'
import menuIcon from '../../assets/figma/icons/menu.svg'

type MenuToggleProps = {
  ref: Ref<HTMLButtonElement>
  isOpen: boolean
  controls: string
  onToggle: () => void
}

export function MenuToggle({ ref, isOpen, controls, onToggle }: MenuToggleProps) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label="Menu"
      aria-expanded={isOpen}
      aria-controls={controls}
      onClick={onToggle}
      className="flex size-10 shrink-0 cursor-pointer items-center justify-center lg:hidden"
    >
      <img src={menuIcon} alt="" className="size-5.5" />
    </button>
  )
}
