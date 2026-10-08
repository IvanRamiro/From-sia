import { PRIMARY_NAV } from '../../data/navigation.ts'

export function PrimaryNav() {
  return (
    <nav
      aria-label="Primary"
      className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-10"
    >
      {PRIMARY_NAV.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="px-1 py-3 figma-text-14/17 whitespace-nowrap text-charcoal"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
