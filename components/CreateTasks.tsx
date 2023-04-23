import { useState } from 'react';
import { Task } from '@/types/Task';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="title"
            value={taskTitle}
            placeholder="Skriv in din aktivitet här"
            onChange={(event) => setTaskTitle(event.target.value)}
          />
        </div>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => date && setStartDate(date)}
            dateFormat="dd MMM yyyy"
          />
        </div>
        <div>
          <label htmlFor="time">Tid</label>
          <input
            type="time"
            id="start-time"
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
        </div>

        <button type="submit">SKAPA AKTIVITET</button>
      </form>

      {/* Skapa task TODO kort */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.taskTitle} - {moment(task.date).format('DD MMM YYYY')} - {task.time.start} to {task.time.end}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateTaskForm;
