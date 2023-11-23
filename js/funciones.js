function calcularPrestamo() {
    const monto = parseFloat(document.getElementById("monto").value);
    const interesAnual = parseFloat(document.getElementById("interes").value);
    const plazoAnios = parseInt(document.getElementById("plazo").value);
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.style.backgroundColor = "black";
    
    if (isNaN(monto) || isNaN(interesAnual) || isNaN(plazoAnios) || monto <= 0 || interesAnual <= 0 || plazoAnios <= 0) {
        alert("Por favor, ingrese valores válidos y positivos.");
        return;
    }

    const tasaMensual = (interesAnual / 100) / 12;
    const numeroPagos = plazoAnios * 12;

    const pagoMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -numeroPagos));
    const pagoTotal = pagoMensual * numeroPagos;
    const costoTotal = pagoTotal - monto;

    document.getElementById("pagoMensual").textContent = `$${pagoMensual.toFixed(2)}`;
    document.getElementById("pagoTotal").textContent = `$${pagoTotal.toFixed(2)}`;
    document.getElementById("costoTotal").textContent = `$${costoTotal.toFixed(2)}`;
    document.getElementById("resultado").style.display = "block";

    // Almacenar resultados en localStorage
    const resultados = {
        pagoMensual: pagoMensual.toFixed(2),
        pagoTotal: pagoTotal.toFixed(2),
        costoTotal: costoTotal.toFixed(2)
    };

    // Obtener el historial almacenado
    let historial = JSON.parse(localStorage.getItem("historialPrestamos")) || [];

    // Agregar el nuevo resultado al historial
    historial.push(resultados);

    // Guardar el historial actualizado en localStorage
    localStorage.setItem("historialPrestamos", JSON.stringify(historial));

    // Mostrar el historial en la interfaz
    mostrarHistorial(historial);

    return { pagoMensual, pagoTotal, costoTotal };
}

// Cargar resultados almacenados en localStorage
function cargarResultadosAlmacenados() {
    const resultadosJSON = localStorage.getItem("resultadosPrestamo");

    if (resultadosJSON) {
        const resultados = JSON.parse(resultadosJSON);
        document.getElementById("pagoMensual").textContent = `$${resultados.pagoMensual}`;
        document.getElementById("pagoTotal").textContent = `$${resultados.pagoTotal}`;
        document.getElementById("costoTotal").textContent = `$${resultados.costoTotal}`;
        document.getElementById("resultado").style.display = "block";
    }
}

// Función para mostrar el historial en la interfaz
function mostrarHistorial(historial) {
    const listaHistorial = document.getElementById("listaHistorial");
    listaHistorial.innerHTML = ""; 

    historial.forEach((resultado, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Cálculo ${index + 1}: Pago Total - $${resultado.pagoTotal}`;
        listaHistorial.appendChild(listItem);
    });
}

// Llamar a la función para cargar resultados y el historial al cargar la página
cargarResultadosAlmacenados();
mostrarHistorial(JSON.parse(localStorage.getItem("historialPrestamos")) || []);

function limpiarHistorial() {
    const listaHistorial = document.getElementById("listaHistorial");
    listaHistorial.innerHTML = ""; // Elimina todos los elementos hijos de la lista
}