const express = require("express");
const { sequelize, Jelo, Kategorija, JeloSastojak, Sastojak, StavkaNarudzbine } = require("../../models");
const { json } = require("sequelize");

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get("/", async (req, res) => {
     try {
          const jela = await Jelo.findAll();
          return res.json(jela);
     }
     catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
});


var getNovoJeloJson = {
     "uputstvo": "U body staviti JSON file sa sledecim formatom i poslati POST request na ovaj path",
     "body": {
          "naziv": "lazanja",
          "opis": "mrsna",
          "cena": 950,
          "kategorija_id": 1
     },
     "ogranicenja": {
          "naziv": "string",
          "opis": "string",
          "cena": "positive float",
          "kategorija_id": "???"
     }
}

route.get("/novo-jelo", async (req, res) => {
     try {
          return res.json(getNovoJeloJson);
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
});

//mora biti pozvan nakon /novo-jelo jer :id hvata bilo koji pattern, ne samo broj
route.get("/:id", async (req, res) => {
     try {
          const jelo = await Jelo.findByPk(req.params.id);
          if (jelo == null) {
               return res.status(400).json({ Error: "Nepostojeci id" });
          }
          else {
               return res.json(jelo);
          }
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
});

route.post("/novo-jelo", async (req, res) => {
     try {
          var err = false;
          if (!typeof req.body.naziv === 'string') {
               console.log("naziv ne valja");
               err = true
          }
          if (isNaN(req.body.cena)) {
               console.log("cena ne valja");
               err = true;
          }
          if (!typeof req.body.opis === 'string') {
               console.log("opis ne valja")
               err = true;
          }
          // TODO: provera kategorije, vrv kroz DB query
          // TODO: provera viska podataka u requestu
          console.log(req.body)
          if (err == false) {
               const novi = await Jelo.create(req.body);
               return res.json(novi);
          }
          else {
               return res.status(400).json({ Error: "Format nije prihvacen", "hint": "Pozovi GET jelo/novo-jelo za vise informacija" });
          }
     }
     catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
});

//FIXME: ako se prosledi samo 1 atribut nije resen error handling
route.put("/:id", async (req, res) => {
     try {
          const jelo = await Jelo.findByPk(req.params.id);
          if (jelo == null) {
               return res.status(400).json({ Error: "Nepostojeci id" });
          }
          else {
               var err = false;
               for (const key of Object.keys(req.body)) {
                    const value = req.body[key];
                    console.log(`Key: ${key}, Value: ${value}`);
                    if (key == 'naziv') {
                         if (!typeof req.body.naziv === 'string') {
                              console.log("naziv ne valja");
                              err = true
                         }
                    }
                    else if (key == 'cena') {
                         if (isNaN(req.body.cena)) {
                              console.log("cena ne valja");
                              err = true;
                         }
                    }
                    else if (key == 'opis') {
                         if (!typeof req.body.opis === 'string') {
                              console.log("opis ne valja");
                              err = true
                         }
                    }
                    else if (key == 'kategorija_id') {
                         //TODO: handle
                         //maybe get all unique categories from db and raise error if a new one is used
                    }
                    else {
                         err = true;
                    }
               }
               if (err == false) {
                    for (const key of Object.keys(req.body)) {
                         jelo[key] = req.body[key];
                    }
                    await jelo.save();
                    return res.json(jelo);
               }
               else { //ima gresaka
                    return res.status(400).json({Error: "greska pri unosu podataka"});
               }
          }
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
          return res.json(jelo.id);
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
});

module.exports = route;