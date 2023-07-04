const express = require("express"); //requiero express
const path = require("path"); // requiero path para poner la ruta absoluta

const app = express(); // en la variable app ejecuto express
const PORT = 3020; // variable con el numero del puerto que quiero levantar

app.use(express.static('public')); //el cliente puede entrar a toda la info que esta dentro de  la carpeta public
//.use genera un subproceso que se ejecuta siempre como para mostrar por ejemplo para mostrar imagenes, etc


//Rutas

app.get("/", (req,res) => res.sendFile(path.join(__dirname,"views","home.html")))

app.listen(PORT, () => console.log(`server running in http://localhost:${PORT}`))// metodo listen para mostarr por consola donde se lavanto el servidor y el numero de puerto
