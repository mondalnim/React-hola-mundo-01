console.log("JS08 Objetos");
//crear un objeto
const frutasColor ={
    fresa: "roja",
    pinia: "amarillo",
    pepino: "verde",
    naranjas: "verde-amarillo"
};
//formas de leer un objeto
console.log(frutasColor.fresa);
console.log(frutasColor["pepino"]);
const colorFrutaNaranja = "naranja";
console.log(frutasColor[colorFrutaNaranja]);
//Modificación a un valor
frutasColor[colorFrutaNaranja]="amarillo anaranjado";
console.log(frutasColor[colorFrutaNaranja]);

//iterando los objetos
for (let frutaColor in frutasColor)
console.log("clave", frutaColor);
/* for (let frutaColor of frutasColor)
console.log("valor", frutaColor); */

//Uso de symbol (dato primitivo, es un dato único) Symbol crea un elemento único
const oculto= Symbol();
const datosAutomovil = {
    modelo:"Vocho",
    fabricante: "VW",
    [oculto] : 250_000
}
for (let clave in datosAutomovil)//estamos iterando sobre un objeto
console.log("Dato", datosAutomovil [clave]); //se usa coma en vez del signo +(que concatena), para que respete el tipo de dato. Pero con ambas funciona. 
console.log("dato oculto" + datosAutomovil[oculto]);
localStorage.setItem ("automovil", JSON.stringify(datosAutomovil) );
//aplication>local storage


//-----------------------------------
const myArrayWithConstructor = new Array (5,7,8,14);
myArrayWithConstructor.length
console.log(myArrayWithConstructor.slice(1,3)); //extrae desde el 1 pero antes de llegar al 3
