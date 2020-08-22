// importar express
const express = require('express');

// configurar express
const app = express();
app.use('/', (req,res) => {
    res.send("Hola mundo en Node js");
});

app.listen(3000);
