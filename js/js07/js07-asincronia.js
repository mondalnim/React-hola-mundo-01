console.log("Probando");
const introduccion = () =>{
    console.log("01-Bienvenidxs a CH22");
}

const desarrollo = () => {
    console.log("02-Pásele a lo barrido");

}

const desarrolloAsincrono = (delay) => {
    //Función asíncrona
   setTimeout( () => console.log(`Asincrono - Pásele en ${delay}ms`), delay ); //dos segundos de espera, se usan milisegundos
}

let idSetInterval;
const setIntervalAsincrono= (delay=2000)=>{ //preiniciliza la función
    let contador = 0;
    idSetInterval = setInterval(()=> console.log(`Rockstar ${++contador}`), delay);

}

const stopIntervalAsincrono = () =>{
    setTimeout ( ()=> {
        console.log("Se detiene el intervalo");
        clearInterval(idSetInterval);
    } , 10_000 );
    
}
const despedida = () => {
    console.log("03-Ay nos vidrios, nos vicenteamos luego");
}


//Programación síncrona
introduccion();
desarrollo();
despedida();

//Programación asíncrona
introduccion();
desarrolloAsincrono(2000);
desarrolloAsincrono(6000);
setIntervalAsincrono(2000);
stopIntervalAsincrono();
despedida();//esta instrucción no espera 

let idCounter;
const refStartInterval = document.getElementById("start-interval");
const refStopInterval = document.getElementById("stop-interval");

refStartInterval.addEventListener('click', (event)=>{ //para agregar un evento al boton click addevent...
    console.log(event);
    let counter = 0;
    refStartInterval.disabled=true;
    refStopInterval.disabled=false;
   idCounter = setInterval(()=>console.log(`Contador ${++counter}`), 1000);
})

//const refStopInterval.addEventListener=document.getElementById("stop-interval");
function stopCounter(event){ //event
    console.log(event);
    console.log("Se detine el contador");
    clearInterval(idCounter);
    refStartInterval.disabled=false;
    refStopInterval.disabled=true;
}
stopCounter();

