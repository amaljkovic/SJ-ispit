const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from REST API service');
});

const jeloRoutes = require("./routes/jelo.js");
app.use("/jelo", jeloRoutes);
const kategorijaRoutes = require("./routes/kategorija.js");
app.use("/kategorija", kategorijaRoutes);
const narudzbinaRoutes = require("./routes/narudzbina.js");
app.use("/jelo", narudzbinaRoutes);
const sastojakRoutes = require("./routes/sastojak.js");
app.use("/sastojak", sastojakRoutes);

app.listen(9000);
