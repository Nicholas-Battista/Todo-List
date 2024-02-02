import createTODO from "./DOM";
import {
  displayTODOS,
  removeNewTodoPopUp,
  sectionBtns,
  setActiveText,
} from "./DOM";
import { sections } from ".";
import { setCounter } from "./DOM";

let todayTodos = [];

function displayToday() {
  if (sections.today) {
    todayTodos.push(createTODO());
    console.log(todayTodos);
    displayTODOS(todayTodos);
    setCounter(todayTodos, sections);
    removeNewTodoPopUp();
  }
}

sectionBtns.todayBtn.addEventListener("click", () => {
  sections.today = true;
  sections.home = false;
  sections.week = false;
  setActiveText();
  displayTODOS(todayTodos);
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayToday);

export default displayToday;
