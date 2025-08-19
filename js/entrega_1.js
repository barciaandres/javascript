const notaMinima = 0;
const notaMaxima = 10;


function ingresarNotas() {
    let notas = [];
    let entrada;
    //Ingreso de datos
    while (true) {
        entrada = prompt("Cálculo de promedios. Ingresa una nota (o ninguna para terminar):");
        if (entrada === null || entrada.length == 0) {
            break;
        }
        const nota = parseFloat(entrada);
        if (isNaN(nota) || nota < notaMinima || nota > notaMaxima) {
            alert(`"${entrada}" no es una nota válida. Por favor, ingresa notas entre ${notaMinima} y ${notaMaxima}.`);
            continue;
        }
        notas.push(nota);
        console.log(`Nota ${nota} agregada correctamente.`);
    }
    return notas;
}

function calcularPromedio(notas) {
    let promedio = 0;
    // Cálculo
    if (notas.length > 0) {
        let sumaTotal = 0;
        for (let i = 0; i < notas.length; i++) {
            sumaTotal += notas[i];
        }
        promedio = sumaTotal / notas.length;
        console.log("--------------------");
        console.log(`Se ingresaron ${notas.length} notas.`);
        console.log(`Las notas fueron: [${notas.join(', ')}]`);
        console.log(`El promedio final es: ${promedio.toFixed(2)}`);
    } else {
        console.log("No se ingresó ninguna nota para calcular el promedio.");
    }
    return promedio;
}

while (true) {
    promedio = calcularPromedio(ingresarNotas());
    let respuesta = confirm(`El promedio es ${promedio.toFixed(2)}. ¿Deseas calcular otro promedio?`);
    if (!respuesta) {
        break;
    }
}

//Versión todo en uno

// function calcularPromedioNotas() {
//     let notas = [];
//     let entrada;
//     let promedio = 0;

//     //Ingreso de datos
//     while (true) {
//         entrada = prompt("Cálculo de promedios. Ingresa una nota (o ninguna para terminar):");
//         if (entrada === null || entrada.length == 0) {
//             break;
//         }
//         const nota = parseFloat(entrada);
//         if (isNaN(nota) || nota < notaMinima || nota > notaMaxima) {
//             alert(`"${entrada}" no es una nota válida. Por favor, ingresa notas entre ${notaMinima} y ${notaMaxima}.`);
//             continue;
//         }
//         notas.push(nota);
//         console.log(`Nota ${nota} agregada correctamente.`);
//     }
//     // Cálculo
//     if (notas.length > 0) {
//         let sumaTotal = 0;
//         for (let i = 0; i < notas.length; i++) {
//             sumaTotal += notas[i];
//         }
//         promedio = sumaTotal / notas.length;
//         console.log("--------------------");
//         console.log(`Se ingresaron ${notas.length} notas.`);
//         console.log(`Las notas fueron: [${notas.join(', ')}]`);
//         console.log(`El promedio final es: ${promedio.toFixed(2)}`);
//     } else {
//         console.log("No se ingresó ninguna nota para calcular el promedio.");
//     }
//     return promedio;
// }


