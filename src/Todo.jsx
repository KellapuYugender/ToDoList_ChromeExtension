import { useState } from "react";
import "./Todo.css";
import { FaPlus } from "react-icons/fa";

export default function Todo() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [newtask, setNewTask] = useState("");
  const caps = "";

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newtask.trim() !== "") {
      const updatedTasks = [...tasks, newtask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setNewTask("");
    }
  }

  function deleteTask(index) {
    let afterDeleteTasks = [];
    afterDeleteTasks = tasks.filter((task, ind) => index !== ind);
    localStorage.setItem("tasks", JSON.stringify(afterDeleteTasks));
    setTasks(afterDeleteTasks);
  }
  function deleteAll() {
    setTasks([]);
  }

  return (
    <>
      <div className="to-do">
        <h1>TO-DO</h1>
        <div className="input-main-div">
          <input
            type="text"
            className="input-task-cls"
            id="input-task-id"
            placeholder="Enter New Task..."
            value={newtask}
            onChange={handleInput}
          />
          <button className="add-task-cls" id="add-task-id" onClick={addTask}>
            <FaPlus color="steelblue" size="40px" />
          </button>
          {/* <button>deleteAll</button> */}
        </div>
        <ol className="">
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button
                className="delete-task-btn"
                onClick={() => deleteTask(index)}
              >
                X
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
