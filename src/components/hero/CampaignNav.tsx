type CampaignNavProps = {
  count: number
  activeIndex: number
  onSelect: (index: number) => void
}

const pad = (value: number) => String(value).padStart(2, '0')

/* Figma: "Slide marker" — 32×2 in tone-6 when active, 16×1 in tone-7 otherwise */
const MARKER = {
  base: 'block figma-rounded-1 transition-[width,height,background-color] duration-300 ease-out motion-reduce:transition-none',
  active: 'h-0.5 w-8 bg-tone-6',
  inactive: 'h-px w-4 bg-tone-7',
}

/* Figma: "Slide number" — Inter 11/13, bold charcoal when active, regular tone-5 otherwise */
const NUMBER = {
  base: 'figma-text-11/13 whitespace-nowrap',
  active: 'font-bold text-charcoal',
  inactive: 'font-normal text-tone-5',
}

/**
 * Figma: "Campaign navigation" — 01 / 02 / 03 in a right-aligned column, centred
 * on the hero's full 812px height and 1px in from its right edge.
 * Rows are 16px apart inside 8px/12px padding; each row has 6px above and below
 * and 10px between marker and number.
 */
export function CampaignNav({ count, activeIndex, onSelect }: CampaignNavProps) {
  return (
    <nav aria-label="Campaigns" className="absolute top-101.5 right-px -translate-y-1/2">
      <ol className="flex flex-col items-end gap-4 px-3 py-2">
        {Array.from({ length: count }, (_, index) => {
          const state = index === activeIndex ? 'active' : 'inactive'
          return (
            <li key={index}>
              <button
                type="button"
                aria-label={`Campaign ${index + 1} of ${count}`}
                aria-current={state === 'active' ? 'true' : undefined}
                onClick={() => onSelect(index)}
                className="flex cursor-pointer items-center gap-2.5 py-1.5"
              >
                <span aria-hidden="true" className={`${MARKER.base} ${MARKER[state]}`} />
                <span className={`${NUMBER.base} ${NUMBER[state]}`}>{pad(index + 1)}</span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
