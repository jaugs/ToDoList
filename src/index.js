/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */

import "./style.css";
import { createForm } from "./form.js";
import trashIcon from "./trash.svg";

export { addtoDo };
// sdfgddgsdg
// ADD DELETE ITEM BUTTON - Done
// ADD MARK COMPLETE BUTTON - done
// CSS
// ADD PRIORITY/NOTES OTHER FIELDS - done
// CHANGE VALUES ON  TO DOS- done
// CLEAN UP/COMMENT
// form validation
// change heading
// delete Projects
// form styling

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

const toDoArr = [];

class listItem {
  constructor(number, title, description, dueDate, priority, project, notes) {
    this.number = number;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.notes = notes;
  }

  getTitle() {
    return this.title;
  }

  getNumber() {
    return this.number;
  }
}

function createProjectObject() {
  if (localStorage.length != 0) {
    const projectObj = JSON.parse(localStorage.getItem("projects"));
    console.log("hello");
    // console.log(projectObj);

    for (const key of Object.entries(projectObj)) {
      if (key[0] != "Default") {
        const projectTitle = document.createElement("div");
        const titleBar = document.getElementById("projecttitleBar");
        projectTitle.setAttribute("id", key[0]);
        projectTitle.setAttribute("class", "inactive");
        projectTitle.innerText = key[0];
        titleBar.appendChild(projectTitle);
        console.log(key[0]);
        projectTitle.addEventListener("click", () => {
          switchProject(projectTitle);
        });
        const defaultProject = document.getElementById("Default");
        defaultProject.addEventListener("click", () => {
          switchProject(defaultProject);
        });
      }
    }
    // if (projectObj.length)
    return projectObj;
  }
  const projectObj = {
    Default: toDoArr,
  };
  console.log("empty");
  console.log(projectObj);
  return projectObj;
}

function listItems() {
  const allListItems = document.querySelectorAll(".list");
  for (let k = 0; k < allListItems.length; k++) {
    allListItems[k].remove();
  }
  Object.entries(projectObj).forEach(([, value]) => {
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const { project } = item;
      const projectName = document.getElementById(project);
      if (projectName != null) {
      const sidebarItem = document.createElement("div");
      sidebarItem.innerText = item.title;
      sidebarItem.setAttribute("class", "list");
      projectName.appendChild(sidebarItem);
      const priorityColor = document.createElement("div");
      priorityColor.setAttribute("class", "listColor");
      priorityColor.setAttribute("id", item.priority);
      sidebarItem.appendChild(priorityColor);
    }}
  });
}

function createCounter() {
  if (localStorage.length != 0) {
    const counter = JSON.parse(localStorage.getItem("counter"));
    console.log("counter found");
    console.log(counter);
    return counter;
  }
  const counter = 0;
  return counter;
}

function createHeading() {
  const heading = document.createElement("div");
  heading.setAttribute("id", "header");
  const welcome = document.createElement("h2");
  welcome.setAttribute("id", "welcome");
  welcome.innerText = "Welcome to your Projects";
  container.appendChild(heading);
  heading.appendChild(welcome);
  const formSpace = document.createElement("div");
  formSpace.setAttribute("id", "formSpace");
  container.appendChild(formSpace);
  const newProjectButton = document.createElement("button");
  newProjectButton.setAttribute("id", "newProjectButton");
  newProjectButton.setAttribute("class", "button");
  newProjectButton.innerText = "Create New Project";
  newProjectButton.addEventListener("click", createNewProject);
  formSpace.appendChild(newProjectButton);

  const addButton = document.createElement("button");
  addButton.setAttribute("id", "addTodo");
  addButton.setAttribute("class", "button");
  addButton.innerText = "Add new Item";
  formSpace.appendChild(addButton);
  addButton.addEventListener("click", createForm);

  const saveButton = document.createElement("button");
  saveButton.setAttribute("id", "saveButton");
  saveButton.setAttribute("class", "button");
  saveButton.innerText = "Save Work";
  formSpace.appendChild(saveButton);
  saveButton.addEventListener("click", saveWork);

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "deleteButton");
  deleteButton.setAttribute("class", "button");
  deleteButton.innerText = "Delete Work";
  formSpace.appendChild(deleteButton);
  deleteButton.addEventListener("click", clearOut);
  // const prancingPony = new Image();
  // prancingPony.src = prancingPony2;
  // prancingPony.id="ponyLogo";
  // heading.appendChild(prancingPony);
}
createHeading();

