
import {createListItem} from './listItem.js';
// import {createMenu} from './menu.js';
// import {createContact} from './contact.js';
import './style.css';
// import prancingPony2 from './prancingPony.png';
import { createForm } from './form.js';
export {addtoDo};

let container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

let toDoArr = [];
let counter = 0;
let projectArr = [];


class listItem {
    constructor(number, title, description, dueDate, priority, project) {
     this.number = number
     this.title = title;
     this.description = description;
     this.dueDate = dueDate;
     this.priority = priority;
     this.project = project;
    }
     getTitle() {
         return this.title;
     }
     getNumber() {
        return this.number;
    }
 }

const projectObj = {
    'Default': toDoArr
}
 

//const projectObj = new ProjectObj('Default', toDoArr);

function createHeading() {
let heading = document.createElement('div');
heading.setAttribute('id', 'header');
let welcome = document.createElement('h2');
welcome.setAttribute('id', 'welcome')
welcome.innerText = 'Welcome to your Projects'
container.appendChild(heading);
heading.appendChild(welcome);
let formSpace = document.createElement('div');
formSpace.setAttribute('id', 'formSpace');
container.appendChild(formSpace);
// const prancingPony = new Image();
// prancingPony.src = prancingPony2;
// prancingPony.id="ponyLogo";
// heading.appendChild(prancingPony);
}
createHeading();


// let note = createListItem();
// newItem(note.title);
// console.log(note);
// console.log(note.getTitle());
// console.log(note.title);

function createDefaultProject(){

const defaultProject = document.createElement('div');
defaultProject.setAttribute('id', 'projectSpace');
defaultProject.setAttribute('class', 'project');
container.appendChild(defaultProject);
let projecttitleBar = document.createElement('div');
projecttitleBar.setAttribute('id', 'projecttitleBar')
let projectTitle = document.createElement('div');
projectTitle.innerText = 'My Project'
//projectTitle.setAttribute('class', 'projectTitle');
projectTitle.setAttribute('class', 'active');
projectTitle.setAttribute('id', 'Default');
defaultProject.appendChild(projecttitleBar);
projecttitleBar.appendChild(projectTitle);
let addButton = document.createElement('button');
addButton.setAttribute('id', 'addTodo');
addButton.setAttribute('class', 'button');
addButton.innerText = 'Add new Item';
projecttitleBar.appendChild(addButton);
let newProjectButton = document.createElement('button');
newProjectButton.setAttribute('id', 'newProjectButton');
newProjectButton.setAttribute('class', 'button');
newProjectButton.innerText = 'Create New Project';
newProjectButton.addEventListener('click', createNewProject);
projecttitleBar.appendChild(newProjectButton);
addButton.addEventListener('click', createForm);
let cardSpace = document.createElement('div');
cardSpace.setAttribute('id', 'display');
defaultProject.appendChild(cardSpace);
}
createDefaultProject();




function createNewProject(){

let formSpace = document.getElementById('formSpace');
let newProjectButton = document.getElementById('newProjectButton');
newProjectButton.removeEventListener('click', createNewProject);
newProjectButton.innerText = 'Hide'
newProjectButton.addEventListener('click', hideProjectForm);
let newProjectForm = document.createElement('div');
newProjectForm.setAttribute('id', 'newProjectForm');
newProjectForm.setAttribute('class', 'form');

let titleLabel = document.createElement('div');
titleLabel.setAttribute('class', 'label')
titleLabel.innerText = 'Project Title'
newProjectForm.appendChild(titleLabel);
let title = document.createElement('input');
title.setAttribute('type', 'text')
title.setAttribute('id', 'projectTitle');
title.setAttribute('class', 'item');
titleLabel.appendChild(title);

let submit = document.createElement('input');
submit.setAttribute('type', 'submit')
submit.setAttribute('id', 'projectSubmit');
submit.setAttribute('class', 'button');
newProjectForm.appendChild(submit);
formSpace.appendChild(newProjectForm)
submit.addEventListener('click', addnewProject);
}

function currentProject(){
    let currentProject = document.querySelector('.active');
    return currentProject
    }

function switchProject(elem){
    let currentProject = document.querySelector('.active');
    currentProject.removeAttribute('class', 'active')
    currentProject.setAttribute('class', 'inactive')
    elem.removeAttribute('class', 'inactive')
    elem.setAttribute('class', 'active')
    addCards();
}



