const totalPuestos = 50;
let vehiculos = [
    {matricula: '1205MVZ', puesto: 1},
    {matricula: '1465MVZ', puesto: 2},
    {matricula: '4693MWT', puesto: 3},
    {matricula: '9065MWR', puesto: 4},
    {matricula: '8798MWR', puesto: 5},
    {matricula: '8642MWR', puesto: 6},
    {matricula: '4527MWT', puesto: 7},
    {matricula: '8215MWR', puesto: 8},
    {matricula: '8116MWR', puesto: 9},
    {matricula: '8695MWR', puesto: 10},
    {matricula: '8300MWR', puesto: 11},
    {matricula: '88552MWR',puesto: 12},
    {matricula: '8593MWR', puesto: 13},
    {matricula: '8407MWR', puesto: 14},
    {matricula: '7769MWR', puesto: 15},
    {matricula: '8887MWR', puesto: 16},
    {matricula: '1812MYZ', puesto: 17},
    {matricula: '1900MYZ', puesto: 18},
    {matricula: '0000***', puesto: 19},
    {matricula: '6305MDJ', puesto: 20,}
    {matricula: '9009MDD', puesto: 21},
    {matricula: '8957MDD', puesto: 22},
   
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
