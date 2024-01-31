import createTODO from "./DOM";
import { displayTODOS, removeNewTodoPopUp } from "./DOM";
import { sections } from ".";

const todayBtn = document.querySelector(".today");
let todayTodos = [];

function displayToday() {
  if (sections.today) {
    todayTodos.push(createTODO());
    console.log(todayTodos);
    displayTODOS(todayTodos);
    removeNewTodoPopUp();
  }
}

todayBtn.addEventListener("click", () => {
  sections.today = true;
  sections.home = false;
  sections.week = false;
  displayTODOS(todayTodos);
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayToday);

// depending on which section is clicked - display the array and then when + is clicked its added to THAT array

export default displayToday;
