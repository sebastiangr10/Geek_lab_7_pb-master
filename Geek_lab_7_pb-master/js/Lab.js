"use strict"

var usuario;
function Capturar() {

    class persona {
        constructor(nombre,apellidos, edad, ciudad,fecha,direccion,telefono,correo) {
            this.nombre = nombre;
            this.apellidos=apellidos
            this.edad = edad;
            this.ciudad = ciudad;
            this.fecha = fecha;
            this.direccion = direccion;
            this.telefono = telefono;
            this.correo = correo;
        }
    }
    var nombreRegistro = document.getElementById("nombre").value
    var apellidosRegistro=document.getElementById("apellidos").value
    var edadRegistro = document.getElementById("edad").value
    var ciudadRegistro = document.getElementById("ciudad").value
    var fechaRegistro = document.getElementById("fecha").value
    var direccionRegistro = document.getElementById("direccion").value
    var telefonoRegistro = document.getElementById("telefono").value
    var correoRegistro = document.getElementById("correo").value
    usuario = new persona(nombreRegistro,apellidosRegistro, edadRegistro, ciudadRegistro,fechaRegistro,direccionRegistro,telefonoRegistro,correoRegistro)
    console.log(usuario);
    RegistrarUsuario(usuario)
}
var Personas = [];

function RegistrarUsuario(usuario) {
    Personas.push(usuario)
    console.log(Personas);

    document.getElementById('tabla').innerHTML += '<tbody><td>' + usuario.nombre + '</td><td>' + usuario.apellidos + "</td><td>" +  usuario.edad + '</td><td>' + usuario.fecha+ '</td><td>'+ usuario.telefono +'</td><td>'+ usuario.direccion +'</td><td>'+ usuario.correo + '</td><td>' + usuario.ciudad + '</td></tbody>'
}

