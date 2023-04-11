import BottomNavbar from '@/components/BottomNavbar'
import { NextPage } from 'next'
import LoginForm from '@/components/LoginForm'


const loginPage: NextPage = ({}) => {
  return (
  <div>
        <LoginForm/>

      <div>
        <BottomNavbar />
      </div>

  </div>
  )
}

export default loginPage
