import '../styles/style.css';

const citas = [
  "La magia está en todas partes si sabes dónde buscar.",
  "No hay nada como quedarse en casa para criarse, y no hay lugar mejor que el hogar.",
  "La felicidad se puede encontrar hasta en los momentos más oscuros, si uno recuerda encender la luz.",
  "No son nuestras habilidades lo que revela lo que somos, sino nuestras elecciones.",
  "Las palabras son, en mi no tan humilde opinión, nuestra fuente más inagotable de magia.",
  "La verdad. Es una cosa hermosa y terrible, y debe ser tratada con precaución.",
  "La felicidad no se encuentra en lugares que no miramos.",
  "La grandeza inspira envidia, la envidia engendra rencor, y el rencor genera mentiras.",
  "La bondad no guarda rencor, pero yo sí. ¡Yo soy el Señor Tenebroso, no un Santa Claus feliz!",
  "La verdad es una cosa hermosa y terrible, y debe ser tratada con precaución.",
  "No somos nuestros fracasos, somos la suma de nuestras acciones.",
  "El tiempo es la única cosa que se puede perder para siempre.",
  "No es bueno dejarse llevar por los sueños y olvidar vivir.",
  "Hasta el más sabio se equivoca a veces.",
  "La muerte es solo el siguiente gran aventura.",
  "La elección entre lo que es correcto y lo que es fácil.",
  "La valentía no es la ausencia de miedo, sino la determinación de seguir adelante a pesar de él."
];

let palabras = [];
let indicePalabra = 0;
let tiempoInicio = Date.now();
const elementoCita = document.getElementById('quote');
const elementoMensaje = document.getElementById('message');
const elementoValorEscrito = document.getElementById('typed-value');
const elementoInicio = document.getElementById('start');

elementoInicio.addEventListener('click', () => {
  document.querySelector("p").style.display = "none";
  elementoInicio.style.display = "none";
  elementoCita.style.display = "inline-block";

  const indiceCita = Math.floor(Math.random() * citas.length);
  const cita = citas[indiceCita];
  palabras = cita.split(' ');
  indicePalabra = 0;

  const palabrasConSpan = palabras.map(palabra => {
    return `<span>${palabra} </span>`;
  });
  elementoCita.innerHTML = palabrasConSpan.join('');
  elementoCita.childNodes[0].className = 'highlight';
  elementoCita.childNodes[0].style.color = '#222';
  elementoMensaje.innerText = '';

  elementoValorEscrito.style.display = 'inline-block';

  elementoValorEscrito.value = '';
  elementoValorEscrito.focus();

  tiempoInicio = new Date().getTime();
});

elementoValorEscrito.addEventListener('input', () => {
  const palabraActual = palabras[indicePalabra];
  const valorEscrito = elementoValorEscrito.value;

  if (valorEscrito === palabraActual && indicePalabra === palabras.length - 1) {
    const tiempoTranscurrido = new Date().getTime() - tiempoInicio;
    const mensaje = `<h2>MUY BIEN!</h2> Has terminado en ${tiempoTranscurrido / 1000} segundos.`;
    elementoMensaje.innerHTML = mensaje;
    elementoValorEscrito.style.display = "none";
    elementoCita.style.display = "none";
    elementoInicio.innerText = "Volver a jugar";
    elementoInicio.style.display = "inline-block";
  } else if (valorEscrito.endsWith(' ') && valorEscrito.trim() === palabraActual) {
    elementoValorEscrito.value = '';
    indicePalabra++;
    for (const elementoPalabra of elementoCita.childNodes) {
      elementoPalabra.className = '';
    }
    elementoCita.childNodes[indicePalabra].className = 'highlight';
    elementoCita.childNodes[indicePalabra].style.color = '#222';
  } else if (palabraActual.startsWith(valorEscrito)) {
    elementoValorEscrito.className = '';
  } else {
    elementoValorEscrito.className = 'error';
  }
});
