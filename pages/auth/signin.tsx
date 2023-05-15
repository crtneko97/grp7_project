import { NextPage } from "next"
import { signIn, useSession } from "next-auth/react";
import { FormEventHandler, useEffect, useState } from "react";
import LoginForm from "@/components/LoginForm"
import Router from "next/router";
import Link from "next/link";
import styles from "@/styles/LoginPage.module.css"

interface Props{}

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({email: '', password: ''})
  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e)  => {
    e.preventDefault();

    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false
    });

  };
    const {status, data} = useSession();

  useEffect(() => {
    if (status === "authenticated") Router.replace("/schedule");
  }, [status]);

  return (
    <div className={styles.background}>
    <div className={styles.container}>
      <h1 className={styles.loggain}>Välkommen</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input className={styles.input}
          value={userInfo.email}
          onChange={({target}) => 
          setUserInfo({ ...userInfo, email: target.value})}
          type="email" placeholder="simon_kern@hotmail.com" />

          <input className={styles.input} 
          value={userInfo.password} 
          onChange={({target}) =>
          setUserInfo({ ...userInfo, password: target.value})}
          type="password" placeholder="******"/>
          
        </div>

          <input className={styles.submitButton} type="submit" value="Logga in" />
      </form>

      <div>
      <p>Har du inget konto? </p><Link href="/registerUser"> Registrera dig </Link>
      </div>

    </div>
  </div>
  )
}

export default SignIn;