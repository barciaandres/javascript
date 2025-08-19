
function calcularPromedioNotas() {
    let notas = [];
    let entrada;

    //Ingreso de datos
    while (true) {
        entrada = prompt("Ingresa una nota (o ninguna para terminar):");
        if (entrada === null || entrada.toLowerCase() === 'salir' || entrada.length == 0) {
            break;
        }
        const nota = parseFloat(entrada);
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert(`'${entrada}' no es una nota válida. Por favor, ingresa notas entre 0 y 10.`);
            continue;
        }
        notas.push(nota);
        console.log(`Nota ${nota} agregada correctamente.`);
    }
    // Cálculo
    if (notas.length > 0) {
        let sumaTotal = 0;
        for (let i = 0; i < notas.length; i++) {
            sumaTotal += notas[i];
        }

        let promedio = sumaTotal / notas.length;

        console.log("--------------------");
        console.log("Cálculo finalizado.");
        console.log(`Se ingresaron ${notas.length} notas.`);
        console.log(`Las notas fueron: [${notas.join(', ')}]`);
        console.log(`El promedio final es: ${promedio.toFixed(2)}`);
    } else {
        console.log("No se ingresó ninguna nota para calcular el promedio.");
    }
}

calcularPromedioNotas();