document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".botonRI");

    boton.addEventListener("click", (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const inputs = document.querySelectorAll("input, select");
        let formValido = true;

        // Limpiar mensajes de error previos
        document.querySelectorAll(".error-message").forEach((error) => error.remove());

        inputs.forEach(input => {
            // Ignorar los campos de botón y checkbox
            if (input.type !== "checkbox" && input.type !== "button" && input.type !== "submit") {
                if (input.value.trim() === "" || input.value === "Selecciona una carrera") {
                    formValido = false;

                    // Marcar el campo con borde rojo
                    input.style.border = "2px solid red";

                    // Mostrar mensaje de error
                    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("error-message")) {
                        const mensajeError = document.createElement("span");
                        mensajeError.classList.add("error-message");
                        mensajeError.style.color = "red";
                        mensajeError.style.fontSize = "12px";
                        mensajeError.textContent = "Este campo es obligatorio.";
                        input.parentNode.insertBefore(mensajeError, input.nextSibling);
                    }
                } else {
                    // Restablecer el estilo y eliminar mensaje de error si está completo
                    input.style.border = "";
                }
            }
        });

        // Validar Número de Control
        const numeroControl = document.querySelector("input[placeholder='Ingresa tu número de control']");
        const numeroControlRegex = /^\d{8}$/; // Número de control con exactamente 8 dígitos

        if (numeroControl && !numeroControlRegex.test(numeroControl.value.trim())) {
            formValido = false;
            numeroControl.style.border = "2px solid red";

            if (!numeroControl.nextElementSibling || !numeroControl.nextElementSibling.classList.contains("error-message")) {
                const mensajeError = document.createElement("span");
                mensajeError.classList.add("error-message");
                mensajeError.style.color = "red";
                mensajeError.style.fontSize = "12px";
                mensajeError.textContent = "El número de control debe tener 8 dígitos, No debe de contener letras.";
                numeroControl.parentNode.insertBefore(mensajeError, numeroControl.nextSibling);
            }
        }

        if (formValido) {
            alert("Formulario completado correctamente.");
            // Aquí puedes agregar la lógica para enviar el formulario
        } else {
            alert("Por favor, completa todos los campos marcados.");
        }
    });
});
