document.querySelector("form").addEventListener("submit", function(event) {
    const carrera = document.getElementById("carrera").value;
    if (carrera === "") {
        alert("Por favor selecciona una carrera antes de continuar.");
        event.preventDefault(); // Esto evita que se envíe el formulario
    } else {
        alert("Formulario enviado correctamente.");
    }
});