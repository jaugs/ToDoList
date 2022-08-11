
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
    //console.log(defaultProject);
    let newProject = document.createElement('div');
    newProject.setAttribute('class', 'active');
    defaultProject.removeAttribute('class', 'active')
    defaultProject.setAttribute('class', 'inactive')
    let newProjectTitle = document.getElementById('projectTitle').value;
    let newArr = []
   projectObj[newProjectTitle] = newArr
   //console.log(projectObj);
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
    //console.log(projectObj);
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
        if (currentProjectArray[i].project == title) {
        displayCard(currentProjectArray[i]);
    }}

    function displayCard(arr) {

    
        let card = document.createElement('div');
           card.setAttribute('class', 'card');
           card.setAttribute('id', `toDo_${arr.number}`);
           display.appendChild(card);
           let cardTitle = document.createElement('div');
           cardTitle.setAttribute('class', 'cardBar');
           card.appendChild(cardTitle);
           let cardBody = document.createElement('div');
           cardBody.setAttribute('class', 'cardBody');
           card.appendChild(cardBody);
           let priorityColor = document.createElement('div');
           priorityColor.setAttribute('class', 'priorityColor');
           priorityColor.setAttribute('id', arr.priority);
            cardTitle.appendChild(priorityColor);

            let expandButton = document.createElement('button');
            expandButton.setAttribute('id', `expand_${arr.number}`);
            expandButton.setAttribute('class', 'expandButton');
            expandButton.innerText = 'Expand';
            cardTitle.appendChild(expandButton);

           cardBody.appendChild(newItem(arr.title));
           cardBody.appendChild(newItem(arr.dueDate));
           let details = document.createElement('div');
            details.setAttribute('id', 'details');
            details.innerText = arr.description;

           expandButton.onclick = () => {
            cardBody.appendChild(details);
            cardTitle.appendChild(collapseButton);
            cardTitle.removeChild(expandButton);

            collapseButton.onclick = () => {
                cardBody.removeChild(details);
                cardTitle.removeChild(collapseButton);
                cardTitle.appendChild(expandButton);
            };
       }
       let collapseButton = document.createElement('button');
           collapseButton.setAttribute('id', `collapse_${arr.number}`);
           collapseButton.setAttribute('class', 'collapseButton');
           collapseButton.innerText = 'Hide';
          cardDrag(card);
    }
    
    let allInactive = document.querySelectorAll('.inactive')
    //console.log(allInactive);
    for (let k = 0; k < allInactive.length; k++) {
        //console.log(allInactive[k]);
        let projectTitle = allInactive[k].attributes['id'].value;
        let projectArray = projectObj[projectTitle];
       // console.log(project);
        for (let r = 0; r < projectArray.length; r++) {
            if (projectArray[r].project == project.attributes['id'].value) {
               // console.log(projectArray[r]);
                displayCard(projectArray[r]);
            }
        }

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


function cardDrag(card) {

//let card = document.querySelector('.card');
//let cardID = document.querySelector('.card')
//let currentProject = currentProject();
card.onmousedown = function(event) {

    let shiftX = event.clientX - card.getBoundingClientRect().left;
    let shiftY = event.clientY - card.getBoundingClientRect().top;

    card.style.position = 'absolute';
    card.style.zIndex = 1000;
    document.body.append(card);

    moveCard(event.pageX, event.pageY);

//moves Card at the X and Y coordinates of the page, taking account for the shifts initially when clicking on card
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
        let droppableBelow = elemBelow.closest('.inactive');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
                leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        card.onmouseup = function() {
            
            document.removeEventListener('mousemove', onMouseMove);
            currentDroppable.style.background = 'pink';
            let newProjectName = currentDroppable.attributes['id'].value;
            console.log(newProjectName);
           // let allProjects = document.querySelectorAll('.inactive', '.active')
           console.log(Object.keys(projectObj).length);
           // let activeProject = document.querySelector('.active')
           // let oldProjectName =  activeProject.attributes['id'].value;
            let cardID = card.attributes['id'].value;
            let numb = cardID.replace(/[^0-9]/g, ''); 
            let newNum = parseInt(numb,10); 
           // let currentProjectArray = projectObj[newProjectName];
            //let oldProjectArray = projectObj[oldProjectName];
            
            Object.entries(projectObj).forEach(([key, value]) =>  {
                console.log(value);
                //console.log(value[number]);
                for (let i = 0; i < value.length; i++) {
                    if (value[i].number == newNum) {
                    let item = value[i];
                    item.project = newProjectName
                }
            }})
                
    
            // for (let k = 0; k < Object.keys(projectObj).length; k++) {
            //     console.log(projectObj);
            //     let array = projectObj[k];
            //     console.log(array);
            //     for (let i = 0; i < array.length; i++) {
            //     if (array[i].number == newNum) {
            //     let item = array[i];
            //     item.project = newProjectName
            //    console.log(item);
            // }}}
            


            //console.log('true')
            card.remove();
            addCards();


        }


      //  enterDroppable(currentDroppable);
        
    }}}


    document.addEventListener('mousemove', onMouseMove);

    card.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
    
       //card.remove();
        //addCards();
       // let projectTitle = elem.attributes['id'].value;
       // let newProjectArray = projectObj[projectTitle];
       // console.log(newProjectArray);
      };
    };

// function enterDroppable(elem) {
    
//     elem.style.background = 'pink';
//     let newProjectName = elem.attributes['id'].value;
//     let activeProject = document.querySelector('.active')
//     let oldProjectName =  activeProject.attributes['id'].value;
//     let cardID = card.attributes['id'].value;
//     let numb = cardID.replace(/[^0-9]/g, ''); 
//     let newNum = parseInt(numb,10); 
//     let currentProjectArray = projectObj[newProjectName];
//     let oldProjectArray = projectObj[oldProjectName];



//     for (let i = 0; i < projectObj[oldProjectName].length; i++) {
//         if (oldProjectArray[i].number == newNum) {
//         let item = oldProjectArray[i];
//         item.project = newProjectName
//         console.log(item);
//     }}


    //currentProjectArray.push(newItem)


//console.log(newNum);
//console.log(typeof(newNum))


   // let currentItem = document.getElementById('')
   //idnum = dragger.attr('id');
   //console.log(idnum);
   //toDoArr[itemNumber].project = projectDrop;

 

  

  function leaveDroppable(elem) {
    //console.log(elem);
   //document.removeEventListener('mousemove', onMouseMove);
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


