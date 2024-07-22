const express = require('express');
const router = express.Router();
const genresAPIController = require('../../controllers/api/genresAPIController');

//Rutas
//Listado de todos los generos
router.get('/', genresAPIController.list);


module.exports = router;