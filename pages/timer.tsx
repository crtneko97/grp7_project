import { NextPage } from "next";
import { useState } from "react";
import BottomNavbar from "@/components/BottomNavbar";
import TimerControls from "@/components/TimerControls";
import ManualTimerSetter from "@/components/TimerSetManually";

interface Props {}

const Timer: NextPage<Props> = ({}) => {
  const [time, setTime] = useState<number | null>(null);

  const handleTimeSet = (seconds: number) => {
    setTime(seconds);
  };

  return (
    <div>
      <div>
        <TimerControls />
      </div>

      <div>
        {time === null ? (
          <ManualTimerSetter onTimeSet={handleTimeSet} />
        ) : (
          <h1>{time}</h1>
        )}
      </div>

      <div>
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Timer;
