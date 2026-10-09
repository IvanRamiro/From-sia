import { PRIMARY_NAV } from '../../data/navigation.ts'
import { classNames } from '../../utils/classNames.ts'
import { NAV_LINK } from './headerStyles.ts'

export function PrimaryNav() {
  return (
    <nav
      aria-label="Primary"
      className={classNames(
        'hidden items-center gap-10 lg:flex',
        'xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2',
      )}
    >
      {PRIMARY_NAV.map((link) => (
        <a key={link.href} href={link.href} className={NAV_LINK}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}
