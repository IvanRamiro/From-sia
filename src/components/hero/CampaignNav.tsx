import { classNames } from '../../utils/classNames.ts'

type CampaignNavProps = {
  count: number
  activeIndex: number
  onSelect: (index: number) => void
}

function formatCampaignNumber(index: number): string {
  return String(index + 1).padStart(2, '0')
}

const NAV_LAYOUT = classNames(
  'flex justify-center pt-4',
  'md:absolute md:top-1/2 md:right-px md:block md:-translate-y-1/2 md:pt-0',
  'xl:top-116.5',
)

const LIST_LAYOUT = 'flex items-center gap-6 px-3 py-2 md:flex-col md:items-end md:gap-4'

const BUTTON_LAYOUT =
  'flex cursor-pointer flex-col-reverse items-center gap-1.25 py-1.5 md:flex-row md:gap-2.5'

export function CampaignNav({ count, activeIndex, onSelect }: CampaignNavProps) {
  return (
    <nav aria-label="Campaigns" className={NAV_LAYOUT}>
      <ol className={LIST_LAYOUT}>
        {Array.from({ length: count }, (_, index) => {
          const isActive = index === activeIndex

          return (
            <li key={index}>
              <button
                type="button"
                aria-label={`Campaign ${index + 1} of ${count}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => onSelect(index)}
                className={BUTTON_LAYOUT}
              >
                <span
                  aria-hidden="true"
                  className={classNames(
                    'block figma-rounded-1 transition-[width,height,background-color] duration-300 ease-out motion-reduce:transition-none',
                    isActive ? 'h-0.5 w-8 bg-tone-6' : 'h-px w-4 bg-tone-7',
                  )}
                />
                <span
                  className={classNames(
                    'figma-text-11/13 whitespace-nowrap',
                    isActive ? 'font-bold text-charcoal' : 'font-normal text-tone-5',
                  )}
                >
                  {formatCampaignNumber(index)}
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
