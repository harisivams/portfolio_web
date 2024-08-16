function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Flutter Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Android Developer";
    }, 4000);
}
textLoad();
setInterval(textLoad, 12000);
