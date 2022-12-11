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

    document.querySelector("#delete").addEventListener("click", () => {
        var id = document.querySelector("#id_empleado").value;
        
        if(id){
            var url = "http://localhost:3000/empleados/" + id_empleado;
            
            axios.delete(url, headers).then((res) => {
                const code = res.data.code;
                const message = res.data.message; 
                if(code == 1){
                    alert(message)
                }
                else if(code == 2){
                    alert(message);
                    document.querySelector("#id_empleado").value = "";
                }
            }).catch((err) => {
                //
            })
        }
    })
}