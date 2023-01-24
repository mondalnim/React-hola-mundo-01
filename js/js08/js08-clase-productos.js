class Producto {
    #nombre; //estamos encapsulando
    #precio;
    #uuid;
    #createAt;
    constructor(nombre, precio, uuid) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#uuid = uuid;
        this.#createAt = new Date();

    }
    //Para dar acceso a los atributos encapsulados, usamos los métodos setters y getters
    get nombre() {//get solo lee
        return this.#nombre;
    }
    set nombre(nombre) {
       this.filtrarNombre(nombre,5)&& (this.#nombre=nombre);
    }
    filtrarNombre(nombre, longitudMinima) {
        if (nombre.length > longitudMinima)
            return true;
        else
            throw `La longitud es menor a ${longitudMinima} caracteres`;
    }

    get precio() {
        return this.#precio;
    }
    set precio(precio){
        this.#precio=precio;
    }

    get uuid() {
        return this.#uuid;
    }
    set uuid(uuid){
        this.#uuid=uuid;
    }

    /* agregarProductoACarrito( producto){
        this.#carritoCompras.push( producto);
    } */

    

}

class ProductoElectronico  extends Producto{
    #diasParaGarantia;
    constructor(nombre, precio, uuid, diasParaGarantia) {
       super(nombre, precio, uuid);
       this.#diasParaGarantia=diasParaGarantia;

    }
    get diasParaGarantia() {
        return this.#diasParaGarantia;
    }
    set diasParaGarantia(diasParaGarantia){
        this.#diasParaGarantia=diasParaGarantia;
    }

}

export { Producto, ProductoElectronico }