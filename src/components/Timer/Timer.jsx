import { AiFillPlayCircle } from "../icons";

const Timer = () => {
  return (
    <div className="new-task-con m-1 flex-col-start-center">
      <div className="p-1">
        <div className="timer"></div>
      </div>
      <div className="flex-col-sb">
        <div className="flex-row-se width-80">
          <button className="btn btn-secondary my-sm mr-sm">Reset</button>
          <button className="btn btn-secondary my-sm">Pause</button>
        </div>
        <button className="btn btn-primary width-100 m-sm">Start</button>
      </div>
    </div>  
  );
};

export { Timer };
