import todoItem from "./class";

function createTODO() {
  const title = document.querySelector(".title").value;
  const details = document.querySelector(".details").value;
  const date = document.getElementById("date").value;
  const priority = determinePriority();

  const todo = new todoItem(title, details, date, priority);
  console.log(todo);
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

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", createTODO);

export default createTODO;
