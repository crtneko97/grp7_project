import { NextPage } from "next"
import BottomNavbar from "@/components/BottomNavbar"
import PeppiStart from "@/components/PeppiStart"
interface Props {}


const index: NextPage<Props> = ({}) => {
  return (
  <div>
    <div>
        <PeppiStart />
    </div>
    <div>
      <BottomNavbar />
    </div>
  </div>
  )
}

export default index