function createDefaultProject() {
  const header = document.getElementById("header");
  const defaultProject = document.createElement("div");
  defaultProject.setAttribute("id", "projectSpace");
  defaultProject.setAttribute("class", "project");
  header.appendChild(defaultProject);

  const projecttitleBar = document.createElement("div");
  projecttitleBar.setAttribute("id", "projecttitleBar");
  const projects = document.createElement("div");
  projects.innerText = "Projects";
  projects.setAttribute("class", "projectField");
  projecttitleBar.appendChild(projects);
  const projectTitle = document.createElement("div");
  projectTitle.innerText = "Default Project";
  projectTitle.setAttribute("class", "active");
  projectTitle.setAttribute("id", "Default");
  container.appendChild(projecttitleBar);
  projecttitleBar.appendChild(projectTitle);
  const cardSpace = document.createElement("div");
  cardSpace.setAttribute("id", "display");
  container.appendChild(cardSpace);
}

createDefaultProject();
let counter = createCounter();
const projectObj = createProjectObject();
addCards();

function createNewProject() {
  const formSpace = document.getElementById("formSpace");
  const newProjectButton = document.getElementById("newProjectButton");
  newProjectButton.removeEventListener("click", createNewProject);
  newProjectButton.innerText = "Hide";
  newProjectButton.addEventListener("click", hideProjectForm);
  const newProjectForm = document.createElement("div");
  newProjectForm.setAttribute("id", "newProjectForm");
  newProjectForm.setAttribute("class", "form");

  const titleLabel = document.createElement("div");
  titleLabel.setAttribute("class", "label");
  titleLabel.innerText = "Project Title";
  newProjectForm.appendChild(titleLabel);
  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("id", "projectTitle");
  title.setAttribute("class", "item");
  titleLabel.appendChild(title);

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "projectSubmit");
  submit.setAttribute("class", "button");
  newProjectForm.appendChild(submit);
  formSpace.appendChild(newProjectForm);
  submit.addEventListener("click", addnewProject);
}

function currentProject() {
  const current = document.querySelector(".active");
  return current;
}

function switchProject(elem) {
  const project = document.querySelector(".active");
  project.removeAttribute("class", "active");
  project.setAttribute("class", "inactive");
  elem.removeAttribute("class", "inactive");
  elem.setAttribute("class", "active");
  addCards();
}

function addnewProject() {
  const titleBar = document.getElementById("projecttitleBar");
  const defaultProject = currentProject();
  // console.log(defaultProject);
  const newProject = document.createElement("div");
  newProject.setAttribute("class", "active");
  defaultProject.removeAttribute("class", "active");
  defaultProject.setAttribute("class", "inactive");
  const newProjectTitle = document.getElementById("projectTitle").value;
  const newArr = [];
  projectObj[newProjectTitle] = newArr;
  // console.log(projectObj);
  newProject.setAttribute("id", newProjectTitle);
  newProject.innerText = newProjectTitle;
  titleBar.appendChild(newProject);
  defaultProject.addEventListener("click", () => {
    switchProject(defaultProject);
  });
  newProject.addEventListener("click", () => {
    switchProject(newProject);
  });
  // newProject.addEventListener('click', currentProject(newProjectTitle));
  // newProject.onclick = currentProject();
  hideProjectForm();
  // return newprojectObj;
}

function hideProjectForm() {
  const newProjectForm = document.getElementById("newProjectForm");
  newProjectForm.remove();
  const newProjectButton = document.getElementById("newProjectButton");
  newProjectButton.removeEventListener("click", hideProjectForm);
  newProjectButton.innerText = "Create New Project";
  newProjectButton.addEventListener("click", createNewProject);
}

