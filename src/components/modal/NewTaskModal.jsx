import "./NewTaskModal.css";
import { useData } from "../../context/data-context";

const NewTaskModal = () => {
  const { taskInputs, setTaskInputs, createTask } = useData();

  const inputHandler = (e) => {
    setTaskInputs({
      ...taskInputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="wrapper center">
      <div className="auth-con signup-con p-1 flex-col-sb">
        <h2>Enter a new task</h2>
        <div className="credentials-con flex-col-sb">
          <label htmlFor="input" className="width-100">
            Title
            <input
              id="input"
              type="text"
              name="title"
              className="input-box p-sm my-sm"
              placeholder="Complete a task"
              value={taskInputs.title}
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="" className="width-100">
            Description
            <input
              type="text"
              name="description"
              className="input-box p-sm my-sm"
              placeholder="Lorem Ipsum dolor simit"
              value={taskInputs.description}
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="" className="width-100">
            Tag
            <input
              type="text"
              name="tag"
              className="input-box p-sm my-sm"
              placeholder="work"
              value={taskInputs.tag}
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="" className="width-100">
            Duration
            <input
              type="number"
              name="duration"
              className="input-box p-sm my-sm"
              placeholder="25"
              value={taskInputs.duration}
              onChange={inputHandler}
            />
          </label>
        </div>
        <div>
          <div className="flex-col-sb btn-con">
            <button
              className="btn btn-primary text-regular text-capitalize m-sm width-100"
              onClick={() => createTask()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewTaskModal };
