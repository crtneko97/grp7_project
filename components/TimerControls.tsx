import { useState, useEffect } from 'react';

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
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          }
          setIsPaused(true);
          return prevTimeLeft;
        });
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
  );
};

const TimerControls = () => {
  const [duration, setDuration] = useState<number>(0);

  const handleButtonClick = (selectedDuration: number) => {
    setDuration(selectedDuration);
  };

  return (
    <div>

    <div>
      <button onClick={() => handleButtonClick(15)}>15 min</button>
      <button onClick={() => handleButtonClick(30)}>30 min</button>
      <button onClick={() => handleButtonClick(45)}>45 min</button>
      <button onClick={() => handleButtonClick(60)}>60 min</button>
      <TimerClock duration={duration} />
    </div>
    </div>
  );
};

export default TimerControls;