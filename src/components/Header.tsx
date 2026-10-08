import { Brand } from './header/Brand.tsx'
import { HeaderActions } from './header/HeaderActions.tsx'
import { PrimaryNav } from './header/PrimaryNav.tsx'

/**
 * Figma: "Header" in "From Sia · Desktop hero" — 1440×96, 64px side padding.
 * Brand on the left, actions on the right, navigation centred on the bar.
 *
 * Desktop only for now. Tablet and mobile headers will be added as variants here.
 */
export function Header() {
  return (
    <header className="desktop-canvas relative z-30">
      <div className="relative flex h-24 items-center justify-between px-16">
        <Brand />
        <PrimaryNav />
        <HeaderActions />
      </div>
    </header>
  )
}
