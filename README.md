# From Sia — homepage

The homepage (header, hero and shop by occasion) from the Figma file
**FROMSIA FLOWER SHOP**, built with React, TypeScript, Vite and Tailwind CSS v4.

## Run it

```bash
npm install        # only if node_modules is missing
npm run dev
```

## Status

| Section          | Desktop (1440) | Tablet (768)      | Mobile (390)      |
| ---------------- | -------------- | ----------------- | ----------------- |
| Header           | done           | not started       | not started       |
| Hero             | done           | not started       | not started       |
| Shop by occasion | done           | done (`md:`)      | done (base)       |

The header and hero are **desktop only** for now and follow the Figma frame
"From Sia · Desktop hero" exactly.

## The desktop canvas

The header and hero are built on a *desktop canvas* (`desktop-canvas` in
`src/index.css`):

- 1440px wide and centred when the window is 1440px or wider — every size is the
  Figma pixel value.
- On narrower windows the whole composition shrinks in proportion, so it keeps
  the Figma layout instead of reflowing. Nothing switches to a tablet or mobile
  layout yet.

Inside a canvas, Tailwind's spacing unit follows the canvas width, so ordinary
utilities scale by themselves: `w-145` is 580 Figma px, `pt-20` is 80, `gap-7`
is 28 (multiply by 4, as usual). Two extra utilities cover what spacing does not:

| Utility                       | Meaning                              | Example            |
| ----------------------------- | ------------------------------------ | ------------------ |
| `figma-text-<size>/<leading>` | font size / line height in Figma px  | `figma-text-88/84` |
| `figma-rounded-<radius>`      | corner radius in Figma px            | `figma-rounded-6`  |

Avoid arbitrary pixel values such as `w-[580px]` inside a canvas: they do not scale.

To change the behaviour, edit `desktop-canvas` in `src/index.css`:

- never shrink (fixed Figma pixels): set `--figma-px` to `1px` in the rule;
- also grow on windows wider than 1440px: remove the `max-width` line.

Tablet and mobile layouts can later be added per component with `md:` / `xl:`
variants (or a second canvas width) without restructuring the components.

## Where things are

```
src/
  index.css                    design tokens, desktop canvas, Figma-pixel utilities
  App.tsx                      page: Header, Hero, OccasionSection
  data/
    navigation.ts              primary navigation links
    occasions.ts               the six occasions and their photos
  components/
    Button.tsx                 Figma "From Sia / Button" — primary / secondary, hover, pressed
    Header.tsx                 header bar: composes the three parts below
    header/Brand.tsx           wordmark, rule, descriptor
    header/PrimaryNav.tsx      Shop / Classes / Visit / About
    header/HeaderActions.tsx   search, account, bag, divider, "Order Flowers"
    Hero.tsx                   hero composition: layers in Figma's order
    hero/HeroCopy.tsx          eyebrow, headline, description
    hero/HeroActions.tsx       two buttons and the "Visit From Sia" link
    hero/SocialProof.tsx       portraits, rating, endorsement
    hero/BouquetScene.tsx      light bloom, window shadows, bouquet photo
    hero/CampaignNote.tsx      handwritten "More than flowers"
    hero/CampaignNav.tsx       01 / 02 / 03
    OccasionSection.tsx        section heading, "View all", arrows, card row
    occasions/OccasionCard.tsx     card with hover and keyboard-focus states
    occasions/CarouselArrow.tsx    previous / next with default, hover, disabled artwork
  hooks/
    useCarousel.ts             arrow buttons for the native horizontal scroller
    useInView.ts               triggers the card entrance when the row scrolls into view
  assets/figma/
    icons/                     icons and arrows exported from Figma
    decor/                     blurred light and window-shadow vectors from Figma
    photos/                    photographs downloaded from Figma (original sources)
```

Assets for the tablet and mobile frames (`menu.svg`, `*-tablet.*`, `*-mobile.*`,
`portrait-*-32.png`) are in `assets/figma/` but not used by the header or hero yet.

## Notes on matching Figma

- **Line heights are whole pixels.** Figma snaps them (88px at 96% is drawn as 84px,
  16px at 165% as 26px), so the code uses the snapped values. This keeps every text
  block at the same position as the frame.
- **No letter-spacing.** Several text layers store a letter-spacing value with an
  invalid unit, and Figma draws them with none. The code matches what Figma draws.
- **Hero height is 804px.** The hero composition is 812px tall in Figma, but its
  900px frame cuts it at 804px and the next section starts there.
- **Carousel arrows** show their real state. Figma draws both arrows as enabled
  everywhere; here "previous" is disabled at the start, "next" at the end, and both
  are disabled when all six cards fit (1440px and wider).
- **Campaign numbers** 01 / 02 / 03 switch the highlighted number, but only the first
  campaign is designed, so the hero content does not change.
- **Occasion cards** fade and rise in one after another the first time the row scrolls
  into view, as the Figma implementation note describes. With "reduce motion" switched
  on there is no entrance animation, image zoom or smooth scrolling.
# From-sia
