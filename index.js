document.getElementById('mantenimiento-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const mecanico = document.getElementById('mecanico').value;
    const reparacion = document.getElementById('reparacion').value;
    const matricula = document.getElementById('matricula').value;
    const km = document.getElementById('km').value;

    const historial = document.getElementById('historialMantenimiento');
    const entrada = document.createElement('li');
    entrada.textContent = `Mecánico: ${mecanico}, Reparación: ${reparacion}, Matrícula: ${matricula}, KM: ${km}`;
    historial.appendChild(entrada);

    document.getElementById('mantenimiento-form').reset();
});

document.getElementById('descargar-pdf').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const items = document.querySelectorAll('#historialMantenimiento li');
    items.forEach((item, index) => {
        doc.text(item.textContent, 10, 10 + index * 10);
    });

    doc.save('mantenimiento.pdf');
});

// Cámara
let stream;
let front = false;

async function iniciarCamara() {
    const dispositivos = await navigator.mediaDevices.enumerateDevices();
    const camaras = dispositivos.filter(device => device.kind === 'videoinput');
    const constraints = {
        video: {
            deviceId: camaras[front ? 1 : 0]?.deviceId
        }
    };

    stream = await navigator.mediaDevices.getUserMedia(constraints);
    document.getElementById('video-camara').srcObject = stream;
}

document.getElementById('activar-camara').onclick = iniciarCamara;

document.getElementById('cambiar-camara').onclick = () => {
    front = !front;
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
    iniciarCamara();
};

document.getElementById('desactivar-camara').onclick = () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
};

document.getElementById('tomar-foto').onclick = () => {
    const video = document.getElementById('video-camara');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0);
    const dataURL = canvas.toDataURL('image/png');
    document.getElementById('foto').src = dataURL;
    document.getElementById('foto').style.display = 'block';
};
