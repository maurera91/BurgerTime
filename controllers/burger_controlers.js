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
    burger.update({devoured: req.body.devoured}, condition, (result) => {
            if (result.changedRows == 0){
                return res.status(404).end();
            }
            else{
                return res.status(200).end();
            }    
    });
});

router.delete("/api/burgers/:id", (req, res) =>{
    const condition = `id = ${req.params.id}`;
    burger.delete(condition, (result) => {
        if (result.changedRows == 0){
            return res.status(404).end();
        }
        else{
            return res.status(200).end();
        }  
    })
});

module.exports = router

