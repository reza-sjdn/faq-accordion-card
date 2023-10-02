let opened = "";

const questions = document.getElementsByClassName("trigger");
for (let q of questions) {
    q.addEventListener("click", (ev) => {open(ev.currentTarget);});
}


function open (el) {
    const openedEl = document.getElementById(opened);

    if (el.id === opened) {
        close(openedEl);
    }

    else {
        close(openedEl);

        document.getElementById("question" + el.id).style.fontWeight = 700;
        document.getElementById("icon-arrow-down" + el.id).style.transform = "rotate(.5turn)";
        document.getElementById("answer" + el.id).style.display = "block"; 
        opened = el.id;
    }
}


function close (el) {
    if (opened === "") return;

    document.getElementById("question" + el.id).style.fontWeight = 400;
    document.getElementById("icon-arrow-down" + el.id).style.transform = "rotate(1turn)";
    document.getElementById("answer" + el.id).style.display = "none"; 
    opened = "";
}