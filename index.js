const express = require('express');
const app = express();
const {empleado} = require('./empleados.json');

app.get("/", (req, res, next) => {
    res.send(empleado);
});

app.listen(process.env.PORT || 4000, () => {
    console.log('Server is running...');
});