//Funcion encargada para hacer efecto "libro" en una imagen.
// Seleccionamos la imagen principal del mini-libro usando su id.
// Esta será la única imagen que cambia al hacer clic.
const imagen = document.getElementById("mini-libro");

// Arreglo que contiene las rutas de todas las imágenes
// que formarán parte del mini-libro.
const imagenes = [
  "img/miniLibro1.jpeg",
  "img/miniLibro2.jpeg",
  "img/miniLibro3.jpeg"
];

// Variable que indica qué imagen se está mostrando actualmente.
// Comienza en 0 porque los arreglos empiezan desde la posición 0.
let indice = 0;

// Escuchamos el evento "click" sobre la imagen.
// Cada vez que el usuario haga clic, se cambiará a la siguiente imagen.
imagen.addEventListener("click", () => {

    // Paso 1: Reducimos la opacidad para que la imagen desaparezca suavemente.
    // Esto funciona junto con la transición definida en el CSS.
    imagen.style.opacity = 0;

    // Paso 2: Esperamos a que termine la transición (500 ms)
    // antes de cambiar la imagen.
    setTimeout(() => {

        // Avanzamos a la siguiente imagen del arreglo.
        indice++;

        // Paso 3: Validamos si el índice supera la cantidad de imágenes.
        // Si llegamos al final del arreglo, volvemos a la primera imagen
        // para crear un ciclo infinito.
        if (indice >= imagenes.length) {
            indice = 0;
        }

        // Paso 4: Cambiamos la imagen actual por la nueva.
        imagen.src = imagenes[indice];

        // Paso 5: Volvemos a mostrar la imagen ajustando la opacidad a 1.
        imagen.style.opacity = 1;

    }, 500);
});