function addnewProject(){
    let titleBar = document.getElementById('projecttitleBar');
    let defaultProject = currentProject();
    console.log(defaultProject);
    let newProject = document.createElement('div');
    newProject.setAttribute('class', 'active');
    defaultProject.removeAttribute('class', 'active')
    defaultProject.setAttribute('class', 'inactive')
    let newProjectTitle = document.getElementById('projectTitle').value;
    let newArr = []
   projectObj[newProjectTitle] = newArr
   console.log(projectObj);
    newProject.setAttribute('id', newProjectTitle);
    newProject.innerText = newProjectTitle;
    titleBar.appendChild(newProject);
    defaultProject.addEventListener('click', function(){switchProject(defaultProject)})
    newProject.addEventListener('click', function(){switchProject(newProject)})
   // newProject.addEventListener('click', currentProject(newProjectTitle));
    //newProject.onclick = currentProject();
    hideProjectForm();
    //return newprojectObj;
}

function hideProjectForm() {
    let newProjectForm = document.getElementById('newProjectForm');
    newProjectForm.remove();
    let newProjectButton = document.getElementById("newProjectButton");
    newProjectButton.removeEventListener('click', hideProjectForm);
    newProjectButton.innerText = 'Create New Project';
    newProjectButton.addEventListener('click', createNewProject);
}




function addCards() {
    let display = document.getElementById('display');
    let project = currentProject();
    let title = project.attributes['id'].value;
    let currentProjectArray = projectObj[title];
    let allCards = document.querySelectorAll('.card');
    if (allCards.length != 0) {
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].remove();
        }
    }
    for (let i = 0; i < currentProjectArray.length; i++) {
        let card = document.createElement('div');
           card.setAttribute('class', 'card');
           card.setAttribute('id', `toDo_${currentProjectArray[i].number}`);
           display.appendChild(card);
           let priorityColor = document.createElement('div');
           priorityColor.setAttribute('class', 'priorityColor');
           priorityColor.setAttribute('id', currentProjectArray[i].priority);
            card.appendChild(priorityColor);

            let expandButton = document.createElement('button');
            expandButton.setAttribute('id', `expand_${currentProjectArray[i].number}`);
            expandButton.setAttribute('class', 'expandButton');
            expandButton.innerText = 'Expand View';
            card.appendChild(expandButton);

           card.appendChild(newItem(currentProjectArray[i].title));
           card.appendChild(newItem(currentProjectArray[i].dueDate));

           expandButton.onclick = () => {
            let details = document.createElement('div');
            details.setAttribute('id', 'details');
            details.innerText = currentProjectArray[i].description;
            card.appendChild(details);
            card.appendChild(collapseButton);
            card.removeChild(expandButton);

            collapseButton.onclick = () => {
                card.removeChild(details);
                card.removeChild(collapseButton);
                card.appendChild(expandButton);
            };
       }
       let collapseButton = document.createElement('button');
           collapseButton.setAttribute('id', `collapse_${currentProjectArray[i].number}`);
           collapseButton.setAttribute('class', 'button');
           collapseButton.innerText = 'Collapse View';
           cardDrag();
    }
}

// Adds To Do items from Form into List Item Objects, then adds them to appropriate Project Array after form Submit Button is clicked
function addtoDo() {
    let project = currentProject();
    let projectName = project.attributes['id'].value;
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let radioButtons = document.querySelectorAll('input[name="priority"]');
    let selectedSize;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    break;
                }
            }
    let newItem = new listItem(counter, title, description, dueDate, selectedSize, projectName);
    projectObj[projectName].push(newItem);
    removeForm();
    counter++;
    addCards();
    addtoProject();
    //toDoArr.forEach(addtoProject);
        }

    // function displayCards() {
    // }
    //addtoProject(newItem);
    // console.log(toDoArr);
    // console.log(newItem);
 
   
    // localStorage.setItem( `item ${counter}`, JSON.stringify(item) );
    // console.log( JSON.parse( localStorage.getItem( `item ${counter}` ) ) );
   //return item;


function removeForm() {
    let titleBar = document.getElementById('projecttitleBar')
    let content = document.getElementById('content');
    //content.style.display = 'none';
    content.remove();
    let addButton = document.getElementById("addTodo");
    addButton.remove();
    addButton = document.createElement('button')
    addButton.setAttribute('id', 'addTodo');
    addButton.setAttribute('class', 'button');
    addButton.innerText = 'Add new Item';
    titleBar.appendChild(addButton);
    addButton.addEventListener('click', createForm);
    //currentProject.removeChild(content);
}

