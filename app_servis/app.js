const express = require('express');
const path = require('path');
const BP = require('body-parser');
const Joi = require('joi');
const fs=require('fs');

const app = express();

app.use( express.static( path.join(__dirname, 'static') ) );

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.use('/novo-jelo', BP.urlencoded({extended: false}));

const shema = Joi.object().keys({
    naziv: Joi.string().trim().min(5).max(25).required(),
    opis: Joi.string().trim().min(1).required(),
    kategorija: Joi.number().required(),
    cena: Joi.number().greater(0).required()
});

app.post("/novo-jelo", (req, res) => {
    const {error, succ} = shema.validate(req.body);

    console.log(req);
    if(error){

        res.send("Greska: " + error);
	  return; 
    } else {
        res.send("Poruka je poslata, očekujte odgovor");
    }
    req.body.opis.replace(/\r?\n|\r/g, "<br>");

    fs.appendFile("jela.txt", 
                 JSON.stringify(req.body) + "\n", 
                 function(err, succ){
                     res.send("Poruka je poslata, očekujte odgovor uskoro");
                 }
            )


});

app.get("/jela", (req, res) => {
    const jela = [];
    fs.readFile('jela.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          res.status(500).send({ error: "Greška" });
          return;
        }
        else {
            const redovi = data.split('\n');
            for(let i=0; i<redovi.length; i++) {
                console.log("usli smo u red "+i);
                if(redovi[i].length>3) {
                    let obj = JSON.parse( redovi[i] );
                    jela.push(obj);
                }
            }
            
            res.json(jela);
        }
      });
      
    })
    

app.listen(8000);