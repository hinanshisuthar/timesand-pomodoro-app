import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { NewTask } from "./components/new task/NewTask";
import { TaskContainer } from "./components/tasks container/TaskContainer";
import { Timer } from "./components/Timer/Timer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="hero-sec">
        <div className="new-task-con m-1">
          <NewTask />
          <TaskContainer />
        </div>
        <Timer />
      </div>
    </div>
  );
}

export default App;
