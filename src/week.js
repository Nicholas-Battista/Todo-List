import createTODO from "./DOM";
import { displayTODOS, removeNewTodoPopUp } from "./DOM";
import { sections } from ".";

const weekBtn = document.querySelector(".week");
let weekTodos = [];

function displayWeek() {
  if (sections.week) {
    weekTodos.push(createTODO());
    console.log(weekTodos);
    displayTODOS(weekTodos);
    removeNewTodoPopUp();
  }
}

weekBtn.addEventListener("click", () => {
  sections.week = true;
  sections.home = false;
  sections.today = false;
  displayTODOS(weekTodos);
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayWeek);

export default displayWeek;
