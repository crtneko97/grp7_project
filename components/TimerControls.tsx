import { useState, useEffect } from 'react';
import styles from "@/styles/Home.module.css";

interface Props {
  duration: number;
}

const TimerClock: React.FC<Props> = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration * 60);
  const [isPaused, setIsPaused] = useState<boolean>(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (!isPaused) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [duration, isPaused]);

  useEffect(() => {
    setTimeLeft(duration * 60);
  }, [duration]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleStart = () => {
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsPaused(true);
    setTimeLeft(duration * 60);
  };

  const handleManualTimeChange = (value: number) => {
    setIsPaused(true);
    const strTimeLeft = timeLeft.toString();
    const length = strTimeLeft.length;
    let newTimeLeft = 0;
    if (length < 3) {
      newTimeLeft = value < 10 ? value : Number(`${strTimeLeft}${value}`);
    } else {
      const minutes = Number(strTimeLeft.slice(0, length - 2));
      const seconds = Number(strTimeLeft.slice(length - 2, length));
      const newSeconds = value < 10 ? value : Number(`${seconds}${value}`);
      newTimeLeft = minutes * 60 + newSeconds;
    }
    setTimeLeft(newTimeLeft);
  };
  
  
  
  
  
  

  const handleBackspace = () => {
    const strTimeLeft = timeLeft.toString();
    const newTimeLeft = strTimeLeft.slice(0, strTimeLeft.length - 1);
    setTimeLeft(Number(newTimeLeft));
  };
  
  

  return (
    <div>
      <h1>{formatTime(timeLeft)}</h1>
      {isPaused ? (
        <button className={styles.timerSnabbButtons} onClick={handleStart}>Start</button>
      ) : (
        <button className={styles.timerSnabbButtons} onClick={handlePause}>Pause</button>
      )}
      <button className={styles.timerSnabbButtons} onClick={handleReset}>Reset</button>
    </div>
  );
};

const TimerControls = () => {
  const [duration, setDuration] = useState<number>(0);

  const handleButtonClick = (selectedDuration: number) => {
    setDuration(selectedDuration);
  };

  return (
    <>
    <div className={styles.timerBakgrund}>

      <div className={styles.digitalClock}>
      <TimerClock duration={duration} />
      </div>
      
      <div className={styles.boxSnabbButton}>
      <button className={styles.timerSnabbButtons} onClick={() => handleButtonClick(15)}>15 min</button>
      <button className={styles.timerSnabbButtons} onClick={() => handleButtonClick(30)}>30 min</button>
      <button className={styles.timerSnabbButtons} onClick={() => handleButtonClick(45)}>45 min</button>
      <button className={styles.timerSnabbButtons} onClick={() => handleButtonClick(60)}>60 min</button>
      </div>
    
    </div>
    </>
  );
};

export default TimerControls;