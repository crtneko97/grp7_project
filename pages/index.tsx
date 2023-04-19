import { NextPage } from "next"
import BottomNavbar from "@/components/BottomNavbar"
import Schema from "@/components/Schema"
import CreateTaskForm from "@/components/CreateTasks"
import { Task } from "@/types/Task"
interface Props {}

const index: NextPage<Props> = ({}) => {

  const handleSubmit = (task: Task) => {

    console.log(task);
  }
  return (
      <div>
        <Schema />
        <BottomNavbar />
        <CreateTaskForm onSubmit={handleSubmit}/>
      </div>
  )
}

export default index
