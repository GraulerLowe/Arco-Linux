const totalSteps = 5;
const mensajes = [
  "Este examen fue abducido por alienígenas aburridos de tanta perfección.",
  "Los aliens te han regalado resiliencia épica.",
  "¡Felicidades! Has desbloqueado el nivel de paz interior."
];

// Muestra/oculta pasos
function showStep(n) {
  document.getElementById(`step-${n - 1}`)?.classList.add('hidden');
  document.getElementById(`step-${n}`)?.classList.remove('hidden');
}

// Botones pasos 1–3
for (let i = 1; i < totalSteps; i++) {
  document.getElementById(`btn-${i}`)
    .addEventListener('click', () => showStep(i + 1));
}

// Botón “Leer nota” (btn-4)
document.getElementById('btn-4').addEventListener('click', () => {
  const idx = Math.floor(Math.random() * mensajes.length);

  // Inyecta texto en el párrafo de la nota
  document.querySelector('#step-5 .nota p').textContent = mensajes[idx];

  // Revela la paso 5
  showStep(5);

  // Muestra la imagen de la nota
  const img = document.getElementById('nota-img');
  img.classList.remove('hidden');
  img.classList.add('visible');
});
