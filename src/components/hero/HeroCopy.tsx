type HeroCopyProps = {
  headingId: string
}

export function HeroCopy({ headingId }: HeroCopyProps) {
  return (
    <>
      <p className="flex items-center gap-2 figma-text-10/15 font-medium whitespace-nowrap text-tone-5 xl:gap-3 xl:figma-text-11/18">
        <span aria-hidden="true" className="h-px w-4 shrink-0 bg-tone-5 xl:w-6" />
        FRESH FLOWERS. CREATIVE SPACES. MEANINGFUL MOMENTS.
      </p>

      <h1
        id={headingId}
        className="flex w-full flex-col items-start font-display text-[length:min(5.5rem,17cqi)] leading-[0.955] font-normal text-charcoal xl:figma-text-88/84"
      >
        <span className="-mb-[0.045em] xl:-mb-1">Flowers for</span>{' '}
        <span className="-mb-[0.045em] flex flex-wrap items-baseline gap-x-[0.18em] whitespace-nowrap xl:-mb-1 xl:gap-x-4">
          <span>life’s</span> <em className="text-tone-6 italic">beautiful</em>
        </span>{' '}
        <span>moments.</span>
      </h1>

      <p className="max-w-100 figma-text-16/26 text-tone-5 xl:w-100">
        Thoughtfully arranged flowers, creative workshops,
        <br className="hidden xl:inline" /> and a space made for beautiful moments.
      </p>
    </>
  )
}
