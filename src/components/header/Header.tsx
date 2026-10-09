import { useEffect, useId, useRef, useState } from 'react'
import { Brand } from './Brand.tsx'
import { HeaderActions } from './HeaderActions.tsx'
import { MenuPanel } from './MenuPanel.tsx'
import { MenuToggle } from './MenuToggle.tsx'
import { PrimaryNav } from './PrimaryNav.tsx'

export function Header() {
  const menuId = useId()
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setIsMenuOpen(false)
      menuToggleRef.current?.focus()
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <header className="relative z-30 xl:desktop-canvas">
      <div className="gutter relative flex h-24 items-center justify-between gap-6 px-(--gutter)">
        <Brand />
        <PrimaryNav />
        <HeaderActions>
          <MenuToggle
            ref={menuToggleRef}
            isOpen={isMenuOpen}
            controls={menuId}
            onToggle={() => setIsMenuOpen((open) => !open)}
          />
        </HeaderActions>
      </div>

      <MenuPanel id={menuId} isOpen={isMenuOpen} onNavigate={() => setIsMenuOpen(false)} />
    </header>
  )
}
