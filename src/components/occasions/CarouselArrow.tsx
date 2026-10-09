import nextDefault from '../../assets/figma/icons/carousel-next-default.svg'
import nextDisabled from '../../assets/figma/icons/carousel-next-disabled.svg'
import nextHover from '../../assets/figma/icons/carousel-next-hover.svg'
import prevDefault from '../../assets/figma/icons/carousel-prev-default.svg'
import prevDisabled from '../../assets/figma/icons/carousel-prev-disabled.svg'
import prevHover from '../../assets/figma/icons/carousel-prev-hover.svg'
import { classNames } from '../../utils/classNames.ts'

type CarouselDirection = 'previous' | 'next'

type ArrowArtwork = {
  label: string
  default: string
  hover: string
  disabled: string
}

type CarouselArrowProps = {
  direction: CarouselDirection
  disabled: boolean
  onClick: () => void
  controls: string
}

const ARTWORK: Record<CarouselDirection, ArrowArtwork> = {
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

const ARTWORK_SIZE_PX = 44

type ArtworkImageProps = {
  src: string
  className?: string
}

function ArtworkImage({ src, className }: ArtworkImageProps) {
  return (
    <img
      src={src}
      alt=""
      width={ARTWORK_SIZE_PX}
      height={ARTWORK_SIZE_PX}
      className={classNames('absolute inset-0 size-full', className)}
    />
  )
}

export function CarouselArrow({ direction, disabled, onClick, controls }: CarouselArrowProps) {
  const artwork = ARTWORK[direction]

  return (
    <button
      type="button"
      aria-label={artwork.label}
      aria-controls={controls}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={classNames(
        'group relative size-11 shrink-0 rounded-full',
        disabled ? 'cursor-default' : 'cursor-pointer',
      )}
    >
      {disabled ? (
        <ArtworkImage src={artwork.disabled} />
      ) : (
        <>
          <ArtworkImage src={artwork.default} />
          <ArtworkImage
            src={artwork.hover}
            className="opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 motion-reduce:transition-none"
          />
        </>
      )}
    </button>
  )
}
