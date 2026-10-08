import birthdayDesktop from '../assets/figma/photos/occasion-birthday-desktop.jpg'
import birthdayMobile from '../assets/figma/photos/occasion-birthday-mobile.jpg'
import birthdayTablet from '../assets/figma/photos/occasion-birthday-tablet.jpg'
import congratulationsDesktop from '../assets/figma/photos/occasion-congratulations-desktop.jpg'
import congratulationsMobile from '../assets/figma/photos/occasion-congratulations-mobile.jpg'
import congratulationsTablet from '../assets/figma/photos/occasion-congratulations-tablet.jpg'
import eventsCorporateDesktop from '../assets/figma/photos/occasion-events-corporate-desktop.jpg'
import eventsCorporateMobile from '../assets/figma/photos/occasion-events-corporate-mobile.jpg'
import eventsCorporateTablet from '../assets/figma/photos/occasion-events-corporate-tablet.jpg'
import justBecauseDesktop from '../assets/figma/photos/occasion-just-because-desktop.jpg'
import justBecauseMobile from '../assets/figma/photos/occasion-just-because-mobile.jpg'
import justBecauseTablet from '../assets/figma/photos/occasion-just-because-tablet.jpg'
import loveRomanceDesktop from '../assets/figma/photos/occasion-love-romance-desktop.jpg'
import loveRomanceMobile from '../assets/figma/photos/occasion-love-romance-mobile.jpg'
import loveRomanceTablet from '../assets/figma/photos/occasion-love-romance-tablet.jpg'
import sympathyDesktop from '../assets/figma/photos/occasion-sympathy-desktop.jpg'
import sympathyMobile from '../assets/figma/photos/occasion-sympathy-mobile.jpg'
import sympathyTablet from '../assets/figma/photos/occasion-sympathy-tablet.jpg'

export type Occasion = {
  id: string
  label: string
  href: string
  /** One photo per Figma card size: mobile (296px), tablet (196px), desktop (202px) */
  image: { mobile: string; tablet: string; desktop: string }
}

/* Figma: "OccasionCarousel" — six categories, in this order */
export const OCCASIONS: Occasion[] = [
  {
    id: 'birthday',
    label: 'Birthday',
    href: '#occasion-birthday',
    image: { mobile: birthdayMobile, tablet: birthdayTablet, desktop: birthdayDesktop },
  },
  {
    id: 'love-romance',
    label: 'Love & Romance',
    href: '#occasion-love-romance',
    image: { mobile: loveRomanceMobile, tablet: loveRomanceTablet, desktop: loveRomanceDesktop },
  },
  {
    id: 'congratulations',
    label: 'Congratulations',
    href: '#occasion-congratulations',
    image: { mobile: congratulationsMobile, tablet: congratulationsTablet, desktop: congratulationsDesktop },
  },
  {
    id: 'just-because',
    label: 'Just Because',
    href: '#occasion-just-because',
    image: { mobile: justBecauseMobile, tablet: justBecauseTablet, desktop: justBecauseDesktop },
  },
  {
    id: 'sympathy',
    label: 'Sympathy',
    href: '#occasion-sympathy',
    image: { mobile: sympathyMobile, tablet: sympathyTablet, desktop: sympathyDesktop },
  },
  {
    id: 'events-corporate',
    label: 'Events & Corporate',
    href: '#occasion-events-corporate',
    image: { mobile: eventsCorporateMobile, tablet: eventsCorporateTablet, desktop: eventsCorporateDesktop },
  },
]
