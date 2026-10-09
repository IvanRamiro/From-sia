# From Sia — homepage

The homepage (header, hero and shop by occasion) from the Figma file
**FROMSIA FLOWER SHOP**, built with React, TypeScript, Vite and Tailwind CSS v4.

## Run it

```bash
npm install        # only if node_modules is missing
npm run dev
npm run build      # type-check and production build
npm run lint
```

## Status

| Section          | Desktop (≥1280) | Tablet (768–1279)     | Mobile (<768)        |
| ---------------- | --------------- | --------------------- | -------------------- |
| Header           | Figma           | adapted from desktop  | adapted from desktop |
| Hero             | Figma           | adapted from desktop  | adapted from desktop |
| Shop by occasion | Figma           | Figma (`md:`)         | Figma (base)         |

The desktop frame is the source of truth. Tablet and mobile reuse the same elements, assets,
colours, type styles and spacing; they only wrap, stack or scale where something cannot fit.

## Breakpoints

Tailwind's defaults, used only where the layout has to change:

- **base** — mobile. The hero stacks: copy, then the bouquet scene.
- **`md:` (48rem / 768px)** — tablet. The hero sits side by side, copy left and scene right,
  as on desktop. The header shows the account icon and "Order Flowers".
- **`lg:` (64rem / 1024px)** — the primary navigation fits inline in the header.
- **`xl:` (80rem / 1280px)** — desktop. The header and hero switch to the desktop canvas.

How each part adapts below desktop:

- **Header** — always 96px tall with the desktop link, icon and button styles. Below `lg` the
  navigation moves into a panel opened by the Figma menu icon (closes on Escape or when a
  link is chosen); below `md` the account icon and "Order Flowers" move into that panel too.
- **Headline** — keeps the desktop face, weight and 84/88 line-height ratio, and is capped at
  88px. It only shrinks to fit its column (`min(5.5rem, 17cqi)`, sized against the copy
  column as a container).
- **Bouquet scene** — the desktop photo and decor, with each layer placed at its desktop
  position as a percentage of the scene, so the composition scales as one piece. The
  handwritten note keeps its size and sits just under the bouquet.
- **Eyebrow** — 10px with a 16px rule below desktop (the Figma tablet and mobile values) so it
  stays on one line in the narrower column.
- **Social proof** — the 32px portraits on mobile, 40px from tablet up, so the endorsement line
  fits beside them.
- **Campaign navigation** — on tablet the scene fades to ivory beneath it, as the desktop photo
  does; on mobile it sits centred below the bouquet.
- **Everything else** keeps its desktop size and wraps when the line is too short.

## The desktop canvas

From 1280px up, the header and hero are built on a *desktop canvas*
(`xl:desktop-canvas`, defined in `src/index.css`):

- 1440px wide and centred when the window is 1440px or wider — every size is the
  Figma pixel value.
- Between 1280px and 1440px the composition shrinks in proportion instead of reflowing.

Inside a canvas, Tailwind's spacing unit follows the canvas width, so ordinary
utilities scale by themselves: `xl:w-145` is 580 Figma px, `xl:pt-20` is 80 (multiply by 4).
Outside a canvas the same utilities are ordinary CSS pixels.

| Utility                       | Meaning                               | Example            |
| ----------------------------- | ------------------------------------- | ------------------ |
| `figma-text-<size>/<leading>` | font size / line height in Figma px   | `figma-text-88/84` |
| `figma-rounded-<radius>`      | corner radius in Figma px             | `figma-rounded-6`  |
| `gutter` + `px-(--gutter)`    | page side padding: 24 / 32 / 64       | header, hero, occasions |

`figma-text-*` is used for all typography so sizes read the same way everywhere.
Avoid arbitrary pixel values such as `xl:w-[580px]` inside a canvas: they do not scale.

To change the canvas behaviour, edit `desktop-canvas` in `src/index.css`:

- never shrink (fixed Figma pixels): set `--figma-px` to `1px` in the rule;
- also grow on windows wider than 1440px: remove the `max-width` line.

## Where things are

```
src/
  index.css                       design tokens, desktop canvas, gutter and Figma-pixel utilities
  main.tsx, App.tsx               entry point and page
  constants/media.ts              media queries shared by <picture> and scripts
  utils/classNames.ts             joins conditional class names
  data/
    navigation.ts                 primary navigation links
    occasions.ts                  the six occasions and their photos
  hooks/
    useCarousel.ts                arrow state, paging and visible range for the occasion row
    useInView.ts                  triggers the card entrance when the row scrolls into view
  components/
    ui/
      Button.tsx                  Figma "From Sia / Button" — primary / secondary, hover, pressed
    header/
      Header.tsx                  header bar and menu state
      headerStyles.ts             link and icon classes shared by the bar and the menu panel
      Brand.tsx                   wordmark, rule, descriptor
      PrimaryNav.tsx              Shop / Classes / Visit / About (inline from lg)
      HeaderActions.tsx           search, account, bag, divider, "Order Flowers"
      MenuToggle.tsx              menu button (below lg)
      MenuPanel.tsx               menu panel (below lg)
    hero/
      Hero.tsx                    hero layout and campaign state
      HeroCopy.tsx                eyebrow, headline, description
      HeroActions.tsx             two buttons and the "Visit From Sia" link
      SocialProof.tsx             portraits, rating, endorsement
      BouquetScene.tsx            light bloom, window shadows, bouquet photo
      CampaignNote.tsx            handwritten "More than flowers"
      CampaignNav.tsx             01 / 02 / 03
    occasions/
      OccasionSection.tsx         section heading, "View all", arrows, card row
      OccasionCard.tsx            card with hover and keyboard-focus states
      CarouselArrow.tsx           previous / next with default, hover, disabled artwork
  assets/figma/
    icons/, decor/, photos/       exported from Figma
```

The `*-tablet.*`, `*-mobile.*` and `portrait-*-32.png` hero assets are kept for when the
tablet and mobile frames are implemented; the current tablet and mobile hero use the
desktop assets.

## Notes on matching Figma

- **Line heights are whole pixels.** Figma snaps them (88px at 96% is drawn as 84px,
  16px at 165% as 26px), so the code uses the snapped values.
- **No letter-spacing.** Several text layers store a letter-spacing value with an
  invalid unit, and Figma draws them with none. The code matches what Figma draws.
- **Hero height is 804px** on desktop. The hero composition is 812px tall in Figma, but its
  900px frame cuts it at 804px and the next section starts there.
- **Carousel arrows** show their real state: "previous" is disabled at the start, "next" at
  the end, and both are disabled when all six cards fit (1440px and wider).
- **Campaign numbers** 01 / 02 / 03 switch the highlighted number, but only the first
  campaign is designed, so the hero content does not change.
- **Occasion cards** fade and rise in one after another the first time the row scrolls
  into view. With "reduce motion" switched on there is no entrance animation, image zoom
  or smooth scrolling.
