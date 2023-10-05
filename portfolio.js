const menu = document.getElementById("menu")

document.getElementById("hamburger-container").addEventListener("click", function() {
    console.log("Clicked")
    menu.classList.toggle("hidden");
})
