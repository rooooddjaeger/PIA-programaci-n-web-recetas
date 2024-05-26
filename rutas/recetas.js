const express = require('express');
const router = express.Router();

let recipes = [];

// Ruta para agregar nueva receta
router.post('/', (req, res) => {
    const { titulo, ingredientes, instrucciones, imagen } = req.body;
    recipes.push({ titulo, ingredientes, instrucciones, imagen });
    res.status(201).send('Receta agregada');
});

// Ruta para obtener todas las recetas
router.get('/', (req, res) => {
    res.status(200).json(recipes);
});

module.exports = router;
