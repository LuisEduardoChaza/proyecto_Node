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

    document.querySelector("#post").addEventListener("click", () => {
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var telefono = document.querySelector("#telefono").value;
        var correo = document.querySelector("#correo").value;
        var direccion = document.querySelector("#direccion").value;
        
        var data = {
            nombre,
            apellido,
            telefono,
            correo,
            direccion
        }

        axios.post(url, data, headers).then((res) => {
            alert(res.data.message);
            document.querySelector("#nombre").value = "";
            document.querySelector("#apellido").value = "";
            document.querySelector("#telefono").value = "";
            document.querySelector("#correo").value = "";
            document.querySelector("#direccion").value = "";
        }).catch((err) => {
            alert("Todos los datos deben estar completos");
        })
    })
}