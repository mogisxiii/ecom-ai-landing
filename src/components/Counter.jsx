import { useEffect, useState, useRef } from "react"

export default function Counter({
  target = 0,
  suffix = "",
  duration = 2000,
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)
  const hasAnimated = useRef(false)

  // 👇 Detect scroll vào viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (counterRef.current) observer.observe(counterRef.current)

    return () => observer.disconnect()
  }, [])

  // 👇 Luxury animation với easing
  useEffect(() => {
    if (!isVisible) return

    let startTime = null

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const progressPercent = Math.min(progress / duration, 1)

      const eased = easeOutCubic(progressPercent)
      const currentValue = Math.floor(eased * target)

      setCount(currentValue)

      if (progress < duration) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}