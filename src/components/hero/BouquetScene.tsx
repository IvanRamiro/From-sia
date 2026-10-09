import type { ReactNode } from 'react'
import lightBloomDesktop from '../../assets/figma/decor/light-bloom-desktop.svg'
import lightBloomTablet from '../../assets/figma/decor/light-bloom-tablet.svg'
import windowShadowsDesktop from '../../assets/figma/decor/window-shadows-desktop.svg'
import windowShadowsMobile from '../../assets/figma/decor/window-shadows-mobile.svg'
import windowShadowsTablet from '../../assets/figma/decor/window-shadows-tablet.svg'
import bouquetDesktop from '../../assets/figma/photos/hero-bouquet-desktop.png'
import bouquetMobile from '../../assets/figma/photos/hero-bouquet-mobile.png'
import bouquetTablet from '../../assets/figma/photos/hero-bouquet-tablet.png'
import { MEDIA_QUERY } from '../../constants/media.ts'
import { classNames } from '../../utils/classNames.ts'

type BouquetSceneProps = {
  note: ReactNode
  navigation: ReactNode
}

// Mobile and tablet follow the 390×520 and 368×780 Figma scenes as percentages so they
// scale with the screen; desktop keeps the fixed 920px scene on the desktop canvas.
// Each decor SVG includes its blur as a margin, so it sits that far outside the scene.
// The scene is a size container below xl so the campaign note can scale with it.
const SCENE_LAYOUT = classNames(
  'relative @container',
  'xl:absolute xl:-top-15 xl:left-130 xl:size-230 xl:[container-type:normal]',
)

const ARTWORK_LAYOUT = classNames(
  'relative aspect-[390/520] w-full overflow-clip',
  'md:aspect-[368/780]',
  'xl:size-full',
)

const PHOTO_LAYOUT = classNames(
  'absolute -top-[5.77%] -left-[5.13%] h-[107.69%] w-[110.26%] max-w-none object-cover',
  'md:top-0 md:left-0 md:h-full md:w-[127.17%]',
  'xl:size-full',
)

const MOBILE_ONLY = 'md:hidden'
const TABLET_ONLY = 'hidden md:block xl:hidden'
const DESKTOP_ONLY = 'hidden xl:block'

export function BouquetScene({ note, navigation }: BouquetSceneProps) {
  return (
    <div className={SCENE_LAYOUT}>
      <div className={ARTWORK_LAYOUT}>
        <img
          src={windowShadowsMobile}
          alt=""
          className={classNames(
            MOBILE_ONLY,
            'absolute -top-[5.38%] -left-[7.18%] h-[110.77%] w-[114.36%] max-w-none',
          )}
        />

        <img
          src={lightBloomTablet}
          alt=""
          className={classNames(
            TABLET_ONLY,
            'absolute -top-[2.56%] left-0 w-[130.43%] max-w-none',
          )}
        />
        <img
          src={windowShadowsTablet}
          alt=""
          className={classNames(
            TABLET_ONLY,
            'absolute -top-[2.56%] -left-[5.43%] h-[105.13%] w-[138.04%] max-w-none',
          )}
        />

        <img
          src={lightBloomDesktop}
          alt=""
          className={classNames(DESKTOP_ONLY, 'absolute top-0 left-30 size-165 max-w-none')}
        />
        <img
          src={windowShadowsDesktop}
          alt=""
          className={classNames(DESKTOP_ONLY, 'absolute -top-6 -left-6 size-242 max-w-none')}
        />

        <picture>
          <source media={MEDIA_QUERY.desktop} srcSet={bouquetDesktop} />
          <source media={MEDIA_QUERY.tablet} srcSet={bouquetTablet} />
          <img
            src={bouquetMobile}
            alt="A hand-tied bouquet of blush peonies, garden roses and white lisianthus, wrapped in cream paper with a ribbon and a From Sia tag"
            fetchPriority="high"
            decoding="async"
            className={PHOTO_LAYOUT}
          />
        </picture>

        <div
          aria-hidden="true"
          className={classNames(
            MOBILE_ONLY,
            'pointer-events-none absolute inset-x-0 top-0 h-[15.38%] bg-linear-to-b from-ivory to-ivory/0',
          )}
        />
        <div
          aria-hidden="true"
          className={classNames(
            MOBILE_ONLY,
            'pointer-events-none absolute inset-x-0 bottom-0 h-[26.92%] bg-linear-to-b from-ivory/0 to-ivory',
          )}
        />
        <div
          aria-hidden="true"
          className={classNames(
            TABLET_ONLY,
            'pointer-events-none absolute inset-y-0 right-0 w-[30%] bg-linear-to-r from-ivory/0 to-ivory',
          )}
        />
        <div
          aria-hidden="true"
          className={classNames(
            TABLET_ONLY,
            'pointer-events-none absolute bottom-0 left-0 h-[20.51%] w-[127.17%] bg-linear-to-b from-ivory/0 to-ivory/87',
          )}
        />
      </div>
      {note}
      {navigation}
    </div>
  )
}
