document.addEventListener("DOMContentLoaded", function(event) { 
    const drop_menu = document.querySelector(".menu")
    const menu_nav = document.querySelector(".nav-bar")

    drop_menu.onclick = (()=>{
        menu_nav.classList.toggle("show");
    });
})