const express = require("express");
const { sequelize, Jelo, Kategorija, JeloSastojak, Sastojak, StavkaNarudzbine } = require("../../models");

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get("/", async (req, res) => {  //
     try {
          const jela = await Jelo.findAll();
          return res.json(jela);
     }
     catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
});

route.get("/:id", async (req, res) => {
     try {
          const jelo = await Jelo.findByPk(req.params.id);
          return res.json(jelo);
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
});


route.post("/novo-jelo", async (req, res) => {
     try {
          const novi = await Jelo.create(req.body);
          return res.json(novi);
          //ako objekat nije iste strukture kao model
          /*const novi = {};
          novi.naziv = req.body.mojNaziv;
          novi.opis = req.body.opisKojiSeDrugacijeZove;
          const insertovani = await Jelo.create(novi);   
          return res.json(insertovani);
          */
     }
     catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
});

//FIXME: ako se prosledi samo 1 atribut nije resen error handling
route.put("/:id", async (req, res) => {
     /*Kako request izgleda
     {"cena": 16}
     ili
     {"naziv":"pipa", "opis":"pupu"}
     ili moze sve da */
     try {
          //TODO: error handling
          const jelo = await Jelo.findByPk(req.params.id);
          jelo.naziv = req.body.naziv;
          jelo.opis = req.body.opis;
          jelo.cena = req.body.cena;
          jelo.kategorija_id = req.body.kategorija_id;
          jelo.save();
    	return res.json(jelo);

     } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
});

//od seedova mogu da trazim da mi generise jos basea podataka u bazi jer sad ide pisanje brisanje

route.delete("/:id", async (req, res) => {
     try {
          const jelo = await Jelo.findByPk(req.params.id);
          jelo.destroy();
          return res.json( jelo.id );
          } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
});

module.exports = route;