//import fetch from "node-fetch";

//===HU-04 - Obtener citas disponibles===

const obtenerCitasDisponibles = async (especialidad, fecha_inicio, fecha_final) => {
    const API_URL = "https://misiontic2022upb.vercel.app/api/medical-appointments/appointments";
    
    let citasDisponibles =
        await fetch(API_URL, {})
        .then( (response) => response.json() )
        .then( (json) => {

            return json.filter(element=> (
                especialidad == element.especialidad 
                && 
                Date.parse(element.fecha) >= Date.parse(fecha_inicio)
                &&
                Date.parse(element.fecha) <= Date.parse(fecha_final)
            ));

        })
        .catch( (error) => console.log(error) ); 

    //console.table(await citasDisponibles);
    return citasDisponibles;

}

//===HU-05 - Confirmar cita===

const confirmarCita = async (idCita) => {
    const API_URL = "https://misiontic2022upb.vercel.app/api/medical-appointments/confirm";

    let cita =
        await fetch(
            `${API_URL}/${idCita}`, 
            {
                method: "POST"
            }
        )
        .then( (response) => response.json() )
        //.then( (resp) => String(resp) )         
        .catch( (error) => console.log(error) );

    //console.log(await cita);
    return cita;
}

//Test
/*
let especialidadMedica = "medicina";
let fechaInicial = "2020-01-01";
let fechaFinal = "2020-01-01";
let id = 4;

let citasDisp = obtenerCitasDisponibles(especialidadMedica,fechaInicial,fechaFinal);
let citaConID = confirmarCita(id);

//console.table(await citasDisp);
//console.info(await citaConID);
//console.log("\n\n============================================================\n\n");
//console.table(citasDisp);
//console.info(citaConID);
//*/

//Exportación de módulos 
module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
module.exports.confirmarCita = confirmarCita;






//=============================================================================================

/*//===HU-03 - Obtener citas disponibles===
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

//comentario prueba
//TEST
//especialidad = "odontología";
//fecha_inicio = "2020-01-01";
//fecha_final = "2020-01-01";
//jornadaPreferida = "tarde";

//console.table(obtenerCitasDisponibles(especialidad, fecha_inicio, fecha_final));
//console.table(obtenerCitasPorJornada("","","","mañana"));
//console.table(obtenerCitasPorJornada(especialidad, fecha_inicio, fecha_final, jornadaPreferida));

module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
module.exports.obtenerCitasPorJornada = obtenerCitasPorJornada;*/


/*
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

//comentario prueba
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
*/