// Función para mostrar el reloj
function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    const fecha = new Date();
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

// Actualiza el reloj cada segundo
setInterval(actualizarReloj, 1000);
actualizarReloj(); // Llama inmediatamente para no esperar 1 segundo

// Traducciones para los diferentes idiomas
const traducciones = {
    es: {
        titulo: "Alquiber Renting Flexible",
        contenido: "Bienvenidos a la gestión de vehículos",
        vehiculos: "Vehículos",
        orden: "Orden",
        idioma: "Idioma:",
        mecanico: "Mecánico:",
        reparacion: "Reparación:",
        matricula: "Matrícula:",
        kilometros: "Kilómetros:",
        guardar: "Guardar",
        descargarPdf: "Descargar PDF Mantenimiento",
        borrarRegistros: "Borrar Registros",
        camaraTitulo: "Gestión de Cámara",
        activarCamara: "Activar Cámara",
        cambiarCamara: "Cambiar Cámara",
        desactivarCamara: "Desactivar Cámara",
        tomarFoto: "Tomar Foto",
        footer: "© 2025 Alquiber Renting Flexible. Todos los derechos reservados."
    },
    en: {
        titulo: "Alquiber Flexible Renting",
        contenido: "Welcome to vehicle management",
        vehiculos: "Vehicles",
        orden: "Order",
        idioma: "Language:",
         mecanico: "Mechanic:",
        reparacion: "Repair:",
        matricula: "License Plate:",
        kilometros: "Kilometers:",
        guardar: "Save",
        descargarPdf: "Download Maintenance PDF",
        borrarRegistros: "Delete Records",
        camaraTitulo: "Camera Management",
        activarCamara: "Activate Camera",
        cambiarCamara: "Switch Camera",
        desactivarCamara: "Deactivate Camera",
        tomarFoto: "Take Photo",
        footer: "© 2025 Alquiber Flexible Renting. All rights reserved."
    },
    it: {
        titulo: "Gestione Officina - Alquiber Noleggio Flessibile",
        contenido: "Benvenuti nella gestione dei veicoli",
        vehiculos: "Veicoli",
        orden: "Ordine",
        idioma: "Lingua:",
        buscar: "Cerca",
        descripcion: "Inserisci la targa del veicolo per visualizzare le informazioni:",
    },
};

// Función para cambiar el idioma
function cambiarIdioma() {
    const idiomaSeleccionado = document.getElementById("idioma-selector").value;

    // Cambiar el título de la página
    document.title = traducciones[idiomaSeleccionado].titulo;

    // Cambiar el contenido del encabezado
    const titulo = document.getElementById("titulo");
    if (titulo) titulo.textContent = traducciones[idiomaSeleccionado].contenido;

    // Cambiar los enlaces de navegación
    const vehiculos = document.getElementById("vehiculos");
    if (vehiculos) vehiculos.textContent = traducciones[idiomaSeleccionado].vehiculos;

    const vehiculosGrid = document.getElementById("VehiculosGrid");
    if (vehiculosGrid) vehiculosGrid.textContent = traducciones[idiomaSeleccionado].orden;

    // Cambiar el texto del selector de idioma
    const idiomaLabel = document.querySelector("label[for='idioma-selector']");
    if (idiomaLabel) idiomaLabel.textContent = traducciones[idiomaSeleccionado].idioma;

    // Cambiar los textos del formulario de mantenimiento
    const mecanicoLabel = document.getElementById("label-mecanico");
    if (mecanicoLabel) mecanicoLabel.textContent = traducciones[idiomaSeleccionado].mecanico;

    const reparacionLabel = document.getElementById("label-reparacion");
    if (reparacionLabel) reparacionLabel.textContent = traducciones[idiomaSeleccionado].reparacion;

    const matriculaLabel = document.getElementById("label-matricula");
    if (matriculaLabel) matriculaLabel.textContent = traducciones[idiomaSeleccionado].matricula;

    const kilometrosLabel = document.getElementById("label-km");
    if (kilometrosLabel) kilometrosLabel.textContent = traducciones[idiomaSeleccionado].kilometros;

    // Cambiar los textos de los botones
    const guardarBtn = document.getElementById("guardar-btn");
    if (guardarBtn) guardarBtn.textContent = traducciones[idiomaSeleccionado].guardar;

    const descargarPdfBtn = document.getElementById("descargar-pdf");
    if (descargarPdfBtn) descargarPdfBtn.textContent = traducciones[idiomaSeleccionado].descargarPdf;

    const borrarRegistrosBtn = document.getElementById("borrar-registros");
    if (borrarRegistrosBtn) borrarRegistrosBtn.textContent = traducciones[idiomaSeleccionado].borrarRegistros;

    // Cambiar los textos de la sección de cámara
    const camaraTitulo = document.getElementById("camara-titulo");
    if (camaraTitulo) camaraTitulo.textContent = traducciones[idiomaSeleccionado].camaraTitulo;

    const activarCamaraBtn = document.getElementById("activar-camara");
    if (activarCamaraBtn) activarCamaraBtn.textContent = traducciones[idiomaSeleccionado].activarCamara;

    const cambiarCamaraBtn = document.getElementById("cambiar-camara");
    if (cambiarCamaraBtn) cambiarCamaraBtn.textContent = traducciones[idiomaSeleccionado].cambiarCamara;

    const desactivarCamaraBtn = document.getElementById("desactivar-camara");
    if (desactivarCamaraBtn) desactivarCamaraBtn.textContent = traducciones[idiomaSeleccionado].desactivarCamara;

    const tomarFotoBtn = document.getElementById("tomar-foto");
    if (tomarFotoBtn) tomarFotoBtn.textContent = traducciones[idiomaSeleccionado].tomarFoto;

    // Cambiar el texto del footer
    const footerText = document.getElementById("footer-text");
    if (footerText) footerText.textContent = traducciones[idiomaSeleccionado].footer;

    // Guardar el idioma seleccionado en localStorage para mantenerlo en otras páginas
    localStorage.setItem("idioma", idiomaSeleccionado);
}

