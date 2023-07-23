const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const verCarrito = document.getElementById('carrito');
const mostrandoCarro = document.getElementById('mostrandoCarrito');
const mostrandoCantidad = document.getElementById('cantidadCarrito');
let productosAComprar;
obtenerProductosJson()


burger.addEventListener('click', () => {
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

const categorias = document.querySelectorAll('.nav-links'); // Selecciona todos los botones de categoría

categorias.forEach(categoria => {
  categoria.addEventListener('click', () => {
    if (window.innerWidth < 768) { // Verifica si el ancho de la ventana es menor que 768px (umbral para dispositivos móviles)
      nav.style.display = 'none'; // Oculta el menú al hacer clic en una categoría solo en dispositivos móviles
    }
  });
});
// cartas 

let productosMostrados = document.getElementById('cartas');

// operador logico OR
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function ProductosDelArray(){ 
for (const producto of productosAComprar) {
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
    timer: 1200 ,
  })
  carritoCounter();
});
  
};
}



// filtrados
// funcion para mostrar el filtrado y los productos 
function mostrarProductosBazar() {
  // Borrar cualquier producto existente
  productosMostrados.innerHTML = '';

  // Filtrar los productos por la categoría 'Bazar'
  let productosFiltrados = productosAComprar.filter((producto) => {
    return producto.categoria === 'Bazar';
  });

  // Crear y mostrar tarjetas de productos para los productos filtrados de bazar
  for (const producto of productosFiltrados) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-2';
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
};
// agarramos el elemento del boton 
let bazarButton = document.getElementById('Bazar');
// agregamos el evento al boton
bazarButton.addEventListener('click', mostrarProductosBazar);


// funcion para mostrar el filtrado y los productos Almecen

function mostrarProductosAlmacen() {
  productosMostrados.innerHTML = '';

  let productosAlmacen = productosAComprar.filter((producto) => {
    return producto.categoria === 'Almacen';
  });

  // Crear y mostrar tarjetas de productos para los productos filtrados de almacen
  for (const producto of productosAlmacen) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-2';
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
};

let almacenButton = document.getElementById('Almacen');
almacenButton.addEventListener('click', mostrarProductosAlmacen);

// funcion para mostrar el filtrado y los productos bebidas
function mostrarProductosBebidas() {
  productosMostrados.innerHTML = '';

  let productosBebidas = productosAComprar.filter((producto) => {
    return producto.categoria === 'Bebidas';
  });

  // Crear y mostrar tarjetas de productos para los productos filtrados de bebidas
  for (const producto of productosBebidas) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-2';
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
        timer: 1200
      })
      carritoCounter();
    });
  };
};

let bebidasButton = document.getElementById('Bebidas');
bebidasButton.addEventListener('click', mostrarProductosBebidas);

// productos congelados
function mostrarProductosCongelados() {
  productosMostrados.innerHTML = '';

  let productosCongelados = productosAComprar.filter((producto) => {
    return producto.categoria === 'Congelados';
  });

  // Crear y mostrar tarjetas de productos para los productos filtrados de congelados
  for (const producto of productosCongelados) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-2';
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
        timer: 1200
      })
      carritoCounter();
    });
  };
};

let congeladosBotton = document.getElementById('Congelados');
congeladosBotton.addEventListener('click', mostrarProductosCongelados);

// fiambres 
function mostrarProductosFiabres() {
  productosMostrados.innerHTML = '';

  let productosFiabres = productosAComprar.filter((producto) => {
    return producto.categoria === 'Fiambrería';
  });

  // Crear y mostrar tarjetas de productos para los productos filtrados de fiambrería
  for (const producto of productosFiabres) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-2';
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
        timer: 1200
      })
      carritoCounter();
    });
  };
};

let fiambresBotton = document.getElementById('Fiambreria');
fiambresBotton.addEventListener('click', mostrarProductosFiabres);

// Frutas y verdudas
function mostrarProductosVerduleria() {
  productosMostrados.innerHTML = '';

  let productosVerduras = productosAComprar.filter((producto) => {
    return producto.categoria === 'FrutasYVerduras';
  });

  // Crear y mostrar tarjetas de productos para los productos filtrados de frutas y verduras
  for (const producto of productosVerduras) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-2';
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
        timer: 1200
      })
      carritoCounter();
    });
  };
};

let VerdurasBotton = document.getElementById('FrutasYVerduras');
VerdurasBotton.addEventListener('click', mostrarProductosVerduleria);

// liempieza 
function mostrarProductosLimpieza() {
  productosMostrados.innerHTML = '';

  let productosLimpieza = productosAComprar.filter((producto) => {
    return producto.categoria === 'Limpieza';
  });

  // Create and display product cards for the filtered cleaning products
  for (const producto of productosLimpieza) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-2';
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
        timer: 1200
      })
      carritoCounter();
    });
  };
};

let liempiezaBotton = document.getElementById('Limpieza');
liempiezaBotton.addEventListener('click', mostrarProductosLimpieza);

// panaderia 
function mostrarProductosPanaderia() {
  productosMostrados.innerHTML = '';

  let productosPanaderia = productosAComprar.filter((producto) => {
    return producto.categoria === 'Panadería';
  });

  // Crear y mostrar las tarjetas de productos para los productos filtrados de panadería
  for (const producto of productosPanaderia) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-2';
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
        timer: 1200
      })
      carritoCounter();
    });
  };
};

let panaderiaBotton = document.getElementById('Panaderia');
panaderiaBotton.addEventListener('click', mostrarProductosPanaderia);


// JSON

async function obtenerProductosJson(){
  const urljson = 'productos.json';
  const respuesta = await fetch(urljson);
  const data = await respuesta.json();
  productosAComprar = data;
  ProductosDelArray();
};

// mensaje de texto que se envia en el footer y queda guardado en el localStorage
let botonEnviar = document.getElementById('botonform');
botonEnviar.addEventListener('click', () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
    })
    
    Toast.fire({
    icon: 'success',
    title: 'Mensaje enviado con exito'
    })
});

// mini base de datos en el localStorage Simula una base de datos donde se llenan los datos y se van directamente
// en el localStorage para luego ser utilizados 
const formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const telefono = document.querySelector('input[type="number"]').value;
  const consulta = document.querySelector('textarea').value;

  const datos = {
    nombre,
    email,
    telefono,
    consulta
  };

  let datosGuardados = localStorage.getItem('datos');
  if (datosGuardados) {
    datosGuardados = JSON.parse(datosGuardados);
    datosGuardados.push(datos);
    localStorage.setItem('datos', JSON.stringify(datosGuardados));
  } else {
    localStorage.setItem('datos', JSON.stringify([datos]));
  }
});