function addCards() {
  // console.log(projectObj);
  listItems();
  const display = document.getElementById("display");
  const project = currentProject();
  const title = project.attributes.id.value;
  const currentProjectArray = projectObj[title];
  const allCards = document.querySelectorAll(".card");
  if (allCards.length != 0) {
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].remove();
    }
  }
  for (let i = 0; i < currentProjectArray.length; i++) {
    if (currentProjectArray[i].project == title) {
      displayCard(currentProjectArray[i]);
    }
  }

  function displayCard(arr) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", `toDo_${arr.number}`);
    display.appendChild(card);
    const cardTitle = document.createElement("div");
    cardTitle.setAttribute("class", "cardBar");
    card.appendChild(cardTitle);
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "cardBody");
    card.appendChild(cardBody);
    const priorityColor = document.createElement("div");
    priorityColor.setAttribute("class", "priorityColor");
    priorityColor.setAttribute("id", arr.priority);
    cardTitle.appendChild(priorityColor);

    const completeButton = document.createElement("button");
    completeButton.setAttribute("id", `complete_${arr.number}`);
    completeButton.setAttribute("class", "cardButton");
    completeButton.innerText = "Complete";
    cardTitle.appendChild(completeButton);

    const uncompleteButton = document.createElement("button");
    uncompleteButton.setAttribute("id", `uncomplete_${arr.number}`);
    uncompleteButton.setAttribute("class", "cardButton");
    uncompleteButton.innerText = "Not Finished";
   

    const editButton = document.createElement("button");
    editButton.setAttribute("id", `edit_${arr.number}`);
    editButton.setAttribute("class", "cardButton");
    editButton.innerText = "Modify";
    cardTitle.appendChild(editButton);

    const expandButton = document.createElement("button");
    expandButton.setAttribute("id", `expand_${arr.number}`);
    expandButton.setAttribute("class", "cardButton");
    expandButton.innerText = "Expand";
    cardTitle.appendChild(expandButton);

    const trashButton = new Image();
    trashButton.src = trashIcon;
    trashButton.setAttribute("id", `delete_${arr.number}`);
    trashButton.setAttribute("class", "trashButton");

    const title = document.createElement("div");
    title.setAttribute("class", "titleField");
    title.innerText = "Title:";
    const titleValue = document.createElement("div");
    titleValue.setAttribute("class", "titleValue");
    titleValue.innerText = arr.title;
    const date = document.createElement("div");
    date.setAttribute("class", "dateField");
    date.innerText = "Due-Date:";
    const dateValue = document.createElement("div");
    dateValue.setAttribute("class", "dateValue");
    dateValue.innerText = arr.dueDate;
    cardBody.appendChild(title);
    cardBody.appendChild(titleValue);
    cardBody.appendChild(date);
    cardBody.appendChild(dateValue);
    cardBody.appendChild(trashButton);

    const description = document.createElement("div");
    description.setAttribute("class", "descriptionField");
    description.innerText = "Description:";
    const descriptionValue = document.createElement("div");
    descriptionValue.setAttribute("class", "descriptionValue");
    descriptionValue.innerText = arr.description;
    const notes = document.createElement("div");
    notes.setAttribute("class", "notesField");
    notes.innerText = "Notes:";
    const noteValue = document.createElement("div");
    noteValue.setAttribute("class", "notesValue");
    noteValue.innerText = arr.notes;

    completeButton.onclick = () => {
      cardBody.setAttribute("class", "cardComplete");
      arr.priority = "complete";
      priorityColor.setAttribute("id", arr.priority);
      cardTitle.appendChild(uncompleteButton);
      cardTitle.removeChild(completeButton);
    
      uncompleteButton.onclick = () => {
        cardBody.setAttribute("class", "cardBody");
        arr.priority = "Medium";
        priorityColor.setAttribute("id", arr.priority);
        cardTitle.appendChild(completeButton);
        cardTitle.removeChild(uncompleteButton);
      };
    };

    editButton.onclick = () => {
      arr.project = "deleted";
      cardTitle.removeChild(editButton);
      createForm();
    };

    trashButton.onclick = () => {
      const text = confirm("Are you sure you want to delete this To-Do?");
      if (text == true) {
        arr.project = "deleted";
        console.log(arr.project);
        addCards();
        
      }
    };

    expandButton.onclick = () => {
      card.setAttribute('class', 'expandCard');
      cardBody.appendChild(description);
      cardBody.appendChild(descriptionValue);
      cardBody.appendChild(notes);
      cardBody.appendChild(noteValue);
      cardTitle.appendChild(collapseButton);
      cardTitle.removeChild(expandButton);

      collapseButton.onclick = () => {
        card.setAttribute('class', 'card');
        cardBody.removeChild(description);
        cardBody.removeChild(descriptionValue);
        cardBody.removeChild(notes);
        cardBody.removeChild(noteValue);
        cardTitle.removeChild(collapseButton);
        cardTitle.appendChild(expandButton);
      };
    };
    let collapseButton = document.createElement("button");
    collapseButton.setAttribute("id", `collapse_${arr.number}`);
    collapseButton.setAttribute("class", "cardButton");
    collapseButton.innerText = "Hide";
    cardDrag(card);
  }

  const allInactive = document.querySelectorAll(".inactive");
  // console.log(allInactive);
  for (let k = 0; k < allInactive.length; k++) {
    // console.log(allInactive[k]);
    const projectTitle = allInactive[k].attributes.id.value;
    const projectArray = projectObj[projectTitle];
    // console.log(project);
    for (let r = 0; r < projectArray.length; r++) {
      if (projectArray[r].project == project.attributes.id.value) {
        // console.log(projectArray[r]);
        displayCard(projectArray[r]);
      }
    }
  }
}

