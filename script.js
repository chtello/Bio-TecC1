
const express = require('express');
const mongoose = require (mongoose);
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('¡Hola, este es un servidor sencillo con Express!');
});
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});npm install mongodb