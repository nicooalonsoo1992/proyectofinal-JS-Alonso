function guardarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    alert("Datos guardados correctamente.");
}

function actualizarHorarios() {
    let turno = document.getElementById("turno").value;
    let horariosManana = document.getElementById("horariosManana");
    let horariosTarde = document.getElementById("horariosTarde");

    if (turno === "manana") {
        horariosManana.style.display = "block";
        horariosTarde.style.display = "none";
    } else if (turno === "tarde") {
        horariosManana.style.display = "none";
        horariosTarde.style.display = "block";
    }
}

function solicitarTurno() {
    let edad = document.getElementById("edad").value;
    let obraSocial = document.getElementById("obraSocial").value;
    let turno = document.getElementById("turno").value;
    let horario = document.getElementById("horario").value;
    let especialidad = document.getElementById("especialidad").value;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Solicitar turno:<br><br>Edad: " + edad + "<br>Obra Social: " + obraSocial + "<br>Turno: " + turno + "<br>Horario: " + horario + "<br>Especialidad: " + especialidad;
}

let obrasSociales = [
    {nombre: "Obra Social de la Construccion (OSPECON)", cobertura: "Cobertura MII"},
    {nombre: "Obra Social de los choferes y camioneros (OSCHOCA)", cobertura: "Cobertura MIS"},
    {nombre: "Obra Social de los pasteleros (ELEVAR)", cobertura: "Cobertura MIS"},
    {nombre: "Obra Social del personal Grafico(GRAFICOS)", cobertura: "Cobertura MII"},
    {nombre: "Obra Social de los empleados de comercio (OSECAC)", cobertura: "Cobertura MII"},
    {nombre: "Obra Social del personal de sanidad (OSPSA)", cobertura: "Cobertura MIS"},
    {nombre: "Obra Social del plastico (OSPIP)", cobertura: "Cobertura MIS"},
    {nombre: "Obra Social de las pymes y empresarios (OSDEPYM)", cobertura: "Cobertura MII"},
    {nombre: "Obra Social del Personal de los empleados de la nacion (UP)", cobertura: "Cobertura MII"},
    ];

    function mostrarCobertura() {
    let obraSocialSeleccionada = document.getElementById("obraSocial").value;
    let cobertura;
    
    for (let i = 0; i < obrasSociales.length; i++) {
        if (obrasSociales[i].nombre === obraSocialSeleccionada) {
        cobertura = obrasSociales[i].cobertura;
        break;
        }
    }

    if (cobertura) {
        alert("La obra social seleccionada cubre un Modulo Integral: " +cobertura);
    } else {
        alert("Disculpe, esa cantidad de sesiones no brindamos");
    }
}

  // Acceder a una obra social específica
  let obraSocialSeleccionada = obrasSociales[0]; // Obra Social de la Nación Argentina (OSNA)
  console.log(obraSocialSeleccionada.nombre); // Imprime "Obra Social de la Nación Argentina (OSNA)"
  console.log(obraSocialSeleccionada.cobertura); // Imprime "Cobertura MII"



function mostrarDisponibilidad() {

    // Obtener los valores seleccionados

    let especialidad = document.getElementById("especialidad").value;
    let horario = document.getElementById("horario").value;

     // Obtener la tabla de disponibilidad
    
    let tabla = document.getElementById("tablaDisponibilidad");

     // Limpiar la tabla
    
    tabla.innerHTML = "";

     // Mostrar la disponibilidad según la selección
    
    let fila = tabla.insertRow();
    let celdaEspecialidad = fila.insertCell();
    celdaEspecialidad.innerHTML = "Especialidad seleccionada: " + especialidad;
    let celdaHorario = fila.insertCell();
    celdaHorario.innerHTML = "Horario seleccionado: " + horario;
}

 // las opciones disponibles
const elegirTerapias = document.getElementById("elegirTerapias");

