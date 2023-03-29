//Acá creamos las rutas que tendrán nuestros endpoints. En este caso, las rutas de las bromas.

const { getAllBromas, getOneBroma, createBroma, updateBroma, removeBroma } = require('../controllers/bromas.controllers.js');

module.exports = app => {           //para crear y luego exportar las rutas de las bromas al archivo server.js
    //se especifica el método http y entre() va la ruta a la api y luego la función importada desde controllers.
    app.get('/api/bromas', getAllBromas);         //get, para crear la ruta de TODAS las bromas
    app.get('/api/bromas/:id', getOneBroma);      //get, para crear la ruta de UNA broma
    app.post('/api/broma', createBroma);         //post, para crear la ruta de CREAR una broma
    app.put('/api/bromas/:id', updateBroma);      //put, para crear la ruta de EDITAR una broma
    app.delete('/api/bromas/:id', removeBroma);   //delete, para crear la ruta de ELIMINAR una broma
}
