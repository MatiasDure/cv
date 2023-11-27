import "../css/style.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/solid.css";

//auto top scroller
const header = document.querySelector("header");

// hamburger menu
const hamburgerBtn = document.getElementById("hamburger_btn");
const menu = document.getElementById("website_menu");
const HAMBURGER_WIDTH_THRESHOLD = 700; 

hamburgerBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

//carousel
const projects = [...document.getElementsByClassName("carousel_item")];
let activeProjectIndex = 0;
let activeProject = projects[activeProjectIndex];

const previousProjectBtn = document.getElementById("carousel_button_prev");
const nextProjectBtn = document.getElementById("carousel_button_next");

previousProjectBtn.addEventListener("click", () => {
    if(activeProjectIndex === 0) return;

    nextProjectBtn.classList.remove("disabled");

    activeProjectIndex--;

    if(activeProjectIndex === 0) previousProjectBtn.classList.add("disabled");
    
    UpdateActiveProject();
});

nextProjectBtn.addEventListener("click", () => {
    if(activeProjectIndex === projects.length - 1) return; 

    previousProjectBtn.classList.remove("disabled");

    activeProjectIndex++;

    if(activeProjectIndex === projects.length - 1) nextProjectBtn.classList.add("disabled");
    
    UpdateActiveProject();
});

function UpdateActiveProject() {
    activeProject.classList.remove("carousel_item_visible");

    //change active project
    activeProject = projects[activeProjectIndex];

    activeProject.classList.add("carousel_item_visible");
}

