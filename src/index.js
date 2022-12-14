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
import { format, parseISO } from 'date-fns';
import { createForm } from "./form.js";
import trashIcon from "./trash.svg";
import editIcon from "./edit.svg";
import wrenchIcon from "./wrench.svg";

export { addtoDo };
// sdfgddgsdg
// ADD DELETE ITEM BUTTON - Done
// ADD MARK COMPLETE BUTTON - done
// ADD PRIORITY/NOTES OTHER FIELDS - done
// form validation - DONE
// CSS

// CLEAN UP/COMMENT

// change heading
// delete Projects
// edit button rework
// expand form styling

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

const toDoArr = [];

class listItem {
  constructor(number, title, description, dueDate, priority, project, notes, complete) {
    this.number = number;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.notes = notes;
    this.complete = complete;
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
        const projectCard = document.createElement("div");
        const projectTitle = document.createElement("div");
        projectTitle.setAttribute("class", "projectTitle");
        const titleBar = document.getElementById("projecttitleBar");
        projectCard.setAttribute("id", key[0]);
        projectCard.setAttribute("class", "inactive");
        projectTitle.innerText = key[0];
        titleBar.appendChild(projectCard);
        projectCard.appendChild(projectTitle)
        console.log(key[0]);

        projectCard.onclick = () => switchProject(projectCard);
        // projectCard.addEventListener("click", () => {
        //   switchProject(projectCard);
        // });
        const defaultProject = document.getElementById("Default");
        defaultProject.onclick = () => switchProject(defaultProject);
        // defaultProject.addEventListener("click", () => {
        //   switchProject(defaultProject);
        // });
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
  Object.entries(projectObj).forEach(([key, value]) => {
    const projectCard = document.getElementById(key);
    if (projectCard !== null) {
    // const className = projectCard.getAttribute('class');
    // if (className !== "deleted") {
    if (projectCard.querySelector('.iconBar') == null) {
    createIconBar(projectCard);
    }}
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
  const formspace = document.getElementById("formSpace");
  const projecttitleBar = document.createElement("div");
  projecttitleBar.setAttribute("id", "projecttitleBar");
  const projects = document.createElement("div");
  projects.innerText = "Projects";
  projects.setAttribute("class", "projectField");
  projecttitleBar.appendChild(projects);
  const projectCard = document.createElement("div");
  const projectTitle= document.createElement("div");
  projectTitle.innerText = "Default Project";
  projectTitle.setAttribute("class", "projectTitle");
  projectCard.appendChild(projectTitle);
  projectCard.setAttribute("class", "active");
  projectCard.setAttribute("id", "Default");
  formspace.appendChild(projecttitleBar);
  projecttitleBar.appendChild(projectCard);
  const cardSpace = document.createElement("div");
  cardSpace.setAttribute("id", "display");
  container.appendChild(cardSpace);
}

function createIconBar(elem) {
  const projectTitle = elem.firstChild;
  const iconBar= document.createElement("div");
  iconBar.setAttribute("class", "iconBar");
  elem.appendChild(iconBar);
  const nameButton = createRenameIcon();
  const deleteButton = createDeleteIcon();
  iconBar.appendChild(nameButton);
  iconBar.appendChild(deleteButton);
  nameButton.onclick = () => renameProject(projectTitle);
  deleteButton.onclick = () => deleteProject(elem);
}

createDefaultProject();
let counter = createCounter();
const projectObj = createProjectObject();
addCards();

function createNewProject() {
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
  document.body.appendChild(newProjectForm);
  submit.onclick = () => {
    if (title.value === '') {
      title.style.border = "6px solid red";
    } else {addnewProject()}
}}

function renameProject(elem) {
  const renameForm = document.createElement("div");
  renameForm.setAttribute("id", "renameForm");
  renameForm.setAttribute("class", "form");
  const nameLabel = document.createElement("div");
  nameLabel.setAttribute("class", "label");
  nameLabel.innerText = "New Project Title";
  renameForm.appendChild(nameLabel);
  const name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("id", "name");
  name.setAttribute("class", "item");
  nameLabel.appendChild(name);
  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "nameSubmit");
  submit.setAttribute("class", "button");
  renameForm.appendChild(submit);
  document.body.appendChild(renameForm);
  submit.onclick = () => {
    if (name.value === '') {
      name.style.border = "6px solid red";
    } else {
      elem.innerText = name.value;
      renameForm.remove();
    }
}}

function deleteProject(project) {
  const text = confirm("Are you sure you want to delete this Project? All attached To-Do Items will be deleted.");
      if (text == true) {
  const projectTitleBar = document.getElementById("projecttitleBar");
  project.setAttribute("class", "deleted")
  projectTitleBar.removeChild(project);
  const inactiveProject = document.querySelector('.inactive');
  if (inactiveProject !== null) {
  inactiveProject.setAttribute('class', 'active');
  addCards();
  } else if (inactiveProject == null) {
    createNewProject()
  }}
}

function createDeleteIcon() {
  const trashButton = new Image();
  trashButton.src = trashIcon;
  trashButton.title = "Delete Project";
  trashButton.setAttribute("class", "projectButton");
  return trashButton
}

function createRenameIcon() {
  const editButton = new Image();
  editButton.src = editIcon;
  editButton.title = "Rename Project";
  editButton.setAttribute("class", "projectButton");
  return editButton
}

function currentProject() {
  const current = document.querySelector(".active");
  // if (current  == null) {
  //  return createNewProject();
  // }
   return current;
}

function switchProject(elem) {
  const className = elem.getAttribute('class');
  if (className == "deleted") {
    return
  }
  const project = document.querySelector(".active");
  project.removeAttribute("class", "active");
  project.setAttribute("class", "inactive");
  elem.removeAttribute("class", "inactive");
  elem.setAttribute("class", "active");
  addCards();
}

function addnewProject() {
  const titleBar = document.getElementById("projecttitleBar");

  const defaultProject = document.querySelector('.active');
  if (defaultProject !== null) {
  defaultProject.removeAttribute("class", "active");
  defaultProject.setAttribute("class", "inactive");
  defaultProject.addEventListener("click", () => {
    switchProject(defaultProject);
  });}
  const newProjectCard = document.createElement("div");
  newProjectCard.setAttribute("class", "active");
  const newProjectTitle = document.getElementById("projectTitle").value;
  const newArr = [];
  projectObj[newProjectTitle] = newArr;
  newProjectCard.setAttribute("id", newProjectTitle);
  const projectTitle = document.createElement("div");
  projectTitle.setAttribute("class", "projectTitle");
  projectTitle.innerText = newProjectTitle;
  titleBar.appendChild(newProjectCard);
  newProjectCard.appendChild(projectTitle);
 
  newProjectCard.addEventListener("click", () => {
    switchProject(newProjectCard);
  });

  createIconBar(newProjectCard);
   hideProjectForm();
   addCards();
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
  const allExpandCards = document.querySelectorAll(".expandCard");
  if (allCards.length != 0) {
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].remove();
    }
  }
  if (allExpandCards.length != 0) {
    for (let i = 0; i < allExpandCards.length; i++) {
      allExpandCards[i].remove();
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
    if (arr.complete == true) {
      cardBody.setAttribute("class", "cardComplete");
      priorityColor.setAttribute("id", "complete");
    } else {
      priorityColor.setAttribute("id", arr.priority);
    }
    cardTitle.appendChild(priorityColor);

    const expandButton = document.createElement("button");
    expandButton.setAttribute("id", `expand_${arr.number}`);
    expandButton.setAttribute("class", "expandButton");
    expandButton.innerText = "Expand";
    cardTitle.appendChild(expandButton);

    const collapseButton = document.createElement("button");
    collapseButton.setAttribute("id", `collapse_${arr.number}`);
    collapseButton.setAttribute("class", "collapseButton");
    collapseButton.innerText = "Collapse";
   
    const completeButton = document.createElement("button");
    completeButton.setAttribute("id", `complete_${arr.number}`);
    completeButton.setAttribute("class", "completeButton");
    completeButton.innerText = "Complete";
    cardTitle.appendChild(completeButton);
 
    const uncompleteButton = document.createElement("button");
    uncompleteButton.setAttribute("id", `uncomplete_${arr.number}`);
    uncompleteButton.setAttribute("class", "uncompleteButton");
    uncompleteButton.innerText = "Edit";
    if (arr.complete == true) {
      cardTitle.appendChild(uncompleteButton);
      cardTitle.removeChild(completeButton);
      cardTitle.removeChild(expandButton);
    }


    const editButton = document.createElement("button");
    editButton.setAttribute("id", `edit_${arr.number}`);
    editButton.setAttribute("class", "editButton");
    editButton.innerText = "Modify";
   
    const hideEditButton = document.createElement("button");
    hideEditButton.setAttribute("class", "hideEditButton");
    hideEditButton.innerText = "Hide";


    const trashButton = new Image();
    trashButton.src = trashIcon;
    trashButton.title = "Delete Item";
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
    // cardBody.appendChild(title);
    cardBody.appendChild(titleValue);
    // cardBody.appendChild(date);
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
      arr.complete = true;
      priorityColor.setAttribute("id", "complete");
      cardTitle.appendChild(uncompleteButton);
      cardTitle.removeChild(completeButton);
      cardTitle.removeChild(expandButton);
    };
      uncompleteButton.onclick = () => {
        cardBody.setAttribute("class", "cardBody");
        arr.complete = "false";
        priorityColor.setAttribute("id", arr.priority);
        cardTitle.appendChild(completeButton);
        cardTitle.removeChild(uncompleteButton);
        cardTitle.appendChild(expandButton);
      };


    editButton.onclick = () => {
      editToDoItem(arr, card);
      cardTitle.removeChild(editButton);
      cardTitle.appendChild(hideEditButton);
    }

    hideEditButton.onclick = () => {
      const icons = cardBody.querySelectorAll('.wrenchButton')
        for (let i = 0; i < icons.length; i++) {
          icons[i].remove();
        }
        cardTitle.removeChild(hideEditButton);
        cardTitle.appendChild(editButton);
      }

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
      cardTitle.setAttribute('class', 'expandBar');
      cardBody.setAttribute('class', 'expandBody');
      priorityColor.setAttribute('class', 'expandPriority')
      cardBody.appendChild(title);
      titleValue.setAttribute('class', 'expandTitle');
      cardBody.appendChild(date);
      dateValue.setAttribute('class', 'expandDate');
      trashButton.setAttribute('class', 'trashExpand');
      cardTitle.appendChild(editButton);
      cardBody.appendChild(description);
      cardBody.appendChild(descriptionValue);
      cardBody.appendChild(notes);
      cardBody.appendChild(noteValue);
      cardTitle.removeChild(completeButton);
      cardTitle.appendChild(collapseButton);
      cardTitle.removeChild(expandButton);
    }
      collapseButton.onclick = () => {
        card.setAttribute('class', 'card');
        cardTitle.setAttribute('class', 'cardBar');
        cardBody.setAttribute('class', 'cardBody');
        priorityColor.setAttribute('class', 'priorityColor');
        trashButton.setAttribute('class', 'trashButton');
        titleValue.setAttribute('class', 'titleValue');
        dateValue.setAttribute('class', 'dateValue');
        const icons = cardBody.querySelectorAll('.wrenchButton')
        for (let i = 0; i < icons.length; i++) {
          icons[i].remove();
        }
        cardBody.removeChild(title);
        cardBody.removeChild(date);
        cardBody.removeChild(description);
        cardBody.removeChild(descriptionValue);
        cardBody.removeChild(notes);
        cardBody.removeChild(noteValue);
        const editCheck = card.querySelector('.editButton');
        const hideEditCheck = card.querySelector('.hideEditButton');
        if (editCheck !== null) {
        cardTitle.removeChild(editButton);
        } else if (hideEditCheck !== null) {
          cardTitle.removeChild(hideEditButton);
        }
        cardTitle.appendChild(completeButton);
        cardTitle.removeChild(collapseButton);
        cardTitle.appendChild(expandButton);
      
      };

      cardDrag(card);
    };


// runs displayCard function for ToDO items in the inactive array that have moved to the new project
  const allInactive = document.querySelectorAll(".inactive");
  for (let k = 0; k < allInactive.length; k++) {
    const projectTitle = allInactive[k].attributes.id.value;
    const projectArray = projectObj[projectTitle];
    for (let r = 0; r < projectArray.length; r++) {
      if (projectArray[r].project == project.attributes.id.value) {
        displayCard(projectArray[r]);
      }}}
}


function editToDoItem(arr, card) {
 
  function createEditIcon (idField) {
  const editButton = new Image();
  editButton.src = wrenchIcon;
  editButton.title = "Edit Field";
  editButton.setAttribute('class', 'wrenchButton');
  editButton.setAttribute('id', idField);
  return editButton;
  }

  const titleDiv = card.querySelector('.expandTitle');
  titleDiv.appendChild(createEditIcon('titleEdit'));
  const titleEdit = document.getElementById('titleEdit');
  titleEdit.onclick = () => {
   addEditBox(titleDiv, arr.title, 'titleConfirm')
   const titleInput = titleDiv.querySelector('.textInput')
   const confirmButton = document.getElementById('titleConfirm')
   confirmButton.onclick = () => {
    const newTitle = titleInput.value
    arr.title = newTitle;
    titleInput.remove();
    confirmButton.remove();
    titleDiv.innerText = arr.title;
    console.log(arr);
   }  
  };
   
  const descriptionDiv = card.querySelector('.descriptionValue');
  descriptionDiv.appendChild(createEditIcon('descriptionEdit'));
  const descriptionEdit = document.getElementById('descriptionEdit');
  descriptionEdit.onclick = () => { 
    addEditBox(descriptionDiv, arr.description, 'descriptionConfirm')
    const textInput = descriptionDiv.querySelector('.textInput')
    const confirmButton = document.getElementById('descriptionConfirm')
    confirmButton.onclick = () => {
     const newdescription = textInput.value
     arr.description = newdescription;
     textInput.remove();
     confirmButton.remove();
     descriptionDiv.innerText = arr.description;
     console.log(arr);
    }  
  };
  
  const notesDiv = card.querySelector('.notesValue');
  notesDiv.appendChild(createEditIcon('notesEdit'))
  const notesEdit = document.getElementById('notesEdit');
  notesEdit.onclick = () => { 
    addEditBox(notesDiv, arr.notes, 'notesConfirm')
    const textInput = notesDiv.querySelector('.textInput')
    const confirmButton = document.getElementById('notesConfirm')
    confirmButton.onclick = () => {
     const newNotes = textInput.value
     arr.notes = newNotes;
     textInput.remove();
     confirmButton.remove();
     notesDiv.innerText = arr.notes;
     console.log(arr);
    }  
  };

  function addEditBox (div, classValue, id) {
    const textInput = document.createElement('input')
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('class', 'textInput');
    textInput.defaultValue = classValue;
    const confirmButton = document.createElement('button')
    confirmButton.setAttribute('class', 'editItemButton');
    confirmButton.setAttribute('id', id);
    confirmButton.innerText = "Ok"
    div.innerText = '';
    div.appendChild(textInput);
    div.appendChild(confirmButton);
}
//  const priorityDiv = card.querySelector('.expandPriority');
//  priorityDiv.setAttribute('class', 'editPriority')
//  priorityDiv.appendChild(createEditIcon('priorityEdit'))
//  const priorityEdit = document.getElementById('priorityEdit');
//  priorityEdit.onclick = () => {

//  }
 // const dateDiv = card.querySelector('.expandDate');
 
 


}


// Adds To Do items from Form into List Item Objects, then adds them to appropriate Project Array after form Submit Button is clicked
function addtoDo() {

  const project = currentProject();
  const projectName = project.attributes.id.value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const formatteddueDate = format(parseISO(dueDate), 'MM/dd/yy');
  const radioButtons = document.querySelectorAll('input[name="priority"]');
  let selectedSize;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedSize = radioButton.value;
      break;
    }
  }
  const notes = document.getElementById("notes").value;
  const complete = false;
  const newItem = new listItem(
    counter,
    title,
    description,
    formatteddueDate,
    selectedSize,
    projectName,
    notes,
    complete,
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
  const content = document.getElementById("content");
  content.remove();
  const addButton = document.getElementById("addTodo");
  addButton.innerText = "Add new Item";
  addButton.addEventListener("click", createForm);
}

function cardDrag(card) {
  // let card = document.querySelector('.card');
//  let container = document.getElementById('container');
  // let currentProject = currentProject();
 // stops card from dragging when expanded
  card.onmousedown = function (event) {
    const attribute = card.getAttribute('class');
   // console.log(attribute);
    if (attribute == 'expandCard') {
     return
   }
    const completeButtons = document.querySelectorAll(".completeButton");
    const uncompleteButtons = document.querySelectorAll(".uncompleteButton");
    const trashButtons = document.querySelectorAll(".trashButton");
    const expandButtons = document.querySelectorAll(".expandButton");
    // console.log(expandButtons);
    const elementBelow = document.elementFromPoint(
      event.clientX,
      event.clientY
    );
    for (let i = 0; i < completeButtons.length; i++) {
      if (elementBelow == completeButtons[i]) {
        return;
      }}
      for (let i = 0; i < trashButtons.length; i++) {
      if (elementBelow == trashButtons[i]) {
        return;
      }}
      for (let i = 0; i < expandButtons.length; i++) {
      if (elementBelow == expandButtons[i]) {
       // console.log(elementBelow);
        return;
      }}
      for (let i = 0; i < uncompleteButtons.length; i++) {
      if (elementBelow == uncompleteButtons[i]) {
        return;
      }}

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
      card.style.display = 'none';
      // card.hidden = true;
   //   console.log(card.hidden);
      // eslint-disable-next-line prefer-const
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
       card.style.display = 'grid';
      if (!elemBelow) return;
      const droppableBelow = elemBelow.closest(".inactive");
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) {
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          card.onmouseup = function () {
            console.log(currentDroppable);
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

  function leaveDroppable() {
   
    // document.removeEventListener('mousemove', onMouseMove);
    // elem.style.background = 'blue';
  }

  card.ondragstart = function () {
    return false;
  };
}

console.log(localStorage);

function clearOut() {
  const deleteText = confirm("Are you sure you want to delete all stored Projects and Items?");
  if (deleteText == true) {
  localStorage.clear();
  console.log(localStorage);
}}
