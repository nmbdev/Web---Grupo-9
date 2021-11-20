global.CITAS = [
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "7:59",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "9:30",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "12:01",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "12:59",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "19:30",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "14:01",
    }
];

//===HU-03 - Obtener citas disponibles===
const obtenerCitasDisponibles = (especialidad, fecha_inicio, fecha_final) => {
    return obtenerCitasDisponibles.filter(
        
        //Código

    );
}

//===HU-04 - Obtener citas por jornada===
const obtenerCitasPorJornada = (especialidad, fecha_inicio, fecha_final, jornadaPreferida) => {
    let resultados = obtenerCitasDisponibles(especialidad, fecha_inicio, fecha_final, jornadaPreferida);
    
    return resultados.filter( (element) => {
        let hora = parseFloat(`${element.hora.split(":")[0]}.${element.hora.split(":")[1]}`);
        if( jornadaPreferida === "mañana" && (hora >= 8 && hora <= 12) ){
            return element;
        }else if( jornadaPreferida === "tarde" && (hora >= 13 && hora <= 17) ){
            return element;
        }        
    });
}

//TEST
//console.table(obtenerCitasPorJornada("","","","mañana"));
//console.table(obtenerCitasPorJornada("","","","tarde"));

module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
module.exports.obtenerCitasPorJornada = obtenerCitasPorJornada;