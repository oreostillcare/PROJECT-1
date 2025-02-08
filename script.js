var visit_button_1 = document.querySelector("#visit_project_button_1");
var visit_button_2 = document.querySelector("#visit_project_button_2");
var visit_button_3 = document.querySelector("#visit_project_button_3");

var github_button_1 = document.querySelector("#github_button_1");
var github_button_2 = document.querySelector("#github_button_2");
var github_button_3 = document.querySelector("#github_button_3");


visit_button_1.onclick = function() {
    window.open('https://www.facebook.com/reezerss?mibextid=wwXIfr&mibextid=wwXIfr');
}

visit_button_2.onclick = function() {
    window.open('');
}

visit_button_3.onclick = function() {
    window.open('https://');
}


github_button_1.onclick = function() {
    window.open('https://');
}

github_button_2.onclick = function() {
    window.open('https://');
}

github_button_3.onclick = function() {
    window.open('https://');
}


function toggleMenu() {
    var menu = document.querySelector(".menu-links");
    var hamburger = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    hamburger.classList.toggle("open");
}

