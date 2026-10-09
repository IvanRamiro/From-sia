import { useEffect, useRef, useState } from 'react'
import { MEDIA_QUERY } from '../constants/media.ts'

export type VisibleRange = {
  first: number
  last: number
}

type ScrollDirection = -1 | 1

const EDGE_TOLERANCE_PX = 1
const SCROLL_SETTLE_MS = 160

function measureVisibleRange(track: HTMLElement): VisibleRange | null {
  const viewport = track.getBoundingClientRect()
  const visibleIndexes = Array.from(track.children).flatMap((child, index) => {
    const box = child.getBoundingClientRect()
    const visibleWidth = Math.min(box.right, viewport.right) - Math.max(box.left, viewport.left)
    return visibleWidth >= box.width / 2 ? [index + 1] : []
  })

  if (visibleIndexes.length === 0) return null
  return { first: visibleIndexes[0], last: visibleIndexes[visibleIndexes.length - 1] }
}

function isSameRange(a: VisibleRange | null, b: VisibleRange) {
  return a?.first === b.first && a.last === b.last
}

export function useCarousel<T extends HTMLElement>() {
  const trackRef = useRef<T>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [visibleRange, setVisibleRange] = useState<VisibleRange | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let edgeFrame = 0
    let settleTimer = 0

    const updateEdges = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth
      setCanScrollPrev(track.scrollLeft > EDGE_TOLERANCE_PX)
      setCanScrollNext(track.scrollLeft < maxScrollLeft - EDGE_TOLERANCE_PX)
    }

    const scheduleEdgeUpdate = () => {
      cancelAnimationFrame(edgeFrame)
      edgeFrame = requestAnimationFrame(updateEdges)
    }

    const updateVisibleRange = () => {
      const range = measureVisibleRange(track)
      if (!range) return
      setVisibleRange((current) => (isSameRange(current, range) ? current : range))
    }

    const handleScroll = () => {
      scheduleEdgeUpdate()
      window.clearTimeout(settleTimer)
      settleTimer = window.setTimeout(updateVisibleRange, SCROLL_SETTLE_MS)
    }

    const resizeObserver = new ResizeObserver(scheduleEdgeUpdate)
    resizeObserver.observe(track)
    Array.from(track.children).forEach((child) => resizeObserver.observe(child))
    track.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      track.removeEventListener('scroll', handleScroll)
      resizeObserver.disconnect()
      cancelAnimationFrame(edgeFrame)
      window.clearTimeout(settleTimer)
    }
  }, [])

  const scrollByPage = (direction: ScrollDirection) => {
    const track = trackRef.current
    if (!track) return

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const firstItem = track.firstElementChild
    const step = firstItem ? firstItem.getBoundingClientRect().width + gap : track.clientWidth
    const itemsPerPage = Math.max(1, Math.floor((track.clientWidth + gap) / step))
    const prefersReducedMotion = window.matchMedia(MEDIA_QUERY.reducedMotion).matches

    track.scrollBy({
      left: direction * itemsPerPage * step,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return {
    trackRef,
    canScrollPrev,
    canScrollNext,
    visibleRange,
    scrollPrev: () => scrollByPage(-1),
    scrollNext: () => scrollByPage(1),
  }
}
