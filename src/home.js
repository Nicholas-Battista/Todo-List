import { sections } from ".";
import createTODO from "./DOM";
import { displayTODOS, removeNewTodoPopUp } from "./DOM";
import { setCounter, setActiveText, sectionBtns } from "./DOM";

let homeTodos = [];

function displayHome() {
  if (sections.home) {
    homeTodos.push(createTODO());
    console.log(homeTodos);
    displayTODOS(homeTodos);
    setCounter(homeTodos, sections);
    removeNewTodoPopUp();
  }
}

sectionBtns.homeBtn.addEventListener("click", () => {
  sections.home = true;
  sections.today = false;
  sections.week = false;
  setActiveText();
  displayTODOS(homeTodos);
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayHome);

export { displayHome };
