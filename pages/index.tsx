import { NextPage } from "next";
import CreateTaskDB from "@/components/CreateTasksDB";
import TaskList from "@/components/TaskListDB";
import {signIn} from "next-auth/react";
interface Props {}

const index: NextPage<Props> = ({}) => {

  return (
      <div>
        <button onClick={() => {
          signIn();
        }}>Login</button >
        <TaskList />
        <CreateTaskDB />
      </div>
  )
}

export default index
