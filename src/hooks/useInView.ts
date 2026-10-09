import { useEffect, useRef, useState } from 'react'

function supportsIntersectionObserver(): boolean {
  return typeof IntersectionObserver !== 'undefined'
}

export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(() => !supportsIntersectionObserver())

  useEffect(() => {
    const element = ref.current
    if (!element || !supportsIntersectionObserver()) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        setInView(true)
        observer.disconnect()
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
