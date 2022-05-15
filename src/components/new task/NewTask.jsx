import { AiFillPlusCircle } from "../icons";
import "./NewTask.css";

const NewTask = () => {
  return (
    <div>
      <div className="flex-row-sb p-sm m-1 new-task box-sdw-lg">
        <h4>Create new task</h4>
        <AiFillPlusCircle size={25} className="icon" />
      </div>
    </div>
  );
};

export { NewTask };
