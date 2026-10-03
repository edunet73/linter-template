// calcular la media de 20 números aleatorios del 0 al 9

// cantidad de números a generar
const LENGTH = 20

// crear el array
const numeros = []

// generar los números
//  - random genera un decimal entre [0, 1)
//  - multiplicar por 10 lleva el rango a [0, 10)
//  - floor descarta la parte decimal y deja un entero del 0 al 9
for (let i = 0; i < LENGTH; i++) {
    numeros[i] = Math.floor(Math.random() * 10)
}

// sumar todos los números con reduce
const suma = numeros.reduce((total, numero) => total + numero, 0)

// dividir entre la cantidad de números
const media = suma / LENGTH

// salida
console.log("Números generados:", numeros)
console.log("Suma:", suma)
console.log("Media:", media)