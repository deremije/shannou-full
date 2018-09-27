const elementArray = ["hi", "projects", "about", "openWindow", "journey", "more-button", "resume", "project-footer", "lyric", "financial-app", "embedded", "dell", "logitech", "utilities", "security", "hdl", "connected-building"];

let currentPage = "home";

function viewResume() {
    let windowView = (window.innerWidth < 1024 || window.innerHeight < 700);
    console.log(windowView);
    if (windowView) {
        window.location = "../index.html#resume-marker";
    } else {
        window.location = "../index.html#view-resume";
    }
}


function showMore() {
    showElement("journey");
    currentPage = "journey";
    let aboutMeButton = document.getElementById("about-me-button");
    aboutMeButton.innerHTML = "<button onclick='showLess()'>- SEE LESS</button>";
}

function showLess() {
    hideElement("journey");
    // let aboutMeButton = document.getElementById("about-me-button");
    // aboutMeButton.innerHTML = "<button onclick='showMore()'>+ SEE MORE ABOUT ME</button>";
}

function showElement(elem) {
    //find elements
    let element = document.getElementById(elem);
    
    //get height of block to display
    // element.style.display = "block";
    // element.style.height = "auto";
    // let height = element.scrollHeight + "px";
    // element.style.height = "0";
    
    //display
    element.style.display = "block";
    element.style.height = "auto";
    element.style.opacity = "1";

    if (elem == "openWindow") {
        element.style.height = "100%";
        opacity = "0";
    }
}

function hideElement(elem) {
    let element = document.getElementById(elem);
    element.style.height = "0";
    element.style.opacity = "0";
    // element.style.display = none;
}

function hideAll() {
    
    for (let i = 0; i < elementArray.length; i++) {
        console.log("hiding " + elementArray[i]);
        hideElement(elementArray[i]);
    }
}

function showProject(project) {
    const projectArray = ["hdl", "lyric", "embedded", "utilities", "connected-building", "security", "financial-app", "dell", "logitech"];
    const headers = ["DLS-banner", "Lyric-banner", "Aero-banner", "Utilities-banner", "CB-Banner", "Dell-banner", "Financial-banner", "Dell-banner-2", "Dell-banner"]
    hideAll();
    showElement("project-footer");
    let previousProject = document.getElementById("previousProject");
    let nextProject = document.getElementById("nextProject");
    let next;
    let previous;
    let headerbg;

    for (let i = 0; i < projectArray.length; i++) {
        if (projectArray[i] == project) {
            headerbg = headers[i];
            next = i + 1;
            previous = i - 1;
            if (next == projectArray.length) {
                next = 0;
            }
            if (previous == -1) {
                previous = projectArray.length - 1;
            }
        }
    }

    previousProject.innerHTML = "<a href='#" + projectArray[previous] +
    "' onclick='showProject(" + '"' + projectArray[previous] + '"' + ")'>Previous</a>";
    nextProject.innerHTML = "<a href='#" + projectArray[next] +
    "' onclick='showProject(" + '"' + projectArray[next] + '"' + ")'>Next</a>";
    
    document.getElementById("header").style.backgroundImage = "url('images/" + headerbg + ".png')";

    currentPage = project;
    showElement(project);
    // showElement(project + "header");
    

}

function home() {
    console.log("home");
    showLess();
    console.log("showLess");
    hideAll();
    console.log("hideAll");
    document.getElementById("header").style.backgroundImage = "none";
    const homeElements = ["hi", "projects", "about", "more-button", "resume", "openWindow"];
    for (let i = 0; i < homeElements.length; i++) {
        showElement(homeElements[i]);
        console.log(homeElements[i]);
    }    
    currentPage = "home";
}

function resize() {
    if (currentPage == "home") {
        home();
        return;
    }
    if (currentPage == "journey") {
        home();
        showMore();
        return;
    }
    showProject(currentPage);
}

window.onresize = resize;


window.onload = function() {
    // window.addEventListener("scroll", function() {
    //     reveal();
    // });
}

function reveal() {
    // console.log("reveal");
    // let win = document.getElementById("openWindow");
    // console.log(win.scrollTop);
    // if (win.scrollTop > 1) {
    //     document.getElementById("resume").style.opacity = 1;
    //     console.log(document.getElementById("resume").style.zIndex);
    // } else {
    //     document.getElementById("resume").style.opacity = 0;
    // }

}

const projectHeader = '<div class="leftHeader"><a href="../index.html">SHANNON RANDALL</a></div><nav><ul><li><a href="../index.html#projects">Projects</a></li><li><a href="../index.html#view-resume">Resume</a></li><li><a href="mailto:heythere" + "@" + "shanno" + "u.com">Contact</a></li></ul></nav>';