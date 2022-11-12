const autos = [
    { id: 11, marca: "Audi", modelo: "A7", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 15000000, img: "./img/Auto-Audi.png" },
    { id: 12, marca: "Chevrolet", modelo: "Cruze", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 6000000, img: "./img/Auto-Chevrolet.png" },
    { id: 13, marca: "Ford", modelo: "Focus-SE", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 6500000, img: "./img/Auto-Ford.png" },
    { id: 14, marca: "Volkswagen", modelo: "Polo", anio: 2022, kilometros: 0, estado: "Nuevo", valor: 5500000, img: "./img/Auto-Volkswagen.png" },
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
    renderizarAutos()
})


//----FIN FILTRAR POR MENOR VALOR ----

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
    console.log(autos.valor)
    mayorValor.insertAdjacentHTML("beforeend", + autos.valor + '</p>')
})




// ----FIN DE FILTRAR POR MAYOR VALOR ----

// ---- BUSCAR VEHICULO ----
const inputBusqueda = document.getElementById("busqueda")
const botonBuscar = document.getElementById("botonBuscar")
const resultados = document.getElementById("resultados")
let cards = document.getElementById("cards")
renderizarAutos(autos)


botonBuscar.onclick = () => {
    // resultados.innerHTML = ''
    let autosFiltrados = autos.filter(auto => auto.marca.includes(inputBusqueda.marca))
    renderizarAutos(autosFiltrados)
}
    // const texto = inputBusqueda.value.toLowerCase()

    // for (const auto of autos) {
    //     let nombre = auto.marca.toLowerCase()
    //     if (nombre.indexOf(texto) !== -1) {
    //         resultados.innerHTML += `
    //         <li>
    //         Marca:${auto.marca}
    //         Modelo:${auto.modelo}
    //         Valor: $${auto.valor}
    //         Km:${auto.kilometros}
    //         </li>
    //         `
    //     }
    // }
    // if (resultados.innerHTML === '') {
    //     resultados.innerHTML += `
    //         <li>Producto no encontrado..</li>
    //         `
    // }

// botonBuscar.addEventListener('click', busqueda)

// --------CARDS---------


function renderizarAutos(autosFiltrados) {
    cards.innerHTML=''
    for (const auto of autosFiltrados) {
        let tarjetaProducto = document.createElement('div')
        tarjetaProducto.className = 'producto'
        tarjetaProducto.innerHTML = `
        <img class="imgCard cards" src=${auto.img}>
        <h3 class="h3Card cards">${auto.marca}</h3>
        <h4 class="h4Card cards">${auto.modelo}</h4>
        <p class="parrafoCard cards">${auto.anio}</p>
        <p class="parrafoCard cards">${auto.kilometros}</p>
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