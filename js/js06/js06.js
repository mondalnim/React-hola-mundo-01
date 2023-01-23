console.log("Sesión js06");

const obtenerNombre= () => prompt ("Escibe tu nombre", "Sergio");

const encontrarElementoById= () => {
    const element = document.getElementById("titulo");
    //console.log("Datos del objeto:", element);
    console.log("Entre las etiquetas" + element.innerHTML);

   const nombreDesarrollador = obtenerNombre();//ToDo agregar función
    element.innerHTML += `Manipulacion del <strong>DOM</strong> `;

    element.innerHTML = `<h1>${element.innerHTML} Manipulación del <strong>DOM</strong> </h1>`

}
encontrarElementoById();
const encontrarElementoByTagName = () =>{
//const elements = document.getElementsByTagName("p");
const [, introRef] = document.getElementsByTagName("p");
//obtenemos el indice 0
//const introRef= elements[0].innerHTML;
//Modificamos el contenido de introRef
console.log(introRef?.innerHTML);
introRef?.innerHTML= "Las <strong>quesadillas</strong> van con <em>queso</em>, es un hecho";
}
encontrarElementoByTagName();

//función que me cambia a azul el estilo etiquetas em


const cambiarColorEm = (nuevoColor) => {
    const elements = document.getElementsByTagName("em");
    console.log(elements.length);
    for (let element of elements){
    element.style.color=nuevoColor;
    }
}
//cambiarColorEm("blue");

//inner.HTML respeta el formato que extrae, mientras que inner.Text no lo hace, solo extrae el texto dentro de las etiquetas

const diferenciaInnerHTMLInnerText=() =>{
    const element= document.getElementById ("titulo");
    console.log(element.innerHTML);
    console.log(element.innerText);

}
diferenciaInnerHTMLInnerText();

const encontrarElementoByClassName= ( ) => {
    const elements = document.getElementsByClassName("subtitulo");
    for (let element of elements)
    console.log(element.innerText);
}
encontrarElementoByClassName(); //como traer dos elementos de diferentes tags y lo traemos de la clase

//el selector universal

const encontrarElementoByQuerySelector = () =>{
    //const element = document.QuerySelector("span>em");
    const element = document.QuerySelector(".subtitulo");
    console.log(element?.innerText);
}
encontrarElementoByQuerySelector

const crearElemento= () => {
    const newElement = document.createElement("p");
    newElement.innerHTML = `La Ch22 es bien <strong>chida</strong> por <ul>
    <li>diversas cosas</li>
    <li>cholos</li>
    <li>Listos y listas</li>
    <li>Hay clases de bienes raíces</li>
    <li>Sin problemas de quesadillas</li>
    <li>Aplican haz compitas, no compitas</li>
    <li></li>
    </ul>
    `
    ;
} 
document.getElementById("datos-generation").appendChild(newElement);

crearElemento(); 

