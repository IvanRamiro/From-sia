import categoryArrow from '../../assets/figma/icons/category-arrow.svg'
import { MEDIA_QUERY } from '../../constants/media.ts'
import type { Occasion } from '../../data/occasions.ts'

type OccasionCardProps = {
  occasion: Occasion
}

export function OccasionCard({ occasion }: OccasionCardProps) {
  return (
    <a
      href={occasion.href}
      className="group flex w-74 flex-col items-start gap-4 outline-none md:w-49 xl:w-50.5"
    >
      <span className="relative block aspect-square w-full overflow-clip rounded-[10px] outline-tone-6 group-focus-visible:outline-2 group-focus-visible:-outline-offset-2">
        <picture className="block size-full">
          <source media={MEDIA_QUERY.desktop} srcSet={occasion.image.desktop} />
          <source media={MEDIA_QUERY.tablet} srcSet={occasion.image.tablet} />
          <img
            src={occasion.image.mobile}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full max-w-none object-cover transition-[scale,filter] duration-400 ease-out group-hover:scale-[1.035] group-hover:brightness-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </picture>
      </span>

      <span className="flex w-full items-center gap-1.5">
        <span className="figma-text-16/24 whitespace-nowrap text-charcoal transition-colors duration-400 ease-out group-hover:text-tone-6 md:figma-text-14/21">
          {occasion.label}
        </span>
        <span
          aria-hidden="true"
          className="relative size-4 shrink-0 transition-transform duration-400 ease-out group-hover:translate-x-1.5 motion-reduce:transition-none"
        >
          {/* The 1.2px stroke overhangs the 16px icon by 0.6px, so the exported file is 18px. */}
          <img
            src={categoryArrow}
            alt=""
            width={18}
            height={18}
            className="absolute -top-[0.6px] -left-[0.6px] size-4.5 max-w-none"
          />
        </span>
      </span>
    </a>
  )
}
