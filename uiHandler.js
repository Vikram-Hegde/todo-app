const themeChanger = document.querySelector(".theme-changer");
const sunIcon = document.querySelector(".icon-sun");
const moonIcon = document.querySelector(".icon-moon");
const tabs = document.querySelector(".tabs");
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
tabs.addEventListener("click", tabSwitcher);
