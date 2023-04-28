import { useState } from "react"
import { Task } from "@/types/Task"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import styles from "@/styles/Home.module.css"
import moment from "moment"
import TimePicker from "react-time-picker"

interface Props {
  onSubmit: (task: Task) => void
}

const CreateTaskForm: React.FC<Props> = ({ onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState("")
  const [startDate, setStartDate] = useState(moment().toDate())
  const [startTime, setStartTime] = useState("00:00")
  const [endTime, setEndTime] = useState("00:00")
  const [tasks, setTasks] = useState<Task[]>([])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newTask: Task = {
      taskTitle,
      date: startDate,
      time: {
        start: startTime,
        end: endTime,
      },
    }
    onSubmit(newTask)
    setTasks([...tasks, newTask]) // Add the new task to the tasks array
  }

  /* onClick Manual-Time-PopUp meny */
  const [isHidden, setIsHidden] = useState(true)

  function toggleManuellTime() {
    setIsHidden(!isHidden)
  }

  return (
    <>
      {/* Skapa task TODO kort */}
      <div className={isHidden ? styles.visible : styles.hidden}>
        <div className={styles.setuptaskCard}>
          <div className={styles.setuptask}>
            {/* EXIT BUTTON --- TODO - hide-card */}
            <div className={styles.timerExitBox}>
              <div
                onClick={toggleManuellTime}
                className={styles.timerExitKnapp}
              >
                x
              </div>
            </div>
            {/* EXIT BUTTON END --- TODO - hide-card */}
            <ul>
              {tasks.map((task, index) => (
                <li className={styles.createdTask} key={index}>
                  {task.taskTitle} - {moment(task.date).format("DD MMM YYYY")} -{" "}
                  {task.time.start} to {task.time.end}
                </li>
              ))}
            </ul>
            {/* Skapa task TODO kort */}
            <div className={styles.taskForm}>
              <form className={styles.form} onSubmit={handleSubmit}>
                {/* Skapa task AKTIVITET-NAMN */}
                <input
                  className={styles.aktivitetNamn}
                  type="text"
                  id="title"
                  value={taskTitle}
                  placeholder="Namn på aktivitet"
                  onChange={(event) => setTaskTitle(event.target.value)}
                />
                <br />
                <hr />
                <br />
                {/* Skapa task DATUM --- TODO - hide-border för date */}
                <div className={styles.dateInPlace}>
                  <label>Datum</label>
                </div>
                <div className={styles.aktivitetDate}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => date && setStartDate(date)}
                    dateFormat="dd MMM yyyy"
                  />
                </div>
                <br />
                <br />
                {/* Skapa task TID */}
                <label htmlFor="time">Tid</label>
                <input
                  className={styles.aktivitetTidSetStart}
                  type="time"
                  id="start-time"
                  list="start-time-list"
                  value={startTime}
                  onChange={(event) => setStartTime(event.target.value)}
                  step={60 * 60}
                />

                <span> - </span>
                <input
                  className={styles.aktivitetTidSetTo}
                  type="time"
                  id="end-time"
                  value={endTime}
                  onChange={(event) => setEndTime(event.target.value)}
                  step={60 * 60}
                />
                <br />
                <br />
                <br />
                <p>Lägg till påminnelse</p>
                <br />
                <br />
                {/* Skapa task SKAPA AKTIVITET-KNAPP */}
                <div className={styles.buttonDiv}>
                  <button type="submit">SKAPA AKTIVITET</button>
                </div>
              </form>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateTaskForm
