
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript cargado correctamente 🚀");

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
        });
    }
});