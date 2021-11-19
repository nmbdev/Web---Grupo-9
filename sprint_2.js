const CITAS = [
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
]
//HU03
const obtenerCitasDisponibles=(especialidad,fecha_inicio, fecha_final)=>{
	return CITAS.filter(element=> (
        especialidad === element.especialidad 
        &&
        element.fecha >= fecha_inicio 
        &&
        element.fecha <= fecha_final
        ));	
}

//Especialidad será “odontología” , “medicina” y “optometría”.
//fecha_inicio y fecha_finalson el rango de fechas a buscar.
//3.1 que la especialidad de la cita sea igual al parámetro especialidad  
//3.2 que la fecha de la cita sea mayor o igual al parámetro fecha_inicio  
//3.3 que el la fecha de la cita sea menor o igual al parámetro fecha_final.
//----------------------***--------------------------

//HU04 profe
const obtenerCitasPorJornada = (jornadaPreferida)=>{
    return CITAS.filter(element=> (
        element.hora.split(":") //["16", "00"]
    ));
}

//HU04
const obtenerCitasPorJornada = (especialidad, fecha_inicio, fecha_final, jornadaPreferida)=>{
    let resultados = obtenerCitasDisponibles(especialidad, fecha_inicio, fecha_final);
    return resultados.filter(

    );

}

//Especialidad será “odontología” , “medicina” y “optometría”
//fecha_inicioy fec=ha_finalson el rango de fechas a buscar, jornadaPreferidaserá “mañana” o “tarde”.
//sólo se van a filtrar las horas de 8 a 12 y si es tarde se va a filtrar las citas que tengan hora de 1 a 5.



module.exports. obtenerCitasDisponibles=obtenerCitasDisponibles;
module.exports. obtenerCitasPorJornada=obtenerCitasPorJornada;