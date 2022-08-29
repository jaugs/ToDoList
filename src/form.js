/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line import/prefer-default-export
export { createForm };
// eslint-disable-next-line import/first, import/extensions, import/no-cycle
import { addtoDo } from "./index.js";

function createForm() {
  const content = document.createElement("div");
  const addButton = document.getElementById("addTodo");
  addButton.innerText = "Hide";
  addButton.removeEventListener("click", createForm);
  // eslint-disable-next-line no-use-before-define
  addButton.addEventListener("click", hideForm);
  // content.style.display = "block flex";
  content.setAttribute("id", "content");
  document.body.appendChild(content);

  const titleLabel = document.createElement("div");
  titleLabel.setAttribute("class", "label");
  titleLabel.setAttribute("id", "titleLabel");
  titleLabel.innerText = "Item Title";
  content.appendChild(titleLabel);
  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("id", "title");
  title.setAttribute("class", "item");
  titleLabel.appendChild(title);

  const descriptionLabel = document.createElement("div");
  descriptionLabel.setAttribute("class", "label");
  descriptionLabel.setAttribute("id", "descriptionLabel");
  descriptionLabel.innerText = "Item Description";
  content.appendChild(descriptionLabel);
  const description = document.createElement("textarea");
  description.maxlength = 1000;
  description.cols = 100;
  description.rows = 8;
  description.style.width = "17rem"
  description.setAttribute("id", "description");
  description.setAttribute("class", "item");
  descriptionLabel.appendChild(description);

  const dueLabel = document.createElement("div");
  dueLabel.setAttribute("class", "label");
  dueLabel.setAttribute("id", "dateLabel");
  dueLabel.innerText = "Due Date";
  content.appendChild(dueLabel);
  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("id", "dueDate");
  dueDate.setAttribute("class", "item");
  dueLabel.appendChild(dueDate);

  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "priorityLabel");
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
  notesLabel.setAttribute("id", "notesLabel");
  notesLabel.innerText = "Notes:";
  content.appendChild(notesLabel);
  const notes = document.createElement("textarea");
  notes.maxlength = 1000;
  notes.cols = 100;
  notes.rows = 8;
  notes.style.width = "35rem"
  notes.setAttribute("id", "notes");
  notes.setAttribute("class", "item");
  notesLabel.appendChild(notes);

  const undo = document.createElement("button");
  undo.setAttribute("id", "undoLabel");
  undo.setAttribute("class", "button");
  undo.innerText = "Back";
  content.appendChild(undo);
  undo.addEventListener("click", hideForm);
  
  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submitLabel");
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
