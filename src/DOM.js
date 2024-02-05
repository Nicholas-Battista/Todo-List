import todoItem from "./class";
import { counters } from ".";
import { sections } from ".";

const sectionBtns = {
  homeBtn: document.querySelector(".home"),
  todayBtn: document.querySelector(".today"),
  weekBtn: document.querySelector(".week"),
};

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

function displayTODOS(array, arrayName, project) {
  TODOCONTAINER.innerHTML = "";
  if (array.length === 0) {
    const empty = createP("No current todo's");
    empty.classList.add("empty");
    TODOCONTAINER.appendChild(empty);
  } else {
    array.forEach((todo) => {
      const div = document.createElement("div");
      div.classList.add("todo-item");

      const left = document.createElement("div");
      left.classList.add("left");
      left.appendChild(createSpan(todo));
      left.appendChild(createCheckBox(todo, arrayName, array));
      div.appendChild(left);

      const right = document.createElement("div");
      right.classList.add("right");
      right.appendChild(createDetailBtn(todo));
      right.appendChild(createP(createDate(todo)));

      let trashCan = createDeleteSvg();
      right.appendChild(trashCan);

      div.appendChild(right);

      trashCan.addEventListener("click", () => {
        div.remove();
        removeTodo(array, todo, arrayName, project);
      });

      TODOCONTAINER.appendChild(div);
    });
  }
}

function createCheckBox(todo, arrayName, array) {
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("todoCheck");

  const titleP = createP(todo.title);
  const container = document.createElement("div");
  container.classList.add("checkContainer");
  container.appendChild(checkBox);
  container.appendChild(titleP);

  if (todo.completed) {
    checkBox.checked = true;
    titleP.style.textDecoration = "line-through";
  }

  checkBox.addEventListener("change", () => {
    todo.completed = checkBox.checked;
    array.sort((a, b) =>
      a.completed === b.completed ? 0 : a.completed ? 1 : -1
    );
    localStorage.setItem(arrayName, JSON.stringify(array));
    displayTODOS(array, arrayName);

    titleP.style.textDecoration = checkBox.checked ? "line-through" : "none";
  });

  return container;
}

function createP(string) {
  const pElement = document.createElement("p");
  pElement.textContent = string;
  return pElement;
}

function createSpan(todo) {
  const priorityBanner = document.createElement("span");
  priorityBanner.classList.add("priorityBanner");

  if (todo.priority === "low") {
    priorityBanner.style.backgroundColor = "#9cb692";
  } else if (todo.priority === "medium") {
    priorityBanner.style.backgroundColor = "orange";
  } else {
    priorityBanner.style.backgroundColor = "red";
  }
  return priorityBanner;
}

function createDate(todo) {
  const { parseISO, format } = require("date-fns");
  const parsedDate = parseISO(todo.dueDate);

  const formattedDate = format(parsedDate, "MMM dd");
  return formattedDate;
}

function createDeleteSvg() {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("delete-btn");
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

    const exitDetailsBtn = document.createElement("button");
    exitDetailsBtn.classList.add("exitDetailsBtn");
    exitDetailsBtn.textContent = "X";
    exitDetailsBtn.addEventListener("click", () => {
      div.remove();
      container.classList.toggle("is-inactive");
    });
    div.appendChild(exitDetailsBtn);

    div.appendChild(createP("TITLE:     " + todo.title));
    div.appendChild(createP("DESCRIPTION:     " + todo.description));
    div.appendChild(createP("DUE DATE:     " + createDate(todo)));
    div.appendChild(createP("PRIORITY:     " + todo.priority));

    document.body.appendChild(div);
  });
  return detailBtn;
}

function removeTodo(array, todo, arrayName, project) {
  const index = array.findIndex((todoItem) => todoItem.title === todo.title);
  if (index !== -1) {
    array.splice(index, 1);
    localStorage.setItem(arrayName, JSON.stringify(array));
  }
  setCounter(array, arrayName, project);
  if (array.length === 0) {
    const empty = createP("No current todo's");
    empty.classList.add("empty");
    TODOCONTAINER.appendChild(empty);
  }
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

function setCounter(list, arrayName, project) {
  let counter = list.length;

  if (arrayName === "homeTodos") {
    if (counter !== 0) {
      counters.homeCounter.textContent = counter;
    } else {
      counters.homeCounter.textContent = "";
    }
  } else if (arrayName === "weekTodos") {
    if (counter !== 0) {
      counters.weekCounter.textContent = counter;
    } else {
      counters.weekCounter.textContent = "";
    }
  } else if (arrayName === "todayTodos") {
    if (counter !== 0) {
      counters.todayCounter.textContent = counter;
    } else {
      counters.todayCounter.textContent = "";
    }
  } else if (arrayName === project.name) {
    if (counter !== 0) {
      project.span.textContent = counter;
    } else {
      project.span.textContent = "";
    }
  }
}

function displayNewTodo() {
  container.classList.toggle("is-inactive");
  todoPopUp.classList.toggle("add-inactive");
  addTodoBtn.removeEventListener("click", displayNewTodo);
}

function removeNewTodoPopUp() {
  container.classList.toggle("is-inactive");
  todoPopUp.classList.toggle("add-inactive");
  addTodoBtn.addEventListener("click", displayNewTodo);

  document.querySelector(".title").value = "";
  document.querySelector(".details").value = "";
  document.getElementById("date").value = "";

  document.getElementById("low").checked = false;
  document.getElementById("medium").checked = false;
  document.getElementById("high").checked = false;
}

function setActiveText() {
  if (sections.home) {
    sectionBtns.homeBtn.classList.add("sectionActive");
    sectionBtns.todayBtn.classList.remove("sectionActive");
    sectionBtns.weekBtn.classList.remove("sectionActive");
  } else if (sections.today) {
    sectionBtns.todayBtn.classList.add("sectionActive");
    sectionBtns.homeBtn.classList.remove("sectionActive");
    sectionBtns.weekBtn.classList.remove("sectionActive");
  } else if (sections.week) {
    sectionBtns.weekBtn.classList.add("sectionActive");
    sectionBtns.todayBtn.classList.remove("sectionActive");
    sectionBtns.homeBtn.classList.remove("sectionActive");
  }
}

function validateInput() {
  const title = document.querySelector(".title").value;
  const details = document.querySelector(".details").value;
  const date = document.getElementById("date").value;
  const priority = determinePriority();
  if (
    title.trim() === "" ||
    details.trim() === "" ||
    date.trim() === "" ||
    priority === undefined
  ) {
    return false;
  }
  return true;
}

document
  .querySelector(".closeNewTodo")
  .addEventListener("click", removeNewTodoPopUp);

const addTodoBtn = document.querySelector(".addTodo");
addTodoBtn.addEventListener("click", displayNewTodo);

export default createTODO;
export {
  displayTODOS,
  removeNewTodoPopUp,
  setCounter,
  setActiveText,
  sectionBtns,
  validateInput,
};
