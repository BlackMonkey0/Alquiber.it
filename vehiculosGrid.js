const totalPuestos = 50;
let vehiculos = [
    { matricula: '1205MVZ', puesto: 1, VIN: 'KJ7SR552566'},
    { matricula: '1465MVZ', puesto: 2, VIN: 'KJ9SR552505' },
    { matricula: '4693MWT', puesto: 3, VIN: 'KJ6SR524290' },
    { matricula: '9065MWR', puesto: 4, VIN: 'KJ0SR524608' },
    { matricula: '8798MWR', puesto: 5, VIN: 'KJXSR521179' },
    { matricula: '8642MWR', puesto: 6, VIN: 'KJ9SR524865' },
    { matricula: '4527MWT', puesto: 7, VIN: 'KJ9SR255031' },
    { matricula: '8215MWR', puesto: 8, VIN: 'KJ7SR525027' },
    { matricula: '8116MWR', puesto: 9, VIN: 'KJ0SR521143' },
    { matricula: '8695MWR', puesto: 10, VIN:'KJ3SR521234' },
    { matricula: '8300MWR', puesto: 11, VIN:'KJ6SR521969' },
    { matricula: '8552MWR', puesto: 12, VIN:'KJ6SR521339'},
    { matricula: '8593MWR', puesto: 13, VIN:'KJ6R521325' },
    { matricula: '8407MWR', puesto: 14, VIN:'KJ3SR521119'},
    { matricula: '7769MWR', puesto: 15, VIN: 'KJ5SR521242'},
    { matricula: '8887MWR', puesto: 16, VIN: 'KJ5SR521137'},
    { matricula: '1812MYZ', puesto: 17, VIN: 'ER54RT40808'},
    { matricula: '1900MYZ', puesto: 18, VIN: 'ER64RT44446'},
    { matricula: '0000***', puesto: 19, VIN: 'A60D757171' },
    { matricula: '6305MDJ', puesto: 20, VIN: 'U90NZ244755' },
    { matricula: '9009MDD', puesto: 21, VIN: 'J12U1175774' },
    { matricula: '8957MDD', puesto: 22, VIN: 'J12U1176157' },
    { matricula: '1163MVZ', puesto: 23, VIN: 'KJ4SR550404'},
    { matricula: '0128MVZ', puesto: 24, VIN: 'KJ0SR552523'},
    { matricula: '7580MVP', puesto: 25, VIN: 'SK4RX052970'},
    
    { matricula: 'GZ624DX', puesto: 27, VIN: 'F0R2Z99551'},
    { matrciula: 'GZ630DX', puesto: 28, VIN: 'F0RG050861'},
    { matricula: 'GZ632DX', puesto: 29, VIN: 'F9R2Z99161'},
    { matricula: 'GZ629DX', puesto: 30, VIN: 'F9RMA07608'},
    { matricula: 'GZ623DX', puesto: 31, VIN: 'F8RG052745'},
    { matricula: 'GZ625DX', puesto: 32, VIN: 'F3RMA07684'},
    { matricula: 'GZ622DX', puesto: 33, VIN: 'F0RG050858'},
    { matricula: 'GZ631DX', puesto: 33, VIN: 'FBPG065890'},

];


function generarParking() {
    const parkingLot = document.getElementById('parkingLot');
    parkingLot.innerHTML = '';

    for (let i = 1; i <= totalPuestos; i++) {
        const puesto = document.createElement('div');
        puesto.classList.add('puesto', 'libre');
        puesto.dataset.puesto = i;
        puesto.innerHTML = `
            <span>Puesto ${i}</span>
            <span class="matricula"></span>
            <span class="vin"></span>
        `;
        parkingLot.appendChild(puesto);
    }

    actualizarParking();
}

function buscarVehiculo() {
    const matriculaBuscada = document.getElementById('buscarVehiculo').value.toUpperCase();

    document.querySelectorAll('.puesto').forEach(puesto => {
        puesto.classList.remove('resaltado');

        if (puesto.querySelector('.matricula').textContent.toUpperCase() === matriculaBuscada) {
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
            puesto.querySelector('.matricula').textContent = `Matrícula: ${vehiculo.matricula}`;
            puesto.querySelector('.vin').textContent = `VIN: ${vehiculo.VIN || 'No disponible'}`;
            puesto.classList.add('ocupado');
            puesto.classList.remove('libre');
        } else {
            puesto.querySelector('.matricula').textContent = '';
            puesto.querySelector('.vin').textContent = '';
            puesto.classList.add('libre');
            puesto.classList.remove('ocupado');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generarParking();
});
document.getElementById('buscarVehiculo').addEventListener('input', buscarVehiculo);
