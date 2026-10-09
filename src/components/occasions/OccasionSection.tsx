import { useId } from 'react'
import arrowRightThin from '../../assets/figma/icons/arrow-right-thin.svg'
import { OCCASIONS } from '../../data/occasions.ts'
import { useCarousel } from '../../hooks/useCarousel.ts'
import { useInView } from '../../hooks/useInView.ts'
import { classNames } from '../../utils/classNames.ts'
import { CarouselArrow } from './CarouselArrow.tsx'
import { OccasionCard } from './OccasionCard.tsx'

const STAGGER_MS = 70
const IN_VIEW_THRESHOLD = 0.15

export function OccasionSection() {
  const headingId = useId()
  const trackId = useId()
  const { trackRef, canScrollPrev, canScrollNext, visibleRange, scrollPrev, scrollNext } =
    useCarousel<HTMLUListElement>()
  const { ref: sectionRef, inView } = useInView<HTMLElement>(IN_VIEW_THRESHOLD)

  return (
    <section
      ref={sectionRef}
      id="occasions"
      aria-labelledby={headingId}
      className="gutter mx-auto flex w-full max-w-page flex-col gap-8 pt-24 pb-12 md:pb-16 xl:gap-10"
    >
      <div className="flex flex-col items-start gap-4 px-(--gutter) md:flex-row md:items-end md:justify-between md:gap-0">
        <div className="flex w-full flex-col gap-4.5 md:w-102.5">
          <p className="figma-text-10/15 font-medium text-tone-5">SHOP BY OCCASION</p>
          <h2
            id={headingId}
            className="font-display figma-text-44/43 font-normal text-charcoal md:figma-text-48/47 xl:figma-text-56/55"
          >
            For <em className="text-tone-6 italic">every</em>
            <br />
            special moment.
          </h2>
        </div>

        <div className="flex shrink-0 items-center gap-6 md:pb-1">
          <a
            href="#all-occasions"
            className="flex h-8 items-center justify-center gap-2.5 figma-text-14/17 whitespace-nowrap text-charcoal"
          >
            View all
            <img src={arrowRightThin} alt="" width={16} height={16} className="size-4 shrink-0" />
          </a>
          <div className="hidden gap-2.5 md:flex">
            <CarouselArrow
              direction="previous"
              disabled={!canScrollPrev}
              onClick={scrollPrev}
              controls={trackId}
            />
            <CarouselArrow
              direction="next"
              disabled={!canScrollNext}
              onClick={scrollNext}
              controls={trackId}
            />
          </div>
        </div>
      </div>

      <div className="pl-(--gutter) xl:pr-(--gutter)">
        <ul
          ref={trackRef}
          id={trackId}
          className="scrollbar-none -mb-4 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pr-(--gutter) pb-4 md:gap-5 xl:pr-0"
        >
          {OCCASIONS.map((occasion, index) => (
            <li
              key={occasion.id}
              style={{ animationDelay: `${index * STAGGER_MS}ms` }}
              className={classNames(
                'shrink-0 snap-start',
                inView ? 'motion-safe:animate-rise' : 'motion-safe:opacity-0',
              )}
            >
              <OccasionCard occasion={occasion} />
            </li>
          ))}
        </ul>

        <p aria-live="polite" className="sr-only">
          {visibleRange &&
            `Showing occasions ${visibleRange.first} to ${visibleRange.last} of ${OCCASIONS.length}`}
        </p>
      </div>
    </section>
  )
}
