const express = require("express");
const { sequelize, Jelo, Kategorija, JeloSastojak, Sastojak, StavkaNarudzbine} = require("../../models");

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));

route.get("/", async (req, res) => {
    try{
          const kategorije = await Kategorija.findAll();
          return res.json(kategorije);    
         }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });

 route.get("/:id", async (req, res) => {
    try{
          const kategorija = await Kategorija.findByPk(req.params.id);
          return res.json(kategorija);    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
    try{
          const novi = await Kategorija.create(req.body);
          return res.json(novi);    
     }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.put("/:id", async (req, res) => {
    try{
          const kategorija = await Kategorija.findByPk(req.params.id);
          kategorija.naziv = req.body.naziv;
         
          kategorija.save();
          return res.json(kategorija);    
     }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
    try{
     const kategorija = await Kategorija.findByPk(req.params.id);
     kategorija.destroy();
     return res.json( kategorija.id );
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
module.exports = route;