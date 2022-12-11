window.onload = init;

var token = localStorage.getItem("token");
var url = "http://localhost:3000/empleados";
var headers = {
    headers: {
        "Authorization" : "bearer " + token
    }
}

function init(){
    if(!token) window.location = "login.html";

    document.querySelector("#employees").addEventListener("click", () => {
        window.location = "empleados.html";
    })

    document.querySelector("#logout").addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location = "login.html";
    })

    axios.get(url, headers).then((res) => {
        displayEmployees(res.data.message);
    }).catch((err) => {
        console.log("ups");
    })
}

function displayEmployees(empleados){
    var table_body = document.querySelector("#table_body");

    var innerHTML = "";

    for (const empleado of empleados) {
        const {id_empleado, nombre, apellido, telefono, correo, direccion} = empleado;
        innerHTML += `<tr>`;
        innerHTML += `<td>${id_empleado}</td>`;
        innerHTML += `<td>${nombre}</td>`;
        innerHTML += `<td>${apellido}</td>`;
        innerHTML += `<td>${telefono}</td>`;
        innerHTML += `<td>${correo}</td>`;
        innerHTML += `<td>${direccion}</td>`;
        innerHTML += "</tr>";
    }

    table_body.innerHTML = innerHTML;
}