import lightBloom from '../../assets/figma/decor/light-bloom-desktop.svg'
import windowShadows from '../../assets/figma/decor/window-shadows-desktop.svg'
import bouquet from '../../assets/figma/photos/hero-bouquet-desktop.png'

/**
 * Figma: "Bouquet scene" — a clipped 920×920 square at x 520, y −60 of the hero,
 * so it reaches the right edge and runs 60px above and 56px below the hero.
 *
 * Three layers, bottom to top:
 *   light-bloom           500px ivory circle at 200/80, blurred 80
 *   Soft window shadows   diagonal bands, 14% opacity, blurred 24
 *   Bouquet photography   the photo, filling the square
 *
 * The two SVGs carry their blur as a margin around the artwork (80px and 24px),
 * so each is placed that far outside its Figma position.
 */
export function BouquetScene() {
  return (
    <div className="absolute -top-15 left-130 size-230 overflow-clip">
      <img src={lightBloom} alt="" className="absolute top-0 left-30 size-165 max-w-none" />
      <img src={windowShadows} alt="" className="absolute -top-6 -left-6 size-242 max-w-none" />
      <img
        src={bouquet}
        alt="A hand-tied bouquet of blush peonies, garden roses and white lisianthus, wrapped in cream paper with a ribbon and a From Sia tag"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full max-w-none object-cover"
      />
    </div>
  )
}
