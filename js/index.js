import "../css/style.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/solid.css";

//auto top scroller
const topScroller = document.getElementById("go_top");

topScroller.addEventListener("click", () => {
    window.scrollTo(0,0);
});

// hamburger menu
const hamburgerBtn = document.getElementById("hamburger_btn");
const menu = document.getElementById("website_menu");
// const HAMBURGER_WIDTH_THRESHOLD = 700; 

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

//skills section
const SKILLS_SHOW_START = 4;
const skillContainers = [...document.getElementsByClassName("skill")];
let visible = 0;
const moreBtn = document.getElementById("more_skill");
const icon = moreBtn.querySelector("i");

let reachedBtm = false;

moreBtn.addEventListener("click", () => {

    let currentVisible = visible;
    if(reachedBtm) 
    {
        for(let i = currentVisible - 1; i > (currentVisible - 1) - SKILLS_SHOW_START; i-- ){
            skillContainers[i].classList.add("hidden");
            visible--;
            
            if(visible === SKILLS_SHOW_START) break;
        }    

        //toggle to show
        if(visible === SKILLS_SHOW_START) {
            icon.className = "fa-solid fa-angle-down fa-3x";
            reachedBtm = false;
        } 
    }
    else {
        for(let i = currentVisible; i < currentVisible + SKILLS_SHOW_START; i++ ){
            skillContainers[i].classList.remove("hidden");
            visible++;

            if(visible === skillContainers.length) break;
        }
        //toggle to hide
        if(visible === skillContainers.length) {
            icon.className = "fa-solid fa-angle-up fa-3x";
            reachedBtm = true;
        } 
    }

});

//skill growth animation
const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

skillContainers.forEach((skill) => {
    skill.classList.add("hidden");
    const growSkillBar = async () => {
        const skillBar = skill.querySelector("div>div");
        let width = 0;
        while(width < skillBar.dataset.val * 2)
        {
            skillBar.style.width = `${width}px`;
            await timeout(20);
            width+= 2;
        }
    }

    growSkillBar();
});

for(let i = 0; i < SKILLS_SHOW_START; i++) {
    skillContainers[i].classList.remove("hidden");
    visible++;
}


