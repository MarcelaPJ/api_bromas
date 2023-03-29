//Este archivo es el que se encarga de iniciar el servidor express.

const express = require("express")                                  //para importar express
const app = express();                                              //para iniciar express
const port = 8000;                                                  //puerto al que se conectará

app.use(express.json());                                            //para usar formato json
app.use(express.urlencoded({extended:true}))                        //para usar formato url y leer el body

require('./server/config/mongoose.config.js')                               //para importar mongoose

const bromasRoutes = require('./server/routes/bromas.routes.js')            //para importar las rutas de las bromas

bromasRoutes(app);                                                  // para usar las rutas de las bromas; 
                                                                    // a la funcion bromasRoutes le pasamos el app, que a su vez esta pasando
                                                                    // todo lo que tiene que ver con express, es decir request, response, etc.
                                                                    
app.listen(port,() => console.log(`El servidor está corriendo en el puerto: ${port}`));
// para "escuchar" a nuestro servidor;
// le decimos que app, que trae todo lo de express, escuche en el puerto, en este caso el 8000,
// y si todo está ok me muestre el console.log, este lo veré en la consola del navegador o de VSCode.