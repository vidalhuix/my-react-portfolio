import { useEffect, useRef } from "react"
import styles from "./Ticker.module.css"

export const Ticker = () => {
  const tickerRef = useRef(null)

  useEffect(() => {
    const tickerElement = tickerRef.current
    const tickerWidth = tickerElement.offsetWidth
    const containerWidth = tickerElement.parentElement.offsetWidth

    const animationDuration = (tickerWidth + containerWidth) / 100 // Adjust speed here
    tickerElement.style.animationDuration = `${animationDuration}s`
  }, [])

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.ticker} ref={tickerRef}>
        <span>Arnau Vidal ・ Frontend Developer ・</span>
        <span>Arnau Vidal ・ Frontend Developer ・</span>
        <span>Arnau Vidal ・ Frontend Developer ・</span>
        <span>Arnau Vidal ・ Frontend Developer ・</span>
        <span>Arnau Vidal ・ Frontend Developer ・</span>
        <span>Arnau Vidal ・ Frontend Developer ・</span>
        <span>Arnau Vidal ・ Frontend Developer ・</span>
        <span>Arnau Vidal ・ Frontend Developer ・</span>
        <span>Arnau Vidal ・ Frontend Developer ・</span>
        <span>Arnau Vidal ・ Frontend Developer ・</span>
        <span>Arnau Vidal ・ Frontend Developer ・</span>
        <span>Arnau Vidal ・ Frontend Developer ・</span>
      </div>
    </div>
  )
}
