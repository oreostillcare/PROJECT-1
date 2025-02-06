let darkmode = localStorage.getItem('darkmode');
var themeSwitch = document.querySelector("#theme-switch");

var enableDarkMode = function() {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');

    themeSwitch.querySelector("svg:first-child").style.display = 'none';
    themeSwitch.querySelector("svg:last-child").style.display = 'block';
}

var disableDarkMode = function() {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');
 
    themeSwitch.querySelector("svg:first-child").style.display = 'block';
    themeSwitch.querySelector("svg:last-child").style.display = 'none';
}

themeSwitch.onclick = function() {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== 'active') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}
