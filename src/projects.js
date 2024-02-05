// when the add project is clicked display popup to give it a name
// when name is submitted create an array with the name
// display the project under projects
// use same methods as home / today so when project is active we add todos to it
// store project arrays in local storage, on page load show projects and total todos

import { Project } from "./class";

let projectsArray = [];

const newProjectBtn = document.querySelector(".addProject");
newProjectBtn.addEventListener("click", displayNewProjectPopUp);

const mainContainer = document.querySelector(".container");

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
  displayToolbarProjects();
  mainContainer.classList.toggle("is-inactive");
  document.querySelector(".newProjectPopUp").remove();
  newProjectBtn.addEventListener("click", displayNewProjectPopUp);
}

function displayToolbarProjects() {
  const projectContainer = document.querySelector(".project-container");
  projectContainer.innerHTML = "";
  projectsArray.forEach((project) => {
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.name;
    projectContainer.appendChild(projectTitle);
  });
}

export default displayNewProjectPopUp;
