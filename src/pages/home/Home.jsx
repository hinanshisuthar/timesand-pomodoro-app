import { NewTask } from "../../components/new task/NewTask";
import { TaskContainer } from "../../components/tasks container/TaskContainer";
import { Timer } from "../../components/Timer/Timer";

const Home = () => {
  return (
    <div className="hero-sec">
      <div className="new-task-con m-1">
        <NewTask />
        <TaskContainer />
      </div>
      <Timer />
    </div>
  );
};

export {Home}