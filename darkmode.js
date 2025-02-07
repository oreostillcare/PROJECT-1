let darkmode = localStorage.getItem('darkmode');
var themeSwitch = document.querySelector("#theme-switch");

var enableDarkMode = function() {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');

    themeSwitch.querySelector("svg:first-child").style.display = 'none';
    themeSwitch.querySelector("svg:last-child").style.display = 'block';

    document.querySelector(".emaillogo").style.display = 'none';
    document.querySelector(".emaildarkcontact").style.display = 'inline';

    document.querySelectorAll(".githublogo, .linkedinlogo").forEach((logo) => {
        if (logo.classList.contains("dark")) {
            logo.style.display = 'inline'; 
        } else {
            logo.style.display = 'none'; 
        }
    });
};

var disableDarkMode = function() {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');

    themeSwitch.querySelector("svg:first-child").style.display = 'block';
    themeSwitch.querySelector("svg:last-child").style.display = 'none';

    document.querySelector(".emaillogo").style.display = 'inline';
    document.querySelector(".emaildarkcontact").style.display = 'none';

    document.querySelectorAll(".githublogo, .linkedinlogo").forEach((logo) => {
        if (logo.classList.contains("dark")) {
            logo.style.display = 'none';
        } else {
            logo.style.display = 'inline'; 
        }
    });
};

if (darkmode === 'active') {
    enableDarkMode();
} else {
    disableDarkMode();
}

themeSwitch.onclick = function() {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== 'active') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
};
