import createTODO from "./DOM";
import { displayTODOS, removeNewTodoPopUp } from "./DOM";

let homeTodos = [];
const home = document.querySelector(".todos");

function displayHome() {
  homeTodos.push(createTODO());
  console.log(homeTodos);
  displayTODOS(homeTodos, home);
  removeNewTodoPopUp();
}

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayHome);

export default displayHome;
