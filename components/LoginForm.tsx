import { useState, ChangeEvent, FormEvent } from "react";

interface regUser {
  email: string,
  password: string
}


const LoginForm = () => {

  const [user, setUser] = useState<regUser>({
    email: "",
    password: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    setUser((prevState) => {
      return{...prevState, [fieldName]: event.target.value};
    });
  }

  // Det här ska vara en knapp för att logga in
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  }

  return (
  <div>
      <form onSubmit={handleLogin}>
        <input type="text" name="email" placeholder="Your email..." onChange={handleChange}/>
        <input type="password" name="password" onChange={handleChange}/>
        <input type="submit" value="Log in"/>
      </form>
  </div>
  );
}

export default LoginForm;
