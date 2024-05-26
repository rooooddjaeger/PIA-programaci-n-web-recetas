const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.post('/', (req, res) => {
    const { contenido, usuario_id, receta_id } = req.body;
    const sql = 'INSERT INTO comentarios (contenido, usuario_id, receta_id) VALUES (?, ?, ?)';
    connection.query(sql, [contenido, usuario_id, receta_id], (err, result) => {
        if (err) return res.status(500).send('Error al agregar el comentario');
        res.status(200).send('Comentario agregado con éxito');
    });const express = require('express');
    const router = express.Router();
    const connection = require('../connection');
    
    router.post('/', (req, res) => {
        const { contenido, usuario_id, receta_id } = req.body;
        const sql = 'INSERT INTO comentarios (contenido, usuario_id, receta_id) VALUES (?, ?, ?)';
        connection.query(sql, [contenido, usuario_id, receta_id], (err, result) => {
            if (err) return res.status(500).send('Error al agregar el comentario');
            res.status(200).send('Comentario agregado con éxito');
        });
    });
    
    router.get('/:receta_id', (req, res) => {
        const { receta_id } = req.params;
        const sql = 'SELECT * FROM comentarios WHERE receta_id = ?';
        connection.query(sql, [receta_id], (err, results) => {
            if (err) return res.status(500).send('Error al obtener los comentarios');
            res.status(200).json(results);
        });
    });
    
    module.exports = router;
    
});

router.get('/:receta_id', (req, res) => {
    const { receta_id } = req.params;
    const sql = 'SELECT * FROM comentarios WHERE receta_id = ?';
    connection.query(sql, [receta_id], (err, results) => {
        if (err) return res.status(500).send('Error al obtener los comentarios');
        res.status(200).send(results);
    });
});

module.exports = router;
