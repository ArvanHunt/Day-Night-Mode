document.addEventListener("DOMContentLoaded", function() {
    const themeLight = document.getElementById("theme-light");
    const themeDark = document.getElementById("theme-dark");
    const switcher = document.getElementById("theme-switcher");

    // Load saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        themeLight.disabled = true;
        themeDark.disabled = false;
    } else {
        themeLight.disabled = false;
        themeDark.disabled = true;
    }

    // Event listener for theme switcher
    switcher.addEventListener("click", function() {
        if (themeLight.disabled) {
            themeLight.disabled = false;
            themeDark.disabled = true;
            localStorage.setItem("theme", "light");
        } else {
            themeLight.disabled = true;
            themeDark.disabled = false;
            localStorage.setItem("theme", "dark");
        }
    });
});
