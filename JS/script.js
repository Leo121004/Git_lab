/*---------------------VALIADAR LOS CAMPOS DE CONTACTO---------------------*/
const nombreObj = document.querySelector('#nombre');
let nombreForm='';
nombreObj.addEventListener('input', function(evento){
    nombreForm = evento.target.value;
    console.log('el nombre se modidicó correctamente');
});

const telefonoObj = document.querySelector('#telefono');
let telefonoForm='';
telefonoObj.addEventListener('input', function(evento2){
    telefonoForm = evento2.target.value;
    console.log('el telefono se modidicó correctamente');
});

const correoObj = document.querySelector('#correo');
let correoForm='';
correoObj.addEventListener('input', function(evento3){
    correoForm = evento3.target.value;
    console.log('el correo se modidicó correctamente');
});

const mensajeObj = document.querySelector('#mensaje');
let mensajeForm='';
mensajeObj.addEventListener('input', function(evento4){
    mensajeForm = evento4.target.value;
    console.log('el mensaje se modidicó correctamente');
});

const btnEnviar = document.querySelector('#botonEnviar');

btnEnviar.addEventListener('click', function(evento5){
    evento5.preventDefault();
    if (nombreForm === '' || telefonoForm === '' || correoForm === '' || mensajeForm === '') {
        alert('¡TODOS LOS CAMPOS SON OBLIGATORIOS!')
    } 
    else{
        alert('Enviando datos...')
        document.getElementById('formulario').submit();
    }
});