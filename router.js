const express = require("express");
const router = express.Router();

//Conección con Base de Datos 
const connection = require("./database/db");

//Rutas 

//Select
router.get("/", (req,res)=>{
    let sql = "SELECT * FROM producto";
    let querry = connection.query(sql, (err, results)=>{
        if(err) throw err;
        res.render("productos", {
            results: results
        })
    })
})

//insert - Aca arranca la inserción de productos cuando se hace en una pagina diferente de donde se ven---
router.get("/agregoProducto", (req,res)=>{
    // let sql = "SELECT * FROM producto";
    // let querry = connection.query(sql, (err, results)=>{
    //     if(err) throw err;
        res.render("agregoProducto")
        // , {
        //     results: results
        // })
    })


router.post("/save", (req, res)=>{
    let data = {
        producto_nombre: req.body.producto_nombre,
        producto_precio: req.body.producto_precio,
    }
    let sql = "INSERT INTO producto SET ?";
    let query= connection.query(sql, data, (err, results)=>{
        if(err) throw err;
        res.redirect("/")
    })
})

// Editar y Eliminar producto  
router.get("/agregoModal", (req,res)=>{
    let sql = "SELECT * FROM producto";
    let querry = connection.query(sql, (err, results)=>{
        if(err) throw err;
        res.render("agregoModal", {
            results: results
        })
    })
})

router.post('/update', (req, res) => {
    let sql = "UPDATE producto SET producto_nombre='" + req.body.producto_nombre + "', producto_precio='" + req.body.producto_precio + "' WHERE producto_id=" + req.body.id;
    let query = connection.query(sql, (err, results) => {
       if (err) throw err;
       res.redirect('/');
    });
 });

router.post("/delete", (req, res)=>{
    let sql = "DELETE FROM producto WHERE producto_id=" + req.body.id;
    let query = connection.query(sql, (err, results)=>{
        if(err) throw err;
        res.redirect("/")
    })
})


module.exports = router;