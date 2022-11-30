const url = "./autos.json"

fetch(url)
    .then(res => res.json())
    .then(item => {
        item.forEach((item) => {
            renderizarAutos(autosFiltrados)
            cards.innerHTML = ''
            for (const auto of autosFiltrados) {
                let tarjetaProducto = document.createElement('div')
                tarjetaProducto.className = 'producto'
                tarjetaProducto.innerHTML = `
            <img class="imgCard cards" src="${auto.img}">
            <p class="h3Card cards"><h5>Marca</h5> ${auto.marca}</p>
            <p class="h4Card cards"><h5>Modelo</h5> ${auto.modelo}</p>
            <p class="parrafoCard cards"><h5>Año</h5> ${auto.anio}</p>
            <p class="parrafoCard cards"><h5>Kilometros</h5> ${auto.kilometros}</p>
            <button class="boton" id=${auto.id}>Agregar al carrito</button>
            `
                cards.append(tarjetaProducto)
            }
        })
    })



let botones = document.getElementsByClassName("boton")
let carritoContenedor = document.getElementById("carrito")

let carritoCompra = []

if (localStorage.getItem("carritoContenedor")) {
    carritoCompra = JSON.parse(localStorage.getItem("carritoContenedor"))
}


retornarCarrito()

function agregarAlCarrito() {
    for (const boton of botones) {
        boton.onclick = (e) => {
            let productoBuscado = autos.find(auto => auto.id == e.target.id)

            let posicionProductoCarrito = carritoCompra.findIndex(auto => auto.id == productoBuscado.id)

            if (posicionProductoCarrito != -1) {
                carritoCompra[posicionProductoCarrito].Unidades++
                carritoCompra[posicionProductoCarrito].Subtotal = carritoCompra[posicionProductoCarrito].precioUnidad * carritoCompra[posicionProductoCarrito].Unidades

            } else {
                carritoCompra.push({
                    id: productoBuscado.id,
                    img: productoBuscado.img,
                    nombre: productoBuscado.modelo,
                    precioUnidad: productoBuscado.valor,
                    Unidades: 1,
                    Subtotal: productoBuscado.valor,
                })
            }

            console.log(carritoCompra)
            localStorage.setItem("carritoContenedor", JSON.stringify(carritoCompra))
            retornarCarrito()
            Swal.fire('¡Se agrego al carrito!')
        }
    }
}

// Politica y privacidad(Boton acordeon)
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Formulario de compra
const idFormulario = document.getElementById('formulario')

idFormulario.addEventListener('submit', (e) => {
    e.preventDefault()
    Swal.fire('¡El pago se realizo con exito!')
    eliminarProducto()
})

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
    agregarAlCarrito(autos)
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
    agregarAlCarrito(autos)
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
    agregarAlCarrito(autos)
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
    agregarAlCarrito(autos)
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
    agregarAlCarrito(autos)
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
    agregarAlCarrito(autos)
})


// ---- BUSCAR VEHICULO ----
const inputBusqueda = document.getElementById("busqueda")
const botonBuscar = document.getElementById("botonBuscar")
const resultados = document.getElementById("resultados")
let cards = document.getElementById("cards")
renderizarAutos(autos)



botonBuscar.onclick = () => {
    cards.innerHTML = ''
    let autosFiltrados = autos.filter(auto => auto.marca.includes(inputBusqueda.value.toLowerCase()))
    renderizarAutos(autosFiltrados)
    agregarAlCarrito(autosFiltrados)

}


function retornarCarrito() {
    carritoContenedor.innerHTML = ``
    let total = 0
    for (const item of carritoCompra) {
        total += item.Subtotal
        carritoContenedor.innerHTML += `
                                                <div class="itemCarrito">
                                                <img class="imgCarrito" src="${item.img}">
                                                <p class="parrafoCarrito">${item.nombre}</p>
                                                <p class="parrafoCarrito">${item.precioUnidad}</p>
                                                <p class="parrafoCarrito">${item.Unidades}</p>
                                                <p class="parrafoCarrito">$${item.Subtotal}</p>
                                                <button onClick = "eliminarProducto(${item.id})">Eliminar</button>
                                                </div>
                                                `
    }

    carritoContenedor.innerHTML += `
                                            <div class="itemTotal">
                                            <h2>Total</h2>
                                            <p>${total}</p>
                                            </div>
                                            `
    agregarAlCarrito()
}

// Eliminar producto del carrito
const eliminarProducto = (id) => {
    const producto = carritoCompra.find((producto) => producto.id === id)
    carritoCompra.splice(carritoCompra.indexOf(producto), 1)
    localStorage.setItem("carritoContenedor", JSON.stringify(carritoCompra))
    retornarCarrito()
}
// Boton para vaciar carrito
const vaciarCarrito = document.getElementById("vaciarCarrito")

vaciarCarrito.addEventListener('click', () => {
    carritoCompra.splice(0, carritoCompra.length);
    localStorage.setItem("carritoContenedor", JSON.stringify(carritoCompra))
    retornarCarrito()
})