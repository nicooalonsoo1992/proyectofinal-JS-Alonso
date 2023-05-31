let comando;
let edad;
let horasDeVuelo;
let secundarioFinalizado;
let cursoTeorico;
let psicofisico;
function consola(){
    while (comando != 'SALIR') {
        comando = prompt('"Todos los comandos deben realizarse en letra MAYUSCULA", Por favor indique sobre que examen quiere consultar: \n-PPA \n-PCA \n-INSTRUCTOR DE VUELO \n-PC PRIMERA CLASE \n-TLA \n-SALIR \n-TURNOS');
        switch (comando) {
            case 'PPA':
                    edad = prompt('Ingrese su edad');
                    horasDeVuelo = prompt('Ingrese sus horas de vuelo realizadas');
                    cursoTeorico = prompt("¿Ha realizado el curso teórico?");
                    psicofisico = prompt ("¿Cuenta con apto medico vigente?");
                if (edad >= 17 && horasDeVuelo >= 40 && cursoTeorico == "SI" && psicofisico == "SI") {
                    alert("¡Felicitaciones! Usted se encuentra habilitado para realizar el exmanen de piloto privado de avión");
                } else {
                    alert("Lo sentimos, usted no cumple con los requisitos para realizar el examen de piloto privado de avión")
                }
                break;
            case 'PCA':
                    edad = prompt('Ingrese su edad');
                    horasDeVuelo = prompt('Ingrese sus horas de vuelo realizadas');
                    secundarioFinalizado = prompt("¿Ha finalizado la escuela secundaria?");
                    cursoTeorico = prompt("¿Ha realizado el curso teórico?");
                    psicofisico = prompt ("¿Cuenta con apto medico vigente?");
                if (edad >= 18 && horasDeVuelo >= 200 && secundarioFinalizado == "SI" && cursoTeorico == "SI" && psicofisico == "SI") {
                    alert("¡Felicitaciones! Usted se encuentra habilitado para realizar el exmanen de piloto comercial de avión");
                } else {
                    alert("Lo sentimos, usted no cumple con los requisitos para realizar el examen de piloto comercial de avión")
                }
                break;
            case 'INSTRUCTOR DE VUELO':
                    edad = prompt('Ingrese su edad');
                    horasDeVuelo = prompt('Ingrese sus horas de vuelo realizadas');
                    secundarioFinalizado = prompt("¿Ha finalizado la escuela secundaria?");
                    cursoTeorico = prompt("¿Ha realizado el curso teórico?");
                    psicofisico = prompt ("¿Cuenta con apto medico vigente?");
                if (edad >= 21 && horasDeVuelo >= 450 && secundarioFinalizado == "SI" && cursoTeorico == "SI" && psicofisico == "SI") {
                    alert("¡Felicitaciones! Usted se encuentra habilitado para realizar el exmanen de piloto comercial de avión");
                } else {
                    alert("Lo sentimos, usted no cumple con los requisitos para realizar el examen de piloto comercial de avión")
                }
                break;
                case 'PC PRIMERA CLASE':
                    let pilotoComercial = prompt ("¿Cuenta con la licencia de piloto comercial de avión?")
                    edad = prompt('Ingrese su edad');
                    horasDeVuelo = prompt('Ingrese sus horas de vuelo realizadas');
                    secundarioFinalizado = prompt("¿Ha finalizado la escuela secundaria?");
                    cursoTeorico = prompt("¿Ha realizado el curso teórico?");
                    psicofisico = prompt ("¿Cuenta con apto medico vigente?");
                if (edad >= 21 && horasDeVuelo >= 650 && secundarioFinalizado == "SI" && cursoTeorico == "SI" && pilotoComercial == "SI" && psicofisico == "SI") {
                    alert("¡Felicitaciones! Usted se encuentra habilitado para realizar el exmanen de piloto comercial de avión");
                } else {
                    alert("Lo sentimos, usted no cumple con los requisitos para realizar el examen de piloto comercial de avión")
                }
                break;
                case 'TLA':
                    let pcPrimeraClase = prompt ("¿Cuenta con la licencia de piloto comercial de primera?")
                    edad = prompt('Ingrese su edad');
                    horasDeVuelo = prompt('Ingrese sus horas de vuelo realizadas');
                    secundarioFinalizado = prompt("¿Ha finalizado la escuela secundaria?");
                    cursoTeorico = prompt("¿Ha realizado el curso teórico?");
                    psicofisico = prompt ("¿Cuenta con apto medico vigente?");
                if (edad >= 21 && horasDeVuelo >= 1500 && secundarioFinalizado == "SI" && cursoTeorico == "SI" && pcPrimeraClase == "SI" && psicofisico == "SI") {
                    alert("¡Felicitaciones! Usted se encuentra habilitado para realizar el exmanen de piloto comercial de avión");
                }else {
                    alert("Lo sentimos, usted no cumple con los requisitos para realizar el examen de piloto comercial de avión");
                }
                break;
                case'TURNOS':
                    let = cupos = 10;
                for (let turno = 1; turno <= 10; turno++ ){
                let nombre = prompt ("ingresa tu nombre");
                    alert(nombre + " , tu turno es el numero " + turno);
            }
                break;
                case "SALIR":
                    comando = 'SALIR';
                break;
                default:
                alert('El comando ingresado no se reconoce.');
                break;
        }
    }
}

