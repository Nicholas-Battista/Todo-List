import createTODO from "./DOM";
import {
  displayTODOS,
  removeNewTodoPopUp,
  sectionBtns,
  setActiveText,
} from "./DOM";
import { sections } from ".";
import { setCounter } from "./DOM";

let weekTodos = [];

function displayWeek() {
  if (sections.week) {
    weekTodos.push(createTODO());
    console.log(weekTodos);
    displayTODOS(weekTodos);
    setCounter(weekTodos, sections);
    removeNewTodoPopUp();
  }
}

sectionBtns.weekBtn.addEventListener("click", () => {
  sections.week = true;
  sections.home = false;
  sections.today = false;
  setActiveText();
  displayTODOS(weekTodos);
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayWeek);

export default displayWeek;
