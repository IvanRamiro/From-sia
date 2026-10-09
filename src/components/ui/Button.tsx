import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import arrowRight from '../../assets/figma/icons/arrow-right.svg'
import { classNames } from '../../utils/classNames.ts'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  variant?: ButtonVariant
  children: ReactNode
}

const BASE_CLASSES =
  'inline-flex h-13 shrink-0 items-center justify-center gap-4 border px-5.75 figma-rounded-6 ' +
  'figma-text-14/17 font-medium whitespace-nowrap text-charcoal ' +
  'transition-[background-color,gap] duration-200 ease-out motion-reduce:transition-none'

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'border-dusty-rose bg-dusty-rose hover:bg-tone-8 active:gap-3 active:bg-tone-9',
  secondary: 'border-tone-7 bg-ivory hover:bg-tone-10 active:bg-tone-10',
}

export function Button({ variant = 'primary', className, children, ...anchorProps }: ButtonProps) {
  return (
    <a className={classNames(BASE_CLASSES, VARIANT_CLASSES[variant], className)} {...anchorProps}>
      <span>{children}</span>
      {variant === 'primary' && <img src={arrowRight} alt="" className="size-4 shrink-0" />}
    </a>
  )
}
