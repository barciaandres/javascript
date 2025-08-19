const APELLIDO = "Barcia";
const NOMBRE = "Andrés";
const FECHA_NACIMIENTO = new Date('1984-07-03T00:00:00');
const botonPrueba = document.getElementById('prueba');
const edad_minima_voto = 18;


const boton_mayorigual = document.getElementById('mayor_igual');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');


const boton_puedevotar = document.getElementById('puede_votar');
const edad = document.getElementById('edad');


const boton_ver_descuento = document.getElementById('ver_descuento');
const unidades = document.getElementById('unidades');





botonPrueba.addEventListener('click', function () {
    alert('Segun tu fecha de nacimiento tienes ' + calcularEdad(FECHA_NACIMIENTO) + ' años'
    );
    console.log(APELLIDO, NOMBRE, FECHA_NACIMIENTO);
});

boton_mayorigual.addEventListener('click', function () {
    if (parseInt(num1.value) >= parseInt(num2.value)) {
        alert("Número 1 mayor");
    } else {
        alert("Número 2 mayor");
    }
});

boton_puedevotar.addEventListener('click', function () {
    if (edad.value >= edad_minima_voto) {
        alert("Puedes votar");
    } else {
        alert("No puedes votar");
    }
});

boton_ver_descuento.addEventListener('click', function () {
    let descuento = calcular_descuento(parseInt(unidades.value));
    if (descuento > 0) {
        alert("El descuento es del " + descuento * 100 + "%");
    }
    else {
        alert("No hay descuento por rata");
    }
    console.log(descuento);
});


function calcular_descuento(unidades) {
    if (unidades > 100) {
        return 0.2;
    } else if (unidades > 50) {
        return 0.15;
    } else if (unidades > 20) {
        return 0.1;
    } else {
        return 0;
    }
};


function calcularEdad(fecha) {
    let hoy = new Date();
    let cumpleanos = new Date(fecha);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}


