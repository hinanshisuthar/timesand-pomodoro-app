import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useData } from "../../context/data-context";
import { AiFillPlusCircle } from "../icons";
import "./NewTask.css";

const NewTask = () => {
  const { token } = useAuth();
  const { setNewTaskMenu } = useData();
  const navigate = useNavigate();

  const newTaskHandler = () => {
    if (token) {
      setNewTaskMenu(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="flex-row-sb p-sm m-1 new-task box-sdw-lg">
        <h4>Create new task</h4>
        <AiFillPlusCircle size={25} className="icon" onClick={newTaskHandler} />
      </div>
    </div>
  );
};

export { NewTask };
