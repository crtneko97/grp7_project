import { useState, useEffect } from "react"
import styles from "@/styles/Home.module.css"
import TimerClock from "./TimeClock"

const TimerControls = () => {
  const [duration, setDuration] = useState<number>(0)

  const handleButtonClick = (selectedDuration: number) => {
    setDuration(selectedDuration)
  }

  /* onClick Manual-Time-PopUp meny */
  const [isHidden, setIsHidden] = useState(true)

  function toggleManuellTime() {
    setIsHidden(!isHidden)
  }

  return (
    <>
      <div className={styles.timerBakgrund}>
        <div className={styles.timerClock}>
          <br />
          <br />
          <br />
          <br />
          <div className={styles.timerClockFrame}>
            <div className={styles.timerZeroOverSpike}>0</div>

            {/* Vertical letter-Style */}
            <div className={styles.verticalLettersBox}>
              <div className={styles.timerTwelveSpike}>-</div>
            </div>

            <div className={styles.timerNineSpike}>-</div>
            <div className={styles.timerThreeSpike}>-</div>

            {/* Vertical letter-Style */}
            <div className={styles.verticalLettersBox}>
              <div className={styles.timerSixSpike}>-</div>
            </div>
            <div className={styles.timerPeppiFace}></div>
          </div>
        </div>
        Välj tid manuellt
        <div className={styles.digitalClock}>
          {" "}
          {/*
        <TimerClock duration={duration} />
        */}
          <h1 className={styles.digitMittKnapp} onClick={toggleManuellTime}>
            00:00
          </h1>
          <div className={isHidden ? styles.hidden : styles.visible}>
            {/* START */}
            {/* MANUELL TID - TIMER POPUP                                   *** KOLLA MED KRILLE, VA FAN HÄNDER Å SKER?! *****/}
            <div className={styles.manuellTimeCard}>
              {/* EXIT BUTTON */}
              <div className={styles.timerExitBox}>
                <div
                  onClick={toggleManuellTime}
                  className={styles.timerExitKnapp}
                >
                  x
                </div>
              </div>
              {/* EXIT BUTTON END HERE! */}
              <div className={styles.digitalClock}>
                {" "}
                <TimerClock duration={duration} />
                <br />
                <br />
              </div>

              <div className={styles.boxAvbrytBekrefta}>
                <div className={styles.avbrytKnapplist}>AVBRYT</div>
                <div className={styles.bekreftaKnapplist}>BEKRÄFTA</div>
              </div>
            </div>
            {/* STOPP */}
          </div>
        </div>
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
        <div className={styles.boxSnabbButton2}>
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
        <br />
        <br />
        <br />
        <div>
          {" "}
          <img
            className={styles.happyEyesPeppi}
            src="/images/HappyEyes.svg"
            alt="your-image-alt-text"
          />
        </div>
      </div>
    </>
  )
}

export default TimerControls
