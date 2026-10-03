// calcular la moda de 20 números enteros del 0 al 9

// cantidad de números a generar
const LENGTH = 20

// valores posibles: del 0 al 9 (ambos incluidos)
const MINIMO = 0
const MAXIMO = 9
const RANGO = MAXIMO - MINIMO + 1

// crear el array de números
const numeros = []

// generar los números
for (let i = 0; i < LENGTH; i++) {
    numeros[i] = Math.floor(Math.random() * (MAXIMO + 1)) + MINIMO
}

// crear el array de contadores: uno por cada valor posible
//  - el índice es el valor (0, 1, 2... 9)
//  - el contenido es cuántas veces ha aparecido
const contadores = []

for (let i = 0; i < RANGO; i++) {
    contadores[i] = 0
}

// contar cada aparición
for (let i = 0; i < LENGTH; i++) {
    contadores[numeros[i]]++
}

// buscar la frecuencia más alta
let maximo = 0

for (let i = 0; i < RANGO; i++) {
    if (contadores[i] > maximo) {
        maximo = contadores[i]
    }
}

// buscar los valores que alcanzan esa frecuencia
//  - puede haber varias: si dos números salen igual de veces, hay dos modas
const modas = []

for (let i = 0; i < RANGO; i++) {
    if (contadores[i] === maximo) {
        modas.push(i)
    }
}

// salida
console.log("Números generados:", numeros)
console.log("Frecuencias:", contadores)
console.log("Frecuencia máxima:", maximo)
console.log("Moda:", modas)