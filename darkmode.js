uunlet darkmode = localStorage.getItem('darkmode');
var themeSwitches = document.querySelectorAll("#theme-switch, .theme-switch-hamburger");

var enableDarkMode = function() {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');

    themeSwitches.forEach((btn) => {
        btn.querySelector("svg:first-child").style.display = 'none';
        btn.querySelector("svg:last-child").style.display = 'block';
    });

    document.querySelector(".emaillogo").style.display = 'none';
    document.querySelector(".emaildarkcontact").style.display = 'inline';

    document.querySelectorAll(".githublogo, .linkedinlogo").forEach((logo) => {
        logo.style.display = logo.classList.contains("dark") ? 'inline' : 'none';
    });
};

var disableDarkMode = function() {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');

    themeSwitches.forEach((btn) => {
        btn.querySelector("svg:first-child").style.display = 'block';
        btn.querySelector("svg:last-child").style.display = 'none';
    });

    document.querySelector(".emaillogo").style.display = 'inline';
    document.querySelector(".emaildarkcontact").style.display = 'none';

    document.querySelectorAll(".githublogo, .linkedinlogo").forEach((logo) => {
        logo.style.display = logo.classList.contains("dark") ? 'none' : 'inline';
    });
};


if (darkmode === 'active') {
    enableDarkMode();
} else {
    disableDarkMode();
}


themeSwitches.forEach((btn) => {
    btn.onclick = function() {
        darkmode = localStorage.getItem('darkmode');
        if (darkmode !== 'active') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    };
});
