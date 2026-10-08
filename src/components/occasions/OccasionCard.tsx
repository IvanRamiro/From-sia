import categoryArrow from '../../assets/figma/icons/category-arrow.svg'
import type { Occasion } from '../../data/occasions.ts'

export function OccasionCard({ occasion }: { occasion: Occasion }) {
  return (
    <a
      href={occasion.href}
      className="group flex w-[296px] flex-col items-start gap-4 outline-none md:w-[196px] xl:w-[202px]"
    >
      <span className="relative block aspect-square w-full overflow-clip rounded-[10px] outline-tone-6 group-focus-visible:outline-2 group-focus-visible:-outline-offset-2">
        <picture className="block size-full">
          <source media="(min-width: 1280px)" srcSet={occasion.image.desktop} />
          <source media="(min-width: 768px)" srcSet={occasion.image.tablet} />
          <img
            src={occasion.image.mobile}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full max-w-none object-cover transition-[scale,filter] duration-[400ms] ease-out group-hover:scale-[1.035] group-hover:brightness-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </picture>
      </span>

      <span className="flex w-full items-center gap-1.5">
        <span className="text-base leading-6 whitespace-nowrap text-charcoal transition-colors duration-[400ms] ease-out group-hover:text-tone-6 md:text-sm md:leading-[21px]">
          {occasion.label}
        </span>
        <span
          aria-hidden="true"
          className="relative size-4 shrink-0 transition-transform duration-[400ms] ease-out group-hover:translate-x-1.5 motion-reduce:transition-none"
        >
          {/* 16px vector whose 1.2px stroke overhangs by 0.6px; the file is 18px to hold it */}
          <img
            src={categoryArrow}
            alt=""
            width={18}
            height={18}
            className="absolute top-[-0.6px] left-[-0.6px] size-[18px] max-w-none"
          />
        </span>
      </span>
    </a>
  )
}
