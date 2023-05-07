import { useState } from 'react';
import { Task } from '../types/Task';
import axios from 'axios';
import styles from "@/styles/Home.module.css"
import DatePicker from "react-datepicker"

const CreateTaskDB = () => {
    const [task, setTask] = useState<Task>({
        id: '',
        taskTitle: '',
        date: new Date(),
        time: { start: '', end: '' },
      });
      const [showForm, setShowForm] = useState(false); // Sätta av och på variabel
      

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prevTask) => ({ ...prevTask, date: new Date(event.target.value) }));
  };

  const handleStartTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTask((prevTask) => ({
      ...prevTask,
      time: { ...prevTask.time, start: event.target.value },
    }));
  };

  const handleEndTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTask((prevTask) => ({
      ...prevTask,
      time: { ...prevTask.time, end: event.target.value },
    }));
  };

  //Arrow function för att klicka på & av hör ihop med variabeln på rad 12
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  // Funktion för själva 'formuläret' de är då att pusha
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
        const response = await axios.post('/api/users/tasks', task);
        console.log(response.data);
        setTask({
          id: '',
          taskTitle: '',
          date: new Date(),
          time: { start: '', end: '' },
        });
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <>
        {showForm ? (
          <form onSubmit={handleSubmit}>

          <button onClick={toggleForm}>
            X
          </button>



            <label>
              <span>Task Title:</span>
              <input
                type="text"
                name="taskTitle"
                value={task.taskTitle}
                onChange={handleInputChange}
              />
            </label>



            <label>
              <span>Date:</span>
              <input
                type="date"
                name="date"
                value={task.date.toISOString().slice(0, 10)}
                onChange={handleDateChange}
              />
            </label>


            <label>
              <span>Start Time:</span>
              <input
                type="time"
                name="startTime"
                value={task.time.start}
                onChange={handleStartTimeChange}
                
              />
            </label>


            <label>
              <span>End Time:</span>
              <input
                type="time"
                name="endTime"
                value={task.time.end}
                onChange={handleEndTimeChange}
              />
            </label>


            <button type="submit">
              Create Task
            </button>


          </form>

        ) : (
          <button onClick={toggleForm} className={styles.taskKnapp}>
            +
          </button>
        )}
      </>
    );
    
};

export default CreateTaskDB;
