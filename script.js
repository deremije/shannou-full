window.onload = function() {
    
    setSkillsHeight();
    setResumeHeight();

    // makeUpper();

    let currentPosition = document.body.scrollTop;
    
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > currentPosition && window.pageYOffset > 100) {
            navHide();
        } else {
            navAppear();
        }
        if (window.pageYOffset >= document.body.scrollHeight - window.innerHeight) {
            navAppear();
        }
        currentPosition = window.pageYOffset;
    });
}

function viewResume() {
    let windowView = (window.innerWidth < 1024 || window.innerHeight < 700);
    console.log(windowView);
    if (windowView) {
        window.location = "#resume-marker";
    } else {
        window.location = "#view-resume";
    }
}

function navHide() {
    let header = document.getElementById("header");
    header.classList.add("navHide");
}

function navAppear() {
    let header = document.getElementById("header");
    header.classList.remove("navHide");
}

function setResumeHeight() {
    let windowHeight = window.innerHeight;
    let resumeHeight = document.getElementById("resume").scrollHeight;
    let footerHeight = document.getElementById("footer").scrollHeight;
    let resumePadding = ((windowHeight - (resumeHeight + footerHeight)) / 2) + "px";
    document.getElementById("resume").style.paddingBottom = resumePadding;
}

function setSkillsHeight() {
    let windowHeight = window.innerHeight;
    let skillsHeight = document.getElementById("skills").scrollHeight;
    let skillsPadding = ((windowHeight - skillsHeight) / 2) + "px";
    document.getElementById("skills").style.paddingBottom = skillsPadding;
    document.getElementById("skills").style.paddingTop = skillsPadding;
}

function makeUpper() {
    if (window.innerWidth < 700) {
        document.getElementById("hi").innerHTML = "HELLO !";
    }
}