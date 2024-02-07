// store project arrays in local storage, on page load show projects and total todos

import { Project } from "./class";
import {
  displayTODOS,
  validateInput,
  setCounter,
  removeNewTodoPopUp,
  createDeleteSvg,
} from "./DOM";
import createTODO from "./DOM";
import { sections } from ".";

const newProjectBtn = document.querySelector(".addProject");
newProjectBtn.addEventListener("click", displayNewProjectPopUp);

const mainContainer = document.querySelector(".container");

function getProjects() {
  let projectsArray = JSON.parse(localStorage.getItem("projects"));
  if (projectsArray === null) {
    projectsArray = [];
  }
  return projectsArray;
}

const projectsArray = getProjects();

function displayNewProjectPopUp() {
  const container = document.createElement("div");
  container.classList.add("newProjectPopUp");
  mainContainer.classList.toggle("is-inactive");

  container.appendChild(createHeader(container));
  container.appendChild(createBody());

  document.body.appendChild(container);
  newProjectBtn.removeEventListener("click", displayNewProjectPopUp);
}

function createHeader(container) {
  const header = document.createElement("div");
  header.classList.add("newProjectHeader");

  header.appendChild(createTitle());
  header.appendChild(createExitBtn(container));
  return header;
}

function createBody() {
  const body = document.createElement("div");
  body.classList.add("newProjectBody");

  body.appendChild(createInput());
  body.appendChild(createSubmit());
  return body;
}

function createTitle() {
  const title = document.createElement("h3");
  title.textContent = "New project...";
  return title;
}

function createExitBtn(container) {
  const exitBtn = document.createElement("button");
  exitBtn.classList.add("exitNewProject");
  exitBtn.textContent = "X";

  exitBtn.addEventListener("click", () => {
    container.remove();
    newProjectBtn.addEventListener("click", displayNewProjectPopUp);
    mainContainer.classList.toggle("is-inactive");
  });

  return exitBtn;
}

function createInput() {
  const projectName = document.createElement("input");
  projectName.classList.add("projectName");
  projectName.type = "text";
  projectName.placeholder = "PROJECT TITLE: Work event, Person, etc...";
  return projectName;
}

function createSubmit() {
  const submitProjectBtn = document.createElement("button");
  submitProjectBtn.classList.add("submitProject");
  submitProjectBtn.textContent = "Add Project";
  submitProjectBtn.addEventListener("click", generateNewProject);
  return submitProjectBtn;
}

function generateNewProject() {
  const project = new Project(document.querySelector(".projectName").value);
  projectsArray.push(project);
  console.log(projectsArray);
  localStorage.setItem("projects", JSON.stringify(projectsArray));
  displayToolbarProjects();
  mainContainer.classList.toggle("is-inactive");
  document.querySelector(".newProjectPopUp").remove();
  newProjectBtn.addEventListener("click", displayNewProjectPopUp);
}

function displayToolbarProjects() {
  const projectContainer = document.querySelector(".project-container");
  projectContainer.innerHTML = "";

  if (projectsArray.length === 0) {
    return;
  }

  projectsArray.forEach((project) => {
    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("fieldContainer");
    fieldContainer.classList.add("project");

    const leftProject = document.createElement("div");
    leftProject.classList.add("left-project");

    const trashCan = createDeleteSvg();
    trashCan.addEventListener("click", () => {
      fieldContainer.remove();
      const index = projectsArray.findIndex(
        (projectItem) => projectItem.name === project.name
      );
      if (index !== -1) {
        projectsArray.splice(index, 1);
      }
      localStorage.setItem("projects", JSON.stringify(projectsArray));
    });

    leftProject.appendChild(trashCan);

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.name;
    leftProject.appendChild(projectTitle);
    fieldContainer.appendChild(leftProject);
    fieldContainer.addEventListener("click", () => {
      displayTODOS(project.todoList, project.name, project);
      console.log(projectsArray);
      setProjectFalse();
      project.isActive = true;
      sections.home = false;
      sections.today = false;
      sections.week = false;
      fieldContainer.classList.add("sectionActive");
    });

    const span = document.createElement("span");
    project.span = span;
    setCounter(project.todoList, project.name, project);

    fieldContainer.appendChild(span);

    projectContainer.appendChild(fieldContainer);
  });
}

function addtoProject() {
  projectsArray.forEach((project) => {
    console.log(project);
    if (project.isActive) {
      if (!validateInput()) {
        alert("Please fill in all fields before adding a todo.");
        return;
      }
      project.todoList.push(createTODO());
      displayTODOS(project.todoList, project.name, project);
      setCounter(project.todoList, project.name, project);
      removeNewTodoPopUp();
      localStorage.setItem("projects", JSON.stringify(projectsArray));
    }
  });
}

function setProjectFalse() {
  const fieldContainer = Array.from(
    document.querySelectorAll(".fieldContainer")
  );
  fieldContainer.forEach((container) => {
    container.classList.remove("sectionActive");
  });
  projectsArray.forEach((project) => {
    console.log("changing state");
    project.isActive = false;
  });
}

const submitTodo = document.querySelector(".submit-todo");
submitTodo.addEventListener("click", addtoProject);

// active css class to show its been clicked, local storage

export default displayNewProjectPopUp;
export { setProjectFalse, displayToolbarProjects, getProjects, projectsArray };
