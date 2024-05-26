document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registro-form');
    const loginForm = document.getElementById('login-form');
    const nuevaRecetaForm = document.getElementById('nueva-receta-form');

    if (registroForm) {
        registroForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const response = await fetch('/api/usuarios/registro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, email, password })
            });

            if (response.ok) {
                alert('Usuario registrado con éxito');
                window.location.href = 'login.html';
            } else {
                alert('Error al registrar el usuario');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const response = await fetch('/api/usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                alert('Inicio de sesión exitoso');
                window.location.href = 'index.html';
            } else {
                alert('Error al iniciar sesión');
            }
        });
    }

    if (nuevaRecetaForm) {
        nuevaRecetaForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const titulo = document.getElementById('titulo').value;
            const ingredientes = document.getElementById('ingredientes').value;
            const instrucciones = document.getElementById('instrucciones').value;
            const imagen = document.getElementById('imagen').value;
            const token = localStorage.getItem('token');

            const response = await fetch('/api/recetas', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ titulo, ingredientes, instrucciones, imagen })
            });

            if (response.ok) {
                alert('Receta agregada con éxito');
                window.location.href = 'index.html';
            } else {
                alert('Error al agregar la receta');
            }
        });
    }
});
