import createTODO from "./DOM";
import { displayTODOS, removeNewTodoPopUp } from "./DOM";
import { sections } from ".";

let weekTodos = [];

function displayWeek() {
  if (sections.week) {
    weekTodos.push(createTODO());
    console.log(weekTodos);
    displayTODOS(weekTodos);
    removeNewTodoPopUp();
  }
}

const weekBtn = document.querySelector(".week");
weekBtn.addEventListener("click", () => {
  sections.week = true;
  sections.home = false;
  sections.today = false;
  displayTODOS(weekTodos);
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayWeek);

export default displayWeek;
