import { Usuario } from "./js08-clases.js"
import { Producto, ProductoElectronico } from "./js08-clase-productos.js";

//instanciar un objeto:
const albertoFrausto = new Usuario(
    "Alberto frausto",
    "frausto@gmail.com",
    "Siempre viva",
    "55 8952 5879");

console.log(albertoFrausto);
console.log("nombre: " + albertoFrausto.nombre);
console.log("e-mail: " + albertoFrausto.email);
console.log("direccion: " + albertoFrausto["direccion"]);
console.log("telefono: " + albertoFrausto["telefono"]);

const karlaArena = new Usuario(
    "Karla Arenas",
    "karla@gmail.com",
    "Av. niños heroes",
    "3456789021",


)
console.log(karlaArena.imprimirDatos());

for (let claveUsuario in karlaArena)
    console.log(claveUsuario);
const helado = new Producto("Helado de Vainilla",
    80,
    "e3259939-f0eb-4632-a46f-0a5025f713d9"
);
for (let claveProducto in helado)

    console.log(claveProducto);

console.log(helado.nombre);
helado.nombre = "helado de limon";
console.log(helado.nombre);

karlaArena.agregarProductoACarrito(helado);
karlaArena.agregarProductoACarrito(new Producto("Pollo", 110, "57553be5-d365-4287-9a6c-d3e468a71f35"));
karlaArena.agregarProductoACarrito(new Producto("Galleta", 200, "09f21e1f-2821-4329-af7a-c5ba64f849f4"));

const grabadora = new ProductoElectronico("LG Super X3000", 5000, "4a63d2ab-358a-46ff-a06b-ffefe3860152", 365);

karlaArena.agregarProductoACarrito(grabadora);

console.log(karlaArena.imprimirDatos());


