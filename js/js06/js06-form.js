console.log("Probandop");

const refFormulario = document.forms["registro"];
refFormulario.addEventListener('submit', (event)=>{
 event.preventDefault();
 console.log("Evento submit activado"); 
 const email = refFormulario.elements["inputEmail4"].value;
 console.log(email);  
})
//puede agregar un evento a cualquier estructura de su HTML
//placeholder que indica lo que debe llevar