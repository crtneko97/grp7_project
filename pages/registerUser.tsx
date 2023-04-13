import BottomNavbar from '@/components/BottomNavbar'
import { NextPage } from 'next'
import RegisterForm from '@/components/RegisterForm'
const registerUser: NextPage = ({}) => {
  const handleSuccess = () => {
    console.log('Registration successful!');
  };
  return (
  <div>

      <div>
        <RegisterForm onSuccess={handleSuccess} />
      </div>

      <div>
        <BottomNavbar />
      </div>

  </div>
  )
}

export default registerUser 
