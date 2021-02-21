const labels = document.querySelectorAll("label");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const topButton = document.getElementById("top-button");

for (i=0; i < checkboxes.length; i++) {
    labels[i].addEventListener("click", done);
}

function done() {
    this.classList.toggle("done");
}

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        topButton.style.opacity = "1";
    } else {
        topButton.style.opacity = "0";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    behavior: "smooth";
}

topButton.addEventListener("click", backToTop);