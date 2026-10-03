// dias transcurridos al final de cada mes
const ENE = 31
const FEB = ENE + 28
const MAR = FEB + 31
const ABR = MAR + 30
const MAY = ABR + 31
const JUN = MAY + 30
const JUL = JUN + 31
const AGO = JUL + 31
const SEP = AGO + 30
const OCT = SEP + 31
const NOV = OCT + 30

// calcula los dias transcurridos hasta la fecha dada
function diasTranscurridos(dia, mes) {
    switch (mes) {
        case 1:
            return dia - 1
        case 2:
            return ENE + dia - 1
        case 3:
            return FEB + dia - 1
        case 4:
            return MAR + dia - 1
        case 5:
            return ABR + dia - 1
        case 6:
            return MAY + dia - 1
        case 7:
            return JUN + dia - 1
        case 8:
            return JUL + dia - 1
        case 9:
            return AGO + dia - 1
        case 10:
            return SEP + dia - 1
        case 11:
            return OCT + dia - 1
        case 12:
            return NOV + dia - 1
    }
}

// calcula los días restantes de dividir los días transcurridos en semanas
function diasRestantes(dia, mes) {
    return diasTranscurridos(dia, mes) % 7;
}

// partiendo de que el 01/01/2021 era viernes: 
// el 0 es viernes, el 1 es sábado, el 2 domingo...
function calcularDiaSemana(numeroDia) {
    switch (numeroDia) {
        case 0:
            return "Viernes"
        case 1:
            return "Sábado"
        case 2:
            return "Domingo"
        case 3:
            return "Lunes"
        case 4:
            return "Martes"
        case 5:
            return "Miércoles"
        case 6:
            return "Viernes"
    }
}

// entrada del programa
const dia = 1
const mes = 10

// salida
let numeroDia = diasRestantes(dia, mes)
let diaSemana = calcularDiaSemana(numeroDia)
console.log(diaSemana)




