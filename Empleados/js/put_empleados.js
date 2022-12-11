window.onload = init;

var token = localStorage.getItem("token");
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

    document.querySelector("#put").addEventListener("click", () => {
        var id_empleado = document.querySelector("#id_empleado").value;
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

        if(id){
            var url = "http://localhost:3000/empleados/" + id;
            
            axios.put(url, data, headers).then((res) => {
                const code = res.data.code;
                const message = res.data.message; 
                if(code == 1){
                    alert(message)
                    document.querySelector("#id_empleado").value = "";
                    document.querySelector("#nombre").value = "";
                    document.querySelector("#apellido").value = "";
                    document.querySelector("#telefono").value = "";
                    document.querySelector("#correo").value = "";
                    document.querySelector("#direccion").value = "";
                }
                else if(code == 2){
                    alert(message);
                    document.querySelector("#id_empleado").value = "";
                }
                else{
                    alert(message);
                }
            }).catch((err) => {
                //
            })
        }
    })
}