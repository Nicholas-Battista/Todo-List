import createTODO from "./DOM";
import { displayTODOS, removeNewTodoPopUp } from "./DOM";

const todayBtn = document.querySelector(".today");
let todayFlag = false;
let todayTodos = [];

function displayToday() {
  todayTodos.push(createTODO());
  console.log(todayTodos);
  displayTODOS(todayTodos);
  removeNewTodoPopUp();
}

todayBtn.addEventListener("click", () => {
  todayFlag = true;
  displayTODOS(todayTodos);
});

// depending on which section is clicked - display the array and then when + is clicked its added to THAT array

export default displayToday;
