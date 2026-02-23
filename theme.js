const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Carrega tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
} else if (savedTheme === "light") {
    body.classList.add("light");
}

// Alternar tema
toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
});