// Adds To Do items from Form into List Item Objects, then adds them to appropriate Project Array after form Submit Button is clicked
function addtoDo() {
  const project = currentProject();
  const projectName = project.attributes.id.value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const radioButtons = document.querySelectorAll('input[name="priority"]');
  let selectedSize;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedSize = radioButton.value;
      break;
    }
  }
  const notes = document.getElementById("notes").value;
  const newItem = new listItem(
    counter,
    title,
    description,
    dueDate,
    selectedSize,
    projectName,
    notes
  );
  projectObj[projectName].push(newItem);
  removeForm();
  counter++;
  addCards();
}

function saveWork() {
  localStorage.setItem("projects", JSON.stringify(projectObj));
  console.log(JSON.parse(localStorage.getItem("projects")));
  localStorage.setItem("counter", JSON.stringify(counter));
}

function removeForm() {
  const formSpace = document.getElementById("formSpace");
  const content = document.getElementById("content");
  // content.style.display = 'none';
  content.remove();
  let addButton = document.getElementById("addTodo");
  addButton.remove();
  addButton = document.createElement("button");
  addButton.setAttribute("id", "addTodo");
  addButton.setAttribute("class", "button");
  addButton.innerText = "Add new Item";
  formSpace.appendChild(addButton);
  addButton.addEventListener("click", createForm);
  // currentProject.removeChild(content);
}

function cardDrag(card) {
  // let card = document.querySelector('.card');
  // let cardID = document.querySelector('.card')
  // let currentProject = currentProject();
  card.onmousedown = function (event) {
    const buttons = document.querySelectorAll(".cardButton");
    const trashButtons = document.querySelectorAll(".trashButton");
    const elementBelow = document.elementFromPoint(
      event.clientX,
      event.clientY
    );
    for (let i = 0; i < buttons.length; i++) {
      if (elementBelow == buttons[i]) {
        return;
      }
      if (elementBelow == trashButtons[i]) {
        return;
      }
    }

    const shiftX = event.clientX - card.getBoundingClientRect().left;
    const shiftY = event.clientY - card.getBoundingClientRect().top;

    card.style.position = "absolute";
    card.style.zIndex = 1000;
    document.body.append(card);

    moveCard(event.pageX, event.pageY);

    // moves Card at the X and Y coordinates of the page, taking account for the shifts initially when clicking on card
    function moveCard(pageX, pageY) {
      card.style.left = `${pageX - shiftX}px`;
      card.style.top = `${pageY - shiftY}px`;
    }

    let currentDroppable = null;

    function onMouseMove(event) {
      moveCard(event.pageX, event.pageY);

      card.hidden = true;
      const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      card.hidden = false;
      if (!elemBelow) return;
      const droppableBelow = elemBelow.closest(".inactive");
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) {
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          card.onmouseup = function () {
            document.removeEventListener("mousemove", onMouseMove);
            // currentDroppable.style.background = '#f3f5f9';
            const newProjectName = currentDroppable.attributes.id.value;

            const cardID = card.attributes.id.value;
            const numb = cardID.replace(/[^0-9]/g, "");
            const newNum = parseInt(numb, 10);

            Object.entries(projectObj).forEach(([, value]) => {
              // console.log(value);
              // console.log(value[number]);
              for (let i = 0; i < value.length; i++) {
                if (value[i].number == newNum) {
                  const item = value[i];
                  item.project = newProjectName;
                }
              }
            });

            card.remove();
            addCards();
          };

          //  enterDroppable(currentDroppable);
        }
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    card.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      card.remove();
      addCards();
    };
  };

  // function enterDroppable(elem) {

  //     elem.style.background = 'pink';
  //     }

  function leaveDroppable(elem) {
    console.log(elem);
    // document.removeEventListener('mousemove', onMouseMove);
    // elem.style.background = 'blue';
  }

  card.ondragstart = function () {
    return false;
  };
}

console.log(localStorage);

function clearOut() {
  localStorage.clear();
  console.log(localStorage);
}
