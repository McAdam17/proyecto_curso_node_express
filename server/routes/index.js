const express = require('express');
const router = express.Router();


const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/tetimonialesController');



module.exports = function () {
    router.get('/', homeController.infoHome);

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

    // Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.guardarTestimoniales);

    router.get('/viajes', viajesController.mostrarViajes);
    
    router.get('/viajes/:id', viajesController.mostrarViaje);

    return router;
}