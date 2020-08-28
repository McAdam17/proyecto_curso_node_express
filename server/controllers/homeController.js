const Viajes = require('../models/Viajes');
const Testimoniales = require('../models/Testimoniales');

exports.infoHome = (req,res) => {
    const promises = [];
    promises.push(Viajes.findAll({
        limit: 3
    }) );
    promises.push( Testimoniales.findAll({
        limit: 3
    }) ); 

    // ejetuta todas las promesas y devuelve una sola
    const resultado = Promise.all(promises);
    
    resultado.then(resultado => res.render('index', {
        clase : 'home',
        viajes : resultado[0],
        testimoniales : resultado[1]
    }))
    .catch(error => console.log(error))
}