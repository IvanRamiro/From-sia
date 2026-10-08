import portraitLeft from '../../assets/figma/photos/portrait-left-40.png'
import portraitMiddle from '../../assets/figma/photos/portrait-middle-40.png'
import portraitRight from '../../assets/figma/photos/portrait-right-40.png'

/*
 * Figma: "Flower lovers" — three 40px portraits overlapping at x = 0, 26 and 52.
 * Listed right to left so the left-most portrait is painted on top, as in Figma.
 */
const PORTRAITS = [
  { src: portraitRight, position: 'left-13' },
  { src: portraitMiddle, position: 'left-6.5' },
  { src: portraitLeft, position: 'left-0' },
]

/**
 * Figma: "Community endorsement" > "Social proof" — portraits, star rating and
 * endorsement line, with 20px of space above the row.
 */
export function SocialProof() {
  return (
    <div className="w-full pt-5">
      <div className="flex items-center gap-4">
        <div aria-hidden="true" className="relative h-10 w-23 shrink-0">
          {PORTRAITS.map((portrait) => (
            <img
              key={portrait.src}
              src={portrait.src}
              alt=""
              className={`absolute top-0 size-10 max-w-none ${portrait.position}`}
            />
          ))}
        </div>

        {/* "Customer rating" — Inter 14/17 over Inter 13/18, 5px apart */}
        <div className="flex flex-col gap-1.25">
          <p className="figma-text-14/17 whitespace-pre text-charcoal">
            <span className="sr-only">Rated 4.9 out of 5 from more than 500 reviews</span>
            <span aria-hidden="true">
              <span className="text-tone-6">★★★★★</span>
              {'  '}
              <span className="font-semibold">4.9</span>
              {'  (500+ reviews)'}
            </span>
          </p>
          <p className="figma-text-13/18 whitespace-nowrap text-tone-5">
            Loved by flower lovers in the Philippines
          </p>
        </div>
      </div>
    </div>
  )
}
