const autos = [
    { id: 11, marca: "Audi", modelo: "A7", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 4700000, },
    { id: 12, marca: "Chevrolet", modelo: "Cruze", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 1200000, },
    { id: 13, marca: "Ford", modelo: "Focus-SE", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 3600000, },
    { id: 14, marca: "Volkswagen", modelo: "Polo", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 2300000, },
]

let carrito = []

// ---- FILTRAR POR MAYOR VALOR ----
const mayorValor = document.getElementById("mayorValor")

function valorMayor() {
    for (const auto of autos) {

    }
}


// ---- BUSCAR VEHICULO ----
const inputBusqueda = document.getElementById("busqueda")
const botonBuscar = document.getElementById("botonBuscar")
const resultados = document.getElementById("resultados")

const busqueda = () => {
    resultados.innerHTML = ''

    const texto = inputBusqueda.value.toLowerCase()

    for (const auto of autos) {
        let nombre = auto.marca.toLowerCase()
        if (nombre.indexOf(texto) !== -1) {
            resultados.innerHTML += `
            <li>
            Marca:${auto.marca}
            Modelo:${auto.modelo}
            Valor: $${auto.valor}
            Km:${auto.kilometros}
            </li>
            `
        }
    }
    if (resultados.innerHTML === '') {
        resultados.innerHTML += `
            <li>Producto no encontrado..</li>
            `
    }
}

botonBuscar.addEventListener('click', busqueda)

// --------CARDS---------

let cards = document.getElementById("cards")

for (const auto of autos) {
    let tarjetaProducto = document.createElement('div')
    tarjetaProducto.className = 'producto'
    tarjetaProducto.innerHTML = `
    <h3>${auto.marca}</h3>
    <h4>${auto.modelo}</h4>
    <p>${auto.anio}</p>
    <p>${auto.kilometros}</p>
    <button class="boton" id=${auto.id}>Agregar al carrito</button>
    `
    cards.append(tarjetaProducto)
}

let botones = document.getElementsByClassName("boton")
let carritoContenedor = document.getElementById("carrito")

let carritoCompra = []

if (localStorage.getItem("carritoContenedor")) {
    carritoCompra = JSON.parse(localStorage.getItem("carritoContenedor"))
}

for (const item of carritoCompra) {
    console.log(item.marca)
}

for (const boton of botones) {
    boton.onclick = (e) => {
        let productoBuscado = autos.find(auto => auto.id == e.target.id)
        actualizarCarrito()
        carritoContenedor.innerHTML +=`
        <div class="itemCarrito">
        <p>${productoBuscado.marca}</p>
        <p>${productoBuscado.valor}</p>
        </div>
        `
        carritoCompra.push({ id: productoBuscado.id, nombre: productoBuscado.modelo, precio: productoBuscado.valor })
        console.log(carritoCompra)
        localStorage.setItem("carritoContenedor", JSON.stringify(carritoCompra))
    }
}

const actualizarCarrito = () => {

    carrito.forEach((producto) => {
        const div = document.createEvent("div")
        div.className = ("productoEnCarrito")
        div.innerHTML = `
        <p>${producto.marca}</p>
        `
    })
}

