// Selecciona el formulario dentro de la sección de consultas
const form = document.querySelector('#consultas form');

// Selecciona el div donde se mostrará el mensaje de éxito
const mensajeExito = document.getElementById('mensajeExito');

// Agrega un evento cuando el formulario se envía
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue automáticamente

  // Obtiene los valores de los campos
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  // Valida que todos los campos estén llenos
  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor completa todos los campos antes de enviar.'); // Alerta en caso de error
    return; // Sale de la función si hay campos vacíos
  }

  // Si todo está bien, muestra el mensaje dentro de la página
  mensajeExito.textContent = `¡Gracias, ${nombre}! Tu mensaje fue enviado exitosamente.`; // Escribe el texto
  mensajeExito.classList.remove('d-none'); // Muestra el div quitando la clase 'd-none'

  // Limpia el formulario
  form.reset();

  // Después de 5 segundos, oculta el mensaje otra vez
  setTimeout(() => {
    mensajeExito.classList.add('d-none'); // Oculta el mensaje agregando 'd-none'
  }, 5000); // 5000 milisegundos = 5 segundos
});