//===HU-03 - Obtener citas disponibles===
const obtenerCitasDisponibles = (especialidad, fecha_inicio, fecha_final) => {
    return obtenerCitasDisponibles.filter(
        
        //Código

    );
}

//===HU-04 - Obtener citas por jornada===
const obtenerCitasPorJornada = (especialidad, fecha_inicio, fecha_final, jornadaPreferida) => {
    let resultados = obtenerCitasDisponibles(especialidad, fecha_inicio, fecha_final, jornadaPreferida);
    return resultados.filter(

        //Código

    );
}

module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
module.exports.obtenerCitasPorJornada = obtenerCitasPorJornada;