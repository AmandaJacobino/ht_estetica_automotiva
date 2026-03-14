import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // TODO: implement IntersectionObserver logic

  return { ref, isVisible }
}
