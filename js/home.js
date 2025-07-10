// Select the toggle switch
const toggleSwitch = document.getElementById("darkmode-toggle");

// Check local storage for mode
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true; // Keep switch ON
}

// Toggle dark mode when clicked
toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled"); // Save in local storage
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled"); // Save in local storage
    }
});



// 기억하고 싶지 않으면!

// toggleSwitch.addEventListener("change", () => {
//     if (toggleSwitch.checked) {
//         document.body.classList.add("dark-mode");
//     } else {
//         document.body.classList.remove("dark-mode");
//     }
// });

const toggle = document.getElementById("darkmode-toggle");
    const body = document.body;
    const logoImg = document.querySelector(".logo img");
    const profileImg = document.querySelector(".profile_pic img");

    toggle.addEventListener("change", function () {
        if (toggle.checked) {
            body.classList.add("dark-mode");
            logoImg.src = "img/logo_new_dark.png";
        } else {
            body.classList.remove("dark-mode");
            logoImg.src = "img/logo_new.png";
        }
    });