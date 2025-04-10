const traducciones={
    es: {
        titulo: "Alquiber Renting Flexible",
        contenido: "TALLER ALQUINBER ITALIA",
        idioma: "Idioma:",
        mecanico: "Mecánico:",
        reparacion: "Reparación:",
        matricula: "Matrícula:",
        kilometros: "Kilómetros:",
        guardar: "Guardar",
        descargarPdf: "Descargar PDF Mantenimiento",
        camaraTitulo: "Gestión de Cámara",
        activarCamara: "Activar Cámara",
        cambiarCamara: "Cambiar Cámara",
        desactivarCamara: "Desactivar Cámara",
        tomarFoto: "Tomar Foto",
        footer: "© 2025 Alquiber Renting Flexible. Todos los derechos reservados."
    },
    en: {
        titulo: "Alquiber Flexible Renting",
        contenido: "ALQUIBER ITALY WORKSHOP",
        idioma: "Language:",
        mecanico: "Mechanic:",
        reparacion: "Repair:",
        matricula: "License Plate:",
        kilometros: "Kilometers:",
        guardar: "Save",
        descargarPdf: "Download Maintenance PDF",
        camaraTitulo: "Camera Management",
        activarCamara: "Activate Camera",
        cambiarCamara: "Switch Camera",
        desactivarCamara: "Deactivate Camera",
        tomarFoto: "Take Photo",
        footer: "© 2025 Alquiber Flexible Renting. All rights reserved."
    },
    it: {
        titulo: "Alquiber Noleggio Flessibile",
        contenido: "OFFICINA ALQUIBER ITALIA",
        idioma: "Lingua:",
        mecanico: "Meccanico:",
        reparacion: "Riparazione:",
        matricula: "Targa:",
        kilometros: "Chilometri:",
        guardar: "Salva",
        descargarPdf: "Scarica PDF Manutenzione",
        camaraTitulo: "Gestione Fotocamera",
        activarCamara: "Attiva Fotocamera",
        cambiarCamara: "Cambia Fotocamera",
        desactivarCamara: "Disattiva Fotocamera",
        tomarFoto: "Scatta Foto",
        footer: "© 2025 Alquiber Noleggio Flessibile. Tutti i diritti riservati."
    }
};

document.getElementById('idioma-selector').addEventListener('change', (e) => {
    const idioma = e.target.value;
    document.querySelectorAll('.traducible').forEach(el => {
        const key = el.getAttribute('data-key');
        el.textContent = traducciones[idioma][key] || el.textContent;
    });
});

    
