import { useId, useState } from 'react'
import { BouquetScene } from './hero/BouquetScene.tsx'
import { CampaignNav } from './hero/CampaignNav.tsx'
import { CampaignNote } from './hero/CampaignNote.tsx'
import { HeroActions } from './hero/HeroActions.tsx'
import { HeroCopy } from './hero/HeroCopy.tsx'
import { SocialProof } from './hero/SocialProof.tsx'

const CAMPAIGN_COUNT = 3

export function Hero() {
  const headingId = useId()
  const [activeCampaign, setActiveCampaign] = useState(0)

  return (
    <section id="top" aria-labelledby={headingId} className="desktop-canvas">
      <div className="relative h-201 overflow-clip">
        <BouquetScene />

        <div className="relative flex w-145 flex-col items-start gap-7 pt-20 pl-16">
          <HeroCopy headingId={headingId} />
          <HeroActions />
          <SocialProof />
        </div>

        <CampaignNote />
        <CampaignNav
          count={CAMPAIGN_COUNT}
          activeIndex={activeCampaign}
          onSelect={setActiveCampaign}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-160 left-0 h-43 w-140 bg-linear-to-b from-ivory/0 to-ivory/80"
        />
      </div>
    </section>
  )
}
