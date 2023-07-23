// boton de aceptar los cookies
let botonCookies = document.getElementById('botonAceptar');
// div del cookies 
let avisosCookies = document.getElementById('avisosCookies');
// fondo negro de bloqueo de productos 
let fondoNegro = document.getElementById('fondoAvisosCookies');

// condicional
// en caso de que no se encuentre nada guardado ejecutame este codigo 
if(!sessionStorage.getItem('cookiesAceptado')){
    avisosCookies.classList.add('activo');
    fondoNegro.classList.add('activo');
}

// con este condicional parace solo una vez por que queda guardado en el localStorage 
// le damos un evento al boton de aceptar 
botonCookies.addEventListener('click', () => {
    avisosCookies.classList.remove('activo');
    fondoNegro.classList.remove('activo');
    // le avisamos al SessionStorage que se aceptaron las condiciones
    sessionStorage.setItem('cookiesAceptado', true)
});

// funcionamiento de la barra para buscar productos
// Obtener referencia al botón de búsqueda
let botonBuscar = document.querySelector('.buscador button');
  // Agregar evento de clic al botón de búsqueda
    botonBuscar.addEventListener('click', () => {
  // Obtener el valor ingresado en el campo de búsqueda
    let searchTerm = document.getElementById('buscador').value;
  // Filtrar los productos según el término de búsqueda
    let resultados = productosAComprar.filter(producto => producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()));
  // Limpiar los productos mostrados antes de mostrar los resultados de la búsqueda
    productosMostrados.innerHTML = '';
  // Mostrar los productos encontrados en la búsqueda
    for (const producto of resultados) {
    let carta = document.createElement('div');
    carta.className = 'holaCard col-md-2';
    carta.innerHTML = `
        <div class="chau card">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <h6 class="card-title">${producto.marca}</h6>
        <p class="card-text">${producto.precio}</p>
        <button class="btn btn-primary comprar-btn">Comprar</button>
        </div>
        </div>
        `;
    productosMostrados.appendChild(carta);
    let comprar = carta.querySelector('.comprar-btn');
    comprar.addEventListener('click', () => {
        carrito.push({
        nombre: producto.nombre,
        marca: producto.marca,
        precio: producto.precio,
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    Swal.fire({
        position: 'top-end',
        width: "350px",
        icon: 'success',
        title: `agregaste ${producto.nombre}\n${producto.marca}`,
        showConfirmButton: false,
        timer: 1200,
    })
        carritoCounter();
    });
    };
});
