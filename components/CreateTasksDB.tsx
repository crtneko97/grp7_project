import { useState } from "react"
import { Task } from "../types/Task"
import axios from "axios"
import styles from "@/styles/Home.module.css"
import DatePicker from "react-datepicker"

const CreateTaskDB = () => {
  const [task, setTask] = useState<Task>({
    id: "",
    taskTitle: "",
    date: new Date(),
    time: { start: "", end: "" },
  })

  const [showForm, setShowForm] = useState(false) // Sätta av och på variabel

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setTask((prevTask) => ({ ...prevTask, [name]: value }))
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prevTask) => ({ ...prevTask, date: new Date(event.target.value) }))
  }

  const handleStartTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTask((prevTask) => ({
      ...prevTask,
      time: { ...prevTask.time, start: event.target.value },
    }))
  }

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prevTask) => ({
      ...prevTask,
      time: { ...prevTask.time, end: event.target.value },
    }))
  }

  //Arrow function för att klicka på & av hör ihop med variabeln på rad 12
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm)
  }

  // Funktion för själva 'formuläret' de är då att pusha
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await axios.post("/api/users/tasks", task)
      console.log(response.data)
      setTask({
        id: "",
        taskTitle: "",
        date: new Date(),
        time: { start: "", end: "" },
      })
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {showForm ? (
        <div className={styles.setuptaskCard}>
          <form onSubmit={handleSubmit} className={styles.setuptask}>
            {/* EXIT BUTTON --- TODO - hide-card */}
            <div className={styles.timerExitBox}>
              <div onClick={toggleForm} className={styles.x}>
                x
              </div>
            </div>
            {/* EXIT BUTTON END --- TODO - hide-card */}

            {/* Skapa task AKTIVITET-NAMN */}
            <div className={styles.namnContainer}>
              <input
                className={styles.aktivitetNamn}
                type="text"
                name="taskTitle"
                placeholder="Namn på aktivitet"
                value={task.taskTitle}
                onChange={handleInputChange}
              />
            </div>

            <br />
            <hr />
            <br />

            {/* Skapa task DATUM --- TODO - hide-border för date */}
            <div className={styles.dateInPlace}>
              <label>Datum</label>
            </div>
            <div className={styles.aktivitetDate}>
              <input
                type="date"
                name="date"
                value={task.date.toISOString().slice(0, 10)}
                onChange={handleDateChange}
              />
            </div>
            {/* Skapa task TID */}
            <div className={styles.tidInPlace}>
              <label htmlFor="time">Tid</label>
            </div>

            <div className={styles.tidContainer}>
              <input
                className={styles.aktivitetTidSetStart}
                type="time"
                name="startTime"
                value={task.time.start}
                onChange={handleStartTimeChange}
              />
              <span> - </span>
              <input
                className={styles.aktivitetTidSetTo}
                type="time"
                name="endTime"
                value={task.time.end}
                onChange={handleEndTimeChange}
              />
            </div>

            {/* Skapa task SKAPA AKTIVITET-KNAPP */}
            <div className={styles.buttonDiv}>
              <button type="submit">Skapa Aktivitet</button>
            </div>
          </form>
        </div>
      ) : (
        <button onClick={toggleForm} className={styles.taskKnapp}>
          +
        </button>
      )}
    </>
  )
}

export default CreateTaskDB
