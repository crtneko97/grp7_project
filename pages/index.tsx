import { NextPage } from "next"
import BottomNavbar from "@/components/BottomNavbar"
interface Props {}


const index: NextPage<Props> = ({}) => {
  return (
  <div>
    <div>
      <BottomNavbar />
    </div>
  </div>
  )
}

export default index
