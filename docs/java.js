var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
    let id = check.checked;
    if (id ==  false) {
        location.href = "/docs/es/index.html";
    } else {
        location.href = "/index.html";
    }
}
