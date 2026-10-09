import { classNames } from '../../utils/classNames.ts'

const NOTE_LAYOUT = classNames(
  'absolute top-[84.6%] left-[5.13%] flex items-center',
  'md:top-[91.03%] md:-left-[2.72%]',
  'xl:top-187.5 xl:left-147.5 xl:h-15.25 xl:w-50.75 xl:justify-center',
)

const NOTE_TEXT = classNames(
  'flex-none -rotate-7 font-script text-[length:6.92cqi] leading-[normal] whitespace-nowrap text-tone-6 opacity-90',
  'md:-rotate-8 md:text-[length:7.07cqi] md:opacity-85',
  'xl:-rotate-6 xl:figma-text-32 xl:opacity-100',
)

export function CampaignNote() {
  return (
    <div className={NOTE_LAYOUT}>
      <p className={NOTE_TEXT}>More than flowers</p>
    </div>
  )
}
