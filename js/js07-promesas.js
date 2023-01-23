console.log("promesas");
const myPromise = new Promise((resolve, reject) => {
    const isOnline = false;
    if (isOnline)
        resolve("Promesa resuelta, está en línea");
    else
        reject("Promesa rechazada, está fuera de línea");//puedes regresar cualquier cosa: objeto, númerico, string

}); //dentro puede ir una función callback o una función flecha. Resolve: resuelvela promesa, reject: la rechaza

console.log("Antes de la promesa");
//console.log(myPromise()); Las promesas no se pueden consumir de esta forma
//consumiendo la promesa con .then(cuando la promesa se resuelve) y .catch(cuando es rechazada)
//myPromise.then((response)=>{}).catch((error)=>{} );
myPromise//las promesas aparecen hasta que se resuelven
    .then((response) => {
        console.log(response);

    })
    .catch((error) => {
        console.log(error);//se puede usar el console.error o warning o info

    });

console.log("Después de la promesa");


//promesa de enviar un arregla y multiplicar sus elmentos por dos
// [2,5,7] => 4,,10,14 => 10,7
/*const datos = [2, 5, 7];
const datosDuplicados= datos.map((element) => element*2);
const datosFiltrados = datosDuplicados.filter(number => number>5);
console.log(datosDuplicados);
console.log(datosFiltrados);

const procesoReducido= datos
.map((element) => element*2)
.filter(number => number>5);
console.log(procesoReducido);
*/

const filtrarArreglo = (datos) => {//ocuparte de otras tareas, usar otras áreas en lo que carga
    const solucion = new Promise((resolve, reject) => {
        const procesoReducido = datos
            .map(element => element * 2)
            .filter(number => number > 5);
        if (procesoReducido.length)
            resolve(procesoReducido);
        else
            reject("Tu arreglo no contiene num mayores a 5");


    });
    return solucion;
}


//consumiendo las procesas con .then y .catch
function filtrarConPromesa() {
    filtrarArreglo([2, 4, 7])
        .then(response => console.log(response))
        .catch(error => console.log(error));

    filtrarArreglo([2, 0, 1])
        .then(response => console.log(response))
        .catch(error => console.log(error));
        console.log("función con then y catch");
}
filtrarConPromesa();

//function filtrarPromesa con async y await
async function filtrarPromesaConAwait() {
    console.log("función con async y await");
    console.log(await filtrarArreglo([2, 4, 7, 10]));
    console.log("termina la función con async y await");
}
//filtrarPromesaConAwait();


async function filtrarPromesaConAwaitTryCatch(){
    const refBtnAsyncAwait = document.querySelector("#btnAsyncAwait");
    refBtnAsyncAwait.disabled = true;
    try{
        //En este bloque se tratará de resolver la promesa
        console.log("Función con async y await, con try y catch");
        console.log( await filtrarArreglo([1,0,1,2]) );
    }
    catch(error){
        //En este bloque se tratará el reject que genere la promesa
        console.log("nooo, se va a acabar el mundo")
        console.warn(error);
    }
    finally{
        refBtnAsyncAwait.disabled = false;
        console.log("Termina la función con async y await");
    }
}
//filtrarPromesaConAwaitTryCatch();

