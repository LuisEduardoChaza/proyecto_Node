module.exports = (req, res, next) =>  {
    return res.status(200).json({ code: 1, message: 'Bienvenido a la Base de Datos de Empleados'});
}