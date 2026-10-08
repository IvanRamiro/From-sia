import nextDefault from '../../assets/figma/icons/carousel-next-default.svg'
import nextDisabled from '../../assets/figma/icons/carousel-next-disabled.svg'
import nextHover from '../../assets/figma/icons/carousel-next-hover.svg'
import prevDefault from '../../assets/figma/icons/carousel-prev-default.svg'
import prevDisabled from '../../assets/figma/icons/carousel-prev-disabled.svg'
import prevHover from '../../assets/figma/icons/carousel-prev-hover.svg'

type Direction = 'previous' | 'next'

type CarouselArrowProps = {
  direction: Direction
  disabled: boolean
  onClick: () => void
  controls: string
}

const ARTWORK: Record<Direction, { label: string; default: string; hover: string; disabled: string }> = {
  previous: {
    label: 'Previous occasions',
    default: prevDefault,
    hover: prevHover,
    disabled: prevDisabled,
  },
  next: {
    label: 'Next occasions',
    default: nextDefault,
    hover: nextHover,
    disabled: nextDisabled,
  },
}

export function CarouselArrow({ direction, disabled, onClick, controls }: CarouselArrowProps) {
  const art = ARTWORK[direction]

  return (
    <button
      type="button"
      aria-label={art.label}
      aria-controls={controls}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={`group relative size-11 shrink-0 rounded-full ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
    >
      {disabled ? (
        <img src={art.disabled} alt="" width={44} height={44} className="absolute inset-0 size-full" />
      ) : (
        <>
          <img src={art.default} alt="" width={44} height={44} className="absolute inset-0 size-full" />
          <img
            src={art.hover}
            alt=""
            width={44}
            height={44}
            className="absolute inset-0 size-full opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 motion-reduce:transition-none"
          />
        </>
      )}
    </button>
  )
}
