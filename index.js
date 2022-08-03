const navBar = document.getElementById("navBar");
const navToggle = document.getElementById("navToggle");

//setting up button control of navbar
//Note: I used an arrow function

navToggle.addEventListener("click", () => {
    let visibility = navBar.getAttribute("data-visible");
    if (visibility === "false"){
        navBar.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true"){
        navBar.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    };
    }
)