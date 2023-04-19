import { useState } from "react";

interface Props {
  onTimeSet: (time: number) => void;
}

const ManualTimerSetter: React.FC<Props> = ({ onTimeSet }) => {
  const [time, setTime] = useState<number>(0);

  const handleDigitClick = (digit: number) => {
    setTime((prevTime) => {
      if (prevTime >= 9999) return prevTime; // limit time to 99:59
      return prevTime * 10 + digit;
    });
  };

  const handleDoubleZeroClick = () => {
    setTime((prevTime) => {
      if (prevTime >= 9900) return prevTime; // limit time to 99:59
      return prevTime * 100;
    });
  };

  const handleZeroClick = () => {
    setTime((prevTime) => {
      if (prevTime >= 990) return prevTime; // limit time to 99:59
      return prevTime * 10;
    });
  };

  const handleBackspaceClick = () => {
    setTime((prevTime) => Math.floor(prevTime / 10));
  };

  const handleSetClick = () => {
    onTimeSet(time);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <div>
        <button onClick={() => handleDigitClick(1)}>1</button>
        <button onClick={() => handleDigitClick(2)}>2</button>
        <button onClick={() => handleDigitClick(3)}>3</button>
        <button onClick={() => handleDigitClick(4)}>4</button>
        <button onClick={() => handleDigitClick(5)}>5</button>
        <button onClick={() => handleDigitClick(6)}>6</button>
        <button onClick={() => handleDigitClick(7)}>7</button>
        <button onClick={() => handleDigitClick(8)}>8</button>
        <button onClick={() => handleDigitClick(9)}>9</button>
      </div>
      <div>
        <button onClick={handleDoubleZeroClick}>00</button>
        <button onClick={handleZeroClick}>0</button>
        <button onClick={handleBackspaceClick}>←</button>
      </div>
      <button onClick={handleSetClick}>Set</button>
    </div>
  );
};

export default ManualTimerSetter;
