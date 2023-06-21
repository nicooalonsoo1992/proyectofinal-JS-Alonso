console.log("Bienvebidos a ...");
console.log("Vamos a ver, entonces aca empezamos con la idea de la agenda");
console.log("El primer paso va a ser darle la bienvenida a quien nos este visitando");

let nombreCompleto= prompt("Ingresa tu nombre completo");
alert("Te damos la bienvenida "+nombreCompleto);

let edad = parseInt(prompt("Ingresa tu edad"));
alert("Tienes "+edad+" años");

let cud = prompt ("Cuentan con Certificado Unico de Discapacidad?");
let tieneObraSocial = prompt ("Cuenta con Obra Social?");

if((cud == ("SI") || cud == ("si") || cud == ("Si")) && (tieneObraSocial == ("si") || tieneObraSocial == ("SI") || tieneObraSocial == ("Si"))){
    alert("Perfecto, podes contar con nuestros servicios");
}else{
    alert("Disculpe, necesitamos que cuente con ambos requisitos");
}

let obraSocial = prompt("Vamos a comenzar con tu busqueda, ¿nos decis si contas con alguna de estas Obras Sociales, por favor?\n1-OSECAC\n2-OSPECON\n3-UNION PERSONAL\n4-OSDEPYM\n5-OSCHOCA");


if (obraSocial == "1"){
    alert("Obra Social de los empleados del comercio, si la trabajmos, podemos proseguir");
}else if(obraSocial=="2") {
    alert("Obra Social de la construccion, si la trabajmos, podemos proseguir");
}
else if(obraSocial=="3") {
    alert("Obra Social, del personal de la nacion, si la trabajmos, podemos proseguir");
}
else if(obraSocial=="4") {
    alert("Obra Social de los monotributistas, si la trabajmos, podemos proseguir");
}
else if(obraSocial=="5") {
    alert("Obra Social de los choferes y camioneros, si la trabajmos, podemos proseguir");
}
else{
    alert("Disculpe, esa obra social no la trabajamos al parecer, nos puede enviar a nuestro mail el instructivo de facturacion, por favor");
}
let otraObraSocial = prompt("Ingresa el nombre de tu obra social (s-salir)");

function tipoDeObraSocial(otraObraSocial){

while(otraObraSocial != "s"){
    //uso el switch para evaluar si esta es otra OS de las que no esta en la lista principal
    switch(otraObraSocial){
        case "ospip":
            alert("ospip, del plastico, si la trabajamos");
            break;
        case "elevar":
            alert("elevar, de pasteleros, si la trabajamos");
            break;
        case "ospacp":
            alert("ospacp, de casas particulares, si la trabajamos");
            break;
        case "ospaca":
            alert("ospaca, del personal del ACA, si la trabajamos");
            break;
        case "osuthgra":
            alert("osuthgra, de gastronomicos, si la trabajamos");
            break;
        case "ospic":
            alert("ospic, del caucho, si la trabajamos");
            break;
        case "ospical":
            alert("ospical, del calzado, si la trabajamos");
            break;
        default:
            alert("Esa obra social no la conocemos, nos podes mandar mas informacion");
            break;
    }

    otraObraSocial = prompt("Ingresa el nombre de tu obra social (s-salir)");
}
}

//para la funcion vamos a usar la cantidad de sesiones que necesita realizar el niño nuevo que no esta consultando la flia
//esta se llamaria funcion calcularSesiones

let tipoDeModulo = prompt("Elegi el tipo de modulo que necesiten:\n1-Modulo Integral Simple\n2-Modulo Integral Intensivo");
// let MIS = prompt("Este modulo cubre hasta 3 sesiones semanales");
// let MII = prompt("Este modulo cubre hasta 5 sesiones semanales");

let totalDeSesiones = parseInt(prompt("Ingrese la cantidad de sesiones que figuran en la orden que debe realizar"))
//function calcularSesionesPorNene (){
  //  alert("bienvenido usuario")
//}

//  const calcularSesionesPorNene = (to,psico,fono) => to + psico + fono;
//  alert("El modulo que solicitan es: "+calcularSesionesPorNene(2,1,2));

const MIS = 3;
const MII = 5;

function calcularSesionesPorNene(MIS, MII) {
    if (MIS == totalDeSesiones) {
        alert("Este módulo cubre hasta 3 sesiones semanales");
    } else if (MII == totalDeSesiones) {
    alert("Este módulo cubre hasta 5 sesiones semanales");
    } else {
    alert("Disculpe, no brindamos esa cantidad de sesiones");
}
};

calcularSesionesPorNene(MIS, MII);
console.log(calcularSesionesPorNene);  //este console no esta chequeado que vaya a ser util

const terapias = [
    {
        nombre:"Psicologia",
        tipo:"cognitiva",
        cantidadMax: 2,
        disponibilidad: 40
    },
    {
        nombre:"Psicopedagogia",
        tipo:"cognitiva",
        cantidadMax: 2,
        disponibilidad: 30
    },
    {
        nombre:"Fonoaudiologia",
        tipo:"cognitiva",
        cantidadMax: 1,
        disponibilidad: 20
    },
    {
        nombre:"Terapia ocupacional",
        tipo:"cognitiva/motor",
        cantidadMax: 2,
        disponibilidad: 35
    },
    {
        nombre:"Psicomotricidad",
        tipo:"cognitiva/motor",
        cantidadMax: 2,
        disponibilidad: 20
    },
    {
        nombre:"Hidroterapia",
        tipo:"cognitiva/motor",
        cantidadMax: 1,
        disponibilidad: 30
    },
    {
        nombre:"Kinesiologia",
        tipo:"motor",
        cantidadMax: 2,
        disponibilidad: 25
    }
];

console.table(terapias);

const listaTerapiasYCantMax = terapias.map((terapias) =>{
    return{
        nombre: terapias.nombre,
        contidadMax: terapias.cantidadMax
    }
});

console.table(listaTerapiasYCantMax);

terapias.sort((a,b) => b.disponibilidad - a.disponibilidad);
console.table(terapias);

terapias.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.table(terapias);


console.log(new Date(2023, 5, 12));

const presupuestos2024 = new Date(2023, 9, 2, 8, 0, 0);
const hoy = new Date(2023, 5, 12);
console.log (presupuestos2024 - hoy);
const milisegundosPorDia = 86400000;

console.log((presupuestos2024 - hoy) / milisegundosPorDia);