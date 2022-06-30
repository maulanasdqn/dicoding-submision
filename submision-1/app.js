const SIDEBAR = document.querySelector("#sidebar");
const OPENER = document.querySelector('#sidebar-opener')
console.log(OPENER)

const sidebarOpen = () => {
  if (SIDEBAR.style.display === "none") {
    SIDEBAR.style.display = "flex";
    OPENER.textContent = "Close Sidebar"
  } else {
    SIDEBAR.style.display = "none";
    OPENER.textContent = "Open Sidebar"
  }
};
