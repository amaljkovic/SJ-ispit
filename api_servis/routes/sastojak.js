const express = require("express");
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));

route.get("/", async (req, res) => {
    try{
         return res.json("svi sastojci");
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });

 route.get("/:id", async (req, res) => {
    try{
         return res.json("sastojak čiji je id=" + req.params.id);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
    try{
         return res.json("unos novog sastojka čiji su podaci u req.body");
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.put("/:id", async (req, res) => {
    try{
         return res.json("izmena podataka sastojka čiji je id="+req.params.id+" a podaci su u req.body");
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
    try{
         return res.json(req.params.id);  //id obrisanog
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
module.exports = route;