const Viajes = require('../models/Viajes');

exports.mostrarViajes = (req,res) => {
    Viajes.findAll()
        .then(viajes => res.render('viajes', {
            pagina: 'Viajes',
            viajes
        }))
        .catch(error => console.log(error))
}

exports.mostrarViaje = (req,res) => {
    Viajes.findByPk(req.params.id)
        .then(viaje => res.render('viaje', {
            viaje
        }))
        .catch(error => console.log(error))
}