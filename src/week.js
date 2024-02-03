import createTODO from "./DOM";
import {
  displayTODOS,
  removeNewTodoPopUp,
  sectionBtns,
  setActiveText,
  validateInput,
} from "./DOM";
import { sections } from ".";
import { setCounter } from "./DOM";

function getWeekTodos() {
  let weekTodos = JSON.parse(localStorage.getItem("weekTodos"));
  if (weekTodos === null) {
    weekTodos = [];
  }
  return weekTodos;
}

function displayWeek() {
  if (sections.week) {
    if (!validateInput()) {
      alert("Please fill in all fields before adding a todo.");
      return;
    }
    const weekTodos = getWeekTodos();
    weekTodos.push(createTODO());
    displayTODOS(weekTodos, "weekTodos");
    setCounter(weekTodos, "weekTodos");
    removeNewTodoPopUp();
    localStorage.setItem("weekTodos", JSON.stringify(weekTodos));
  }
}

function displayWeekCount() {
  setCounter(getWeekTodos(), "weekTodos");
}

sectionBtns.weekBtn.addEventListener("click", () => {
  sections.week = true;
  sections.home = false;
  sections.today = false;
  setActiveText();
  displayTODOS(getWeekTodos(), "weekTodos");
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayWeek);

export default displayWeekCount;
