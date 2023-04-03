import { NextPage } from "next"
import BottomNavbar from "@/components/BottomNavbar"
interface Props {}

const index: NextPage<Props> = ({}) => {
  return (
      <div>
        <BottomNavbar />
      </div>
  )
}

export default index
