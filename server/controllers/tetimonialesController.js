const Testimoniales = require('../models/Testimoniales');

exports.mostrarTestimoniales = (req,res) => {
    Testimoniales.findAll({
        limit:3
    })
    .then(testimoniales => res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    }))
    .catch(error => console.log(error))
}

exports.guardarTestimoniales = (req,res) => {
    // Validar que todos los campos esten llenos
    const {nombre,correo,mensaje} = req.body;

    let errores = [];
    if(!nombre) errores.push({"mensaje" : "Agrega un nombre"});
    if(!correo) errores.push({"mensaje" : "Agrega un correo"});
    if(!mensaje) errores.push({"mensaje" : "Agrega un mensaje"});

    // revizar por errorres
    if(errores.length>0){
        //muestra la vista con errores 
        res.render('testimoniales', {
            errores, 
            nombre, 
            correo, 
            mensaje
        });
    }else{
        //se almacena en la BD
        Testimoniales.create({
            nombre, 
            correo, 
            mensaje
        })
        .then( testimonial => res.redirect('/testimoniales'))
        .catch( error => console.log(error));
    }

}