const especialidades =  [ 
    {
        id: 1,
        especialidad:"Psicologia",
        tipo:"cognitiva",
        cantidadMax: 2,
        disponibilidad: 40
    },
    {
        id: 2,
        especialidad:"Psicopedagogia",
        tipo:"cognitiva",
        cantidadMax: 2,
        disponibilidad: 30
    },
    {
        id: 3,
        especialidad:"Fonoaudiologia",
        tipo:"cognitiva",
        cantidadMax: 1,
        disponibilidad: 20
    },
    {
        id: 4,
        especialidad:"Terapia ocupacional",
        tipo:"cognitiva/motor",
        cantidadMax: 2,
        disponibilidad: 35
    },
    {
        id: 5,
        especialidad:"Psicomotricidad",
        tipo:"cognitiva/motor",
        cantidadMax: 2,
        disponibilidad: 20
    },
    {
        id: 6,
        especialidad:"Hidroterapia",
        tipo:"cognitiva/motor",
        cantidadMax: 1,
        disponibilidad: 30
    },
    {
        id: 7,
        especialidad:"Kinesiologia",
        tipo:"motor",
        cantidadMax: 2,
        disponibilidad: 25
    }
]
;
let especialidadPedida = []  

especialidades.forEach((especialidades) => {
    let content = document.createElement("div");

    content.innerHTML = `
    <label><input type="checkbox">${especialidades.especialidad}"</label>
    <h2>${especialidades.cantidadMax}</h2>
    <p>${especialidades.disponibilidad}</p>
    `;
elegirTerapias.append(content);

})
;

  // saca los tildados y guárdalos en el local 
function guardarSeleccion() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const seleccion = Array.from(checkboxes).map((checkbox) => checkbox.parentElement.innerText.trim());
    localStorage.setItem('seleccionTerapias', JSON.stringify(seleccion));
}
  // los elementos tildados supuestamente desde el Local
function cargarSeleccion() {
    const seleccionGuardada = localStorage.getItem('seleccionTerapias');
    if (seleccionGuardada) {
    const seleccion = JSON.parse(seleccionGuardada);
    seleccion.forEach((especialidad) => {
    const checkbox = Array.from(document.querySelectorAll('input[type="checkbox"]')).find((checkbox) => checkbox.parentElement.innerText.trim() === especialidad);
    if (checkbox) {
        checkbox.checked = true;
    }
    });
}
}
 // Agrega eventos para guardar y cargar 
elegirTerapias.addEventListener('change', guardarSeleccion);
window.addEventListener('load', cargarSeleccion);


console.table(especialidades);

const tipoEspecialidad = () =>{
    return{
        nombre: terapias.especialidad,
        contidadMax: terapias.cantidadMax
    }
};

const listaTerapiasYCantMax = especialidades.map((terapias) =>{
    return{
        nombre: terapias.especialidad,
        contidadMax: terapias.cantidadMax
    }
});

console.table(listaTerapiasYCantMax);

const listaEspecialidadesYCantMax = especialidades.map((especialidad) =>{
    return{
        nombre: especialidad.especialidad,
        contidadMax: especialidad.cantidadMax
    }
});

console.table(listaEspecialidadesYCantMax);





especialidades.sort((a,b) => b.disponibilidad - a.disponibilidad);
console.table(especialidades);

//especialidades.sort((a,b) => a.nombre.localeCompare(b.nombre));
//console.table(especialidades);





function agregarTurno() {
    // Obtener los valores seleccionados
    let especialidad = document.getElementById("especialidad").value;
    let horario = document.getElementById("horario").value;
    
    // Obtener el cuerpo de la tabla
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    
    // Crear una nueva fila y agregar las celdas con los valores seleccionados
    let fila = document.createElement("tr");
    let celdaEspecialidad = document.createElement("td");
    celdaEspecialidad.innerHTML = especialidad;
    let celdaHorario = document.createElement("td");
    celdaHorario.innerHTML = horario;
    
    // Agregar las celdas a la fila
    fila.appendChild(celdaEspecialidad);
    fila.appendChild(celdaHorario);
    
    // Agregar la fila al cuerpo de la tabla
    cuerpoTabla.appendChild(fila);
}

   // Obtener el elemento select del HTML
let selectEspecialidad = document.getElementById("especialidad");
   // Generar las opciones del select usando el array
for (let i = 0; i < especialidades.length; i++) {
    let option = document.createElement("option");
    option.value = especialidades[i];
    option.text = especialidades[i];
    selectEspecialidad.appendChild(option);
  }
