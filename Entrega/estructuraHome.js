const autos = [
    { id: 11, marca: "Audi", modelo: "A7", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 47, img:"./img/Auto-Audi.webp"},
    { id: 12, marca: "Chevrolet", modelo: "Cruze", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 12, img:"./img/Auto-Audi.webp" },
    { id: 13, marca: "Ford", modelo: "Focus-SE", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 36, img:"./img/Auto-Audi.webp" },
    { id: 14, marca: "Volkswagen", modelo: "Polo", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 23, img:"./img/Auto-Audi.webp" },
]

//----CARRITO----
let verCarrito = document.getElementById("verCarrito")

verCarrito.onclick = (e) =>{
    autos.sort((a, b) =>{
        if(autos.valor > autos.valor){
            return 1
        }
        if(autos.valor < autos.valor){
            return -1
        }
    })
}
console.log(verCarrito)

// ---- FILTRAR POR MAYOR VALOR ----


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
    <img class="imgCard" src=${auto.img}>
    <h3 class="h3Card">${auto.marca}</h3>
    <h4 class="h4Card">${auto.modelo}</h4>
    <p class="parrafoCard">${auto.anio}</p>
    <p class="parrafoCard">${auto.kilometros}</p>
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
        carritoContenedor.innerHTML +=`
        <div class="itemCarrito">
        <p>${productoBuscado.marca}</p>
        <p>${productoBuscado.valor}</p>
        </div>
        `
        carritoCompra.push({ id: productoBuscado.id, modelo: productoBuscado.modelo, precio: productoBuscado.valor, marca: productoBuscado.marca })
        console.log(carritoCompra)
        localStorage.setItem("carritoContenedor", JSON.stringify(carritoCompra))
    }
}