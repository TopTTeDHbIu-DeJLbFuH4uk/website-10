let LightMode = document.getElementById("LightMode");

LightMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") === "calculator/light-mode.css") {
        theme.href = "calculator/dark-mode.css";
    } else {
        theme.href = "calculator/light-mode.css";
    }
}