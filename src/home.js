import createTODO from "./DOM";
import { displayTODOS, removeNewTodoPopUp } from "./DOM";
import { sections } from ".";

let homeTodos = [];

function displayHome() {
  if (sections.home) {
    homeTodos.push(createTODO());
    console.log(homeTodos);
    displayTODOS(homeTodos);
    removeNewTodoPopUp();
  }
}

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", () => {
  sections.home = true;
  sections.today = false;
  sections.week = false;
  displayTODOS(homeTodos);
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayHome);

export default displayHome;
