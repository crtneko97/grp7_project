import { useState } from 'react';
import { Task } from '@/types/Task';

interface Props {
  onSubmit: (task: Task) => void;
}

const CreateTaskForm: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask: Task = {
      title,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    };
    onSubmit(newTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTaskForm;
