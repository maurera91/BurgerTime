const express = require("express");

const router = express.Router();

const burger = require("../models/burgers");

router.get("/", (req,res)=>{
    burger.all((data)=>{
        let burgers = {
            burgers: data
        }
        console.log(burgers);
        res.render("index", burgers);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(["name","devoured"], [req.body.name, req.body.devoured], (result) => {
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log(`condition: ${condition}`);
    console.log(req.body.devoured);
    burger.update({devoured: req.body.devoured}, condition, (result) => {
            if (result.changedRows == 0){
                return res.status(404).end();
            }
            else{
                return res.status(200).end();
            }    
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    console.log("controller fire");
    const condition = `id = ${req.params.id}`;
    burger.delete(condition, (result) => {
        console.log(`RESULT = ${result}`);
        console.log(result);
        
        if (result.affectedRows == 0){
            return res.status(404).end();
        }
        else{
            console.log("deleted")
            return res.status(200).end();
        }  
    })
});

module.exports = router

