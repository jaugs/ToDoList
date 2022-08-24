/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line import/prefer-default-export
export { createForm };
// eslint-disable-next-line import/first, import/extensions, import/no-cycle
import { addtoDo } from "./index.js";

function createForm() {
  const header = document.getElementById("header");
  const content = document.createElement("div");
  const addButton = document.getElementById("addTodo");
  addButton.innerText = "Hide";
  addButton.removeEventListener("click", createForm);
  // eslint-disable-next-line no-use-before-define
  addButton.addEventListener("click", hideForm);
  content.style.display = "block flex";
  content.setAttribute("id", "content");
  header.appendChild(content);

  const titleLabel = document.createElement("div");
  titleLabel.setAttribute("class", "label");
  titleLabel.innerText = "Item Title";
  content.appendChild(titleLabel);
  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("id", "title");
  title.setAttribute("class", "item");
  titleLabel.appendChild(title);

  const descriptionLabel = document.createElement("div");
  descriptionLabel.setAttribute("class", "label");
  descriptionLabel.innerText = "Item Description";
  content.appendChild(descriptionLabel);
  const description = document.createElement("input");
  description.setAttribute("type", "text");
  description.setAttribute("id", "description");
  description.setAttribute("class", "item");
  descriptionLabel.appendChild(description);

  const dueLabel = document.createElement("div");
  dueLabel.setAttribute("class", "label");
  dueLabel.innerText = "Due Date";
  content.appendChild(dueLabel);
  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("id", "dueDate");
  dueDate.setAttribute("class", "item");
  dueLabel.appendChild(dueDate);

  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");
  wrapper.setAttribute("class", "label");
  wrapper.innerText = "Set Priority for Item";
  content.appendChild(wrapper);

  const options = {
    Urgent: false,
    High: false,
    Medium: false,
    Low: false,
  };

  // eslint-disable-next-line guard-for-in
  for (const key in options) {
    const label = document.createElement("label");
    label.innerText = key;
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "priority";
    input.value = key;
    label.appendChild(input);
    wrapper.appendChild(label);
  }

  const notesLabel = document.createElement("div");
  notesLabel.setAttribute("class", "label");
  notesLabel.innerText = "Notes:";
  content.appendChild(notesLabel);
  const notes = document.createElement("input");
  notes.setAttribute("type", "text");
  notes.setAttribute("id", "notes");
  notes.setAttribute("class", "item");
  notesLabel.appendChild(notes);

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submit");
  submit.setAttribute("class", "button");
  content.appendChild(submit);
  submit.addEventListener("click", addtoDo);
}

function hideForm() {
  const content = document.getElementById("content");
  content.remove();
  const addButton = document.getElementById("addTodo");
  addButton.removeEventListener("click", hideForm);
  addButton.innerText = "Add new Item";
  addButton.addEventListener("click", createForm);
}

// function createItem(string, id) {
//     let title = string;
//     let item = document.createElement('div');
//     item.setAttribute('id', id);
//     item.setAttribute('class', 'item');
//     item.innerText = title;
//     return item;
//  }

//  function createTitle(string) {
//     let titleText = string;
//     let title = document.createElement('div');
//     title.setAttribute('class', 'title');
//     title.innerText = titleText;
//     return title;
//  }

//  function createDescription(string) {
//     let title = document.createElement('div');
//     title.setAttribute('class', 'text');
//     title.innerText = string;
//     return title;
//  }

//  function createImage(string, id){
//     let newImage = new Image();
//     newImage.src = string;
//     newImage.id = id;
//     newImage.className = 'image';
//     return newImage;
//  }

// function createContact () {
//     let content = document.getElementById('content');

//     let contactTitle = createTitle('Contact Us');
//     content.appendChild(contactTitle);

//     let barlimanCard = createItem('Barliman Butterbur', 'barliman')
//     content.appendChild(barlimanCard);
//     let barlimanImage = createImage(barliman, 'barliman');
//     barlimanCard.appendChild(barlimanImage);
//     let barlimanText = createDescription('Innkeep - BBbur@breeland.net');
//     barlimanCard.appendChild(barlimanText);

//     let nobCard = createItem('Nob', 'nob')
//     content.appendChild(nobCard);
//     let nobImage = createImage(nob, 'nob');
//     nobCard.appendChild(nobImage);
//     let nobText = createDescription('Cook - slowcoach1@breeland.net');
//     nobCard.appendChild(nobText);

// }
