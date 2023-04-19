import BottomNavbar from "@/components/BottomNavbar";
import Schema from "@/components/Schema";
import CreateTaskForm from "@/components/CreateTasks";
import { Task } from "@/types/Task";
const CalendarPage = () => {
  

  const handleSubmit = (task: Task) => {

    console.log(task);
  }

  return (
    <div>
      <div>
        <Schema />
      </div>
      
      <div>
        <CreateTaskForm onSubmit={handleSubmit}/>
      </div>
      
        <div>
          <BottomNavbar />
        </div>
    </div>
  );
};

export default CalendarPage;
