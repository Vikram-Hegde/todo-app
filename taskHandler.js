/* Global variables */
// let i = 0;
let tasks = [
  { task: "todo item 1", completed: true },
  { task: "todo item 2", completed: true },
  { task: "todo item 3", completed: false },
  { task: "todo item 4", completed: false },
];

const formInput = document.querySelector("form");
const allSection = document.querySelector(".all-section");
const pendingSection = document.querySelector(".pending-section");
const completedSection = document.querySelector(".completed-section");
const itemLists = document.querySelectorAll(".item-list");
let currentTab = document.querySelector(".active");
let itemsCountWrapper = document.querySelector(".items-count");

const itemsCount = () =>
  (itemsCountWrapper.textContent = currentTab.children.length + " items");

const renderTasksInAll = () =>
  tasks.forEach(
    ({ task, completed }) =>
      (allSection.innerHTML += `
      <div class="todo-item ${completed ? "done" : ""}">
      <div class="checkbox">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
          <path
            fill="none"
            stroke="#FFF"
            stroke-width="2"
            d="M1 4.304L3.696 7l6-6"
            class="icon-check"
          />
        </svg>
        </div>
        <span>${task}</span>
        <div class="delete-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fill-rule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </div>
      </div>
`)
  );
function renderTasks() {
  itemLists.forEach((list) => (list.innerHTML = ""));
  renderTasksInAll();
  tasks.forEach(({ task, completed }) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.innerHTML = `
    <div class="checkbox">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
        <path
          fill="none"
          stroke="#FFF"
          stroke-width="2"
          d="M1 4.304L3.696 7l6-6"
          class="icon-check"
        />
      </svg>
    </div>
    <span>${task}</span>
    <div class="delete-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path
          fill="#494C6B"
          fill-rule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </div>
    `;
    if (completed) {
      completedSection.appendChild(todoItem);
      todoItem.classList.add("done");
    } else {
      pendingSection.appendChild(todoItem);
      todoItem.classList.remove("done");
    }
  });
  // add or remove border based on number of items left
  let count = itemsCount();
  if (count[0] === "0")
    document.querySelector(".card__footer").style.borderTop = "none";
  else
    document.querySelector(".card__footer").style.borderTop =
      "1px solid var(--v-l-grayish-blue)";
}
renderTasks();
function addNewTask(e) {
  e.preventDefault();
  const taskVal = {
    task: document.querySelector(".input-field").value,
    completed: false,
  };
  tasks.push(taskVal);
  renderTasks();
  e.target.reset();
}
formInput.addEventListener("submit", addNewTask);
