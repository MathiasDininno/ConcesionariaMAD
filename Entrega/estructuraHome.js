const autos = [
    { id: 11, marca: "Audi", modelo: "A7", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 15000000, img: "./img/Auto-Audi.png" },
    { id: 12, marca: "Chevrolet", modelo: "Cruze", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 6000000, img: "./img/Auto-Chevrolet.png" },
    { id: 13, marca: "Ford", modelo: "Focus-SE", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 6500000, img: "./img/Auto-Ford.png" },
    { id: 14, marca: "Volkswagen", modelo: "Polo", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 5500000, img: "./img/Auto-Volkswagen.png" },
    { id: 15, marca: "Audi", modelo: "TT", anio: 2010, kilometros: 126000, estado: "Usado", valor: 8500000, img: "./img/Auto-Audi-TT.png" },
    { id: 16, marca: "Chevrolet", modelo: "Corsa", anio: 2005, kilometros: 235000, estado: "Usado", valor: 860000, img: "./img/Auto-Chevrolet-Corsa.png" },
    { id: 17, marca: "Ford", modelo: "EcoSport", anio: 2014, kilometros: 75000, estado: "Usado", valor: 1820000, img: "./img/Auto-Ford-EcoSport.png" },
    { id: 18, marca: "Volkswagen", modelo: "Amarok", anio: 2015, kilometros: 123000, estado: "Usado", valor: 8820000, img: "./img/Auto-Volkswagen-Amarok.png" },
]


//---- FILTRAR POR MENOR VALOR----

let menorValor = document.getElementById("menorValor")
 
menorValor.addEventListener("click", () => {
    autos.sort((a, b) => {
        if (a.valor < b.valor) {
            return -1;
        } else if (a.valor > b.valor) {
            return 1;
        } else {
            return 0;
        }
    })
    renderizarAutos(autos)
})

// ----FILTRAR POR MAYOR VALOR ----
let mayorValor = document.getElementById("mayorValor")

mayorValor.addEventListener("click", () => {
    autos.sort((a, b) => {
        if (a.valor > b.valor) {
            return -1;
        } else if (a.valor < b.valor) {
            return 1;
        } else {
            return 0;
        }
    })
    renderizarAutos(autos)
})


// Vehiculo mayor kilometros

let mayorKilometros = document.getElementById("mayorKilometros")

mayorKilometros.addEventListener("click", () => {
    autos.sort((a, b) => {
        if (a.kilometros > b.kilometros) {
            return -1;
        } else if (a.kilometros < b.kilometros) {
            return 1;
        } else {
            return 0;
        }
    })
    renderizarAutos(autos)
})


// Vehiculo menor kilometros

let menorKilometros = document.getElementById("menorKilometros")

menorKilometros.addEventListener("click", () => {
    autos.sort((a, b) => {
        if (a.kilometros < b.kilometros) {
            return -1;
        } else if (a.kilometros > b.kilometros) {
            return 1;
        } else {
            return 0;
        }
    })
    renderizarAutos(autos)
})


// Vehiculo mayor kilometros

let menorAnio = document.getElementById("menorAnio")

menorAnio.addEventListener("click", () => {
    autos.sort((a, b) => {
        if (a.anio < b.anio) {
            return -1;
        } else if (a.anio > b.anio) {
            return 1;
        } else {
            return 0;
        }
    })
    renderizarAutos(autos)
})


let mayorAnio = document.getElementById("mayorAnio")

mayorAnio.addEventListener("click", () => {
    autos.sort((a, b) => {
        if (a.anio > b.anio) {
            return -1;
        } else if (a.anio < b.anio) {
            return 1;
        } else {
            return 0;
        }
    })
    renderizarAutos(autos)
})

// ---- BUSCAR VEHICULO ----
const inputBusqueda = document.getElementById("busqueda")
const botonBuscar = document.getElementById("botonBuscar")
const resultados = document.getElementById("resultados")
let cards = document.getElementById("cards")
renderizarAutos(autos)


botonBuscar.onclick = () => {
    cards.innerHTML = ''
    let autosFiltrados = autos.filter(auto => auto.marca.includes(inputBusqueda.value))
    renderizarAutos(autosFiltrados)
}

// --------CARDS---------


function renderizarAutos(autosFiltrados) {
    cards.innerHTML=''
    for (const auto of autosFiltrados) {
        let tarjetaProducto = document.createElement('div')
        tarjetaProducto.className = 'producto'
        tarjetaProducto.innerHTML = `
        <img class="imgCard cards" src=${auto.img}>
        <p class="h3Card cards"><h5>Marca</h5> ${auto.marca}</p>
        <p class="h4Card cards"><h5>Modelo</h5> ${auto.modelo}</p>
        <p class="parrafoCard cards"><h5>Año</h5> ${auto.anio}</p>
        <p class="parrafoCard cards"><h5>Kilometros</h5> ${auto.kilometros}</p>
        <button class="boton" id=${auto.id}>Agregar al carrito</button>
        `
        cards.append(tarjetaProducto)
    }
}

let botones = document.getElementsByClassName("boton")
let carritoContenedor = document.getElementById("carrito")

let carritoCompra = []

if (localStorage.getItem("carritoContenedor")) {
    carritoCompra = JSON.parse(localStorage.getItem("carritoContenedor"))
}


retornarCarrito()


for (const boton of botones) {
    boton.onclick = (e) => {
        let productoBuscado = autos.find(auto => auto.id == e.target.id)

        let posicionProductoCarrito = carritoCompra.findIndex(auto => auto.id == productoBuscado.id)

        if (posicionProductoCarrito != -1) {
            carritoCompra[posicionProductoCarrito].Unidades++
            carritoCompra[posicionProductoCarrito].Subtotal = carritoCompra[posicionProductoCarrito].precioUnidad * carritoCompra[posicionProductoCarrito].Unidades

        } else {
            carritoCompra.push({ id: productoBuscado.id, nombre: productoBuscado.marca, precioUnidad: productoBuscado.valor, Unidades: 1, Subtotal: productoBuscado.valor })
        }

        console.log(carritoCompra)
        localStorage.setItem("carritoContenedor", JSON.stringify(carritoCompra))
        retornarCarrito()

        Swal.fire('¡Se agrego al carrito!')
    }
}
function retornarCarrito() {
    carritoContenedor.innerHTML = `
        <div class="itemCarrito">
        <p>Nombre</p>
        <p>PrecioUnidad</p>
        <p>Unidades</p>
        <p>Subtotal</p>
        </div>
    `
    let total = 0
    for (const item of carritoCompra) {
        total += item.Subtotal
        carritoContenedor.innerHTML += `
        <div class="itemCarrito">
        <img class="imgCarrito" src=${item.img}>
        <p>${item.nombre}</p>
        <p>${item.precioUnidad}</p>
        <p>${item.Unidades}</p>
        <p>${item.Subtotal}</p>
        </div>
        `
    }
    carritoContenedor.innerHTML += `
        <div class="itemCarrito">
        <h2>Total</h2>
        <p>${total}</p>
        </div>
        `
}