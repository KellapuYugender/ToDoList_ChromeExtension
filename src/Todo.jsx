import { useState, useEffect } from "react";
import "./Todo.css";
import { FaPlus, FaTrash, FaArrowAltCircleDown } from "react-icons/fa";

export default function Todo() {
  //Init LocalStorage to Empty Arry if LocalStorage is null
  if (!JSON.parse(localStorage.getItem("tasks"))) {
    localStorage.setItem("tasks", JSON.stringify([]));
  }

  //Assining LocalStorage data to tasks state variable when component is mounted for the first time
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [newtask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
  }
  //Setting Data To Local Storage
  function setDataToLS(data) {
    localStorage.setItem("tasks", JSON.stringify(data));
  }
  //Adding New Task
  function addTask() {
    if (newtask.trim() !== "") {
      const updatedTasks = [...tasks, newtask];
      setTasks(updatedTasks);
      setDataToLS(updatedTasks);
      setNewTask("");
    }
  }
  //Deleting Task
  function deleteTask(index) {
    let afterDeleteTasks = [];
    afterDeleteTasks = tasks.filter((task, ind) => index !== ind);
    setDataToLS(afterDeleteTasks);
    setTasks(afterDeleteTasks);
  }
  function deleteAll() {
    setDataToLS([]);
    setTasks([]);
  }

  return (
    <>
      <div className="to-do">
        <h1>
          <span>TO-D</span>
          <button className="delete-all-btn" onClick={deleteAll}>
            <FaTrash color="red" size="23px" />
          </button>
        </h1>
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
        </div>
        <ol className="">
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{index + 1}.</span>
              <span>{task}</span>
              <button
                className="delete-task-btn"
                onClick={() => deleteTask(index)}
              >
                <FaTrash color="red" size="18px" />
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
