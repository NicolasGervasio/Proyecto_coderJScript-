function login() {
    // Obtener valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validar credenciales 
    if (username === "Nicolas" && password === "12345678") {
        // Credenciales válidas, redirigir al usuario a otra página
        document.getElementById("loginMessage").innerText = "¡Login exitoso!";
        window.location.href = "./simuladordepresupuesto.html"; // Cambia la URL según tu estructura de archivos
    } else {
        // Credenciales incorrectas, mostrar un mensaje de error
        document.getElementById("loginMessage").innerText = "Credenciales incorrectas. Inténtalo de nuevo.";
    }
}

