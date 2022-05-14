import { BsFillTrashFill, BsPencilSquare } from "../icons";
import "../new task/NewTask.css";

const TaskContainer = () => {
  return (
    <div className="">
      <div className="tasks-con flex-col-start-start p-1 m-1 box-sdw-lg">
        <div className="flex-row-sb width-100 p-sm my-sm">
          <label htmlFor="input" className="flex-row-sb-start width-100">
            <input type="checkbox" className="width-mc m-sm" />
            <h5 className="text-regular">Task 1</h5>
          </label>
          <BsPencilSquare className="icon ml-auto" size={20} />
          <BsFillTrashFill className="mx-sm icon" size={20} />
        </div>
        <div className="flex-row-sb width-100 p-sm my-sm">
          <label htmlFor="input" className="flex-row-sb-start width-100">
            <input type="checkbox" className="width-mc m-sm" />
            <h5 className="text-regular">Task 2</h5>
          </label>
          <BsPencilSquare className="icon ml-auto" size={20} />
          <BsFillTrashFill className="mx-sm icon" size={20} />
        </div>
        <div className="flex-row-sb width-100 p-sm my-sm">
          <label htmlFor="input" className="flex-row-sb-start width-100">
            <input type="checkbox" className="width-mc m-sm" />
            <h5 className="text-regular">Task 3</h5>
          </label>
          <BsPencilSquare className="icon ml-auto" size={20} />
          <BsFillTrashFill className="mx-sm icon" size={20} />
        </div>
      </div>
      <div className="flex-col-sb-start width-100 p-1">
        <h4 className="p-sm">Task 1</h4>
        <p className="p-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam amet,
          dolorem veritatis
        </p>
        <small className="p-sm">14-05-2022</small>
      </div>
    </div>
  );
};

export { TaskContainer };
