import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CreateTaskDB from "@/components/CreateTasksDB";
import TaskList from "@/components/TaskListDB";
import { signIn } from "next-auth/react";

interface Props {}

const IndexPage: NextPage<Props> = ({}) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/schedule");
  }, []);

  return (
    <>
    </>
  );
};

export default IndexPage;
