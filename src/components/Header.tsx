import { Brand } from './header/Brand.tsx'
import { HeaderActions } from './header/HeaderActions.tsx'
import { PrimaryNav } from './header/PrimaryNav.tsx'

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
