const mysql = require("mysql");

//Conexión a Base de Datos
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "",
    database: "fullstack"
})

connection.connect((err)=>{
    if(err) throw err;
    console.log("Conexión establecidad Base de Datos")
})





module.exports = connection;