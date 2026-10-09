import { useId, useState } from 'react'
import { classNames } from '../../utils/classNames.ts'
import { BouquetScene } from './BouquetScene.tsx'
import { CampaignNav } from './CampaignNav.tsx'
import { CampaignNote } from './CampaignNote.tsx'
import { HeroActions } from './HeroActions.tsx'
import { HeroCopy } from './HeroCopy.tsx'
import { SocialProof } from './SocialProof.tsx'

const CAMPAIGN_COUNT = 3

const HERO_LAYOUT = classNames(
  'gutter relative flex flex-col overflow-clip',
  'md:grid md:grid-cols-[minmax(0,400fr)_minmax(0,368fr)] md:items-start',
  'lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]',
  'xl:block xl:h-201',
)

const COPY_LAYOUT = classNames(
  'relative z-10 flex flex-col items-start gap-7 px-(--gutter) pt-10 pb-12 @container',
  'md:pt-16 md:pr-0 md:pb-20',
  'xl:w-145 xl:pt-20 xl:pb-0 xl:[container-type:normal]',
)

export function Hero() {
  const headingId = useId()
  const [activeCampaign, setActiveCampaign] = useState(0)

  return (
    <section id="top" aria-labelledby={headingId} className="xl:desktop-canvas">
      <div className={HERO_LAYOUT}>
        <div className={COPY_LAYOUT}>
          <HeroCopy headingId={headingId} />
          <HeroActions />
          <SocialProof />
        </div>

        <BouquetScene
          note={<CampaignNote />}
          navigation={
            <CampaignNav
              count={CAMPAIGN_COUNT}
              activeIndex={activeCampaign}
              onSelect={setActiveCampaign}
            />
          }
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-160 left-0 hidden h-43 w-140 bg-linear-to-b from-ivory/0 to-ivory/80 xl:block"
        />
      </div>
    </section>
  )
}
