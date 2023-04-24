import { useState, ChangeEvent, FormEvent } from "react"
import styles from "@/styles/LoginPage.module.css"
import Head from "next/head"
import Link from "next/link"

interface regUser {
  email: string
  password: string
}

const LoginForm = () => {
  const [user, setUser] = useState<regUser>({
    email: "",
    password: "",
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name
    setUser((prevState) => {
      return { ...prevState, [fieldName]: event.target.value }
    })
  }

  // Det här ska vara en knapp för att logga in
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1 className={styles.loggain}> Log in</h1>

        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <input className={styles.input}
            type="text"
            name="email"
            placeholder="Your email.."
            />

            <input className={styles.input} 
            type="password"
            name="password"
            placeholder="Your password..."
             />

          </div>

          <input  className={styles.submitButton} type="submit" value="Log in"/>
        </form>

        <div>
        <p>Eller registrera dig med</p>
        <img src="images/icon_google.png" alt="googleIcon" />
        <img src="images/icon_fb.png" alt="fbIcon" />
        </div>

        <div>
        <p>Har du inget konto? </p><Link href="/registerUser"> Registrera dig </Link>
        </div>

      </div>
    </div>
  )
}

export default LoginForm
