import type { AnchorHTMLAttributes, ReactNode } from 'react'
import arrowRight from '../assets/figma/icons/arrow-right.svg'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Figma: "From Sia / Button" — Type=Primary | Secondary */
  variant?: ButtonVariant
  children: ReactNode
}

/*
 * 52px tall, 24px side padding, 16px between label and arrow, 6px radius,
 * Inter Medium 14/17. The 1px stroke sits inside the 24px padding in Figma,
 * so the CSS padding is 23px (5.75 units) plus the border.
 */
const base =
  'inline-flex h-13 shrink-0 items-center justify-center gap-4 border px-5.75 figma-rounded-6 ' +
  'figma-text-14/17 font-medium whitespace-nowrap text-charcoal ' +
  'transition-[background-color,gap] duration-200 ease-out motion-reduce:transition-none'

/* State=Default | Hover | Pressed of the Figma component set */
const variants: Record<ButtonVariant, string> = {
  primary:
    'border-dusty-rose bg-dusty-rose hover:bg-tone-8 active:gap-3 active:bg-tone-9',
  secondary: 'border-tone-7 bg-ivory hover:bg-tone-10 active:bg-tone-10',
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      <span>{children}</span>
      {variant === 'primary' && <img src={arrowRight} alt="" className="size-4 shrink-0" />}
    </a>
  )
}
