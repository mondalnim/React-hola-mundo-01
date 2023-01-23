console.log("Sesión JS03");

const datosUsuario= {nombre: "Jessica", ciudad:"CdMx"};
{
    const datosUsuario =  {nombre: "Wicho" , ciudad: "Aguuascalientes"};
    const numPersonas = 49;

    console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);
    {
        console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);
    }
}

console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);

//console.log(`En este momento hay ${numPersonas} escuchando rolitas de Shakira`);
//la variable numPersonas no esta definida//

//Condicional If 
/*sintaxis 
if(condicionVerdadera) instrucción;

if (concicionVerdadera) {
    instrucciones;
}
*/
const respuesta = false; //confirm ("¿Te gusta Shakira?");
console.log(respuesta);
let mensaje;

if(respuesta){
//mensaje= "entonces te pongo waka waka";
mensaje= "Te fe-li-ci-to que bien actuas";
}

else
    mensaje = "Entonces te pongo Su Chambelán";
    console.log(mensaje);

//operador ternario
// es un operador de condicional que es más corto que un if. Si no utilizas varias instrucciones
//Sintaxis: condición? condición:verdadera : condición_falsa;

let teamFrio= confirm("¿te gusta el frío?");
//let mensajeTernario = teamFrio ? "hielito" : "ponche";
//console.log(`Te voy a servir ${mensajeTernario}`);
console.log(`Te voy a servir:  ${teamFrio ? "hielito" : "ponche"}`);

let cantante = "Sergio";
console.log(`Tu reloj es ${cantante==='Shakira' ? "Rolex": cantante === "Pique" ? "Casio" : "el sol"}`);

/*
    let marcaReloj;
    if( cantante === 'Shakira' ) marcaReloj = "Rolex";
    else{
        if( cantante === 'Pique') marcaReloj = "Casio"
        else marcaReloj = "el sol";
    }
    console.log(`Tu reloj es ${ marcaReloj})
*/

//condicional If, Else, Else If
/* Sintaxis
if(condicionVerdadera) instrucción;
else if (segundaCondicion) instruccion
else if (terceraCondicion) instruccion
else if (ondicion n) instruccion
else instruccion; 
*/
let nombrePersona = 'Karla';
let marcaReloj;
    if( nombrePersona === 'Shakira' )marcaReloj = "Rolex";
    else if(nombrePersona === 'Pique' || nombrePersona === 'Karla') marcaReloj = "Casio"
    else if(nombrePersona === 'Sergio') marcaReloj = "el sol"
        else marcaReloj = "uno de cars";

    console.log(`${nombrePersona} tu reloj es ${ marcaReloj}`);

/* Condicional switch
 esta sola tiene una evaluación
    Sintaxis:
    switch(expresión){
        case valor1
        instrucciones;
        break; 
        caso valor2:
        instrucciones;
        break;
        caso valorn:
        instrucciones;
        break;
        default:
            instrucciones;
    }
*/

nombrePersona = 'Mon';
marcaReloj = '';
switch (nombrePersona){
    case 'Shakira' : 
    marcaReloj ='Rolex';
    break;
    case 'Pique' : 
    case 'Karla' :
    marcaReloj = 'Casio';
    break;
    case 'Sergio' : 
    marcaReloj = 'El sol'
    break;
    case 'Mon' :
    marcaReloj = 'Ferrari'
    break;
    default:
    marcaReloj = 'Uno de Cars'
}
console.log(`Switch - ${nombrePersona} tu reloj es ${ marcaReloj}`);

/*
preguntar el número de mes con un (prompt), del 1 al 12. 
De acuerdo al mes, desplegar en consola, la estación del año
mes 12, 1, 2 = invierno
mes 3, 4, 5 = primavera
mes 6 ,7, 8 = verano
mes 9, 10, 11 = otoño
*/

/*let mes = prompt ('¿qué mes es?');
estacion = '';
switch (mes){
    case '12' : 
    case '1' : 
    case '2':
    estacion ='invierno';
    break;
    case '3' : 
    case '4' :
    case '5' :
    estacion = 'primavera';
    break;
    case '6' :
    case '7' :
    case '8' :
    estacion = 'verano'
    break;
    case '9' :
    case '10':
    case '11':
    estacion = 'otoño'
    break;
}
console.log(`Switch El mes ${mes} pertenece a ${estacion}`);*/

let mesLetra ='';
let mes = prompt ('¿qué mes es?');
estacion ='';
switch (mes){
    case '12':
    mesLetra = 'diciembre';
    estacion = 'invierno';
    case '1' : 
    mesLetra = 'enero';
    estacion = 'invierno';
    case '2':
    mesLetra = 'febrero';
    estacion ='invierno';
    break;
    case '3':
    mesLetra ='marzo'; 
    estacion = 'primavera';
    case '4' :
    mesLetra ='abril'; 
    estacion = 'primavera';
    case '5' :
    mesLetra ='mayo'; 
    estacion = 'primavera';
    break;
    case '6' :
    mesLetra ='junio'; 
    estacion = 'verano';
    case '7' :
    mesLetra ='julio'; 
    estacion = 'verano';
    case '8' :
    mesLetra= 'agosto'
    estacion = 'verano'
    break;
    case '9' :
    mesLetra= 'septiembre'
    estacion= 'otoño'
    case '10':
    mesLetra= 'octubre'
    estacion= 'otoño'
    case '11':
    mesLetra='noviembre'
    estacion = 'otoño'
    break;
}
console.log(`El mes ${mesLetra} pertenece a ${estacion}`);

//utilizando if//
//let estacion = '';
//if (mes===12 || mes === 1 || mes ===2){}

//---------Refactorizando
/*function factorial( number ){
    if( number < 1) 
        return 1;
    return number * factorial( number - 1 )
}
console.log("Factorial 5 = " + factorial(5) ); //120*/

function factorialDos (number) {
   return number < 1 ? 1 : number * factorialDos (number -1 )}

   console.log("factorialDos 5 = " + factorialDos(5) ); //120

//operador ternario
// es un operador de condicional que es más corto que un if. Si no utilizas varias instrucciones
//Sintaxis: condición? condición:verdadera : condición_falsa;




