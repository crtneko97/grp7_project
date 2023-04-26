import BottomNavbar from "@/components/BottomNavbar"
import Schema from "@/components/Schema"
import CreateTaskForm from "@/components/CreateTasks"
import { Task } from "@/types/Task"
const CalendarPage = () => {
  const handleSubmit = (task: Task) => {
    console.log(task)
  }

  return (
    <>
      <Schema />

      {/*<CreateTaskForm onSubmit={handleSubmit} /> */}

      <BottomNavbar />
    </>
  )
}

export default CalendarPage
