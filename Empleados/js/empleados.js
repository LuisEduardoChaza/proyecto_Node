window.onload = init;

function init() {
    if(!localStorage.getItem("token")) window.location = "login.html";

    document.querySelector("#logout").addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location = "login.html";
    });

    document.querySelector("#post").addEventListener("click", () => {
        window.location = "post_empleados.html";
    });

    document.querySelector("#get_all").addEventListener("click", () => {
        window.location = "get_empleadosT.html";
    });

    document.querySelector("#get").addEventListener("click", () => {
        window.location = "get_empleados.html";
    });

    document.querySelector("#put").addEventListener("click", () => {
        window.location = "put_empleados.html";
    });

    document.querySelector("#patch").addEventListener("click", () => {
        window.location = "patch_empleados.html";
    });

    document.querySelector("#delete").addEventListener("click", () => {
        window.location = "delete_empleados.html";
    });
}