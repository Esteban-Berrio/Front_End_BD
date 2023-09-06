
//js de email para mandar mensaje 

document.getElementById('inputEmailVerification').addEventListener('input',function() {
 
    // Ontenemos los valores de los campos de contraseñas 
    correo1 = document.getElementById('inputEmail');
    correo2 = document.getElementById('inputEmailVerification');
 
    // Verificamos si las constraseñas no coinciden 
    if (correo1.value != correo2.value) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 

        document.getElementById("error").classList.remove("ocultar");
        document.getElementById("error").classList.add("mostrar");
 
        return false;
    } else {

        document.getElementById("error").classList.add("ocultar");
        document.getElementById("error").classList.remove("mostrar");
    
        // Desabilitamos el botón de login 
      

    

    return true;
}



});


//APARTADO DE PASSWORD 
// se crean variables t despues se hace una funcion para que pase a texto y a password


var eye = document.getElementById('eye');
var input = document.getElementById('inputPassword');

 eye.addEventListener("click", function(){
        if( input.type == "password"){
    
            input.type = "text"
            eye.style.opacity=0.8
            
        }else{
            
            input.type = "password"
            eye.style.opacity = 0.6
        }
});


//  <!-- funcion para el campo 2 de verifircar contraseña -->

    var eye2 = document.getElementById('eye2');
    var input2 = document.getElementById('inputPassword2');
 
        eye2.addEventListener("click", function(){
        if( input2.type == "password"){
    
            input2.type = "text"
            eye2.style.opacity=0.8
            
        }else{
            
            input2.type = "password"
            eye2.style.opacity = 0.6
        }
    })

 
 
  document.getElementById('inputPassword2').addEventListener('input',function() {
  
     // Ontenemos los valores de los campos de contraseñas 
     pass1 = document.getElementById('inputPassword');
     pass2 = document.getElementById('inputPassword2');
 
     // Verificamos si las constraseñas no coinciden 
     if (pass1.value != pass2.value) {
 
         // Si las constraseñas no coinciden mostramos un mensaje 
 
         document.getElementById("error_password").classList.remove("ocultar");
         document.getElementById("error_password").classList.add("mostrar");
 
         return false;
     } else {

        document.getElementById("error_password").classList.add("ocultar");
        document.getElementById("error_password").classList.remove("mostrar");
    
     
        
 
     // Refrescamos la página (Simulación de envío del formulario) 
     return true;
     }
 
 
 
 })


 

//  COMPROBAR REQUISITOS DE LA BASE DE DATOS DE TODOS LOS CAMPOS 

const formulario= document.getElementById('formulario');
const inputName= document.getElementById('inputName');
const inputLastName= document.getElementById('inputLastName');
const inputAddress= document.getElementById('inputAddress');


formulario.addEventListener('submit', (e)=>{
	e.preventDefault();
	// metodos que valide inputs
	checkInputs();
});
    

 function checkInputs() {
    const inputNameValue = inputName.value.trim(); //trim para eliminar cualquier caraterc vacio que esta dentro de un texto
    const inputLastNameValue = inputLastName.value.trim();
    const inputAddressValue = inputAddress.value.trim();
    
    if (inputNameValue === '') {
        // metodo serterror 
       setErrorFor(inputName, 'no puede dejar el usuario en blanco');
        
    }else{
        setSuccessFor(inputName);
    }


    if (inputLastNameValue === '') {
        // metodo serterror 
       setErrorFor(inputLastName, 'no puede dejar el usuario en blanco');
        
    }else{
        setSuccessFor(inputLastName);
    }




    if (inputAddressValue === '') {
        // metodo serterror 
       setErrorFor(inputAddress, 'no puede dejar el usuario en blanco');
        
    }else{
        setSuccessFor(inputAddress);
    }

 }

// lo que hace esta función es mostrar el error por medio de small donde selecciona el elemento del formulario__grupo
//y lo selecciona atravez de la etiqueta smal, despues llama una clase donde muestra el mensaje del css

 function setErrorFor(input, message) {
    const formulariogrupo = input.parentElement;
    const small = formulariogrupo.querySelector('small');
    formulariogrupo.className = 'formulario__grupo error';
     small.innerText = message;  //nos permite cambiar el contenido de texto de un elemento de texto o consultar su valor
    
}

function setSuccessFor(input) {
	const formulariogrupo = input.parentElement;
	formulariogrupo.className = 'formulario__grupo success ';
}






