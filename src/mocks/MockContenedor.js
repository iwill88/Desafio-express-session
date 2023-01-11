const Database = require('../../database');
const {generarId}=require('./utils/generadorId');
const {generarProducto} =require('./utils/generadorProducto');

class MockContenedor extends Database {
    constructor(){
        super();
    }

    products(cant = 5) {
        const nuevos = [];
        for (let i = 0; i < cant; i++) {
          const nuevoProducto = generarProducto(generarId());
          nuevos.push(nuevoProducto);
        }
        return nuevos;
      }


}

module.exports= MockContenedor;