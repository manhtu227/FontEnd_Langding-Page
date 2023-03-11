const toggle = document.getElementById("darkModeSwitch");
console.log('---')
console.log(toggle)
toggle.onclick = function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
}

window.addEventListener('scroll', function () {
    console.log(window.scrollY)
    if (window.scrollY < 100) {
        document
            .querySelector('.navbar')
            .classList.remove('navbar_stiky-on');
    } else {
        document
            .querySelector('.navbar')
            .classList.add('navbar_stiky-on');
    }
});