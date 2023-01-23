console.log("Sesión js05");

//operador de asignación (=)
let estadoPequeñoDeMexico = "Tlaxcala";

{
    let espaniol = ingles = rumano = turco = vasco = chino = true;
}


console.log("Francisco habla ingles = " + ingles);
console.log("Francisco habla rumano = " + rumano);
console.log("Francisco habla turco = " + turco);
console.log("Francisco habla vasco = " + vasco);
console.log("Francisco habla chino = " + chino);

//console.log("Francisco habla espaniol = " + espaniol); Marca error, está fuera del scope

//operadores aritméticos
//multiplicación
let metrosCuadrados = 10*30;

//tenemos 2 terrenos
// metrosCuadrados = metrosCuadrados*2;
//operadores simplificados
metrosCuadrados*=2;

//división
metrosCuadrados /= 3;
console.log("m2 de 3 terrenos " + metrosCuadrados);

//residuo %
//quiero saber si los metrosCuadrados son multiplo de 2
let esMultiplo2 = metrosCuadrados % 2===0 ? "Sí": "No";
console.log("La cantidad es múltiplo de 2? " + esMultiplo2);

//Resta
let precioTerreno = 90000;
let precioM2=precioTerreno/300;
console.log(`Precio del metro cuadrado: " ${precioM2}pesitos`);
let cantidadPagada = 30000;
let cantidadRestante = precioTerreno-cantidadPagada;
console.log(`La cantidad restante ${cantidadRestante} pesos`); //se abonó 10,000
console.log(`Cantidad restante ${cantidadRestante -= 10000}pesos`);

//Suma
//cobro por la generación de escrituras (8% costo del terreno)
const costoEscrituras = precioTerreno * 0.08;
precioTerreno += costoEscrituras;
console.log("Terreno + escrituras $" + precioTerreno);
//o se puede hacer:
console.log("Terreno + escrituras $" + (precioTerreno+= (precioTerreno * 0.08)));

let nombre = "Alan";
nombre += " García";
console.log("Nombre personas ch22 " + nombre );

//operadores de incremento y decremento
let numClavosParaMicasa = 100;
numClavosParaMicasa++;//101
console.log("Num. de clavos: " + numClavosParaMicasa);
++numClavosParaMicasa; //102
console.log("Num. de clavos: " + numClavosParaMicasa);//102
console.log("Num. de clavos: " + numClavosParaMicasa++);//imprimir102 -> var:103
console.log("Num. de clavos: " + numClavosParaMicasa);//104



//primero aumenta  la variabley luego nos entrega el valor de la variable el preincremente [primero aumenta y luego se llee la variable]
//

//primero nos entrega el valor y luego aumenta la variable posincremento 

//-------------
let respuestasExamen = 95;
//agregamos punto extra
console.log("Resultado final: " + respuestasExamen++ ); //95 -> var = 96

respuestasExamen=82;
do{
    console.log("Resultado: " + respuestasExamen);//ultimo valor preincremento 100 y 101 pos incremento 101 y 102
} while (++respuestasExamen <= 100)
console.log("Resultado final: " + respuestasExamen);//valor impreso

//si solo es una línea pos y pre incremento aumenta lo mismo

let nivelSuenio = 99;
if (nivelSuenio++ ===100) console.log ("Me voy a mimir en la sesión");
//compara y si no cumple, no lo imprime. O sea primero se evalua el 99 y no cumplio da el false


//aunmenta y asigna preincremento

//primero lee y luego aumenta posincremento
 x=3;
 y = x++;
 console.log(`x:${x} y:${y}`);// x:4 y:3

 x=3;
 y = ++x;
 console.log(`x:${x} y:${y}`);// x:4 y:4


 //operadores relacionales 
 /*
 <= menor igual que
 >= mayor igual que
 >mayor que
 <menor que
 */

 let numPerfumes=10;
 if (numPerfumes>=10) console.log("Que elegancia la de Francia"); 

 //operadores de igualdad
 /*
 == operador igual
 === estrictamente igual
 != diferente que
 !== estrictamente diferente que

 */

 let numMatriculaPavel = "10025";
 if(numMatriculaPavel==10025) console.log("Pavel esta aprobado");
 if(numMatriculaPavel===10025) console.log("Pavel esta en nivel fase 5");//esta es la única línea que no imprime porque usa el === y es un dato string y aquí aparece numérico
 if(numMatriculaPavel>=10025) console.log("Pavel esta en el CUCEI");

 //operadores lógicos

 let numRebozos = 3;
 let teGustaRebozo = false;
 let vivesEnElExtranjero = false;
 if (numRebozos>5 || teGustaRebozo) console.log("te regalo un rebozo de oaxaca");
 if (numRebozos>0 || teGustaRebozo && vivesEnElExtranjero) console.log("Te vendo mi rebozo en dolares");

 /*AND (se evalua siempre antes que OR) viene siendo como sumatoria, en aritmetica se da prioridad a la sumatoria
//en valores booleanos se puede omitir la comparación
//NaN o 0 son los unicos numeros que dan FALSE, de otra manera da TRUE
//siempre hay que poner la comparación, aunque se pueda disponer de ellos
//En valores booleanos, se puede omitir la comparación
*/

//Operadores de corto circuito
//OP1 && OP2 : Si OP1=true, se ejecuta el resultado de OP2 //si es false ya no se ejecuta el dos y entrega un false en consola
let online = true;
let mensaje= "Estamos en línea";
let respuesta = online && mensaje;
console.log("respuesta: " + respuesta);


let edadPersona=18;
mensaje = "Puede votar";
console.log("La persona puede votar?" + (edadPersona>=18 && mensaje)); //hay que meterlo en parentesis para indicar una precedencia, de otra manera nos da false porque primero concatena y da 0 lo que rsulta en false

// OP1 || OP2 Si OP1= true, se ejecuta el resultado OP1 (Si la opción 1 es true, se ejecuta el OP1)
let isOnline = true;
let isActive = true;

if(isOnline){
    if(isActive)
    console.log("Estamos autorizados");//anidados

}
if (isOnline && isActive)
console.log("Estamos autorizados");//if con operador and


isOnline && isActive && console.log("Estamos autorizados");//esta es la forma de cortocircuito y es de las más usadas, las dos anteriores pueden funcionar también
//es más limpio el código de esta manera 

// T | T | T
// T | F | F
// El operador &&(AND) tiene prioridad sobre el ||(OR)

let edadSobrina=15;
console.log(edadSobrina>18 && "Puede votar");

let edad = 39;
console.log(edad>=40 && "Estás en el cuarto piso");

let numQuesadillasAComer = "3";
let guisado = "Huitlacoche";
console.log("Mon comerá quesadilla de: " + (numQuesadillasAComer && guisado)); //los parentesis ayudan a priorizar lo que se ejecuta primero

let nombreConductor = "Pax";
let tieneLicencia = true;
let edadConductor= 50;
const seRentaAuto= nombreConductor && tieneLicencia && edadConductor<60;

console.log("Resultado " + seRentaAuto); 

const datoQuesadilla={
    trotilla: "maíz",
    tieneQueso: true,
    pica: "poquito"
}
const picaLaQuesadilla = datoQuesadilla.pica && "Pica mucho"
console.log(picaLaQuesadilla);
//cuando se lee un dato que no existe es undefined, y este convertidon a booleano da false
console.log("poquito" || "Pica mucho" && "Ni pica");

//Si hay un false lo brinca y pasa al operador siguiente