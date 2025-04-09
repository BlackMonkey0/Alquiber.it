const totalPuestos = 50;
let vehiculos = [
    {matricula: '7523MVP', puesto: 1},
    {matricula: '7488MVP', puesto: 2},
    {matricula: '7580MVP', puesto: 3},
    {matricula: '7639MVP', puesto: 4},
    {matricula: '7462MVP', puesto: 5},
    {matricula: '3133MVR', puesto: 6},
    {matricula: 'GY965PV', puesto: 7},
];

function generarParking() {
    const parkingLot = document.getElementById('parkingLot');
    parkingLot.innerHTML = '';
    for (let i = 1; i <= totalPuestos; i++) {
        const puesto = document.createElement('div');
        puesto.classList.add('puesto', 'libre');
        puesto.dataset.puesto = i;
        puesto.innerHTML = `<span>Puesto ${i}</span><br><span class="matricula"></span>`;
        parkingLot.appendChild(puesto);
    }
    actualizarParking(
        
    ); // Llamar a actualizarParking después de generar el estacionamiento
}

function buscarVehiculo() {
    const matriculaBuscada = document.getElementById('buscarVehiculo').value.toUpperCase();
    document.querySelectorAll('.puesto').forEach(puesto => {
        puesto.classList.remove('resaltado');
        if (puesto.querySelector('.matricula').textContent === matriculaBuscada) {
            puesto.classList.add('resaltado');
        }
    });
}

function asignarVehiculo(matricula, puesto) {
    vehiculos.push({ matricula, puesto });
    actualizarParking();
}

function actualizarParking() {
    document.querySelectorAll('.puesto').forEach(puesto => {
        const numPuesto = puesto.dataset.puesto;
        const vehiculo = vehiculos.find(v => v.puesto == numPuesto);
        if (vehiculo) {
            puesto.querySelector('.matricula').textContent = vehiculo.matricula;
            puesto.classList.add('ocupado');
            puesto.classList.remove('libre');
        } else {
            puesto.querySelector('.matricula').textContent = '';
            puesto.classList.add('libre');
            puesto.classList.remove('ocupado');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generarParking(); // Generar el estacionamiento al cargar la página
});