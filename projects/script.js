function viewResume() {
    let windowView = (window.innerWidth < 1024 || window.innerHeight < 700);
    console.log(windowView);
    if (windowView) {
        window.location = "../index.html#resume-marker";
    } else {
        window.location = "../index.html#view-resume";
    }
}