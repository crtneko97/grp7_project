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

  console.log(taskList.length)
  
  function renderTasks() {
    const tasks = [];
  
    for (let i = 0; i < taskList.length; i++) {
      const task = taskList[i];
      tasks.push(
        
        <div key={i} className={styles.taskList}>
          <p>{task.taskTitle}</p>
  
          {task.date instanceof Date && (
            <p>Date: {task.date.toLocaleDateString()}</p>
          )}
  
          <p>
            {task.time.start} - {task.time.end}{" "}
            <button onClick={() => deleteTask(task.taskTitle)}>Ta bort</button>
          </p>
        </div>
      );
    }
  
    return tasks;
  }


  return (
    <>
    {renderTasks()}
    </>
  );
};

export default TaskList;
