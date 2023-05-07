import { NextPage } from 'next'
import { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import styles from "@/styles/Registerpage.module.css"
import { User } from '@/types/User'
import Link from 'next/link'


const RegisterUser: NextPage = () =>{

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const response = await axios.get("api/users");
    console.log(response)

    setUsers(response.data)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = { email, password };
    const response = await axios.post("api/users/newUser", newUser);
    console.log(response);
    setEmail("");
    setPassword("");  
  };



  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.background}>
    
    <div className={styles.container}>
      
    <h1 className={styles.registrera}>
      Registrera
    </h1>

    
      <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <input className={styles.input}
          type="text"
          name="name"
          placeholder="Your email.."
          value={email}
          onChange={handleEmailChange}
        />
    
        <input className={styles.input}
          type="password"
          name="password"
          placeholder="You password.."
          value={password}
          onChange={handlePasswordChange}
    
        />
        </div>
    
        <input className={styles.submitButton} type="submit" value="Registrera" />
      
      </form>

      <div>
        <p>Har du redan ett konto? </p><Link href="/auth/signin"> Logga in </Link>
      </div>

    </div>

    </div>
  );
};

export default RegisterUser;