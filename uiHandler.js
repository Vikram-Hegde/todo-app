const themeChanger = document.querySelector(".theme-changer");
const sunIcon = document.querySelector(".icon-sun");
const moonIcon = document.querySelector(".icon-moon");
const tabs = document.querySelector(".tabs");
const card = document.querySelector(".card");
itemsCount()

themeChanger.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon-sun")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    document.body.classList.remove("dark-theme");
  } else if (e.target.classList.contains("icon-moon")) {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
    document.body.classList.add("dark-theme");
  }
});
function tabSwitcher(e) {
  if (e.target.nodeName === "BUTTON") {
    const activeTab = document.querySelector(".active");
    currentTab = document.querySelector(`.${e.target.className}-section`);
    activeTab.classList.remove("active");
    currentTab.classList.add("active");
    itemsCount()
  }
}

function changeStatus(e) {
  if (
    !e.target.classList.contains("checkbox") &&
    !e.target.classList.contains("icon-check")
  )
    return;
  tasks.forEach((task) => {
    if (task.task === e.target.nextElementSibling.textContent) {
      task.completed = !task.completed;
    }
  });
  renderTasks();
}
card.addEventListener("click", changeStatus);
tabs.addEventListener("click", tabSwitcher);
