import portraitLeft40 from '../../assets/figma/photos/portrait-left-40.png'
import portraitLeft32 from '../../assets/figma/photos/portrait-left-32.png'
import portraitMiddle40 from '../../assets/figma/photos/portrait-middle-40.png'
import portraitMiddle32 from '../../assets/figma/photos/portrait-middle-32.png'
import portraitRight40 from '../../assets/figma/photos/portrait-right-40.png'
import portraitRight32 from '../../assets/figma/photos/portrait-right-32.png'
import { MEDIA_QUERY } from '../../constants/media.ts'
import { classNames } from '../../utils/classNames.ts'

const PORTRAITS_BACK_TO_FRONT = [
  { mobile: portraitRight32, tablet: portraitRight40, offset: 'left-10 md:left-13' },
  { mobile: portraitMiddle32, tablet: portraitMiddle40, offset: 'left-5 md:left-6.5' },
  { mobile: portraitLeft32, tablet: portraitLeft40, offset: 'left-0' },
]

export function SocialProof() {
  return (
    <div className="flex w-full items-center gap-3 pt-5 md:gap-4">
      <div aria-hidden="true" className="relative h-8 w-18 shrink-0 md:h-10 md:w-23">
        {PORTRAITS_BACK_TO_FRONT.map((portrait) => (
          <picture key={portrait.tablet}>
            <source media={MEDIA_QUERY.tablet} srcSet={portrait.tablet} />
            <img
              src={portrait.mobile}
              alt=""
              className={classNames(
                'absolute top-0 size-8 max-w-none md:size-10',
                portrait.offset,
              )}
            />
          </picture>
        ))}
      </div>

      <div className="flex flex-col gap-1.25">
        <p className="figma-text-14/17 whitespace-pre-wrap text-charcoal">
          <span className="sr-only">Rated 4.9 out of 5 from more than 500 reviews</span>
          <span aria-hidden="true">
            <span className="text-tone-6">★★★★★</span>
            {'  '}
            <span className="font-semibold">4.9</span>
            {'  (500+ reviews)'}
          </span>
        </p>
        <p className="figma-text-13/18 text-tone-5 xl:whitespace-nowrap">
          Loved by flower lovers in the Philippines
        </p>
      </div>
    </div>
  )
}
