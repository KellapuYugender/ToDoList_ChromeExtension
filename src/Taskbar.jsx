import "./Taskbar.css";
import { FaPlus } from "react-icons/fa";

export default function Taskbar() {
  return (
    <>
      <div className="input-main-div">
        <input type="text" className="input-task-cls" id="input-task-id" />
        <button className="add-task-cls">
          <FaPlus color="steelblue" size="40px" />
        </button>
      </div>
    </>
  );
}
