import { useCallback, useEffect, useRef, useState } from 'react'

type Range = { first: number; last: number }

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useCarousel<T extends HTMLElement>() {
  const trackRef = useRef<T>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  // Set only after the visitor scrolls, so screen readers hear changes, not the initial state
  const [range, setRange] = useState<Range | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame = 0
    let settle = 0

    const measureEdges = () => {
      const max = track.scrollWidth - track.clientWidth
      setCanPrev(track.scrollLeft > 1)
      setCanNext(track.scrollLeft < max - 1)
    }

    const measureRange = () => {
      const viewport = track.getBoundingClientRect()
      let first = 0
      let last = 0
      Array.from(track.children).forEach((child, index) => {
        const box = child.getBoundingClientRect()
        const visible =
          Math.min(box.right, viewport.right) - Math.max(box.left, viewport.left)
        if (visible >= box.width / 2) {
          if (first === 0) first = index + 1
          last = index + 1
        }
      })
      if (first === 0) return
      setRange((current) =>
        current && current.first === first && current.last === last
          ? current
          : { first, last },
      )
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measureEdges)
      window.clearTimeout(settle)
      settle = window.setTimeout(measureRange, 160)
    }

    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measureEdges)
    })
    resizeObserver.observe(track)
    Array.from(track.children).forEach((child) => resizeObserver.observe(child))

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      resizeObserver.disconnect()
      cancelAnimationFrame(frame)
      window.clearTimeout(settle)
    }
  }, [])

  const scrollByPage = useCallback((direction: -1 | 1) => {
    const track = trackRef.current
    if (!track) return

    const firstItem = track.firstElementChild
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const step = firstItem
      ? firstItem.getBoundingClientRect().width + gap
      : track.clientWidth
    const perPage = Math.max(1, Math.floor((track.clientWidth + gap) / step))

    track.scrollBy({
      left: direction * perPage * step,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }, [])

  const scrollPrev = useCallback(() => scrollByPage(-1), [scrollByPage])
  const scrollNext = useCallback(() => scrollByPage(1), [scrollByPage])

  return { trackRef, canPrev, canNext, range, scrollPrev, scrollNext }
}
