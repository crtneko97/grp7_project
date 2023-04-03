import PeppiStart from "@/components/PeppiStart"
import Image from "next/image"
import BottomNavbar from "@/components/BottomNavbar"
import { NextPage } from "next"
interface Props {}


const index: NextPage<Props> = ({}) => {
  return (
   <div className="container">
  <img className="center-image" src="/images/MASSIVE_PEPPI.svg" alt="your-image-alt-text" />
  <style jsx>{`
    .container {
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .center-image {
      display: block;
      margin: 0 auto;
      margin-top: 60%;
      max-width: 100%;
      max-height: 100%;
    }
  `}</style>
  <BottomNavbar />
</div>
 
  )
}

export default index
