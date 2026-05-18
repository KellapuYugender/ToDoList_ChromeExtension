let myTasks = [];
let idGiver = 1;
const inputEl = document.getElementById("input-id");
const addBtnEl = document.getElementById("add-btn-id");
const delBtnEl = document.getElementsByClassName("delete-btn");
const ulEl = document.getElementById("ul-id");

addBtnEl.addEventListener("click", (e) => {
  myTasks.push({
    id: idGiver++,
    task: inputEl.value,
  });
  inputEl.value = "";
  //   console.log(myTasks);
  render(myTasks);
});

function deleteTask(id) {
  console.log(id);
}
// delBtnEl.addEventListener("click", (e) => {
//   console.log(e.currentTarget.id);
// });

function render(tasks) {
  let listItems = "";

  for (let i = 0; i < tasks.length; i++) {
    listItems += `
    <li> ${tasks[i].task}

     <button class= "delete-btn" id="${tasks[i].id}" name="delButton" >X</button>

    </li>`;
  }
  ulEl.innerHTML = listItems;
}