function addtoProject(){
    // let cardSpace = document.getElementById('display')
    //         let currentNumber = counter -1;
    //        console.log(toDoArr[currentNumber].title);
    //        let card = document.createElement('div');
    //        card.setAttribute('class', 'card');
    //        card.setAttribute('id', `toDo_${toDoArr[currentNumber].number}`);
    //        cardSpace.appendChild(card);

    //        let dragger = document.createElement('div');
    //        dragger.setAttribute('class', 'dragger');
    //         dragger.setAttribute('id', toDoArr[currentNumber].number)
    //         card.appendChild(dragger);

    //        let priorityColor = document.createElement('div');
    //        priorityColor.setAttribute('class', 'priorityColor');
    //        priorityColor.setAttribute('id', toDoArr[currentNumber].priority);
    //         card.appendChild(priorityColor);

    //        card.appendChild(newItem(toDoArr[currentNumber].title));
    //        card.appendChild(newItem(toDoArr[currentNumber].dueDate));

    //        let expandButton = document.createElement('button');
    //        expandButton.setAttribute('id', `expand_${toDoArr[currentNumber].number}`);
    //        expandButton.setAttribute('class', 'button');
    //        expandButton.innerText = 'Expand View';
    //        card.appendChild(expandButton);
    //        expandButton.onclick = () => {
    //             let details = document.createElement('div');
    //             details.setAttribute('id', 'details');
    //             details.innerText = toDoArr[currentNumber].description;
    //             card.appendChild(details);
    //             card.appendChild(collapseButton);
    //             card.removeChild(expandButton);

    //             collapseButton.onclick = () => {
    //                 card.removeChild(details);
    //                 card.removeChild(collapseButton);
    //                 card.appendChild(expandButton);
    //             };
    //        }
    //        let collapseButton = document.createElement('button');
    //        collapseButton.setAttribute('id', `collapse_${toDoArr[currentNumber].number}`);
    //        collapseButton.setAttribute('class', 'button');
    //        collapseButton.innerText = 'Collapse View';
    //        cardDrag();



        //}
       // let currentProject = document.getElementById('default')
       // let currentItem = toDoArr[]
}


function cardDrag() {

let card = document.querySelector('.card');
console.log(card);
card.onmousedown = function(event) {

    let shiftX = event.clientX - card.getBoundingClientRect().left;
    let shiftY = event.clientY - card.getBoundingClientRect().top;

    card.style.position = 'absolute';
    card.style.zIndex = 1000;
    document.body.append(card);

    moveCard(event.pageX, event.pageY);

    function moveCard(pageX, pageY) {
        card.style.left = pageX - shiftX + 'px';
        card.style.top = pageY - shiftY + 'px';
      }

    let currentDroppable = null;

    function onMouseMove(event) {
        moveCard(event.pageX, event.pageY);

        card.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        card.hidden = false;
        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest('.projectTitle');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
                leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        enterDroppable(currentDroppable);
    }}}

    document.addEventListener('mousemove', onMouseMove);
    card.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        card.onmouseup = null;
      };
    };

function enterDroppable(elem) {
    elem.style.background = 'pink';
   // let currentItem = document.getElementById('')
   //idnum = dragger.attr('id');
   //console.log(idnum);
   let itemNumber = dragger.attributes['id'].value;
   let projectDrop = elem.attributes['id'].value;
   toDoArr[itemNumber].project = projectDrop;
   card.onmouseup = function() {
    card.remove()
    document.removeEventListener('mousemove', onMouseMove);
   }
   console.log(toDoArr[itemNumber]);
   console.log(toDoArr);
  }

  function leaveDroppable(elem) {
   // document.removeEventListener('mousemove', onMouseMove);
    elem.style.background = '';
  }

card.ondragstart = function() {
    return false;};

}





function newItem(string) {
    let item = document.createElement('div');
    item.setAttribute('class', 'listItem');
    item.innerText = string;
    return item;
    }
    
    // let viewButton = document.createElement('button');
    // viewButton.setAttribute('id', 'addTodo');
    // viewButton.setAttribute('class', 'button');
    // viewButton.innerText = 'View new Item';
   // defaultProject.appendChild(viewButton);
   // viewButton.addEventListener('click', projectItems);

clearStorage();

let i;

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("session storage");
for (i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}



function clearStorage() {
    window.localStorage.clear;
    localStorage.removeItem('item 1');
    localStorage.removeItem('item 2');
}

// function removeElements() {
//     let element = document.getElementById('content');
//     while (element.firstChild) {
//         element.removeChild(element.firstChild);
//     }
// }


// let homepageButton = document.createElement('button');
// homepageButton.innerText = "Home";
// homepageButton.setAttribute('id', 'homebutton');
// homepageButton.setAttribute('class', 'linkButton');
// heading.appendChild(homepageButton);
// homepageButton.addEventListener('click', removeElements);
// homepageButton.addEventListener('click', createHomepage);

// let menuButton = document.createElement('button');
// menuButton.innerText = "Menu";
// menuButton.setAttribute('id', 'menubutton');
// menuButton.setAttribute('class', 'linkButton');
// heading.appendChild(menuButton);
// menuButton.addEventListener('click', removeElements);
// menuButton.addEventListener('click', createMenu);

// let contactButton = document.createElement('button');
// contactButton.innerText = "Contact";
// contactButton.setAttribute('id', 'contactbutton');
// contactButton.setAttribute('class', 'linkButton');
// heading.appendChild(contactButton);
// contactButton.addEventListener('click', removeElements);
// contactButton.addEventListener('click', createContact);

// createHomepage();


