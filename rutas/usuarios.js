const express = require('express');
const router = express.Router();

let users = [];

// Ruta para el registro de usuario
router.post('/register', (req, res) => {
    const { nombre, email, password } = req.body;
    users.push({ nombre, email, password });
    res.status(201).send('Usuario registrado');
});

// Ruta para el inicio de sesión de usuario
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.status(200).send('Inicio de sesión exitoso');
    } else {
        res.status(401).send('Credenciales inválidas');
    }
});

module.exports = router;
