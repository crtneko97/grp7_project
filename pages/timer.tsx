import { NextPage } from "next"
import { useState } from "react"
import BottomNavbar from "@/components/BottomNavbar"
import TimerControls from "@/components/TimerControls"
import Protected from "@/components/ifauthd"
interface Props {}

const Timer: NextPage<Props> = ({}) => {
  const [time, setTime] = useState<number | null>(null)

  const handleTimeSet = (seconds: number) => {
    setTime(seconds)
  }

  return (
    <>
    <Protected authenticatedComponent={
        <div>
         <TimerControls />
         <BottomNavbar />
         </div>
      } unauthenticatedComponent={
        <div>
          Loading...
        </div>
      } />
    </>
  )
}

export default Timer
