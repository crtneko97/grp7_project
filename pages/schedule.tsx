import BottomNavbar from "@/components/BottomNavbar"
import Schema from "@/components/Schema"
import CreateTaskForm from "@/components/CreateTasks"
import TaskList from "@/components/TaskListDB"
import CreateTaskDB from "@/components/CreateTasksDB"
import { Task } from "@/types/Task"
import Protected from "@/components/ifauthd"
const CalendarPage = () => {
  const handleSubmit = (task: Task) => {
    console.log(task)
  }

  return (
    <>

      <Protected authenticatedComponent={
        <div>
         
         <CreateTaskDB />
         <TaskList />
         <Schema />
         <BottomNavbar />
         </div>
      } unauthenticatedComponent={
        <div>
          Loading...
        </div>
      } />

    </>
  )
}

export default CalendarPage
