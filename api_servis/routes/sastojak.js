const express = require("express");
const { sequelize, Jelo, Kategorija, JeloSastojak, Sastojak, StavkaNarudzbine} = require("../../models");

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));

route.get("/", async (req, res) => {
    try{
     const sastojci = await Sastojak.findAll();
     return res.json(sastojci);

    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });

 route.get("/:id", async (req, res) => {
    try{
     const sastojak = await Sastojak.findByPk(req.params.id);
     return res.json(sastojak);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
    try{
     const novi = await Sastojak.create(req.body);
     return res.json(novi);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.put("/:id", async (req, res) => {
    try{
     const sastojak = await Sastojak.findByPk(req.params.id);
     sastojak.naziv = req.body.naziv;
     sastojak.save();
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
    try{
     const sastojak = await Sastojak.findByPk(req.params.id);
     sastojak.destroy();
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
module.exports = route;