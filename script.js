let toggleButton = document.getElementById("toggleButton");

function toggleMode() {
    const bodyElement = document.querySelector('body');
    if (bodyElement.classList.contains("dark-mode")) {
        bodyElement.classList.remove("dark-mode");
        bodyElement.classList.add("light-mode");
    } else {
        bodyElement.classList.remove("light-mode");
        bodyElement.classList.add("dark-mode");
    }
}

toggleButton.addEventListener("click", toggleMode);
