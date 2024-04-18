// Función para mostrar la descripción del curso seleccionado
function showDescription(course) {
    var descriptions = {
        programacion1: "Este curso cubre los fundamentos de la programación.",
        basededatos1: "Aprende los conceptos básicos de las bases de datos relacionales y SQL.",
        desarrolloweb: "Desarrolla habilidades en el diseño y desarrollo de sitios web interactivos."
    };

    var selectedCourse = descriptions[course];
    var descriptionElement = document.getElementById('courseDescription');
    
    if (selectedCourse) {
        descriptionElement.innerText = selectedCourse;
    } else {
        descriptionElement.innerText = "No se encontró descripción para este curso.";
    }

    // Mostrar la descripción
    descriptionElement.style.display = 'block';
}

// Agregar eventos de clic a los enlaces de los cursos
document.getElementById('programacion1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    showDescription('programacion1');
});

document.getElementById('basededatos1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    showDescription('basededatos1');
});

document.getElementById('desarrolloweb').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    showDescription('desarrolloweb');
});
