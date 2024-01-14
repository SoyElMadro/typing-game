document.querySelector("#app").innerHTML = `
  <div>
    <h1>⌨ Typing Game 🎮</h1>
    <p>Practica tus habilidades de mecanografía con una cita de Harry Potter 🧙‍♂️.<br> Haz clic en <strong>empezar</strong> para comenzar.</p>
    <p style="font-weight: 600" id="quote"></p>
    <p id="message"></p>
    <div>
      <input style="display: none;" type="text" aria-label="palabra actual" id="typed-value" />
      <button type="button" id="start">Empezar</button>
    </div>
  </div>
`;
