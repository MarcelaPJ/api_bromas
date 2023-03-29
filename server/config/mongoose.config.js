// EN ESTE ARCHIVO SE SE PONE LA CONFIGURACIÓN DEL SERVIDOR Y SU LIBRERÍA MONGOOSE.

const { connect } = require('mongoose');             //para importar mongoose

connect('mongodb://localhost/api_bromas_db', {       //para conectar mongoose a la base de datos
    useNewUrlParser: true,
    useUnifiedTopology: true                         //opciones que pasamos para deshacernos de los mensajes de desaprobación  en nuestro terminal.
})

.then(() => console.log('Conectado a la base de datos'))
.catch(() => console.log('Hubo un error al conectar la base de datos'));