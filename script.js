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

function mostrarSeccion(id){

document.getElementById("dashboardContent").style.display="none";
document.getElementById("equiposContent").style.display="none";
document.getElementById("alertasContent").style.display="none";
document.getElementById("reportesContent").style.display="none";

document.getElementById(id).style.display="block";

}

function verPC(nombre){

alert(
"Mostrando detalles de " + nombre
);

}
