import { NextPage } from 'next'
import BottomNavbar from '@/components/BottomNavbar'
import { useState } from 'react'
import axios from 'axios'




const loginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  try{
    const response = await axios.post("/api/login", { email, password });
    console.log(response.data);
  } catch (error){
    setError("Invalid email or password");
  }

  };

  return (
  <div>

            <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </form>

      <div>
        <BottomNavbar />
      </div>

  </div>
  )
}

export default loginPage
