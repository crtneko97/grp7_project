import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { useState, useEffect } from "react"

interface Props {
  duration: number
}

const TimerClock: React.FC<Props> = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration * 60)
  const [isPaused, setIsPaused] = useState<boolean>(true)

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined
    if (!isPaused) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1)
      }, 1000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [duration, isPaused])

  useEffect(() => {
    setTimeLeft(duration * 60)
  }, [duration])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`
    return `${formattedMinutes}:${formattedSeconds}`
  }

  const handleStart = () => {
    setIsPaused(false)
  }

  const handlePause = () => {
    setIsPaused(true)
  }

  const handleReset = () => {
    setIsPaused(true)
    setTimeLeft(duration * 60)
  }

  return (
    <div>
      <h1>{formatTime(timeLeft)}</h1>
      {isPaused ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handlePause}>Pause</button>
      )}
      <button onClick={handleReset}>Reset</button>
      <div>
        <button onClick={() => handleManualTimeChange(1)}>1</button>
        <button onClick={() => handleManualTimeChange(2)}>2</button>
        <button onClick={() => handleManualTimeChange(3)}>3</button>
        <button onClick={() => handleManualTimeChange(4)}>4</button>
        <button onClick={() => handleManualTimeChange(5)}>5</button>
        <button onClick={() => handleManualTimeChange(6)}>6</button>
        <button onClick={() => handleManualTimeChange(7)}>7</button>
        <button onClick={() => handleManualTimeChange(8)}>8</button>
        <button onClick={() => handleManualTimeChange(9)}>9</button>
        <button onClick={() => handleManualTimeChange(0)}>0</button>
        <button onClick={handleBackspace}>Backspace</button>
      </div>
    </div>
  )
}

const TimerControls = () => {
  const [duration, setDuration] = useState<number>(15)

  const handleButtonClick = (selectedDuration: number) => {
    setDuration(selectedDuration)
  }

  return (
    <div>
      <button onClick={() => handleButtonClick(15)}>15 min</button>
      <button onClick={() => handleButtonClick(30)}>30 min</button>
      <button onClick={() => handleButtonClick(45)}>45 min</button>
      <button onClick={() => handleButtonClick(60)}>60 min</button>
      <TimerClock duration={duration} />
    </div>
  )
}

export default TimerControls
