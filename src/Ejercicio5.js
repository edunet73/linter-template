// crear el array
let numeros = []
const LENGTH = 20

// inicializar el array
//  - random genera un decimal entre [0, 1)
//  - floor desecha la parte decimal
for (let i = 0; i < 20; i++) {
    numeros[i] = Math.floor(Math.random() * 10)
}

// ordenar el array
numeros.sort()

// calcular la moda
let modas = []
let indice = 0

let ocurrencias = 1
let maximo = 1
let candidato = numeros[0]

for (let i = 1; i < LENGTH; i++ ) {    
    // si es igual al anterior
    if (numeros[i] === numeros[i - 1]) {
        // incrementar ocurrencias
        ocurrencias++
    // si es diferente
    } else {
        // sólo si es número de ocurrencias es mayor que el máximo
        if (ocurrencias > maximo) {
            // actualizar máximo
            maximo = ocurrencias
            // resetear el array de modas
            modas.length = 0
            indice = 0
        }
        // si es mayor o igual
        if (ocurrencias >= maximo) {
            // introducir candidato en modas
            // incrementar el índice
            modas[indice] = candidato
            indice++
        }
        // en cualquier caso, actualizar el candidato
        candidato = numeros[i]        
        // resetear ocurrencias para el nuevo candidato
        ocurrencias = 1   
    }
}
// introducir el último candidato, si procede
if (ocurrencias >= maximo) {
    modas[indice] = candidato
}

// salida
console.log(numeros)
console.log("Moda: " + modas)



