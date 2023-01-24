console.log("JS08");
class Usuario {
    nombre;//este es un atributo, no un parámetro
    #carritoCompras;
    constructor(nombre, email, direccion, telefono){//el constructor sirve para instanciar, aquí se usan parámetros. Esto no es necesario, solo en Java. Declararlos antes.
        this.nombre = nombre; //hace referencia al objeto que lo este invocando, utiliza el atributo
        this.email = email;//estos son atributos
        this.direccion=direccion;
        this.telefono=telefono;
        this.fechaCreación=new Date();
        this.#carritoCompras=[];

    }
    imprimirDatos(){//funcion para imprimir datos
        let listadoProductos = "";
        if( this.#carritoCompras.length > 0){
            for ( let producto of this.#carritoCompras){
                listadoProductos += `
                UUID:\t${producto.uuid}
                Producto:\t${producto.nombre} 
                Precio:\t${producto.precio}

                `;
            }
        }

        const obtenerDatos=
        `======DATOS DEL USUARIO======
        nombre:${this.nombre}
        email:${this.email}
        direccion: ${this.direccion}
        telefono: ${this.telefono}
        fecha de creación: ${this.fechaCreación}
        ${listadoProductos}`
        ;
        return obtenerDatos;
    }

}
//cuando se crea una clase no se usa const, let, ni var

export{Usuario};