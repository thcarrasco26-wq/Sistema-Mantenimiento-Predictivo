function ingresar(){

let usuario=document.getElementById("user").value;
let password=document.getElementById("pass").value;

if(usuario!=="" && password!==""){

document.getElementById("loginPage").style.display="none";

document.getElementById("dashboard").style.display="block";

}else{

alert("Ingrese usuario y contraseña");

}

}

function salir(){

document.getElementById("dashboard").style.display="none";

document.getElementById("loginPage").style.display="flex";

}
