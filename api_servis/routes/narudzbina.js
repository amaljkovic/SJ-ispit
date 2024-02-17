const express = require("express");
const { sequelize, Jelo, Kategorija, JeloSastojak, Sastojak, StavkaNarudzbine} = require("../../models");

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));

route.get("/", async (req, res) => {
    try{
     const narudzbine = await StavkaNarudzbine.findAll();
     return res.json(narudzbine);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });

 route.get("/:id", async (req, res) => {
    try{
     const narudzbina = await StavkaNarudzbine.findByPk(req.params.id);
     return res.json(narudzbina);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
    try{
     const novi = await StavkaNarudzbine.create(req.body);
     return res.json(novi);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.put("/:id", async (req, res) => {
    try{
     const narudzbina = await StavkaNarudzbine.findByPk(req.params.id);
     narudzbina.status = req.body.status;
     narudzbina.save();
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
    try{
     const narudzbina = await StavkaNarudzbine.findByPk(req.params.id);
     narudzbina.destroy();
     return res.json( jelo.id );
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
module.exports = route;