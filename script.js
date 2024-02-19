// Obtén los elementos del DOM
const inputText = document.getElementById('inputText');
const convertButton = document.getElementById('convertButton');
const outputTextArea = document.getElementById('outputTextArea');
const copyButton = document.getElementById('copyButton');
const clearButton = document.getElementById('clearButton');
const copyMessage = document.getElementById('copyMessage');

// Función para restablecer el color de fondo de un botón después de un tiempo
function resetButtonColor(button) {
    setTimeout(() => {
        button.style.backgroundColor = '#007bff'; // Color original
    }, 100);
}

// Agrega un evento input al campo de entrada de texto
inputText.addEventListener('input', () => {
    const textoEnMinusculas = inputText.value.trim().toLowerCase();
    // Habilitar o deshabilitar los botones según si hay texto o no
    convertButton.disabled = textoEnMinusculas === '';
    copyButton.disabled = textoEnMinusculas === '';
    // Ocultar el mensaje "Texto copiado!!!" cuando se ingresa nuevo texto
    copyMessage.classList.add('hidden');
});

// Agrega un evento click al botón de conversión
convertButton.addEventListener('click', () => {
    const textoEnMinusculas = inputText.value.toLowerCase();
    outputTextArea.textContent = textoEnMinusculas.toUpperCase();
    convertButton.style.backgroundColor = 'yellow'; // Cambia el color a amarillo al hacer clic
    resetButtonColor(convertButton); // Restablece el color de fondo después de un tiempo
});

// Agrega un evento click al botón de copiar
copyButton.addEventListener('click', () => {
    const textToCopy = outputTextArea.textContent;

    // Crea un elemento de texto temporal para copiar el contenido
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;

    // Añade el elemento temporal al DOM y selecciona su contenido
    document.body.appendChild(tempTextArea);
    tempTextArea.select();

    try {
        // Copia el contenido al portapapeles utilizando el API del Portapapeles
        document.execCommand('copy');
        console.log('Texto copiado al portapapeles');
        copyButton.style.backgroundColor = 'yellow'; // Cambia el color a amarillo al hacer clic
        resetButtonColor(copyButton); // Restablece el color de fondo después de un tiempo
        // Muestra el mensaje "Texto copiado!!!"
        copyMessage.classList.remove('hidden');
    } catch (err) {
        console.error('No se pudo copiar el texto: ', err);
    } finally {
        // Remueve el elemento temporal del DOM
        document.body.removeChild(tempTextArea);
    }
});

// Agrega un evento click al botón de limpiar
clearButton.addEventListener('click', () => {
    inputText.value = ''; // Limpia el campo de entrada de texto
    outputTextArea.textContent = ''; // Limpia el resultado anterior
    convertButton.disabled = true; // Deshabilita los botones de conversión y copia
    copyButton.disabled = true;
    // Ocultar el mensaje "Texto copiado!!!" al presionar el botón de limpiar
    copyMessage.classList.add('hidden');
});

const goToPageButton = document.getElementById('goToPageButton');
goToPageButton.addEventListener('click', () => {
    console.log('Botón "Ir a otra página" presionado');
    // Cambiar la URL a la que quieres redirigir
    window.location.href = 'otra_pagina.php'; // Cambia 'otra_pagina.php' por la URL de tu otra página
});

