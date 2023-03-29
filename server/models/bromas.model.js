// En este archivo se crea el modelo o schema que tendra la APi en nuestra base de datos.

const { Schema, model } = require('mongoose');         //Para importar mongoose. De mongoose requiero el Schema y modelo.

const bromaSchema = new Schema ({                       //Se crea el modelo que tendrá la broma, con los datos que se requieren, y validaciones.
    setup: {
        type: String,
        required: [true, "Debe ingrsar el setup de la broma"],  //Si el campo se deja en blanco, arrojará el mensaje"
        minlength: [10, "El setup debe tener al menos 10 caracteres"] //Si el campo tiene menos de 10 caracteres, arrojará el mensaje
    },
    punchline: {
        type: String,
        required: [true, "Debe ingrsar el punchline de la broma"],
        minlength: [3, "El punchline debe tener al menos 3 caracteres"]
    },
}, {timestamps: true});                                 //Se crea un timestamp para saber cuando se creó y actualizó la broma.

const  Broma = model('Broma', bromaSchema);             //Se crea el modelo Broma con el schema bromaSchema para exportarlo a través de una constante.
