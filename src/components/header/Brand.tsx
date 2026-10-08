/**
 * Figma: "Brand" — wordmark, 72px rule, descriptor, stacked 4px apart.
 * Cormorant Garamond SemiBold 26/26 over Inter Regular 8/8.
 */
export function Brand() {
  return (
    <a
      href="#top"
      aria-label="From Sia Flower — home"
      className="flex shrink-0 flex-col items-start gap-1"
    >
      <span className="font-display figma-text-26/26 font-semibold whitespace-nowrap text-charcoal">
        FROM SIA
      </span>
      <span aria-hidden="true" className="h-px w-18 bg-tone-4" />
      <span className="figma-text-8/8 whitespace-nowrap text-tone-5">FLOWER</span>
    </a>
  )
}
