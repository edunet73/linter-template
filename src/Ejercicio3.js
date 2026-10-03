
// días que tiene cada mes
const DIAS_POR_MES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// días de la semana, partiendo de que el 01/01/2021 era viernes: 
// el 0 es viernes, el 1 es sábado, el 2 domingo...
const DIAS_SEMANA = ['Viernes', 'Sábado', 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves']

// calcula los dias transcurridos hasta la fecha dada
function diasTranscurridos(dia, mes) {
    let diasPreviosMes = 0
    let diasMes = dia-1
    for (let i = 0; i <= mes-2; i++) {      // alternativa sugerida por IA para el bucle for:
        diasPreviosMes += DIAS_POR_MES[i]   // const diasPrevios = DIAS_POR_MES.slice(0, mes - 1)
    }                                       //     .reduce((total, dias) => total + dias, 0)
    return diasPreviosMes + diasMes       
}

// calcula los días restantes de dividir los días transcurridos en semanas
// si el resto es 0 -> es el mismo día que el 1 de enero (viernes)
// si el resto es 1 -> sábado
// si el resto es 2 -> domingo...
function diasRestantes(diasTranscurridos) {
    return diasTranscurridos % 7;
}

// devuelve el nombre del día de la semana correspondiente al número de día
function nombreDiaSemana(numeroDia) {    
    return DIAS_SEMANA[numeroDia]
}

// entrada del programa
const dia = 1
const mes = 10

// salida
let dias = diasTranscurridos(dia, mes)
let numeroDiaSemana = diasRestantes(dias)
let diaSemana = nombreDiaSemana(numeroDiaSemana)
console.log(diaSemana)




