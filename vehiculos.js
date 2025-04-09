const vehiculos = {
    "7523MVP": { marca: "VOLKSWAGEN", modelo: "CADDY", 
    año: 2024, combustible: "Diesel", km: 100,
    matriculasVinculadas: ["0", "7523MVP"]},


    "7488MVP": { marca: "VOLKSWAGEN", modelo: "CADDY",
         año: 2024,combustible: "Diesel", km: 100,
         matriculasVinculadas: ["7488MVP", "0"]},


    "7580MVP": { marca: "VOLKSWAGEN", modelo: "CADDY",
         año: 2024, combustible: "Diesel" , km: 100,
         matriculasVinculadas: ["7580MVP", "0"]},


    "7639MVP": { marca: "VOLKSWAGEN", modelo: "CADDY",
         año: 2024, combustible: "Diesel", km: 100, 
          matriculasVinculadas: ["7639MVP", "0"]},


    "7462MVP": { marca: "VOLKSWAGEN", modelo: "CADDY", 
        año: 2024, combustible: "Diesel" , km: 100,
        matriculasVinculadas: ["7462MVP", "GY965PV"]},


    "3133MVR": { marca: "VOLKSWAGEN", modelo: "CADDY", 
        año: 2024, combustible: "Diesel" , km: 100,
        matriculasVinculadas: ["3133MVR", "0"]},


    "GY965PV": {marca:  "VOLKSWAGEN", modelo: "CADDY", 
        año: 2024, combustible: "Diesel" , km: 100,
        matriculasVinculadas: ["GY965PV", "7462MVP"]},


    "7379MVN": { marca: "OPEL", modelo: "MOVANO", 
        año: 2024, combustible: "Diesel" , km: 100,
        matriculasVinculadas: ["7379MVN", "0"]},


    "7386MVN": { marca: "OPEL", modelo: "MOVANO", 
        año: 2024, combustible: "Diesel" , km: 100,
        matriculasVinculadas: ["7386MVN", "GY961PV"]},


    "9265MVK": { marca: "OPEL", modelo: "MOVANO",
         año: 2024, combustible: "Diesel", 
         km: 100, matriculasVinculadas: ["9265MVK", "GY959PV"]},


    "9321MVK": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "9347MVK": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "7795MVW": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "9366MVK": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "6677MVK": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "GY961PV": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "GY959VP": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "GY964PV": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "GY967PV": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "GY960PV": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "GY517VK": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "GY962PV": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "GY963PV": { marca: "VOLKSWAGEN", modelo: "CADDY", año: 2024, combustible: "Diesel"},
    "GY966PV": { marca: "VOLKSWAGEN", modelo: "CADDY", año: 2024, combustible: "Diesel"},
    "GY514VK": { marca: "PEUGEOT", modelo: "BOXER", año: 2024, combustible: "Diesel"},
    "GY516VK": { marca: "PEUGEOT", modelo: "BOXER", año: 2024, combustible: "Diesel"},
    "GY515VK": { marca: "PEUGEOT", modelo: "BOXER", año: 2024, combustible: "Diesel"},
    "GY702VK": { marca: "CITROEN", modelo: "C4", año: 2024, combustible: "Diesel"},
    "GY704VK": { marca: "CITROEN", modelo: "C4", año: 2024, combustible: "Diesel"},
    "GY703VK": { marca: "CITROEN", modelo: "C4", año: 2024, combustible: "Diesel"},
    "GY657NB": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "Diesel"},
    "GY519VK": { marca: "VOLKSWAGEN", modelo: "CADDY", año: 2024, combustible: "Diesel"},
    "GY518VK": { marca: "VOLKSWAGEN", modelo: "CADDY", año: 2024, combustible: "Diesel"},
    "6732MVK": { marca: "OPEL", modelo: "MOVANO", año: 2024 ,combustible: "Diesel"},
    "6946MVK": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "7131MVK": {marca:  "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "7399MVK": { marca: "OPEL", modelo: "MOVANO", año: 2024 , combustible: "Diesel"},
    "7536MVK": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "9159MVK": {marca:  "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "9188MVK": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "9218MVK": { marca: "OPEL", modelo: "MOVANO", año: 2024, combustible: "Diesel"},
    "1246MWG": {marca:  "VOLKSWAGEN", modelo: "CADDY", año: 2024, combustible: "Diesel"},
    "1224MWG": {marca:  "VOLKSWAGEN", modelo: "CADDY", año: 2024, combustible: "Diesel"},
    "9831MWH": { marca: "PEUGEOT", modelo: "BOXER", año: 2024,combustible: "Diesel"},
    "9873MWH": { marca: "PEUGEOT", modelo: "BOXER", año: 2024, combustible: "Diesel"},
    "9818MWH": { marca: "PEUGEOT", modelo: "BOXER", año: 2024, combustible: "Diesel"},
    "4603MWM": { marca: "CITROEN", modelo: "C4", año: 2024, combustible: "Diesel", km: 4},
    "4648MWM": { marca: "CITROEN", modelo: "C4", año: 2024, combustible: "Diesel", km: 4},
    "4638MWM": { marca: "CITROEN", modelo: "C4", año: 2024, combustible: "Diesel", km: 4},
    "8116MWR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "7769WMR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "7831MWR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "8798MWR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "8593WMR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "8887MWR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "8695MWR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "8300WMR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "8552MWR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "8407MWR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "8214WMR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "9065MWR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "4693MWT": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "8642WMR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "4527MWR": { marca: "SEAT", modelo: "IBIZA", año: 2024, combustible: "GASOLINA"},
    "4598MWM": {marca:  "VOLKSWAGEN", modelo: "CADDY", año: 2024, combustible: "DIESEL"},
    "4592MWM": {marca:  "VOLKSWAGEN", modelo: "CADDY", año: 2024, combustible: "DIESEL"},
    "0": {marca: "IVECO", modelo: "DAILY", año: 0,combustible: "DIESEL"},
    "8614MCJ": { marca: "LEXUS", modelo: "UX 250H",
                año: 2022, combustible: "HIBRIDO",
                km:51.420, matriculasVinculadas: ["8614MCJ", "0"]},
    "4134MRK": { marca: "NISSAN", modelo: "X-TRAIL", año: 2024, combustible: "HIBRIDO"},
    "8794LZX": {marca: "OPEL", modelo: "CORSA", año: 2022, combustible: "GASOLINA"},
    "9806LTP": {marca: "RENAULT", modelo: "CLIO", año: 2021, combustible: "GASOLINA"},
    "7322MGM": {marca: "DACIA", modelo: "DUSTER 4X4", año: 2023, combustible: "DIESEL"},
    "3745MCX": {marca: "DACIA", modelo: "DUSTER 4X4", año: 2022, combustible: "DIESEL"},
    "2873LZB": {marca: "RENAULT", modelo: "CAPTUR", año: 2022, combustible: "HIBRIDO"},
    "9009MDD": {marca: "NISSAN", modelo: "QASHQAI", año: 2022, combustible: "HIBRIDO"},
    "8957MDD": {marca: "NISSAN", modelo: "QASHQAI", año: 2022, combustible: "HIBRIDO"},
    "6305MDJ": {marca: "MG", modelo: "ZS", año: 2023, combustible: "GASOLINA"},
    "3341LZF": {marca: "RENAULT", modelo: "CAPTUR", año: 2022, combustible: "IBRIDO"},
    "1812MYZ": {marca: "FORD", modelo: "TRANSIT COURIER", año: 2025, combustible: "DIESEL"},
    "1900MYZ": {marca: "FORD", modelo: "TRANSIT COURIER", año: 2025, combustible: "DIESEL"},
    "5630LVF": {marca: "VOLKSWAGEN", modelo: "TIGUAN", año: 2021, combustible: "GASOLINA" },
    "2227LMM": {marca: "DACIA", modelo:  "DUSTER 4X4", año: 2021, combustible: "DIESEL"},
    "4337LMM": {marca: "DACIA", modelo:  "DUSTER 4X4", año: 2021, combustible: "DIESEL"},
    "3550MHJ": {marca: "KIA", modelo:  "STONIC", año: 2023, combustible: "HIBRIDO"},
    "2440LYR": {marca: "TOYOTA", modelo: "PROACE", año: 2022, combustible: "DIESEL"},
    "2648MBR": {marca: "TOYOTA", modelo: "PROACE", año: 2022, combustible: "DIESEL"},
    "0222LSS": {marca: "TOYORA", modelo: "COROLLA", año: 2021, combustible: "BIBRIDO"},
    "3281MCD": {marca: "KIA", modelo:  "STONIC", año: 2022, combustible: "HIBRIDO"},
    "0269MCG": {marca: "KIA", modelo:  "STONIC", año: 2023, combustible: "HIBRIDO"},
    "4557MCK": {marca: "NISSAN", modelo:  "NV300", año: 2022, combustible: "DIESEL"},
    "9486MVF": {marca: "OPEL", modelo: "VIVARO", año: 2024, combustible: "DIESEL"},
    "2851MGT": {marca: "KIA", modelo: "STONIC", año: 2023, combustible: "HIBRIDO"},
    "2937MBW": {marca: "KIA", modelo:  "CEED", año: 2022,  combustible: "HIBRIDO"},
    "4262MCG": {marca: "FORD", modelo: "TRANSIT COURIER", año: 2023, combustible: "DIESEL"},
    "6593MGV": {marca: "CITROEN", modelo: "C3", año: 2023, combustible: "GASOLINA"},
    "8158LSN": {marca: "KIA", modelo:  "CEED", año: 2021, combustible: "HIBRIDO"},  
};

// Función para buscar el vehículo por matrícula, modelo o marca
function buscarVehiculo() {
    const inputBusqueda = document.getElementById("matricula").value.toUpperCase(); // Obtener la entrada de búsqueda
    const infoVehiculo = document.getElementById("info-vehiculo");

    if (!inputBusqueda) {
        infoVehiculo.innerHTML = `<p>Por favor, introduce una matrícula, modelo o marca para buscar.</p>`;
        return;
    }

    // Filtrar los vehículos por matrícula, modelo o marca
    const vehiculosEncontrados = [];
    for (let matricula in vehiculos) {
        const vehiculo = vehiculos[matricula];

        // Verificar si la matrícula ingresada coincide con la matrícula principal o las vinculadas
        const todasLasMatriculas = vehiculo.matriculasVinculadas || [matricula];
        if (
            todasLasMatriculas.includes(inputBusqueda) || 
            vehiculo.modelo.toUpperCase().includes(inputBusqueda) || 
            vehiculo.marca.toUpperCase().includes(inputBusqueda)
        ) {
            vehiculosEncontrados.push({
                matricula: matricula,
                marca: vehiculo.marca,
                modelo: vehiculo.modelo,
                año: vehiculo.año,
                combustible: vehiculo.combustible,
                km: vehiculo.km || "No especificado",
                matriculasVinculadas: todasLasMatriculas.join(", ") // Mostrar todas las matrículas vinculadas
            });
        }
    }

    // Mostrar los resultados
    if (vehiculosEncontrados.length > 0) {
        let resultadosHTML = "";
        vehiculosEncontrados.forEach(vehiculo => {
            resultadosHTML += `
                <div>
                    <p><strong>Matrícula:</strong> ${vehiculo.matricula}</p>
                    <p><strong>Matrículas vinculadas:</strong> ${vehiculo.matriculasVinculadas}</p>
                    <p><strong>Marca:</strong> ${vehiculo.marca}</p>
                    <p><strong>Modelo:</strong> ${vehiculo.modelo}</p>
                    <p><strong>Año:</strong> ${vehiculo.año}</p>
                    <p><strong>Combustible:</strong> ${vehiculo.combustible}</p>
                    <p><strong>km:</strong> ${vehiculo.km}</p>
                    <hr>
                </div>
            `;
        });
        infoVehiculo.innerHTML = resultadosHTML; // Actualizar el contenido de la página con los resultados
    } else {
        infoVehiculo.innerHTML = `<p>No se ha encontrado información para la búsqueda introducida.</p>`; // Mensaje en caso de no encontrar vehículos
    }
}

// Definir un objeto con las traducciones
const traducciones = {
    "es": {
        "titulo": "Gestión de Vehículos",
        "descripcion": "Introduce la matrícula del vehículo para ver su información:",
        "placeholder": "Introduce la matrícula",
        "botonBuscar": "Buscar"
    },
    "en": {
        "titulo": "Vehicle Management",
        "descripcion": "Enter the vehicle's license plate to see its information:",
        "placeholder": "Enter the license plate",
        "botonBuscar": "Search"
    },
    "it": {
        "titulo": "Gestione dei veicoli",
        "descripcion": "Inserisci la targa del veicolo per visualizzarne le informazioni:",
        "placeholder": "Inserisci la targa",
        "botonBuscar": "Cerca"
    }
};

// Función para cambiar el idioma
function cambiarIdioma() {
    const idioma = document.getElementById("idioma-selector").value; // Obtener el idioma seleccionado

    // Cambiar el título
    document.querySelector("h2").textContent = traducciones[idioma].titulo;

    // Cambiar la descripción
    document.querySelector("p").textContent = traducciones[idioma].descripcion;

    // Cambiar el placeholder del input
    document.getElementById("matricula").setAttribute("placeholder", traducciones[idioma].placeholder);

    // Cambiar el texto del botón
    document.querySelector("button").textContent = traducciones[idioma].botonBuscar;
}

// Cargar el idioma guardado en localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const idiomaGuardado = localStorage.getItem('idioma') || 'es';
    document.getElementById('idioma-selector').value = idiomaGuardado;
    cambiarIdioma(idiomaGuardado);
});

// Detectar la tecla Enter en el campo de entrada
document.getElementById("matricula").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Verifica si la tecla presionada es Enter
        event.preventDefault(); // Evita que el formulario se envíe si está dentro de un form
        buscarVehiculo(); // Llama a la función de búsqueda
    }
});
