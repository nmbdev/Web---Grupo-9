global.CITAS = [
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "08:00",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "9:00",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "10:00",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "11:00",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "12:00",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "13:00",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "14:00",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "15:00",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "16:00",
    },
    {
        especialidad: "odontología",
        nombre: "Dr. Juan",
        fecha: "2020-01-01",
        hora: "17:00",
    },
    {
        especialidad: "medicina",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "08:00",
    },
    {
        especialidad: "medicina",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "9:00",
    },
    {
        especialidad: "medicina",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "10:00",
    },
    {
        especialidad: "medicina",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "11:00",
    },
    {
        especialidad: "medicina",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "12:00",
    },
    {
        especialidad: "medicina",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "13:00",
    },
    {
        especialidad: "medicina",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "14:00",
    },
    {
        especialidad: "medicina",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "15:00",
    },
    {
        especialidad: "medicina",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "16:00",
    },
    {
        especialidad: "medicina",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "17:00",
    },
    {
        especialidad: "optometría",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "8:00",
    },
    {
        especialidad: "optometría",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "9:00",
    },
    {
        especialidad: "optometría",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "10:00",
    },
    {
        especialidad: "optometría",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "11:00",
    },
    {
        especialidad: "optometría",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "12:00",
    },
    {
        especialidad: "optometría",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "13:00",
    },
    {
        especialidad: "optometría",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "14:00",
    },
    {
        especialidad: "optometría",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "15:00",
    },
    {
        especialidad: "optometría",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "16:00",
    },
    {
        especialidad: "optometría",
        nombre: "Dr. Mario",
        fecha: "2020-01-01",
        hora: "16:00"
    }
];

//===HU-03 - Obtener citas disponibles===
const obtenerCitasDisponibles = (especialidad, fecha_inicio, fecha_final) => {
    return CITAS.filter(element=> (
        especialidad == element.especialidad 
        && 
        new Date(element.fecha) >= new Date(fecha_inicio)
        &&
        new Date(element.fecha) <= new Date(fecha_final)
    ));
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
//especialidad = "odontología";
//fecha_inicio = "2020-01-01";
//fecha_final = "2020-01-01";
//jornadaPreferida = "tarde";

//console.table(obtenerCitasDisponibles(especialidad, fecha_inicio, fecha_final));
//console.table(obtenerCitasPorJornada("","","","mañana"));
//console.table(obtenerCitasPorJornada(especialidad, fecha_inicio, fecha_final, jornadaPreferida));

module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
module.exports.obtenerCitasPorJornada = obtenerCitasPorJornada;