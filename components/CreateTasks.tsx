import { useState } from 'react';
import { Task } from '@/types/Task';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from "@/styles/CreatedTasks.module.css"
import moment from 'moment';
import TimePicker from 'react-time-picker';

interface Props {
  onSubmit: (task: Task) => void;
}

const CreateTaskForm: React.FC<Props> = ({ onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [startDate, setStartDate] = useState(moment().toDate());
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask: Task = {
      taskTitle,
      date: startDate,
      time: {
        start: startTime,
        end: endTime,
      },
    };
    onSubmit(newTask);
    setTasks([...tasks, newTask]); // Add the new task to the tasks array
  };

  return (
      <>
      {/* Skapa task TODO kort */}
      <div className={styles.taskContainer}>
      <ul>
        {tasks.map((task, index) => (
          <li className={styles.createdTask} key={index}>
            {task.taskTitle} - {moment(task.date).format('DD MMM YYYY')} - {task.time.start} to {task.time.end}
          </li>
        ))}
      </ul>
      </div>
    <div className={styles.taskForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
          <input
          className={styles.aktivitet}
            type="text"
            id="title"
            value={taskTitle}
            placeholder="Namn på aktivitet"
            onChange={(event) => setTaskTitle(event.target.value)}
          />
          <DatePicker
            selected={startDate}
            onChange={(date) => date && setStartDate(date)}
            dateFormat="dd MMM yyyy"
          />
          <label htmlFor="time">Tid</label>
          <input
            type="time"
            id="start-time"
            list="start-time-list"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
            step={60 * 60}
          />
          
          <span> - </span>
          <input
            type="time"
            id="end-time"
            value={endTime}
            onChange={(event) => setEndTime(event.target.value)}
            step={60 * 60}
          />

        <button className={styles.subBtn} type="submit">SKAPA AKTIVITET</button>
      </form>

    </div>
    </>
  );
};

export default CreateTaskForm;
