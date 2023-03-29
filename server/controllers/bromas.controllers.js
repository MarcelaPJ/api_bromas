// ESTE ARCHIVO SE ENCARGA DE CREAR LAS FUNCIONES QUE SE EXPORTARÁN Y EJECUTARÁN CUANDO SE LLAME A LAS RUTAS
// DESDE BROMAS.ROUTES.JS 
// AQUÍ CREAMOS LOS MÉTODOS PARA UN CRUD, ES DECIR, PARA CREAR, LEER, ACTUALIZAR Y ELIMINAR.

const Broma = require('../models/bromas.model.js');        //Se crea "Bromas" para importar el modelo(schema) de las bromas

module.exports.getAllBromas = async (req, res) => {     // se crea la funcion getAllBromas (que será asincrona) para obtener todas las bromas. 
                                                        // dentro de los parentesis se pasan los parametros request y response, que son los que se usan en express. 
    try{                                                // se crea try/catch para manejar los errores.                                           
        const bromas = await Broma.find();              // se crea la constante bromas para, luego de esperar la búsqueda en la base de datos, obtener TODAS las bromas con el metodo find.
        res.json({                                      // Si está todo ok, debería arrojar un satus 200 y se enviará la respuesta en formato json.
            message:"Se obtienen exitósamente todas las bromas",
            bromas
        });
    } catch(error) {                                    //en caso de error se ejecuta el catch
        res.status(500).json({
            message:"No fue posible obtener todas las bromas",
            error
        });
    }
}

module.exports.getOneBroma = async (req, res) => {
    try {
        const { id } = req.params;                      //se crea la constante id para obtener el id (de req.params) de la broma que se desea traer.
        const oneBroma = await Broma.findOne({_id: id});
        res.json({
            message: "Se obtuvo exitósamente la broma",
            oneBroma
        });
    } catch(error) {
        res.status(500).json({
            message:"No fue posible obtener la broma",
            error
        });
    }
}

module.exports.createBroma = async (req, res) => {
    try {
        const newBroma = await Broma.create(req.body);          //se crea la constante newBroma para crear una nueva broma con el modelo Broma y los datos que se pasan en el body.
        res.json({
            message: "Se creó exitosamente la broma",
            newBroma
        });
    } catch(error) {
        res.json({
            message:"No se pudo crear una broma",
            error
        });
    }
}

module.exports.updateBroma = async (req, res) => {
    try {
        const { id } = params;                              //se crea la constante id para obtener el id (de req.params) de la broma que se desea actualizar.
        const { body, params } = req;                       //se crea la constante body para obtener el body (de req) de la broma que se desea actualizar y la constante params para obtener los params (de req) de la broma que se desea actualizar.
        const updatedBroma = await Broma.findOneAndUpdate(id, body , {new: true}); //se crea la constante updatedBroma para actualizar la broma con el modelo Broma y los datos que se pasan en el body.
        res.json({                                          //este método recibe el id y el body con la info que se desea actualizar, y el tercer parámetro (new:true) es para que devuelva la broma actualizada.
            message: "Se actualizó la broma de manera exitosa",
            updatedBroma
        });
    } catch (error) {
        res.status(500).json({
            message:"No se pudo actualizar la broma",
            error
        });
    }
}

module.exports.removeBroma = async (req, res) => {
    try {
        const { id } = req.params;                                  //se crea la constante id para obtener el id (de req.params) de la broma que se desea eliminar.
        const deletedBroma = await Broma.deleteOne({_id: id});      //se crea la constante deletedBroma para eliminar la broma con el modelo Broma y los datos que se pasan en el body.
        res.json({                                                  //se usa guión bajo (_id) porque asi genera mongoose el id.
            message: "Se eliminó exitosamente la broma",
            deletedBroma
        });
    } catch (error) {
        res.status(500).json({
            message:"No se pudo eliminar la broma",
            error
        });
    }
}