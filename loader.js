var loader = document.querySelector('.loader')

window.addEventListener("load", vanish);

function vanish()
{
    loader.classList.add("disappear") // With animation, use this

    // loader.style.display = "none"  // With No animation, use this
}
