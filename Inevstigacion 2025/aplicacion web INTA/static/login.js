function validarInicioSesion() {
    var nombre = document.getElementById('name').value.trim();
    var contraseña = document.getElementById('password').value.trim();

    if (nombre === '' || contraseña === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('campos llenos');
    }
}