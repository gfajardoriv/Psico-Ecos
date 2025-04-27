const breathCircle = document.getElementById('breathCircle'); // Referencia al círculo
  const breathText = document.getElementById('breathText'); // Referencia al texto
  const startBreathing = document.getElementById('startBreathing'); // Referencia al botón
  let breathingInterval; // Variable para guardar el intervalo del ejercicio

  function startExercise() { // Función que inicia el ciclo de respiración
    breathText.textContent = "Inhala..."; // Muestra texto de Inhalar
    breathCircle.style.transform = "scale(1.5)"; // Agranda el círculo
    
    breathingInterval = setInterval(() => { // Crea un intervalo que se repite
      if (breathText.textContent === "Inhala...") { // Si el texto es "Inhala"
        breathText.textContent = "Exhala..."; // Cambia a "Exhala"
        breathCircle.style.transform = "scale(1)"; // Reduce el círculo
      } else {
        breathText.textContent = "Inhala..."; // Cambia a "Inhala"
        breathCircle.style.transform = "scale(1.5)"; // Agranda el círculo
      }
    }, 6000); // Cada 6 segundos (3 inhalar + 3 exhalar)
  }

  startBreathing.addEventListener('click', () => { // Evento al hacer click en el botón
    if (!breathingInterval) { // Si no hay ejercicio activo
      startExercise(); // Inicia el ejercicio
      startBreathing.textContent = "Detener Ejercicio"; // Cambia el texto del botón
    } else {
      clearInterval(breathingInterval); // Detiene el ejercicio
      breathingInterval = null; // Limpia la variable
      breathText.textContent = ""; // Limpia el texto
      breathCircle.style.transform = "scale(1)"; // Restaura el círculo
      startBreathing.textContent = "Iniciar Ejercicio"; // Restaura el botón
    }
  });