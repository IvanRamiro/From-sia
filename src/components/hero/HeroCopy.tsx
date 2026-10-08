type HeroCopyProps = {
  /** id for the <h1>, so the section can be labelled by it */
  headingId: string
}

/**
 * Figma: "eyebrow-row", "Hero headline" and "Hero description".
 *
 *   eyebrow      Inter Medium 11/18, tone-5, after a 24px rule
 *   headline     Cormorant Garamond 88/84, three lines overlapping by 4px;
 *                "beautiful" is italic in tone-6, 16px after "life’s"
 *   description  Inter Regular 16/26, tone-5, 400px wide, broken after "workshops,"
 */
export function HeroCopy({ headingId }: HeroCopyProps) {
  return (
    <>
      <p className="flex items-center gap-3 figma-text-11/18 font-medium whitespace-nowrap text-tone-5">
        <span aria-hidden="true" className="h-px w-6 shrink-0 bg-tone-5" />
        FRESH FLOWERS. CREATIVE SPACES. MEANINGFUL MOMENTS.
      </p>

      <h1
        id={headingId}
        className="flex w-full flex-col items-start font-display figma-text-88/84 font-normal text-charcoal"
      >
        <span className="-mb-1">Flowers for</span>{' '}
        <span className="-mb-1 flex items-baseline gap-4 whitespace-nowrap">
          <span>life’s</span> <em className="text-tone-6 italic">beautiful</em>
        </span>{' '}
        <span>moments.</span>
      </h1>

      <p className="w-100 figma-text-16/26 text-tone-5">
        Thoughtfully arranged flowers, creative workshops,
        <br />
        and a space made for beautiful moments.
      </p>
    </>
  )
}
