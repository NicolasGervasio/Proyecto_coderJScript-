function login() {
    // Obtener valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validar credenciales 
    if (username === "Nicolas" && password === "12345678") {
        //  las credenciales son correctas 
        Swal.fire({
            icon: 'success',
            title: '¡Login exitoso!',
            text: 'Bienvenido',
        }).then((result) => {
            // Redirige a la página después de hacer clic en "OK"
            if (result.isConfirmed) {
                window.location.href = "./simuladordepresupuesto.html";
            }
        });
    } else {
        // mostrar un mensaje de error
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Credenciales incorrectas. Inténtalo de nuevo.',
        });
    }
}