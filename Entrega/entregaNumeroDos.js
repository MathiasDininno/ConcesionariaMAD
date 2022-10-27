alert("Bienvenido a concesionaria M.A.D. Tenemos autos para ofrecerte")

let auto1 = {
    Marca: "Chevrolet",
    Modelo: "Corsa",
    Anio: 2020,
    Kilometros: 98000,
    Estado: "Usado - Como nuevo",
    valor: 1200000
}

let auto2 = {
    Marca: "Ford",
    Modelo: "Focus-SE",
    Anio: 2015,
    Kilometros: 68000,
    Estado: "Usado - Como nuevo",
    valor: 3600000
}

let auto3 = {
    Marca: "Renault",
    Modelo: "Clio-sport",
    Anio: 2010,
    Kilometros: 268000,
    Estado: "Usado - Como nuevo",
    valor: 1300000
}


let auto4 = {
    Marca: "Fiat",
    Modelo: "Siena",
    Anio: 2008,
    Kilometros: 1000,
    Estado: "Como nuevo",
    valor: 1700000
}

let autos = [auto1, auto2, auto3, auto4]

const autosAElegir = Number(prompt("¿Que auto le gustaria ver? \r1-Chevrolet \r2-Ford \r3-Renault \r4-Fiat"))

for (const autoElegido of autos) {
    if (autosAElegir == 1) {
        alert(`El auto es ${auto1.Marca} ${auto1.Modelo} ${auto1.Anio}`)
        break
    } else if (autosAElegir == 2) {
        alert(`El auto es ${auto2.Marca} ${auto2.Modelo} ${auto2.Anio}`)
        break
    } else if (autosAElegir == 3) {
        alert(`El auto es ${auto3.Marca} ${auto3.Modelo} ${auto3.Anio}`)
        break
    } else if (autosAElegir == 4) {
        alert(`El auto es ${auto4.Marca} ${auto4.Modelo} ${auto4.Anio}`)
        break
    } else {
        alert("Ingrese una opción")
        break
    }
}

alert('A continuación podras ver caracteristicas de los vehiculos')


let opciones = prompt("seleccionar que queres hacer a continuación: \r1- Mostrar auto de mayor valor \r2- Mostrar auto con menos kilometros \r3- Mostrar modelo mas nuevo \r0- cancelar")


do {
    if (opciones == 1) {
        const mayorValor = autos.map(valorAuto => {
            return valorAuto.valor
        })
        
        const autoMayorValor = Math.max(...mayorValor)

        const autoValorMayor = autos.filter(x => x.valor == autoMayorValor)

        alert(`El vehiculo de mayor valor es, ${autoValorMayor[0].Modelo} que cuesta ${autoMayorValor}`)

        opciones = prompt("seleccionar que queres hacer a continuación: \r1- Mostrar auto de mayor valor \r2- Mostrar auto con menos kilometros \r3- Mostrar modelo mas nuevo \r0- cancelar")
    }

    else if (opciones == 2) {
        const autoConMenorKm = autos.map(autoMenorKm => {
            return autoMenorKm.Kilometros
        })
        
        const kmAuto = Math.min(...autoConMenorKm)

        const menorKilometros = autos.filter(x => x.Kilometros == kmAuto)
        
        alert(`El vehiculo con menor kilometraje es, ${menorKilometros[0].Marca} ${menorKilometros[0].Modelo} con ${kmAuto}Km`)

        opciones = prompt("seleccionar que queres hacer a continuación: \r1- Mostrar auto de mayor valor \r2- Mostrar auto con menos kilometros \r3- Mostrar modelo mas nuevo \r0- cancelar")
    }

    else if (opciones == 3) {
        const autoMayorAnio = autos.map(autoMasNuevo => {
            return autoMasNuevo.Anio
        })
        
        const anioDelAuto = Math.max(...autoMayorAnio)

        const vehiculoMasNuevo = autos.filter(x => x.Anio == anioDelAuto)

        alert(`El vehiculo mas nuevo es el, ${vehiculoMasNuevo[0].Marca} que es del ${anioDelAuto}`)

        opciones = prompt("seleccionar que queres hacer a continuación: \r1- Mostrar auto de mayor valor \r2- Mostrar auto con menos kilometros \r3- Mostrar modelo mas nuevo \r0- cancelar")
    }
    else {
        break
    }
}
while (opciones != 0);

alert("Muchas gracias por visitar Concesionaria M.A.D. Hasta promto")