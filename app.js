const express = require("express");
const path = require("path")
const hbs = require("hbs");
const { dirname } = require("path");
const app = express();

require("dotenv").config();
const port = process.env.PORT ||3000;

// MIDDLEWARE ------------------------
// conecto public
app.use("/",express.static(__dirname + "/public"))

//conecto views con los hbs
app.set("view engine", "hbs");
app.set("views", path.join(__dirname , "views"))

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//conección con las rutas 
app.use("/", require("./router"))

app.listen(port, ()=>{
    console.log("Conección con el puerto: 3000 activa")
})