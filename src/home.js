import createTODO from "./DOM";
import { displayTODOS } from "./DOM";

let homeTodos = [];
const home = document.querySelector(".todos");

function displayHome() {
  homeTodos.push(createTODO());
  console.log(homeTodos);
  displayTODOS(homeTodos, home);
}

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", displayHome);

export default displayHome;
