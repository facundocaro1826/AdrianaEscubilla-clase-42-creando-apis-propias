const express = require('express');
const router = express.Router();
const moviesAPIController = require('../../controllers/api/moviesAPIController');

//Rutas

//Agregar una película
router.post('/create', moviesAPIController.create);
//Eliminar una película
router.delete('/delete/:id', moviesAPIController.destroy);

module.exports = router;