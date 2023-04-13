import { User } from "@/types/User"
import { useState, ChangeEvent, FormEvent } from "react"

type RegisterFormProps = {
  onSuccess: () => void;
};

const RegisterForm = ({onSuccess}: RegisterFormProps) => {


  const [user, setUser] = useState<User>({
    email: "",
    password: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    setUser((prevState) => {
      return{...prevState, [fieldName]: event.target.value};
    });
  }

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    console.log(response);

    if (response.ok) {
      onSuccess();
    }
  }


  return(
  <div>
      <form onSubmit={handleRegister}>
        <input type="text" name="email" placeholder="Enter your email..."/>
        <input type="password" name="password"/>
        <input type="submit" value="Register"/>
      </form>
  </div>
  )
}
export default RegisterForm;
