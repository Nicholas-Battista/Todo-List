import todoItem from "./class";

const container = document.querySelector(".container");
const todoPopUp = document.querySelector(".add-todo");
const TODOCONTAINER = document.querySelector(".todos");

function createTODO() {
  const title = document.querySelector(".title").value;
  const details = document.querySelector(".details").value;
  const date = document.getElementById("date").value;
  const priority = determinePriority();
  const todo = new todoItem(title, details, date, priority);
  console.log(todo);
  return todo;
}

function displayTODOS(array) {
  TODOCONTAINER.innerHTML = "";
  array.forEach((todo) => {
    const div = document.createElement("div");
    div.classList.add("todo-item");

    const left = document.createElement("div");
    left.classList.add("left");
    left.appendChild(createCheckBox());
    left.appendChild(createP(todo.title));
    div.appendChild(left);

    const right = document.createElement("div");
    right.classList.add("right");
    right.appendChild(createDetailBtn(todo));
    right.appendChild(createP(createDate(todo)));
    // div.appendChild(createP(todo.priority));
    // div.appendChild(createP(todo.description));

    let trashCan = createDeleteSvg();
    right.appendChild(trashCan);

    div.appendChild(right);

    trashCan.addEventListener("click", () => {
      div.remove();
      removeTodo(array, todo);
    });

    TODOCONTAINER.appendChild(div);
  });
}

function createCheckBox() {
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  return checkBox;
}

function createP(string) {
  const pElement = document.createElement("p");
  pElement.textContent = string;
  return pElement;
}

function createDate(todo) {
  const { parseISO, format } = require("date-fns");
  const parsedDate = parseISO(todo.dueDate);

  const formattedDate = format(parsedDate, "MMM dd");
  return formattedDate;
}

function createDeleteSvg() {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 24 24");

  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
  );
  svg.appendChild(path);
  return svg;
}

function createDetailBtn(todo) {
  const detailBtn = document.createElement("button");
  detailBtn.classList.add("detail");
  detailBtn.textContent = "Details";

  detailBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.classList.add("details-container");

    container.classList.toggle("is-inactive");

    div.appendChild(createP(todo.title));
    div.appendChild(createP(todo.description));
    div.appendChild(createP(createDate(todo)));
    div.appendChild(createP(todo.priority));

    const exitDetailsBtn = document.createElement("button");
    exitDetailsBtn.classList.add("exitDetailsBtn");
    exitDetailsBtn.textContent = "X";
    exitDetailsBtn.addEventListener("click", () => {
      div.remove();
      container.classList.toggle("is-inactive");
    });
    div.appendChild(exitDetailsBtn);

    document.body.appendChild(div);
  });
  return detailBtn;
}

function removeTodo(array, todo) {
  const index = array.findIndex((todoItem) => todoItem.title === todo.title);
  if (index !== -1) {
    array.splice(index, 1);
  }
  console.log(array);
}

function determinePriority() {
  const low = document.getElementById("low");
  const medium = document.getElementById("medium");
  const high = document.getElementById("high");

  if (low.checked) {
    return "low";
  } else if (medium.checked) {
    return "medium";
  } else if (high.checked) {
    return "high";
  }
}

function displayNewTodo() {
  container.classList.toggle("is-inactive");
  todoPopUp.classList.toggle("add-inactive");
}

function removeNewTodoPopUp() {
  container.classList.toggle("is-inactive");
  todoPopUp.classList.toggle("add-inactive");
}

const addTodoBtn = document.querySelector(".addTodo");
addTodoBtn.addEventListener("click", displayNewTodo);

export default createTODO;
export { displayTODOS, removeNewTodoPopUp };
