import { useState, useEffect } from "react"
import styles from "@/styles/Home.module.css"
import TimerClock from "./TimeClock"

const TimerControls = () => {
  const [duration, setDuration] = useState<number>(0)

  const handleButtonClick = (selectedDuration: number) => {
    setDuration(selectedDuration)
  }

  return (
    <div className={styles.timerBakgrund}>
      <br />
      <br />
      <br />
      <br />
      <div className={styles.timerClock}>
        <br />
        <br />
        <br />
        <br />
        <div className={styles.timerClockFrame}>
          <div className={styles.timerTwelveSpike}>|</div>
          <div className={styles.timerNineSpike}>-</div>
          <div className={styles.timerThreeSpike}>-</div>
          <div className={styles.timerSixSpike}>|</div>
          <div className={styles.timerPeppiFace}></div>
        </div>
        <br />
        <br />
        <br />
      </div>
      Välj tid manuellt
      <br />
      <div className={styles.digitalClock}> <TimerClock duration={duration} /></div>
      <br />
      <br />
      Snabbval
      <br />
      <div className={styles.boxSnabbButton}>
        <button
          className={styles.timerSnabbButtons}
          onClick={() => handleButtonClick(15)}
        >
          15 min
        </button>
        <button
          className={styles.timerSnabbButtons}
          onClick={() => handleButtonClick(30)}
        >
          30 min
        </button>
      </div>
      <div className={styles.boxSnabbButton}>
        <button
          className={styles.timerSnabbButtons}
          onClick={() => handleButtonClick(45)}
        >
          45 min
        </button>
        <button
          className={styles.timerSnabbButtons}
          onClick={() => handleButtonClick(60)}
        >
          60 min
        </button>
      </div>
      
    </div>
  )
}

export default TimerControls
