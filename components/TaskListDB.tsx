import { useEffect, useState } from 'react';
import axios from 'axios';
import { Task } from '../types/Task';
import styles from "@/styles/Home.module.css"

const TaskList = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/users/tasks');
        setTaskList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  const deleteTask = async (taskTitle: string) => {
    try {
      await axios.delete(`/api/users/tasks?title=${taskTitle}`);
      const updatedTasks = taskList.filter((task) => task.taskTitle !== taskTitle);
      setTaskList(updatedTasks);
    } catch (error) {
      console.error(error);
    }
  };




  

  
  

  return (
    <>
      {taskList.map((task, index) => (
        <div key={index} className={styles.taskList}>

          <h2>{task.taskTitle}</h2>

          {task.date instanceof Date && (
            <p>Date: {task.date.toLocaleDateString()}</p>
          )}
          
          <p>Start Time: {task.time.start}</p>

          <p>End Time: {task.time.end}</p>

          <button onClick={() => deleteTask(task.taskTitle)}>Delete</button>

        </div>
      ))}

      
    </>
  );
};

export default TaskList;
