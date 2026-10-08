import arrowUpRight from '../../assets/figma/icons/arrow-up-right.svg'
import { Button } from '../Button.tsx'

export function HeroActions() {
  return (
    <div className="flex items-center gap-3 pt-2">
      <Button href="#occasions">Shop Flowers</Button>
      <Button href="#classes" variant="secondary">
        Book a Class
      </Button>

      {
        
      }
      <a href="#visit" className="flex h-11 items-center gap-1.5">
        <span className="figma-text-13/16 whitespace-nowrap text-charcoal underline decoration-from-font [text-underline-position:from-font]">
          Visit From Sia
        </span>
        <img src={arrowUpRight} alt="" className="size-3.25 shrink-0" />
      </a>
    </div>
  )
}
