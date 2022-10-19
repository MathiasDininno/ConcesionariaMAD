alert("Bienvenido a concesionaria M.A.D")
alert("Tenemos estos autos para ofrecerte")

let opciones = prompt("\r1-Chevrolet \r2-Ford \r3-Renault \r0-Volver")

let pago = 0

let auto1 = {
    Marca: "Chevrolet",
    Modelo: "Corsa",
    Anio: 2020,
    Kilometros: 98.000,
    Estado: "Usado - Como nuevo",
    Valor: 1.200000
}

let auto2 = {
    Marca: "Ford",
    Modelo: "Focus-SE",
    Anio: 2015,
    Kilometros: 68.000,
    Estado: "Usado - Como nuevo",
    Valor: 3.600000
}

let auto3 = {
    Marca: "Renault",
    Modelo: "Clio-sport",
    Anio: 2010,
    Kilometros: 268.000,
    Estado: "Usado - Como nuevo",
    valor: 1.300000
}

do {
    estructuraDoWhile()
    auto1()
    auto2()
    auto3()

} while (opciones != 0);

function estructuraDoWhile() {
    if (opciones == 1) {
        alert("El auto elegido es, " + "Chevrolet Corsa, año: 2020 KM: 98.000. Usado - Como nuevo, $1.200000")
    } else if (opciones == 2) {
        alert("El auto elegido es, " + "Ford Focus-SE, año: 2015 KM: 68.000. Usado - Como nuevo, $3.600000")
    } else if (opciones == 3) {
        alert("El auto elegido es, " + "Renault CLio-sport, año: 2010 KM:268.000. Usado - Como nuevo, $1.300000")
    }
    else {
        alert("Ingrese una opción")
    }

    alert("En el proximo paso empezaremos el pago.")

    let pago = prompt("Auto a pagar \r1-Chevrolet \r2-Ford \r3-Renault \r0-Salir")

    if (pago == 0) {
        alert("No realizo su pago")
    } else {
        alert("Gracias por su compra")
    }
}