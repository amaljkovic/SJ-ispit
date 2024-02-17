const express = require('express');
const { sequelize, Jelo, Kategorija, JeloSastojak, Sastojak, StavkaNarudzbine, Narudzbina } = require("../models");


const app = express();

app.get('/', (req, res) => {
    res.send('Hello from REST API service');
});

const jeloRoutes = require("./routes/jelo.js");
app.use("/jelo", jeloRoutes);
const kategorijaRoutes = require("./routes/kategorija.js");
app.use("/kategorija", kategorijaRoutes);
const narudzbinaRoutes = require("./routes/narudzbina.js");
app.use("/narudzbina", narudzbinaRoutes); //TODO: da li ovde treba da bude narudzbina? -> menjala sam ponovo je bio error 
const sastojakRoutes = require("./routes/sastojak.js");
app.use("/sastojak", sastojakRoutes);


// app.listen(9000);
app.listen(9000, async () => {
	console.log("Started server on localhost:9000");
	await sequelize.sync();
	console.log("DB synced");
});

