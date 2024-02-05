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
import { setProjectFalse } from "./projects";

function getTodayTodos() {
  let todayTodos = JSON.parse(localStorage.getItem("todayTodos"));
  if (todayTodos === null) {
    todayTodos = [];
  }
  return todayTodos;
}

function displayToday() {
  if (sections.today) {
    if (!validateInput()) {
      alert("Please fill in all fields before adding a todo.");
      return;
    }
    const todayTodos = getTodayTodos();
    todayTodos.push(createTODO());
    displayTODOS(todayTodos, "todayTodos");
    setCounter(todayTodos, "todayTodos");
    removeNewTodoPopUp();
    localStorage.setItem("todayTodos", JSON.stringify(todayTodos));
  }
}

function displayTodayCounter() {
  setCounter(getTodayTodos(), "todayTodos");
}

sectionBtns.todayBtn.addEventListener("click", () => {
  sections.today = true;
  sections.home = false;
  sections.week = false;
  setProjectFalse();
  setActiveText();
  displayTODOS(getTodayTodos(), "todayTodos");
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayToday);

export default displayTodayCounter;
