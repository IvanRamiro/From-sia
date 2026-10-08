import { useId } from 'react'
import arrowRightThin from '../assets/figma/icons/arrow-right-thin.svg'
import { OCCASIONS } from '../data/occasions.ts'
import { useCarousel } from '../hooks/useCarousel.ts'
import { useInView } from '../hooks/useInView.ts'
import { CarouselArrow } from './occasions/CarouselArrow.tsx'
import { OccasionCard } from './occasions/OccasionCard.tsx'

/** Delay between one card and the next when the row first appears */
const STAGGER_MS = 70

/**
 * Figma: "From Sia · Mobile / Tablet / Desktop shop by occasion"
 * (SectionHeader + OccasionCarousel).
 *
 *   mobile  — 24px gutter, header stacked, 296px cards 16px apart, row runs off the right edge
 *   tablet  — 32px gutter, header in one row with arrows, 196px cards 20px apart, runs off the right edge
 *   desktop — 64px gutter, 202px cards 20px apart; all six fit at 1440
 */
export function OccasionSection() {
  const headingId = useId()
  const trackId = useId()
  const { trackRef, canPrev, canNext, range, scrollPrev, scrollNext } =
    useCarousel<HTMLUListElement>()
  const { ref: sectionRef, inView } = useInView<HTMLElement>(0.15)

  return (
    <section
      ref={sectionRef}
      id="occasions"
      aria-labelledby={headingId}
      className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 pt-24 pb-12 md:pb-16 xl:gap-10"
    >
      {/* SectionHeader */}
      <div className="px-6 md:px-8 xl:px-16">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="flex w-full flex-col gap-[18px] md:w-[410px]">
            <p className="text-[10px] leading-[15px] font-medium text-tone-5">SHOP BY OCCASION</p>
            <h2
              id={headingId}
              className="font-display text-[44px] leading-[43px] font-normal text-charcoal md:text-[48px] md:leading-[47px] xl:text-[56px] xl:leading-[55px]"
            >
              For <em className="text-tone-6 italic">every</em>
              <br />
              special moment.
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-6 md:pb-1">
            <a
              href="#all-occasions"
              className="flex h-8 items-center justify-center gap-2.5 text-sm leading-[17px] whitespace-nowrap text-charcoal"
            >
              View all
              <img src={arrowRightThin} alt="" width={16} height={16} className="size-4 shrink-0" />
            </a>
            <div className="hidden gap-2.5 md:flex">
              <CarouselArrow
                direction="previous"
                disabled={!canPrev}
                onClick={scrollPrev}
                controls={trackId}
              />
              <CarouselArrow
                direction="next"
                disabled={!canNext}
                onClick={scrollNext}
                controls={trackId}
              />
            </div>
          </div>
        </div>
      </div>

      {/* OccasionCarousel */}
      <div className="pl-6 md:pl-8 xl:px-16">
        <ul
          ref={trackRef}
          id={trackId}
          className="scrollbar-none -mb-4 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pr-6 pb-4 md:gap-5 md:pr-8 xl:pr-0"
        >
          {OCCASIONS.map((occasion, index) => (
            <li
              key={occasion.id}
              style={{ animationDelay: `${index * STAGGER_MS}ms` }}
              className={`shrink-0 snap-start ${inView ? 'motion-safe:animate-rise' : 'motion-safe:opacity-0'}`}
            >
              <OccasionCard occasion={occasion} />
            </li>
          ))}
        </ul>

        {/* Tells screen-reader users which cards are showing after the row moves, without moving focus */}
        <p aria-live="polite" className="sr-only">
          {range
            ? `Showing occasions ${range.first} to ${range.last} of ${OCCASIONS.length}`
            : ''}
        </p>
      </div>
    </section>
  )
}
