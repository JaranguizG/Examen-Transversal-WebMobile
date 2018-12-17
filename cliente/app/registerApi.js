function login1() {    
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://jeisona.pythonanywhere.com/cliente/", true);
    xhttp.send();

    xhttp.onload = function(){
        var correo = document.getElementById("id_email").value
        var password_1 = document.getElementById("id_password").value

        console.log(correo) 
        console.log(password_1)   

        var response = JSON.parse(xhttp.responseText);
        var usuario = response;

        for (var i = 0; i < usuario.length; i++) {

            if(usuario[i].email == correo && usuario[i].password == password_1){
                window.location.replace("https://jeisona.github.io/producto.html");
                console.log("Inicio sesion Correctamente") 
                break;       
            }
            else{
                window.location.replace("https://jeisona.github.io/producto.html");
                console.log("Credenciales Erroneas")      
            }            
        }
    };
}
/*$('#registrar').click(function(){
    var datas = { correo: $('#id_email').val,password: $('#id_password').val};
    $.ajax({
    url : 'http://127.0.0.1:8000/cliente/?format=json',
    data : datas, 
    method : 'GET', //en este caso
    dataType : 'json',
    success : function(response){
    window.location.replace("https://jeisona.github.io/producto.html");
     alert("Inicio de sesion Correcto");
    },
    error: function(error){
    alert("Credenciales invalidas");
    }
    });
});

var http = new XMLHttpRequest();
var url = "http://127.0.0.1:8000/cliente/?format=json";
var correo = document.getElementById("id_email")
var password_1 = document.getElementById("id_password")
http.open("GET", url, true);

http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) { 
       //aqui obtienes la respuesta de tu peticion
       alert(http.responseText);
    }
}*/