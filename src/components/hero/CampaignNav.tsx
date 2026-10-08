type CampaignNavProps = {
  count: number
  activeIndex: number
  onSelect: (index: number) => void
}

const pad = (value: number) => String(value).padStart(2, '0')

const MARKER = {
  base: 'block figma-rounded-1 transition-[width,height,background-color] duration-300 ease-out motion-reduce:transition-none',
  active: 'h-0.5 w-8 bg-tone-6',
  inactive: 'h-px w-4 bg-tone-7',
}

const NUMBER = {
  base: 'figma-text-11/13 whitespace-nowrap',
  active: 'font-bold text-charcoal',
  inactive: 'font-normal text-tone-5',
}

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
