console.log("Sesión JS04");

const nombresCh22 = ["Manuel", "Leonardo", "Melanie"];
/* Usando el constructor de la clase Array*/
const nombresCh14 = new Array ("Abue", "Cory", "Maga", "Sebas");

console.log(nombresCh22);
console.log(nombresCh14);

/* El constructor de array 'new Array' te crea los elementos que le indiques El ejemplo de abajo te crea los 24 pero están vacíos*/
const promedioEdadesCh22 = [25];
const promedioEdadesCh14 = new Array (24);
console.log(promedioEdadesCh14);

console.log(`Núm elementos ${promedioEdadesCh22.length}`);
console.log(`Núm elementos ${promedioEdadesCh14.length}`);

/*Se recomienda declarar los arrays(obejtos) con const para prevenir
que se cambie el tipo de dato*/
const armasCh22 = ["manoplas", "picahielo"]; //type of (armasCh22)
//armasCh22 = filero
console.log ("lista de armas:" + armasCh22);

//Leer un elemento del arreglo
console.log(`Jessica tiene un ${armasCh22[1]}`);
console.log(`Leonardo tiene unas ${armasCh22[0]}`);
//Los objetos son datos mutables
armasCh22 [0] = "filero";
console.log(`Leonardo tiene un ${armasCh22[0]}`);

let nombreClica = "Los Wichales";
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);
nombreClica[0]= "T"; //No cambia porque un string es un dato primitivo, es inmutable
//3 formas de agregar un elemento al final
armasCh22 [2] = "machete";
armasCh22 [armasCh22.length] = "macana";
armasCh22.push("cadena", "bat");
//agrega un elemento al inicio
armasCh22.unshift ("navaja", "desarmador"); 
console.log("Actualizacióm de armas:" + armasCh22);

//Ciclo For 
/*
sintaxis
a) for (instruccion Inicio, comparación, expresión final) instrucción

b) for (instruccion Inicio, comparación, expresión final) {
    instrucciones;
}

for (let i = 0; i<=10; i++){
    instrucciones;
}
la iteración es repetir algo, ciclar
*/
//Iteramos los arreglos. Descendente
for (let i = 0 ; i < armasCh22.length; i++){
console.log(`Indice ${i} tiene ${armasCh22[i]}`);
}

//ForEach  callback a una función, se hace una función donde ya esta definido que se va a entregar en que orden
function iterarArreglo (elemento, indice, arreglo){
    console.log(`CB - Indice ${indice} tiene ${elemento}`);
}

//armasCh22.forEach(iterarArreglo);

//función flecha
armasCh22.forEach( (elemento, indice)=> 
console.log(`AF - Indice ${indice} tiene ${elemento}`));

//for in va a iterar los  indices del arreglo
for (let arma in armasCh22)
console.log(`ForIn ${arma} tiene ${armasCh22[arma]}`);

//ForOf va a iterar todos los elementos del arreglo
for (let arma in armasCh22)
console.log(`ForOff arma: ${arma}`);

//iterar de forma descendente
for (let i = armasCh22.length -1; i >= 0 ; i--)
console.log ("Arma: " + armasCh22[i]);

//iterar de forma descendente las armas.
for( let i = armasCh22.length -1; i>=0 ; i--) 
    console.log("Arma: " + armasCh22[i]);


//Para el ciclo for no es necesario indicar en inicio,
//la comparación, la expresión final
    let iteracion = 0;
for ( ; ; ){
    console.log("valor de i" + iteracion);
    if (iteracion === 10) break;
    iteracion++;
}

//la instrucción break rompe con la iteración
//La instruccion continue continua con la sig. iteracion
for (let i=0; i<=10; i++){
    if(i===5)break;
    console.log("For con break:" + i);
}

for (let i=0; i<=10; i++){
    if(i===5)continue;
    console.log("For con continue:" + i);
}


// [ [], [], [] ]
const participantes = [
  ["Jose", "María", "Pedro"],  //ch1
  ["Tan", "Javi", "Andrea", "Santi"] , //ch2
  ["Melanie", "Pavel"] //ch3
];

//Feliz Cumpleaños
                                                          //   F   C
console.log("Persona Ch3(f2) 2a persona(c1) " +  participantes[2][1] );
console.log("Persona Ch2(f1) 1a persona(c0) " +  participantes[1][0] );
console.log("Persona Ch1(f0) 3a persona(c2) " +  participantes[0][2] );
/*  */                                                          

for( fila = 0; fila < participantes.length; fila++){
    //console.log(participantes[fila]);
    for (columna=0; columna< participantes[fila].length; columna++){
        console.log(participantes[columna]);
    }
    console.log(participantes[fila][columna]);

}

//Usando una variable como bandera
let continuarIteraciones = true;
for (fila = 0 ; fila< participantes.length; fila++){
    {
        for (columna = 0 ; columna< participantes[fila].length ; columna++ ){
            console.log(`[${fila}][${columna}]`)

            if ( continuarIteraciones)
                console.log("Uso de break " + participantes[fila][columna] );
            if ( participantes[fila][columna] === "Tan") break;continuarIteraciones= false;
        }
    }   
}

//usando break

//usando continue
cicloFila:
for (let fila = 0 ; fila< participantes.length; fila++){
    
    cicloColumna:
    for (let columna = 0 ; columna< participantes[fila].length ; columna++ ){          

          if ( participantes[fila][columna] === "Javi") continue cicloFila;
          console.log(`[${fila}][${columna}]`);
          console.log("uso de continue" + participantes[fila][columna]);

        }
       
}

//ciclo whiles
 /*
Sintaxis:
a)while (condicion:verdadera) instruccion;

b)while (condicion_verdadera){
    instrucciones;
}
*/
let numIteracion = 0;
//while (confirm("Quieres seguir iterando?")) {
    //console.log("Iteracion n." + numIteracion++);
    
//}

//Adivina el numero del usuario del 1 al 10
//while (confirm ("Piensa en un número y presiona cancelar cuando aparezca")); {
    //console.log ("¿Es este?" + numIteracion++);
    
//}

let number =1;
//while(!confirm(`${number} es tu numero?`)) {
    //number++;
    //if (number === 10) break;
//}
//console.log("Tu numero es el " + number);

//Se puede hacer así para algo más limpio
while(!confirm (`${number} es tu numero?`)){
    number++;
}

//ciclo do-while
/*
Sintaxis:
do{
instrucciones
} while (condicion_verdadera);

*/ //En el do-while por lo menos un ciclo se va a iterar
let valor = 0;
while(valor < 5) {
console.log("while "+valor);
valor++;
}

valor=0;
do{
    console.log("do while " + valor);
    valor++;
} while(valor < 5 );


/* 
FIFO: First inout first output
LIFO: Last input first output
*/

const alimentosPerecederos = [];
//Agregando una caja
alimentosPerecederos.push("manzanas lunes");
alimentosPerecederos.push("manzanas del miercoles");
//sacando manzanas
console.log("Sacando a la venta " + alimentosPerecederos.shift()); //lunes
console.log("Sacando a la venta " + alimentosPerecederos.shift()); //miercoles

//tenemos una ferreteria
const productos=["desarmadores", "cemento"];
//agrego luces
productos.push("luces navideñas");
console.log("Sacando a la venta " + productos.pop()); 
console.log("Sacando a la venta " + productos.pop());




