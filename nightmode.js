document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("darkModeToggle");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme") || "light-theme";
    body.classList.add(savedTheme);

    toggleSwitch.checked = savedTheme === "dark-theme";

    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark-theme");
        } else {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            localStorage.setItem("theme", "light-theme");
        }
    });
});
