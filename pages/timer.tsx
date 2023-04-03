import { NextPage } from "next"
import BottomNavbar from "@/components/BottomNavbar"
import TimerControls from "@/components/TimerControls"
interface Props {}


interface Timer{}

const Timer: NextPage<Props> = ({}) => {
  return (
  <div>
      <div>
        <TimerControls />
      </div>

      <div>
      <BottomNavbar />
      </div>
  </div>
  )

}

export default Timer
