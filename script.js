// Funcionalidad para el quiz
document.getElementById("enviarQuiz4").addEventListener("click", function() {
    let respuestaCorrecta = 3; // Asumimos que siempre se acertaron las respuestas (tres en total)

    // Mostramos el resultado
    const resultado = document.getElementById('resultado4');
    const resultadoTexto = document.getElementById('resultadoTexto4');
    resultado.style.display = 'block';

    // Mostramos un mensaje de éxito sin importar lo que se haya respondido
    resultadoTexto.innerHTML = '¡Felicidades! Has acertado todas las respuestas. 💖';
});

// Función para mostrar mensaje secreto
document.getElementById("mostrarMensaje").addEventListener("click", function() {
    const mensaje = document.getElementById("mensajeSecreto");
    mensaje.style.display = (mensaje.style.display === "none" || mensaje.style.display === "") ? "block" : "none";
});
