// miScript.js
$(function() {
    try {
        console.log("DOM completamente cargado y analizado");

        // Evento mejorado con delegación
        $(document).on('click', 'header', function() {
            alert("Has hecho clic en el encabezado!"); // Alert al hacer clic
            console.log("Interacción detectada en header");
        });

        // Inicialización modular
        initComponents();

    } catch (error) {
        console.error("Error de inicialización:", error);
    }
});

function initComponents() {
    // Lógica modularizada
    console.log("Componentes inicializados.");
}
