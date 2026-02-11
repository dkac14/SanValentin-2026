// Función encargada de crear un corazón animado en el fondo de la página.
// Cada corazón se genera dinámicamente y se elimina después de un tiempo.
function crearCorazon() {

    // Paso 1: Creamos un nuevo elemento <div> en memoria.
    // Aún no aparece en la página.
    const corazon = document.createElement("div");

    // Paso 2: Agregamos la clase "corazon" para que tome
    // los estilos y la animación definidos en el CSS.
    corazon.classList.add("corazon");

    // Paso 3: Asignamos una posición horizontal aleatoria.
    // Math.random() genera un número entre 0 y 1,
    // al multiplicarlo por 100 usamos el ancho total de la pantalla (vw).
    corazon.style.left = Math.random() * 100 + "vw";

    // Paso 4: Definimos una duración aleatoria para la animación.
    // Esto hace que cada corazón suba a una velocidad diferente,
    // dando un efecto más natural.
    corazon.style.animationDuration = 4 + Math.random() * 4 + "s";

    // Paso 5: Insertamos el corazón dentro del <body>
    // para que aparezca visualmente en la página.
    document.body.appendChild(corazon);

    // Paso 6: Programamos la eliminación del corazón después de 8 segundos.
    // Esto evita que se acumulen muchos elementos en el DOM.
    setTimeout(() => {
        corazon.remove();
    }, 8000);
}

// Llamamos a la función crearCorazon() cada 300 milisegundos.
// Esto genera corazones de forma continua.
setInterval(crearCorazon, 300);
