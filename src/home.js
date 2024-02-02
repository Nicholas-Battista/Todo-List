import { sections } from ".";
import createTODO from "./DOM";
import { displayTODOS, removeNewTodoPopUp } from "./DOM";
import { setCounter, setActiveText, sectionBtns } from "./DOM";

function getHomeTodos() {
  let homeTodos = JSON.parse(localStorage.getItem("homeTodos"));
  if (homeTodos === null) {
    homeTodos = [];
  }
  return homeTodos;
}

function displayHome() {
  if (sections.home) {
    displayTODOS(getHomeTodos(), "homeTodos");
    setCounter(getHomeTodos(), "homeTodos");
  }
}

function addToHome() {
  if (sections.home) {
    const todayTodos = getHomeTodos();
    todayTodos.push(createTODO());
    displayTODOS(todayTodos, "homeTodos");
    setCounter(todayTodos, "homeTodos");
    removeNewTodoPopUp();
    localStorage.setItem("homeTodos", JSON.stringify(todayTodos));
  }
}

sectionBtns.homeBtn.addEventListener("click", () => {
  sections.home = true;
  sections.today = false;
  sections.week = false;
  setActiveText();
  displayTODOS(getHomeTodos(), "homeTodos");
});

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", addToHome);

export default displayHome;