// Función para cargar el idioma al cargar la página
function cargarIdioma() {
    const idiomaGuardado = localStorage.getItem("idioma") || "es"; // Idioma predeterminado: español
    document.getElementById("idioma-selector").value = idiomaGuardado;
    cambiarIdioma();
}

// Ejecutar la función al cargar la página
window.onload = cargarIdioma;

// Función para mostrar las notas de mantenimiento
function mostrarNotasReparacion(matricula) {
    const vehiculo = vehiculos[matricula];
    const historialElement = document.getElementById('historialMantenimiento');

    historialElement.innerHTML = vehiculo?.notasReparacion?.length
        ? vehiculo.notasReparacion.map(nota => `
            <li>
                <p><strong>${nota.fecha}</strong></p>
                <p>${nota.descripcion}</p>
            </li>
        `).join('')
        : '<p>No hay reparaciones registradas para este vehículo.</p>';
}

const registros = JSON.parse(localStorage.getItem("mantenimientos")) || [];

// Función para guardar un registro
document.getElementById("mantenimiento-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que el formulario se recargue

    const mecanico = document.getElementById("mecanico").value;
    const reparacion = document.getElementById("reparacion").value;
    const matricula = document.getElementById("matricula").value;
    const km = document.getElementById("km").value;

    if (!mecanico || !reparacion || !matricula || !km) {
        alert("Por favor, completa todos los campos antes de guardar.");
        return;
    }

    const fechaHora = new Date().toLocaleString();

    // Agregar nuevo registro al array
    registros.push({ mecanico, reparacion, matricula, km, fechaHora });

    // Guardar en localStorage
    localStorage.setItem("mantenimientos", JSON.stringify(registros));

    // Limpiar el formulario
    document.getElementById("mantenimiento-form").reset();

    alert("Registro guardado correctamente.");
});

// Función para generar y descargar el PDF
document.getElementById("descargar-pdf").addEventListener("click", () => {
    const mantenimientos = JSON.parse(localStorage.getItem("mantenimientos")) || [];

    if (mantenimientos.length === 0) {
        alert("No hay mantenimientos registrados para descargar.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Registro de Mantenimientos", 10, 10);

    let y = 20; // Posición inicial en el PDF

    mantenimientos.forEach((mantenimiento, index) => {
        doc.setFontSize(12);
        doc.text(`Mantenimiento ${index + 1}:`, 10, y);
        y += 10;
        doc.text(`Fecha y Hora: ${mantenimiento.fechaHora}`, 10, y);
        y += 10;
        doc.text(`Matrícula: ${mantenimiento.matricula}`, 10, y);
        y += 10;
        doc.text(`Mecánico: ${mantenimiento.mecanico}`, 10, y);
        y += 10;
        doc.text(`Descripción: ${mantenimiento.reparacion}`, 10, y);
        y += 20; // Espacio entre registros
    });

    doc.save("registro_mantenimientos.pdf");
});

let cameraStream = null;
let currentDeviceIndex = 0;
let devices = [];

// Función para activar la cámara
async function activarCamara() {
    try {
        devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');

        if (videoDevices.length === 0) {
            alert("No se encontraron cámaras en este dispositivo.");
            return;
        }

        const constraints = {
            video: {
                deviceId: videoDevices[currentDeviceIndex].deviceId
            }
        };

        cameraStream = await navigator.mediaDevices.getUserMedia(constraints);
        const video = document.getElementById('video-camara');
        video.srcObject = cameraStream;
    } catch (error) {
        console.error("Error al activar la cámara:", error);
        alert("No se pudo activar la cámara.");
    }
}

// Función para cambiar de cámara
async function cambiarCamara() {
    if (!devices || devices.length === 0) {
        alert("No hay cámaras disponibles para cambiar.");
        return;
    }

    currentDeviceIndex = (currentDeviceIndex + 1) % devices.filter(device => device.kind === 'videoinput').length;

    if (cameraStream) {
        const tracks = cameraStream.getTracks();
        tracks.forEach(track => track.stop());
    }

    activarCamara();
}

// Función para tomar una foto
function tomarFoto() {
    const video = document.getElementById('video-camara');
    const canvas = document.getElementById('canvas');
    const foto = document.getElementById('foto');

    canvas.style.display = "block";
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL('image/png');
    foto.src = dataURL;
    foto.style.display = "block";

    alert("Foto tomada con éxito.");
}

// Event listeners para los botones
document.getElementById('activar-camara').addEventListener('click', activarCamara);
document.getElementById('cambiar-camara').addEventListener('click', cambiarCamara);
document.getElementById('tomar-foto').addEventListener('click', tomarFoto);

<script src="main.js"></script>
