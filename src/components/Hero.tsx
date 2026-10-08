import { useId, useState } from 'react'
import { BouquetScene } from './hero/BouquetScene.tsx'
import { CampaignNav } from './hero/CampaignNav.tsx'
import { CampaignNote } from './hero/CampaignNote.tsx'
import { HeroActions } from './hero/HeroActions.tsx'
import { HeroCopy } from './hero/HeroCopy.tsx'
import { SocialProof } from './hero/SocialProof.tsx'

/* The Figma file numbers three campaigns; only the first one is designed. */
const CAMPAIGN_COUNT = 3

/**
 * Figma: "Hero composition" in "From Sia · Desktop hero".
 *
 * The composition is 1440×812, but the 900px frame cuts it at 804px (96px header
 * + 804px), and the next section starts there — so the hero is 804px tall.
 *
 * Layers, in Figma's order (later ones paint on top):
 *   Bouquet scene        920×920 at 520 / −60
 *   Editorial content    580px column: 64px left padding, 80px top padding, 28px gaps
 *   Campaign note        203×61 at 1110 / 690
 *   Campaign navigation  centred vertically on the right edge
 *   bottom-gradient      560×172 at 0 / 640, ivory 0% → 80%
 *
 * Desktop only for now. Tablet and mobile layouts will be added as variants here.
 */
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
