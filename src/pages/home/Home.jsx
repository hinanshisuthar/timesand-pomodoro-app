import { NewTaskModal } from "../../components/modal/NewTaskModal";
import { NewTask } from "../../components/new task/NewTask";
import { TaskContainer } from "../../components/tasks container/TaskContainer";
import { Timer } from "../../components/Timer/Timer";
import { useData } from "../../context/data-context";

const Home = () => {
  const { newTaskMenu } = useData();

  return (
    <>
      <div className="hero-sec">
        <div className="new-task-con m-1">
          <NewTask />
          <TaskContainer />
        </div>
        <Timer />
      </div>
      {newTaskMenu && (
        <div className="modal-con">
          <div className="modal-wrapper">
            <NewTaskModal />
          </div>
        </div>
      )}
    </>
  );
};

export { Home };
