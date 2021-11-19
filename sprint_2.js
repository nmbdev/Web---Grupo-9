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
