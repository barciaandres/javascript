const APELLIDO = "Barcia";
const NOMBRE = "Andrés";
const FECHA_NACIMIENTO = new Date('1984-07-03T00:00:00');
const botonPrueba = document.getElementById('prueba');

botonPrueba.addEventListener('click', function () {
    alert('Segun tu fecha de nacimiento tienes ' + calcularEdad(FECHA_NACIMIENTO) + ' años'
    );
    console.log(APELLIDO, NOMBRE, FECHA_NACIMIENTO);
});


function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}


