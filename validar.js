function validarNumeroControl() {
    
    const numeroControl = document.getElementById('numeroControl').value;
    const mensaje = document.getElementById('mensaje');
    
    
    if (numeroControl.length !== 8) {
        mensaje.textContent = "El número debe tener 8 dígitos";
        mensaje.className = 'invalido';
        return;
    }

    
    const parte1 = numeroControl.substring(0, 2);  
    const parte2 = numeroControl.substring(2, 4);  
    const parte3 = numeroControl.substring(4, 8);  

    
    if (parte1 < 18 || parte1 > 24) {
        mensaje.textContent = "Los primeros dos dígitos deben estar entre 18 y 24.";
        mensaje.className = 'invalido';
        return;
    }

    
    if (parte2 !== '84') {
        mensaje.textContent = "Los segundos dos dígitos deben ser 84.";
        mensaje.className = 'invalido';
        return;
    }

    
    if (parte3.length !== 4 || isNaN(parte3)) {
        mensaje.textContent = "Los últimos cuatro dígitos deben ser un número válido de 4 dígitos.";
        mensaje.className = 'invalido';
        return;
    }

    
    mensaje.textContent = "Número de control válido.";
    mensaje.className = 'valido';
}